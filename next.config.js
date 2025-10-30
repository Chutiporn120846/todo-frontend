/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ เปิดโหมด Export Static
  output: 'export',

  // ถ้า deploy บน GitHub Pages ให้ตั้ง basePath และ assetPrefix ด้วย
  // ถ้า deploy บน Render หรือ Vercel — ให้ลบ 2 บรรทัดนี้ออก
  basePath: '/todo-frontend',
  assetPrefix: '/todo-frontend/',

  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL ||
      'https://flask-todo-app-1efy.onrender.com/api',
  },
};

console.log(
  '✅ Loaded API URL:',
  process.env.NEXT_PUBLIC_API_URL || 'https://flask-todo-app-1efy.onrender.com/api'
);

module.exports = nextConfig;
