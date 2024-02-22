const withPWA = require('next-pwa')({
    dest: 'public',
  });
  
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    // next.js config
  };
  
  module.exports = withPWA(nextConfig);
  