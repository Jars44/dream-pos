### **1\. Base Notes: Design Tokens (Fondasi Sistem)**

Ini adalah lapisan paling dasar yang nempel seharian. Kalau fondasinya salah, ke atasnya bakal berantakan. Berdasarkan gambar *Typography* dan *Colors*, ini *setup* yang harus lu lakuin di tailwind.config.ts.

* **Typography (Font Family & Scale):**  
  * Desain ini secara eksklusif menggunakan **Nunito Sans** dari *Display* sampai *Body XS*.  
  * **Praktik Terbaik:** Gunakan next/font/google di layout.tsx untuk optimasi *loading* (mencegah *layout shift*), lalu daftarkan di Tailwind.  
  * Buat *custom text sizes* di Tailwind untuk mengakomodasi skala spesifik seperti Display 1 (40px/60px) hingga Body XS (10px/15px).  
* **Color Palette Matrix:**  
  * Desain ini punya matriks warna yang sangat lengkap (skala 100-900 untuk *Primary, Secondary, Grey, Light, Success, Danger,* dll).  
  * **Primary Brand:** Berpusat di warna Orange (\#FE9F43 pada Primary 500/Brand).  
  * **Secondary Brand:** Berpusat di warna Dark Navy/Charcoal (\#092C4C pada Secondary 500).  
  * **Praktik Terbaik:** Jangan *hardcode* warna di komponen. Ekspor palet warna ini dari Figma (bisa pakai plugin Figma to Tailwind) dan masukkan ke theme.colors di Tailwind. Ini krusial biar kalau ada *rebranding*, lu cuma ganti di satu *file*.

### **2\. Heart Notes: Core Components (Karakter Utama)**

Ini adalah komponen yang paling sering dipakai *user*. Berdasarkan gambar *Buttons* dan *Input*, kita butuh arsitektur komponen yang *highly reusable*.

* **The Button Matrix:**  
  * Visual menunjukkan puluhan variasi tombol: *Solid, Outlined/Tinted, Ghost*, dengan berbagai warna (*Primary, Success, Danger, dll*) dan *state* (*Hover, Active*).  
  * **Arsitektur Kode:** WAJIB pakai library **CVA (Class Variance Authority)**. Jangan nulis logika if-else panjang di *className*.  
  * Dengan CVA, lu bisa bikin properti rapi kayak gini: \<Button intent="primary" size="lg" variant="outline"\>Click Here\</Button\>.  
* **Input & Form Controls:**  
  * Visual *Input* menunjukkan variasi yang kompleks: *With Icon (Left/Right), Date, Time, Select, Multi-Select*, sampai *Rich Text Editor*.  
  * **Praktik Terbaik:** Buat komponen *Wrapper* untuk Label, Input, dan Error Message (mirip struktur shadcn Form dan FormField).  
  * Untuk *Rich Text Editor*, jangan bikin dari nol. Gunakan library *headless* seperti **TipTap** atau **Quill.js** lalu bungkus dengan *styling* Tailwind agar visualnya persis seperti desain.  
  * Untuk *Date/Time*, kombinasikan shadcn *Popover* dengan react-day-picker.

### **3\. Top Notes: UX & Interaksi (Kesan Pertama)**

Ini adalah animasi dan interaksi mikro yang bikin web lu terasa premium dan mahal.

* **Focus & Ring States:** Perhatikan batas (*border*) input saat di-klik. Pastikan lu mengatur focus:ring di Tailwind dengan warna *Primary* atau *Secondary* yang tipis biar aksesibilitasnya (a11y) tetap terjaga tapi tetap estetik.  
* **Micro-interactions:** Sesuai fokus lu di performa dan UI/UX, kasih transisi halus (sekitar duration-200 ease-in-out) di setiap perubahan warna tombol (*hover* ke skala warna 600, misalnya dari \#FE9F43 ke \#FF8D29).