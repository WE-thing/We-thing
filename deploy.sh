npm install
# Restart or start the application with pm2
pm2 stop frontend
pm2 delete frontend
npm run build
pm2 start "npm run preview" --name frontend