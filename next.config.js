/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL ||
      "https://flask-todo-app-1efy.onrender.com/api",
  },
};

console.log(
  "✅ Loaded API URL:",
  process.env.NEXT_PUBLIC_API_URL ||
    "https://flask-todo-app-1efy.onrender.com/api"
);

module.exports = nextConfig;
