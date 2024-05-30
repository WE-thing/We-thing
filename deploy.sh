npm install
# Restart or start the application with pm2
pm2 stop frontend
pm2 delete frontend
pm2 start "npm run dev" --name frontend