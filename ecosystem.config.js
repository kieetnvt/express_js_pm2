module.exports = {
  apps: [
    {
      name: 'Express JS PM2',
      script: 'app.js',
      autorestart: true,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001
      },
    },
  ],
  deploy: {
    production: {
      key: '~/.ssh/id_rsa_kietnvt',
      ssh_options: 'StrictHostKeyChecking=no',
      user: 'ubuntu',
      host: '54.184.111.20',
      ref: 'origin/main',
      repo: 'git@github.com:troniez/express_js_pm2.git',
      path: '/home/ubuntu/express_js_pm2',
      'post-setup':
        'echo \'post setup.........\'; npm install; pm2 start npm --name express_js_pm2 --interpreter bash -- start; pm2 l;',
      'post-deploy':
        'echo \'post deploy.........\'; npm install; pm2 restart express_js_pm2; pm2 l;',
    }
  }
};
