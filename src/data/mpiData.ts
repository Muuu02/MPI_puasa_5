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

export const IMAGES = {
  heroGate: heroGateAsset || '/images/hero_ramadan_gate.jpg',
  puasaMoments: puasaMomentsAsset || '/images/card_puasa_moments.jpg',
  hikmahCaring: hikmahCaringAsset || '/images/card_hikmah_caring.jpg',
  projectShowcase: projectShowcaseAsset || '/images/project_poster_showcase.jpg',
  // Static public fallbacks
  fallbackHeroGate: '/images/hero_ramadan_gate.jpg',
  fallbackPuasaMoments: '/images/card_puasa_moments.jpg',
  fallbackHikmahCaring: '/images/card_hikmah_caring.jpg',
  fallbackProjectShowcase: '/images/project_poster_showcase.jpg',
};

