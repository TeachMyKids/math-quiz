const env = process.env || {}; // eslint-disable-line no-process-env

[
  'NODE_ENV'
].forEach((name) => {
  if (!env[name]) {
    console.log(`Environment variable ${name} is missing, use default instead.`);
  }
});

const config = {
  ENV: env.NODE_ENV || 'development'
};

module.exports = config;
