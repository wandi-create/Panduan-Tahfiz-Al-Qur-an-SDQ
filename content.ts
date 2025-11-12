import type { SectionGroup } from './types';

export const contentData: SectionGroup[] = [
  {
    title: 'Pendahuluan',
    sections: [
      {
        id: 'visi-misi',
        title: 'Visi & Misi',
        subtitle: 'Fondasi dan Arah Program Pembelajaran Al-Qur\'an',
        icon: 'visi',
        content: [
          { type: 'heading', level: 2, text: 'Visi' },
          { type: 'paragraph', text: "Membentuk generasi muslim dengan tauhid yang kuat dan memiliki kecintaan terhadap Al-Qur'an dan Sunnah Rasulullah Shallallahu 'alaihi wa sallam." },
          { type: 'heading', level: 2, text: 'Misi' },
          {
            type: 'list',
            ordered: true,
            items: [
              "Menanamkan kecintaan kepada Al-Qur'an dengan membaca dan menghafalnya sesuai kaidah syar'i.",
              "Melatih anak untuk menghafal Al-Qur'an setiap hari.",
              "Melatih anak sejak dini dalam beraktifitas sehari-hari berlandaskan nilai-nilai islam yang murni.",
              "Mempersiapkan anak sehingga mampu mengikuti pendidikan selanjutnya.",
            ],
          },
        ],
      },
      {
        id: 'tujuan-manfaat',
        title: 'Tujuan & Manfaat',
        subtitle: 'Sasaran dan Keuntungan Mengikuti Program Tahfiz',
        icon: 'tujuan',
        content: [
          { type: 'heading', level: 2, text: 'Tujuan Program' },
          {
            type: 'list',
            ordered: true,
            items: [
                "Program ini bertujuan untuk mengimplementasikan visi dan misi sekolah.",
                "Meningkatkan kualitas kemampuan siswa dalam membaca dan menghafal Al-Qur`an.",
                "Meningkatkan kuantitas dan kualitas hafalan Al-Qur`an siswa yang dapat digunakan untuk melaksanakan shalat lima waktu.",
                "Perbaikan akhlak dan adab siswa dalam kehidupan sehari hari."
            ]
          },
          { type: 'heading', level: 2, text: 'Manfaat Program' },
          {
              type: 'list',
              ordered: true,
              items: [
                  "Siswa mendapatkan pemahaman, penghayatan, dan pengalaman dalam membaca dan menghafal sesuai dengan Ilmu Tajwid.",
                  "Siswa mendapatkan pengalaman dan penghayatan melalui pengamatan terhadap proses membaca dan menghafal Al-Qur'an.",
                  "Siswa memperoleh pengalaman dan keterampilan untuk menghafal Al-Alqur'an.",
                  "Siswa memiliki hafalan al-Quran yang mutqin dan sertifikasi syahadah."
              ]
          },
        ],
      },
    ]
  },
  {
    title: 'Pelaksanaan Program',
    sections: [
      {
        id: 'jenis-kegiatan',
        title: 'Jenis Kegiatan',
        subtitle: 'Rangkaian Aktivitas dalam Program Tahfiz',
        icon: 'kegiatan',
        content: [
          { type: 'paragraph', text: 'Program ini meliputi dua jenis kegiatan utama, Kegiatan utama yang dimaksud adalah:' },
          {
            type: 'list',
            ordered: true,
            items: [
              "Kegiatan Tahfiz yang mencakup beberapa jenis kegiatan, yaitu:",
              {
                type: 'list',
                ordered: false,
                items: [
                  "Kegiatan rutin harian meliputi; Talaqi klasikal, Talaqi individual, Setoran hafalan baru (sabaq), setoran hafalan kemarin (sabqi), dan murajaah hafalan lama (manzil).",
                  "Kegiatan rutin pekanan yaitu; Tasmi' syahadah.",
                  "Kegiatan rutin semesteran atau tahunan yaitu; Penilaian tengah semester, Penilaian akhir semester, Musabaqah Hifzul Qur'an (MHQ)."
                ]
              },
              "Kegiatan Tilawah yang mencakup beberapa jenis kegiatan, yaitu:",
              {
                type: 'list',
                ordered: false,
                items: [
                  "Kegiatan Tilawah klasikal diberlakukan untuk semua siswa dalam rangka menjaga kualitas bacaan siswa.",
                  "Kegiatan Tilawah individual diberikan kepada siswa di setiap halaqah masing-masing terutama siswa yang memiliki kualitas tilawah/bacaan dibawah rata-rata."
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'alokasi-waktu',
        title: 'Alokasi Waktu',
        subtitle: 'Jadwal dan Manajemen Waktu Kegiatan Harian',
        icon: 'waktu',
        content: [
          { type: 'paragraph', text: "Dalam proses menghafal Al-Qur'an, siswa memerlukan manajemen waktu yang baik agar memperoleh hasil yang maksimal baik dari sisi penambahan hafalan atau konsistensi murojaah hafalan. Kuncinya adalah efisiensi dan pemanfaatan waktu yang maksimal. Alokasi waktu untuk kegiatan Al-qur'an adalah sebagai berikut:" },
          {
            type: 'table',
            headers: ['Waktu', 'Kegiatan', 'Keterangan'],
            rows: [
              ['07.45 - 08.00', 'Murajaah Jamaiyyah', 'Siswa membaca secara bersama-sama hafalan Manzil'],
              ['08.00 - 08.45', 'Halaqah 1', 'Talaqi klasikal, setoran hafalan baru (Sabaq)'],
              ['08.45 - 09.30', 'Halaqah 2', 'Setoran hafalan kemarin (Sabqi), tilawah individual'],
              ['10.00 - 11.00', 'Halaqah 3', 'Setoran murajaah hafalan lama (Manzil)'],
            ]
          }
        ]
      },
      {
        id: 'metode-tahfiz',
        title: 'Metode Tahfiz',
        subtitle: 'Pendekatan dan Teknik dalam Menghafal Al-Qur\'an',
        icon: 'metode',
        content: [
          {
            type: 'list',
            ordered: true,
            items: [
                "Talaqqi: Teknisnya dengan diadakannya talqin jamai' oleh guru-guru pengampu Al-Qur'an, dimana sang guru membacakan terlebih dahulu ayat-ayat yang ingin dihafalkan siswa kemudian siswa mengikutinya atau menyetorkan tilawah bacaan yang hendak dihafal pada gurunya tersebut.",
                "Hafalan baru (Sabaq): Siswa menambah hafalan yang belum pernah dihafal sebelumnya kemudian disetorkan setiap hari kepada pengampu minimal 2 baris. Jika siswa menghafal dalam sehari 2 baris, maka dalam 1 tahun ajaran dapat menghafal 1 Juz.",
                "Hafalan kemarin (Sabqi): Sabqi secara umum dapat kita pahami dengan hafalan kemarin atau beberapa hari yang lalu yang belum mencapai 1 Juz.",
                "Murojaah (Manzil): Murajaah adalah bagian sangat penting dalam proses menghafal maka diwajibkan siswa untuk mengulang kembali hafalan yang sudah dimiliki agar tidak hilang.", 
                        {
                            type: 'list',
                            ordered: false,
                            items: [
                              // FIX: Added missing commas between string elements in the array.
                              "Teknis murajaah:",
                              "Tasmi: siswa menyetorkan murajaah hafalan lamanya setiap hari kepada pengampu sebanyak minimal 4 halaman secara berurutan.",
                              "Muraja'ah jama'iyyah: yaitu mengulang hafalan secara massal dan klasikal."
                            ]
                        }
                    ]
                }
            ]
           
        
      },
    ]
  },
  {
    title: 'Manajemen',
    sections: [
      {
        id: 'guru-pengampu',
        title: 'Guru Pengampu',
        subtitle: 'Peran dan Tanggung Jawab Pembimbing Halaqah',
        icon: 'guru',
        content: [
          { type: 'heading', level: 2, text: 'Tugas Guru Pengampu' },
          {
            type: 'list',
            ordered: true,
            items: [
              "Menyelenggarakan dan mengatur halaqah serta memberikan pelayanan terbaik kepada siswa anggota halaqah, khususnya dalam kegiatan tilawah dan menghafal Al Qur'an.",
              "Menyimak bacaan atau hafalan siswa pada waktu-waktu yang telah ditentukan.",
              "Mengoreksi bacaan siswa, baik dalam kelancaran hafalan maupun tahsinnya.",
              "Mencatat pencapaian hafalan dan tilawah siswa dalam buku penunjang.",
              "Memberikan nilai hafalan dan tilawah siswa dalam buku penunjang.",
              "Mencatat evaluasi siswa di kolom catatan dalam buku penunjang.",
              "Memberikan motivasi kepada siswa anggota halaqahnya masing-masing secara optimal, baik terkait dengan tahfiz, tilawah atau yang lain.",
              "Menyampaikan progress pencapaian Al-Qur'an kepada pihak-pihak terkait terutama kepada koordinator tahfizh dan kepala sekolah secara rutin setiap bulan.",
              "Mengkomunikasikan perkembangan tahfiz siswa anggota halaqah kepada wali murid masing-masing.",
              "Hal-hal yang belum tersebut dalam tugas-tugas ini akan ditentukan kemudian."
            ]
          }
        ]
      },
      {
        id: 'manajemen-halaqah',
        title: 'Manajemen Halaqah',
        subtitle: 'Prinsip-Prinsip Pengelolaan Kelompok Belajar',
        icon: 'halaqah',
        content: [
          { type: 'heading', level: 2, text: 'Prinsip Manajemen Halaqah' },
          {
            type: 'list',
            ordered: true,
            items: [
              'Disiplin: setiap guru pengampu wajib mendisiplinkan dirinya dan murid anggota halaqah yang diampu.',
              'Efektif: setiap guru pengampu wajib menggunakan waktu-waktu yang telah ditentukan dengan sebaik mungkin dan tidak melalaikannya.',
              'Konsisten: setiap guru pengampu wajib konsisten dengan kegiatan-kegiatan pembelajaran Al-Qur\'an dan dengan kesepakatan dalam halaqah yang telah dibuat.',
              'Antusias: setiap guru pengampu wajib memulai dan menyelenggarakan halaqah dengan semangat dan antusiasme yang tinggi.',
              'Tanggung jawab: setiap guru pengampu berusaha sekuat tenaga mengelola halaqah dan mengantarkan murid anggota halaqahnya untuk menjadi penghafal Al Qur\'an atau minimal mencapai target yang telah ditetapkan sekolah.',
              'Ikhlas: setiap guru pengampu wajib mengikhlaskan niatnya hanya untuk Allah dan mengajarkan keikhlasan ini kepada murid anggota halaqahnya.'
            ]
          },
        ]
      }
    ]
  },
  {
    title: 'Target & Evaluasi',
    sections: [
      {
        id: 'target-hafalan',
        title: 'Target Hafalan',
        subtitle: 'Capaian Hafalan yang Diharapkan per Tingkat',
        icon: 'target',
        content: [
          { type: 'paragraph', text: 'Target pencapaian hafalan dalam program ini adalah sebanyak 5 juz. Juz yang dihafal dimulai dari juz 30 sampai dengan juz 26.' },
          {
            type: 'table',
            caption: 'Rincian Target Hafalan Per Tingkat',
            headers: ['Tingkat', 'Semester', 'Target'],
            mergeRows: true,
            rows: [
              ['Kelas 1', 1, "Belajar Iqra'"],
              ['Kelas 1', 2, "Perbaikan bacaan Al-Qur'an"],
              ['Kelas 2', 1, 'Juz 30b (Al Buruj – An nas)'],
              ['Kelas 2', 2, 'Juz 30a (An-Naba – Al fajr)'],
              ['Kelas 3', 1, 'Juz 29a (Al-Mulk – Nuh)'],
              ['Kelas 3', 2, 'Juz 29b (Al-Jin – Al-Mursalat)'],
              ['Kelas 4', 1, 'Juz 28'],
              ['Kelas 4', 2, 'Juz 27a (Al-Dzariyat – al-Qomar)'],
              ['Kelas 5', 1, 'Juz 27b (Ar-Rahman – Al Hadid) dan Juz 26a (Al-Ahqaf - Muhammad)'],
              ['Kelas 5', 2, 'Juz 26b (Al Fath - Qaf)'],
              ['Kelas 6', 1, "Muraja'ah"],
              ['Kelas 6', 2, "Muraja'ah"],
            ]
          },
          { type: 'heading', level: 3, text: 'Kalkulasi Target Hafalan Per Hari' },
          {
            type: 'table',
            headers: ['Kelas', 'Smt', 'Target', 'Per hari', 'Per Pekan', 'Per Bulan', 'Dalam Satu Tahun'],
            mergeRows: true,
            rows: [
              ['Kelas 1', 1, 'Iqra 1-6', '± 2 hal', '± 9-10 hal', '± 35-40 hal', ''],
              ['Kelas 1', 2, "Bacaan Al-Qur'an lancar", '', '', '', ''],
              ['Kelas 2', 1, '½ Juz (Juz 30b = 13 hal)', '+2 baris', '± 0,67 hal', '± 2,5-3 hal', '1 Juz'],
              ['Kelas 2', 2, '½ Juz (Juz 30a = 10 hal)', '+2 baris', '± 0,67 hal', '± 2,5-3 hal', ''],
              ['Kelas 3', 1, '½ Juz (Juz 29a = 10 hal)', '+2 baris', '± 0,67 hal', '± 2,5-3 hal', '1 Juz'],
              ['Kelas 3', 2, '½ Juz (Juz 29b = 10 hal)', '+2 baris', '± 0,67 hal', '± 2,5-3 hal', ''],
              ['Kelas 4', 1, '½ Juz (Juz 28 = 20 hal)', '3-4 baris', '± 1,1 hal', '4-4,5 hal', '1,5 Juz'],
              ['Kelas 4', 2, '½ Juz (Juz 27a = 10 hal)', '+2 baris', '± 0,6 hal', '± 2,2-2,5 hal', ''],
              ['Kelas 5', 1, '½ Juz (Juz 27b & 26a = 20 hal)', '3-4 baris', '± 1,1 hal', '4-4,5 hal', '1,5 Juz'],
              ['Kelas 5', 2, '½ Juz (Juz 26b = 10 hal)', '2 baris', '± 0,6 hal', '± 2,2-2,5 hal', ''],
            ]
          },
        ],
      },
      {
        id: 'evaluasi-ujian',
        title: 'Evaluasi & Ujian',
        subtitle: 'Proses Penilaian dan Pelaksanaan Ujian Tahfiz',
        icon: 'evaluasi',
        content: [
          { type: 'heading', level: 2, text: 'Evaluasi Program' },
          {
            type: 'list',
            ordered: true,
            items: [
              'Program ini wajib dievaluasi secara berkala secara terencana dan terukur.',
              {
                type: 'list',
                ordered: false,
                items: [
                  'Jenis-jenis evaluasi program ini adalah sebagai berikut:',
                  {
                    type: 'list',
                    ordered: false,
                    items: [
                      'a) Evaluasi pekanan yaitu evaluasi yang dilaksanakan saat rapat evaluasi masing-masing unit tahfiz putra dan putri.',
                      'b) Evaluasi bulanan yang dilaksanakan saat rapat evaluasi gabungan unit putra dan putri.'
                    ]
                  }
                ]
              }
            ]
          },
          { type: 'heading', level: 2, text: 'Pelaksanaan Ujian Tahfiz' },
          {
            type: 'list',
            ordered: true,
            items: [
              'Ujian tahfiz dalam setahun dilaksanakan empat kali yaitu ujian tengah semester gasal, ujian akhir semester gasal, ujian tengah semester genap dan ujian akhir semester genap yang dilaksanakan pada hari pertama ujian sekolah.',
              'Waktu pelaksaan ujian bisa mengalami perubahan jika ada konsideran perubahan dan tidak ada resiko yang ditimbulkan akibat perubahan dimaksud.',
              'Alokasi waktu ujian disesuaikan dengan kondisi yang ada dan jumlah penguji serta siswa yang akan diuji.'
            ]
          },
        ]
      }
    ]
  },
];