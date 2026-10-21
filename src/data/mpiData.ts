import heroGateAsset from '../assets/images/hero_ramadan_gate_1792581978725.jpg';
import puasaMomentsAsset from '../assets/images/card_puasa_moments_1792581980007.jpg';
import hikmahCaringAsset from '../assets/images/card_hikmah_caring_1792581980095.jpg';
import projectShowcaseAsset from '../assets/images/project_poster_showcase_1792581980989.jpg';

export interface ScreenMeta {
  id: number;
  title: string;
  shortLabel: string;
  category: 'Pengantar' | 'Materi A' | 'PjBL' | 'Asesmen & Refleksi' | 'Bagian B';
}

export const SCREEN_LIST: ScreenMeta[] = [
  { id: 1, title: 'Beranda: Masuk ke Misi Ramadan', shortLabel: 'Beranda', category: 'Pengantar' },
  { id: 2, title: 'Sampul Bab & Pemantik Interaktif', shortLabel: 'Sampul Bab', category: 'Pengantar' },
  { id: 3, title: 'Tujuan & Peta Belajar', shortLabel: 'Peta Belajar', category: 'Pengantar' },
  { id: 4, title: 'Ice Breaking: Persiapan Puasa', shortLabel: 'Ice Breaking', category: 'Pengantar' },
  { id: 5, title: 'A1: Pengertian Puasa Wajib', shortLabel: 'Pengertian', category: 'Materi A' },
  { id: 6, title: 'A2: Syarat Puasa Wajib', shortLabel: 'Syarat', category: 'Materi A' },
  { id: 7, title: 'A2: Rukun Puasa Wajib', shortLabel: 'Rukun', category: 'Materi A' },
  { id: 8, title: 'A2: Hukum dan Dalil Puasa', shortLabel: 'Hukum & Dalil', category: 'Materi A' },
  { id: 9, title: 'A2: Hal-Hal yang Membatalkan Puasa', shortLabel: 'Hal Pembatal', category: 'Materi A' },
  { id: 10, title: 'A3: Niat Puasa Ramadan', shortLabel: 'Niat Puasa', category: 'Materi A' },
  { id: 11, title: 'A3: Doa Berbuka Puasa', shortLabel: 'Doa Berbuka', category: 'Materi A' },
  { id: 12, title: 'A4: Hikmah Puasa Wajib', shortLabel: 'Hikmah', category: 'Materi A' },
  { id: 13, title: 'PjBL: Tantangan Proyek Visual', shortLabel: 'Tantangan PjBL', category: 'PjBL' },
  { id: 14, title: 'PjBL: Langkah Kerja Kelompok', shortLabel: 'Langkah Kerja', category: 'PjBL' },
  { id: 15, title: 'PjBL: Rubrik & Galeri Karya', shortLabel: 'Rubrik & Galeri', category: 'PjBL' },
  { id: 16, title: 'Asesmen Pemahaman Siswa', shortLabel: 'Asesmen', category: 'Asesmen & Refleksi' },
  { id: 17, title: 'Refleksi Belajar & Penutup', shortLabel: 'Refleksi', category: 'Asesmen & Refleksi' },
  { id: 18, title: 'Bagian B: Puasa Sunah (Lanjutan)', shortLabel: 'Puasa Sunah (B)', category: 'Bagian B' },
];

export const TEACHER_GUIDE = {
  curriculum: 'Kurikulum Merdeka / PAI & Budi Pekerti Kelas 5',
  chapter: 'BAB 4 — Puasa Wajib dan Puasa Sunah',
  focus: 'Bagian A: Puasa Wajib (Durasi Rekomendasi: 3 JP / 3x35 Menit)',
  model: 'Project Based Learning (PjBL) berbantuan Papan Interaktif Digital (PID)',
  stepsGuide: [
    {
      screen: 'Layar 1 & 2 (Beranda & Sampul)',
      activity: 'Apersepsi & Motivasi',
      time: '10 Menit',
      notes: 'Buka MPI pada PID. Ajak murid menyentuh 4 gambar pemantik (fajar, maghrib, niat, buka) dan diskusikan jawaban pemantik secara terbuka.'
    },
    {
      screen: 'Layar 3 & 4 (Tujuan & Ice Breaking)',
      activity: 'Aktivasi Pengetahuan Awal',
      time: '15 Menit',
      notes: 'Murid maju ke PID untuk menggeser kartu persiapan puasa. Tekankan bahwa ini pemantik awal, belum menghakimi syarat/rukun.'
    },
    {
      screen: 'Layar 5 - 12 (Materi Inti A1 - A4)',
      activity: 'Eksplorasi Konsep & Interaksi PID',
      time: '40 Menit',
      notes: 'Jalankan aktivitas: Susun Pengertian, Pilih Syarat, Pasangkan Rukun, Telusuri Dalil QS Al-Baqarah 183, Klasifikasi 3 Wadah Hal Pembatal, dan Praktik Niat & Doa.'
    },
    {
      screen: 'Layar 13 - 15 (PjBL Kelompok)',
      activity: 'Pengerjaan & Pameran Proyek Visual',
      time: '30 Menit',
      notes: 'Bagi 4-5 kelompok. Buat Panduan Visual Puasa Wajib. Gunakan timer interaktif pada Layar 14, lalu pamerkan di Galeri Layar 15.'
    },
    {
      screen: 'Layar 16 & 17 (Asesmen & Refleksi)',
      activity: 'Evaluasi & Refleksi Bermakna',
      time: '10 Menit',
      notes: 'Lakukan tes pemahaman langsung pada PID, lalu minta perwakilan mengisi kartu refleksi harian.'
    }
  ],
  pidTips: [
    'Ukuran font dan tombol dirancang besar agar mudah disentuh langsung di layar PID maupun diklik mouse.',
    'Fitur suara Web Audio memberi umpan balik tactile saat murid berinteraksi di depan kelas.',
    'Papan catatan interaktif dan timer bawaan dapat digunakan guru tanpa perlu berpindah aplikasi lain.'
  ]
};

// High-fidelity vector SVG data URIs as bulletproof offline fallbacks (never 404)
const SVG_HERO_GATE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="100%" height="100%">
  <defs>
    <linearGradient id="sky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#022c22"/>
      <stop offset="60%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
    <radialGradient id="glow" cx="80%" cy="25%" r="35%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.8"/>
      <stop offset="60%" stop-color="#f59e0b" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="600" fill="url(#sky)"/>
  <circle cx="960" cy="150" r="180" fill="url(#glow)"/>
  <g fill="#fef08a" opacity="0.85">
    <circle cx="120" cy="80" r="3"/><circle cx="280" cy="140" r="2.5"/><circle cx="450" cy="70" r="3.5"/>
    <circle cx="680" cy="120" r="2"/><circle cx="820" cy="60" r="3"/><circle cx="1100" cy="110" r="2.5"/>
    <circle cx="200" cy="220" r="2"/><circle cx="580" cy="200" r="3"/><circle cx="750" cy="240" r="2.5"/>
  </g>
  <path d="M 940 90 A 70 70 0 1 0 1000 210 A 58 58 0 1 1 940 90 Z" fill="#fef08a"/>
  <path d="M 0 600 L 0 420 Q 200 400 350 480 Q 500 520 600 450 Q 700 520 850 480 Q 1000 400 1200 420 L 1200 600 Z" fill="#021c16" opacity="0.9"/>
  <g fill="#042f24" opacity="0.95">
    <rect x="540" y="320" width="120" height="280" rx="4"/>
    <path d="M 540 320 Q 600 220 660 320 Z"/>
    <rect x="420" y="380" width="80" height="220" rx="4"/>
    <path d="M 420 380 Q 460 300 500 380 Z"/>
    <rect x="700" y="380" width="80" height="220" rx="4"/>
    <path d="M 700 380 Q 740 300 780 380 Z"/>
    <rect x="300" y="260" width="36" height="340"/>
    <polygon points="300,260 318,190 336,260"/>
    <rect x="864" y="260" width="36" height="340"/>
    <polygon points="864,260 882,190 900,260"/>
  </g>
</svg>
`)}`;

const SVG_PUASA_MOMENTS = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#064e3b"/>
  <circle cx="400" cy="300" r="240" fill="#047857" opacity="0.4"/>
  <path d="M 380 180 A 100 100 0 1 0 460 360 A 84 84 0 1 1 380 180 Z" fill="#fef08a"/>
  <text x="400" y="440" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="28">Momen Ibadah Puasa</text>
  <text x="400" y="480" text-anchor="middle" fill="#a7f3d0" font-family="sans-serif" font-size="18">Sahur • Menahan Diri • Berbuka Penuh Syukur</text>
</svg>
`)}`;

const SVG_HIKMAH_CARING = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#065f46"/>
  <circle cx="400" cy="260" r="140" fill="#10b981" opacity="0.3"/>
  <path d="M 400 280 C 370 230, 310 230, 310 290 C 310 350, 400 400, 400 410 C 400 410, 490 350, 490 290 C 490 230, 430 230, 400 280 Z" fill="#fbbf24"/>
  <text x="400" y="470" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="28">Hikmah Kepedulian Sosial</text>
  <text x="400" y="510" text-anchor="middle" fill="#a7f3d0" font-family="sans-serif" font-size="18">Berbagi Kebahagiaan di Bulan Ramadan</text>
</svg>
`)}`;

const SVG_PROJECT_SHOWCASE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#0f172a"/>
  <rect x="80" y="60" width="640" height="480" rx="16" fill="#ffffff" stroke="#10b981" stroke-width="8"/>
  <rect x="120" y="100" width="560" height="60" rx="8" fill="#059669"/>
  <text x="400" y="140" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="24">PANDUAN VISUAL PUASA WAJIB</text>
  <rect x="120" y="190" width="260" height="140" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="2"/>
  <text x="250" y="260" text-anchor="middle" fill="#065f46" font-family="sans-serif" font-weight="bold" font-size="16">1. Niat & Waktu Puasa</text>
  <rect x="420" y="190" width="260" height="140" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="2"/>
  <text x="550" y="260" text-anchor="middle" fill="#065f46" font-family="sans-serif" font-weight="bold" font-size="16">2. Rukun & Syarat Sah</text>
  <rect x="120" y="350" width="560" height="150" rx="8" fill="#fef3c7" stroke="#fde68a" stroke-width="2"/>
  <text x="400" y="420" text-anchor="middle" fill="#92400e" font-family="sans-serif" font-weight="bold" font-size="18">Karya Kreatif Proyek Kelompok (PjBL)</text>
  <text x="400" y="450" text-anchor="middle" fill="#b45309" font-family="sans-serif" font-size="14">Poster • Infografis • Flashcard</text>
</svg>
`)}`;

export const IMAGES = {
  heroGate: heroGateAsset || SVG_HERO_GATE,
  puasaMoments: puasaMomentsAsset || SVG_PUASA_MOMENTS,
  hikmahCaring: hikmahCaringAsset || SVG_HIKMAH_CARING,
  projectShowcase: projectShowcaseAsset || SVG_PROJECT_SHOWCASE,
  // 100% offline & immune to 404 fallbacks
  fallbackHeroGate: SVG_HERO_GATE,
  fallbackPuasaMoments: SVG_PUASA_MOMENTS,
  fallbackHikmahCaring: SVG_HIKMAH_CARING,
  fallbackProjectShowcase: SVG_PROJECT_SHOWCASE,
};

