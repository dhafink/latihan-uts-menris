@echo off
cd /d "%~dp0"
echo ==========================================================
echo   Latihan UTS Manajemen Risiko
echo   Buka: http://localhost:8766
echo   Tutup jendela ini untuk menghentikan server.
echo ==========================================================
start "" cmd /c "timeout /t 2 >nul & start http://localhost:8766"
where python >nul 2>nul && (python -m http.server 8766) || (py -m http.server 8766)
