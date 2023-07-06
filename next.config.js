/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    MONGODB_URI: 'mongodb+srv://sebafurfaro:Gaspar2023@cluster0.3pacqnh.mongodb.net/dashboard?retryWrites=true&w=majority'
  }
}


module.exports = nextConfig
