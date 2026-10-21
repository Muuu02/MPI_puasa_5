import React, { useState } from 'react';
import { Target, CheckSquare, ArrowRight, Layout, FileText, Image as ImageIcon, GitFork, Award } from 'lucide-react';
import { IMAGES } from '../../data/mpiData';
import { sound } from '../../utils/audio';

interface Screen13PjBLChallengeProps {
  onNext: () => void;
  onNavigate: (screenId: number) => void;
}

export const Screen13PjBLChallenge: React.FC<Screen13PjBLChallengeProps> = ({ onNext, onNavigate }) => {
  const [selectedFormat, setSelectedFormat] = useState<number>(0);

  const productOptions = [
    {
      id: 0,
      title: '1. Poster Digital Edukasi',
      icon: Layout,
      desc: 'Desain satu lembar bergambar menarik dengan tipografi rapi, ringkasan rukun, dan ilustrasi ibadah puasa.',
      benefit: 'Sangat cocok untuk dipajang di mading kelas atau dibagikan ke grup WhatsApp wali murid.'
    },
    {
      id: 1,
      title: '2. Infografik Runtut',
      icon: FileText,
      desc: 'Bagan berurutan memuat timeline waktu sahur sampai berbuka lengkap dengan dalil dan tips puasa.',
      benefit: 'Memudahkan teman memahami urutan fiqih dari terbit fajar hingga maghrib secara sistematis.'
    },
    {
      id: 2,
      title: '3. Komik Pendek 4 Panel',
      icon: ImageIcon,
      desc: 'Cerita interaksi antara dua sahabat yang saling mengingatkan tentang niat, menahan lapar, dan hikmah berbagi.',
      benefit: 'Menyajikan materi secara jenaka dan kontekstual dengan kehidupan anak usia 10-11 tahun.'
    },
    {
      id: 3,
      title: '4. Peta Konsep / Mind Map',
      icon: GitFork,
      desc: 'Cabang-cabang diagram yang menghubungkan syarat, rukun, hal pembatal, dan hikmah puasa wajib.',
      benefit: 'Membantu visualisasi keterkaitan konsep fiqih secara terstruktur dan komprehensif.'
    }
  ];

  const mandatoryElements = [
    'Pengertian puasa wajib menurut bahasa dan syariat',
    'Syarat wajib & syarat sah serta 2 rukun puasa',
    'Hukum dan dalil Al-Qur’an (QS. Al-Baqarah ayat 183)',
    'Hal-hal yang membatalkan puasa (dan yang tidak membatalkan)',
    'Lafal bacaan niat malam hari dan doa berbuka puasa',
    'Hikmah puasa bagi kehidupan dan pertemanan sehari-hari'
  ];

  const formatMeta = [
    {
      badge: 'Contoh 1: Poster Digital Edukasi',
      sub: 'Poster satu lembar artistik karya santri',
      note: 'Kelompok dapat menggambar pada karton tebal atau studio kreasi interaktif di Layar 15.'
    },
    {
      badge: 'Contoh 2: Infografik Runtut',
      sub: 'Alur kronologis waktu sahur hingga berbuka',
      note: 'Sangat cocok untuk kelompok yang menyukai urutan logis timeline dan bagan alur.'
    },
    {
      badge: 'Contoh 3: Komik Pendek 4 Panel',
      sub: 'Kisah interaksi dua santri Ahmad & Salman',
      note: 'Bagus untuk kelompok yang gemar menggambar karakter kartun dan dialog percakapan.'
    },
    {
      badge: 'Contoh 4: Peta Konsep / Mind Map',
      sub: 'Diagram pemetaan cabang pokok fiqih ibadah puasa',
      note: 'Membantu merangkum seluruh konsep fiqih secara terstruktur untuk persiapan ujian.'
    }
  ];

  const renderInspirationPreview = () => {
    switch (selectedFormat) {
      case 0:
        return (
          <div className="flex flex-col items-center justify-center p-3 w-full animate-in fade-in duration-200">
            <img
              src={IMAGES.projectShowcase}
              alt="Inspirasi Poster Edukasi Puasa"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const img = e.currentTarget;
                if (img.src !== IMAGES.fallbackProjectShowcase) {
                  img.src = IMAGES.fallbackProjectShowcase;
                }
              }}
              className="rounded-xl shadow-md max-h-[340px] w-auto object-contain border border-slate-200"
            />
            <span className="mt-2 text-[11px] font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
              Format 1 Lembar Vertikal
            </span>
          </div>
        );

      case 1:
        return (
          <div className="w-full p-2 space-y-2 animate-in fade-in duration-200">
            <div className="bg-emerald-900 text-white rounded-xl p-2.5 text-center shadow-xs">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300 block">
                Bagan Timeline Terstruktur
              </span>
              <h4 className="text-xs font-bold font-display">Alur Seharian Penuh Ibadah Puasa</h4>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-3 p-2 bg-amber-50/80 border border-amber-200 rounded-lg">
                <div className="w-7 h-7 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-[11px] shrink-0">
                  1
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-950 text-[11px]">03.30 – 04.30 WIB</span>
                    <span className="text-[9px] bg-amber-200 text-amber-900 font-semibold px-1.5 py-0.5 rounded">Sahur</span>
                  </div>
                  <p className="text-[10px] text-amber-800 truncate">Makan sahur bernilai berkah & niat dalam hati</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 bg-emerald-50/80 border border-emerald-200 rounded-lg">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">
                  2
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-950 text-[11px]">04.35 (Fajar / Subuh)</span>
                    <span className="text-[9px] bg-emerald-200 text-emerald-900 font-semibold px-1.5 py-0.5 rounded">Imsak</span>
                  </div>
                  <p className="text-[10px] text-emerald-800 truncate">Batas awal menahan diri dari segala pembatal</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 bg-sky-50/80 border border-sky-200 rounded-lg">
                <div className="w-7 h-7 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">
                  3
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sky-950 text-[11px]">Siang Hari Beraktivitas</span>
                    <span className="text-[9px] bg-sky-200 text-sky-900 font-semibold px-1.5 py-0.5 rounded">Sabar</span>
                  </div>
                  <p className="text-[10px] text-sky-800 truncate">Jaga lisan, tidak bertengkar, perbanyak tadarus</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 bg-teal-50/80 border border-teal-200 rounded-lg">
                <div className="w-7 h-7 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">
                  4
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-teal-950 text-[11px]">18.05 (Azan Maghrib)</span>
                    <span className="text-[9px] bg-teal-200 text-teal-900 font-semibold px-1.5 py-0.5 rounded">Iftar</span>
                  </div>
                  <p className="text-[10px] text-teal-800 truncate">Segerakan berbuka dengan doa, kurma & air putih</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="w-full p-2 space-y-2 animate-in fade-in duration-200">
            <div className="bg-amber-800 text-white rounded-xl p-2 text-center shadow-xs">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-200 block">
                Format Komik Strip
              </span>
              <h4 className="text-xs font-bold font-display">Kisah: “Petualangan Puasa Ahmad & Salman”</h4>
            </div>

            <div className="grid grid-cols-2 gap-1.5 text-slate-800">
              <div className="p-2 bg-amber-50 border border-amber-300 rounded-lg flex flex-col justify-between min-h-[96px]">
                <span className="text-[9px] font-bold text-amber-800 uppercase">Panel 1: Sahur</span>
                <p className="text-[10px] leading-snug text-slate-700 bg-white p-1 rounded border border-amber-100">
                  💬 <strong>Ahmad:</strong> "Ayo sahur Salman! Ada berkah di dalamnya!"
                </p>
                <span className="text-[8px] text-slate-400 text-right">04.00</span>
              </div>

              <div className="p-2 bg-blue-50 border border-blue-300 rounded-lg flex flex-col justify-between min-h-[96px]">
                <span className="text-[9px] font-bold text-blue-800 uppercase">Panel 2: Di Sekolah</span>
                <p className="text-[10px] leading-snug text-slate-700 bg-white p-1 rounded border border-blue-100">
                  💬 <strong>Salman:</strong> "Haus sekali ya... tapi aku harus sabar!"
                </p>
                <span className="text-[8px] text-slate-400 text-right">11.30</span>
              </div>

              <div className="p-2 bg-emerald-50 border border-emerald-300 rounded-lg flex flex-col justify-between min-h-[96px]">
                <span className="text-[9px] font-bold text-emerald-800 uppercase">Panel 3: Berbagi</span>
                <p className="text-[10px] leading-snug text-slate-700 bg-white p-1 rounded border border-emerald-100">
                  💬 <strong>Ahmad:</strong> "Yuk bagikan kurma untuk musafir masjid!"
                </p>
                <span className="text-[8px] text-slate-400 text-right">17.30</span>
              </div>

              <div className="p-2 bg-purple-50 border border-purple-300 rounded-lg flex flex-col justify-between min-h-[96px]">
                <span className="text-[9px] font-bold text-purple-800 uppercase">Panel 4: Maghrib</span>
                <p className="text-[10px] leading-snug text-slate-700 bg-white p-1 rounded border border-purple-100">
                  💬 <strong>Bersama:</strong> "Alhamdulillah! Allahumma laka shumtu!"
                </p>
                <span className="text-[8px] text-slate-400 text-right">18.05</span>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="w-full p-2 space-y-2 animate-in fade-in duration-200">
            <div className="bg-indigo-900 text-white rounded-xl p-2 text-center shadow-xs">
              <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-300 block">
                Format Diagram Pohon Konsep
              </span>
              <h4 className="text-xs font-bold font-display">Peta Konsep Cabang Fiqih Puasa Wajib</h4>
            </div>

            <div className="p-2 bg-slate-100 rounded-xl border border-slate-200 space-y-1.5">
              <div className="bg-indigo-700 text-white text-center py-1 px-3 rounded-lg font-bold text-xs">
                ⭐ PUASA RAMADAN (WAJIB) ⭐
              </div>

              <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                <div className="bg-emerald-50 border border-emerald-300 p-1.5 rounded-lg">
                  <span className="font-bold text-emerald-800 block text-[10px]">🌱 1. Syarat</span>
                  <p className="text-slate-600 text-[9px]">Islam, Baligh, Berakal, Suci, Mampu.</p>
                </div>

                <div className="bg-blue-50 border border-blue-300 p-1.5 rounded-lg">
                  <span className="font-bold text-blue-800 block text-[10px]">🌿 2. Rukun</span>
                  <p className="text-slate-600 text-[9px]">1. Niat malam.<br/>2. Imsak (fajar - maghrib).</p>
                </div>

                <div className="bg-rose-50 border border-rose-300 p-1.5 rounded-lg">
                  <span className="font-bold text-rose-800 block text-[10px]">⚠️ 3. Pembatal</span>
                  <p className="text-slate-600 text-[9px]">Makan/minum sengaja, muntah sengaja.</p>
                </div>

                <div className="bg-amber-50 border border-amber-300 p-1.5 rounded-lg">
                  <span className="font-bold text-amber-800 block text-[10px]">💎 4. Hikmah</span>
                  <p className="text-slate-600 text-[9px]">Takwa, tubuh sehat, peduli sesama.</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const currentMeta = formatMeta[selectedFormat] || formatMeta[0];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <span>Pembelajaran Berbasis Proyek (PjBL)</span>
              <span aria-hidden="true">·</span>
              <span>Karya Kelompok Siswa</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500">Fase C Kelas 5</span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 font-display">
              Tantangan Proyek: “Panduan Visual Puasa Wajib untuk Teman Sebaya”
            </h1>
            <p className="text-xs text-slate-600">
              Buatlah karya kreatif yang komunikatif agar teman kelas 5 lainnya dapat memahami ketentuan puasa wajib dengan mudah dan gembira.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                sound.playClick();
                onNavigate(15);
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              <Award className="w-4 h-4 text-emerald-700" />
              <span>Lihat Rubrik</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onNext();
              }}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <span>Lihat Langkah Proyek</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Split: Showcase Poster & 4 Product Options */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Visual Poster Inspiration */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
          <div className="p-4 border-b border-slate-100 bg-emerald-50/60">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                {currentMeta.badge}
              </span>
              <span className="text-[10px] font-semibold text-emerald-700">Pratinjau Format</span>
            </div>
            <p className="text-xs text-slate-600 font-medium">{currentMeta.sub}</p>
          </div>

          <div className="p-3 flex-1 flex items-center justify-center bg-slate-50 min-h-[340px]">
            {renderInspirationPreview()}
          </div>

          <div className="p-3 bg-white border-t border-slate-100 text-[11px] text-slate-500 text-center leading-relaxed">
            💡 {currentMeta.note}
          </div>
        </div>

        {/* Right Column: 4 Product Format Choices */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-4 h-4 text-emerald-600" />
              Pilih 1 Format Karya Visual Sesuai Minat Kelompok:
            </h3>
            <p className="text-xs text-slate-500">Sentuh salah satu format untuk melihat karakteristiknya:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {productOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedFormat === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    sound.playClick();
                    setSelectedFormat(opt.id);
                  }}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-600/30 shadow-xs'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-md ${isSelected ? 'bg-emerald-700 text-white' : 'bg-slate-200 text-slate-700'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-900">{opt.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{opt.desc}</p>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-200/60 text-[10px] text-emerald-800 font-medium">
                    💡 {opt.benefit}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 6 Mandatory Elements Checklist */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
          <CheckSquare className="w-4 h-4 text-emerald-600" />
          Checklist 6 Unsur yang Wajib Dimuat dalam Karya:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {mandatoryElements.map((el, idx) => (
            <div
              key={idx}
              className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl flex items-start gap-2 text-xs"
            >
              <span className="w-5 h-5 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="font-semibold text-emerald-950">{el}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
