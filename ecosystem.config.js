module.exports = {
  apps : [{
    name: 'nemv',
    script: './be/bin/www',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 80
    }
  }],

  deploy : {
    pr : {
      user : 'root',
      host : '13.125.244.62',
      key  : 'nemvKey.pem',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/nemv',
      'post-deploy' : 'yarn pm2'
    }
  }
};
