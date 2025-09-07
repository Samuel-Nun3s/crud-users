export default {
  apps: [
    {
      name: "crud-users",
      script: "./index.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};