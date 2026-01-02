/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Menambahkan Font Default (Opsional, biar rapi)
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // INI PENTING BUAT ANIMASI RUNNING TEXT (MARQUEE)
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee2': 'marquee2 25s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Buat efek glowing lambat
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      // Menambah warna custom kalau perlu (opsional)
      colors: {
        neon: '#22c55e', // Hijau neon custom
      }
    },
  },
  plugins: [],
}