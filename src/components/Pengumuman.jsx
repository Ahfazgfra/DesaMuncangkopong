// src/components/Pengumuman.jsx
import { useState } from 'react';

export default function Pengumuman() {
  // Fitur State bawaan React
  const [tutup, setTutup] = useState(false);

  // Jika tombol tutup ditekan, komponen disembunyikan
  if (tutup) return null;

  return (
    <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md flex justify-between items-center mb-8">
      <div className="flex items-center gap-3">
        <span className="text-2xl">📢</span>
        <p className="font-medium">
          <strong>Info Warga:</strong> Pendaftaran Bantuan Langsung Tunai (BLT) tahap 2 telah dibuka di Balai Desa Muncangkopong.
        </p>
      </div>
      <button 
        onClick={() => setTutup(true)} 
        className="bg-blue-800 hover:bg-blue-900 text-sm px-4 py-2 rounded transition-colors font-bold"
      >
        Tutup
      </button>
    </div>
  );
}