import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface EnrollmentFormData {
  name: string;
  email: string;
  phone: string;
  additionalQuestions?: string;
  courseName: string;
  courseSchedule: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, phone, additionalQuestions, courseName, courseSchedule }: EnrollmentFormData = await req.json();

    if (!name || !email || !phone || !courseName || !courseSchedule) {
      return new Response(
        JSON.stringify({ error: "Vārds, e-pasts, tālrunis un kursa informācija ir obligāti lauki" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Resend API atslēga nav konfigurēta" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const emailBody = `
      <h2>Jauns pieteikums kursam</h2>
      <div style="background-color: #f9f7f2; border-left: 4px solid #b22234; padding: 16px; margin: 16px 0;">
        <h3 style="color: #b22234; margin: 0 0 8px 0;">${courseName}</h3>
        <p style="color: #666; margin: 0;">${courseSchedule}</p>
      </div>

      <h3>Pieteikuma informācija:</h3>
      <p><strong>Vārds, Uzvārds:</strong> ${name}</p>
      <p><strong>E-pasts:</strong> ${email}</p>
      <p><strong>Tālrunis:</strong> ${phone}</p>

      ${additionalQuestions ? `
        <h3>Papildu jautājumi:</h3>
        <p>${additionalQuestions.replace(/\n/g, "<br>")}</p>
      ` : ''}

      <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e5e5;">
      <p style="color: #666; font-size: 12px;">
        Šis pieteikums tika nosūtīts no Dialogs AB mājaslapas kursu kalendāra.
      </p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Kursu pieteikumi <onboarding@resend.dev>",
        to: ["mareks.spruzs@gmail.com"],
        subject: `Jauns pieteikums: ${courseName} - ${name}`,
        html: emailBody,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend API error:", error);
      return new Response(
        JSON.stringify({ error: "Neizdevās nosūtīt e-pastu" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const data = await res.json();

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Servera kļūda" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
