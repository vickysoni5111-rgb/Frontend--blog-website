/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        // Local dev me backend port 5000 hai.
        // Production me isse env variable se le lo (Vercel/Render me set kar dena):
        // BACKEND_URL=https://your-backend-domain.com
        destination: `${process.env.BACKEND_URL || "http://localhost:5000"}/uploads/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;