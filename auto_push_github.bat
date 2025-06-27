@echo off
title 🚀 Auto Push: Kroatien-Trainer
color 0A

:: Projektordner (anpassen falls dein Pfad anders ist!)
cd /d C:\Users\Serap\Downloads\kroatien-trainer

:: Git initialisieren (nur wenn noch nicht passiert)
if not exist .git (
    git init
    git config user.name "lucio2323232"
    git config user.email "SGOLIKWOLF@GMAIL.COM"
)

:: Änderungen hinzufügen
git add .

:: Commit erstellen
git commit -m "🚀 Auto-Push: Kroatien-Trainer"

:: Pull holen, falls Remote Änderungen enthält
git pull origin main --rebase

:: Push zu GitHub
git push https://github.com/lucio2323232/kroatien.git main

echo.
echo ✅ Fertig! Schau nach: https://github.com/lucio2323232/kroatien
pause
