module.exports = {
  apps: [
    {
      name: 'Express JS PM2',
      script: 'app.js',
      env_production: {
        NODE_ENV: 'production',
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
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    }
  }
};
