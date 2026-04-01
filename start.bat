@echo off
:: Šī rinda liek Windows "ieiet" tajā mapē, kur atrodas pats .bat fails
cd /d "%~dp0"
title Dialogs AB Projekts
echo 🚀 Startējam...

:: Palaižam projektu
call npm run dev
pause