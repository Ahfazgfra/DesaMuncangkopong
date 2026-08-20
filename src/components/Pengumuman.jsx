// src/components/Pengumuman.jsx
import { useState } from 'react';

export default function Pengumuman() {
  const [tutup, setTutup] = useState(false);

  if (tutup) return null;

  return (
    <div class="bg-teal-600 text-white px-4 py-4 sm:px-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md mb-6">
  
  <div class="flex items-start sm:items-center gap-3">
    <span class="text-xl mt-0.5 sm:mt-0">📢</span>
    <p class="text-sm md:text-base font-medium leading-relaxed">
      <strong>Info Warga:</strong> Pendaftaran Bantuan Langsung Tunai (BLT) tahap 2 telah dibuka di Balai Desa Muncangkopong.
    </p>
  </div>

  <button class="bg-teal-900 hover:bg-black/40 px-4 py-2.5 rounded-lg text-sm font-bold transition shrink-0 w-full sm:w-auto text-center">
    Tutup
  </button>
  
</div>
  );
}