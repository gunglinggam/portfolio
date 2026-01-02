import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Import Router
import './index.css'

// Import Halaman
import App from './App.jsx'
import NotFound from './components/NotFound.jsx' // Pastikan file NotFound.jsx sudah dibuat

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Bungkus aplikasi dengan BrowserRouter */}
    <BrowserRouter>
      <Routes>
        {/* Kalau user buka link utama (/) -> Tampilkan Website Utama (App) */}
        <Route path="/" element={<App />} />
        
        {/* Kalau user buka link NGASAL (*) -> Tampilkan Halaman 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)