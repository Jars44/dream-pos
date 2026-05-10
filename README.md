# DreamsPOS - Sistem Point of Sale

Dasbor Point of Sale (POS) modern dan lengkap yang dibangun dengan **Next.js 16**, dengan manajemen inventori komprehensif, pelacakan penjualan, dan analitik bisnis.

![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat&logo=tailwind-css)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-vega-black?style=flat&logo=shadcn)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## 📋 Ringkasan Proyek

DreamsPOS adalah sistem Point of Sale komprehensif untuk bisnis modern. Menyediakan dasbor intuitif untuk mengelola inventori, melacak penjualan, menangani hubungan pelanggan, dan menghasilkan laporan.

- 12 halaman inventori lengkap (Products, Create, Low Stocks, Expired, Category, Sub Category, Brands, Units, Variant Attributes, Warranties, Print Barcode, Print QR Code)
- Autentikasi dengan email/password dan login sosial (Facebook, Google, Apple)
- Dashboard dengan metrik real-time dan alert stok rendah
- Export PDF/Excel, pagination, pencarian, filtering
- Desain responsif dengan sistem desain konsisten (Nunito Sans, Orange #FE9F43, Navy #092C4C)

**Target Pengguna:** Toko ritel, supermarket, gudang, bisnis e-commerce.

---

## 🛠 Teknologi yang Digunakan

### Core Framework

- **Next.js 16.2.4** – App Router, React 19.2.4, TypeScript 5
- **Bun** – Package manager & runtime (alternatif cepat untuk npm)

### Styling & UI

- **Tailwind CSS 4** – Utility-first CSS framework
- **shadcn/ui (vega style)** – Library komponen berbasis Radix UI (17+ komponen)
- **Class Variance Authority (CVA)** – Sistem variant komponen
- **Lucide React** – Library ikon
- **tw-animate-css** – Utilitas animasi

### Dev Tools

- **ESLint 9** – Linting & kualitas kode
- **TypeScript compiler** – Pengecekan tipe
- **PostCSS** – Pemrosesan CSS
- **Sonner** – Notifikasi toast

---

## 📋 Persyaratan Sistem

- **Node.js** ≥ 18.0.0 (Dibutuhkan untuk Next.js 16)
- **Bun** ≥ 1.0.0 (Direkomendasikan untuk performa lebih cepat) atau npm ≥ 9
- **OS**: Linux, macOS, atau Windows dengan bash/WSL

---

## 🚀 Cara Menjalankan Proyek

### 1. Instalasi Dependencies

```bash
# Menggunakan Bun (Direkomendasikan untuk performa lebih cepat)
bun install

# Atau menggunakan npm
npm install
```

### 2. Development Server

```bash
# Start dev server (Turbopack)
bun run dev

# Buka browser ke http://localhost:3000
```

**Default credentials login:**

- Email: `admin@gmail.com`
- Password: `admin`

### 3. Production Build

```bash
# Build untuk production
bun run build

# Start production server
bun run start

# Akses di http://localhost:3000
```

---

## 🧪 Testing (Unit & E2E)

DreamsPOS menggunakan **Vitest** + **React Testing Library** untuk testing unit & integration. E2E testing dengan Playwright direncanakan untuk masa depan.

### Script Testing

```bash
# Jalankan test runner interaktif (watch mode)
bun run test

# Jalankan tests sekali (CI mode)
bun run test:run

# Jalankan tests dengan UI (browser)
bun run test:ui

# Generate coverage report
bun run test:coverage
```

Output coverage: **~75% statements** (lib & components), UI pages ~52-63% (belum full).

### Target Coverage

- **Library code** (lib/*): ≥ 95% ✅ (current ~96%)
- **UI Components** (components/ui/*): ≥ 80% ✅ (current ~82%)
- **Pages** (app/**/page.tsx): ≥ 70% (ongoing, current ~55%)

### Konvensi Testing

1. **File naming:** `*.test.tsx` untuk komponen, `*.test.ts` untuk utility
2. **Struktur test:** `describe → it → expect` (BDD style)
3. **Mocking:** Gunakan `vi.mock()` untuk komponen eksternal (Next.js Image, Link)
4. **Accessibility:** Prioritaskan `getByRole`, `getByLabelText`, `getByText`
5. **User events:** Gunakan `fireEvent` atau `userEvent` dari `@testing-library/user-event`

---

## 📁 Struktur Direktori Utama

```text
dream-pos/
├── src/
│   ├── app/                     # Next.js App Router (pages & layouts)
│   │   ├── auth/                # Halaman autentikasi (sign-in, register)
│   │   ├── dashboard/           # Dashboard + 12 halaman inventori
│   │   │   └── inventory/       # Modul inventori lengkap
│   │   ├── layout.tsx           # Root layout (font, theme)
│   │   └── page.tsx             # Home (redirect ke auth)
│   ├── components/
│   │   ├── shared/              # Komponen layout (Header, Sidebar, Footer)
│   │   ├── ui/                  # shadcn/ui primitives (17 komponen)
│   │   └── auth/                # Auth wrapper component
│   └── lib/
│       ├── auth-context.tsx     # Authentication context & hooks
│       ├── mock-data.ts         # Data mock produk & entitas
│       ├── sidebar-data.ts      # Konfigurasi navigasi sidebar
│       └── utils.ts             # cn() utility (clsx + tailwind-merge)
├── public/                      # Static assets (images, icons, logo)
│   ├── images/
│   │   ├── products/            # PT001–PT010 product images
│   │   ├── brands/              # Brand logos (apple, nike, dll)
│   │   ├── users/               # User avatars (01–10)
│   │   └── icons/               # UI icons (pdf, xls, freshmart)
├── AGENTS.md                    # Blueprint agent front-end (TAO protocol)
├── .github/
│   └── copilot-instructions.md # Panduan GitHub Copilot
├── package.json
├── tsconfig.json
├── next.config.ts
├── globals.css                  # Tailwind imports + design tokens
├── components.json              # Konfigurasi shadcn/ui
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md                    # File ini
```

**Total:** ~52 file TypeScript/React di `src/` (termasuk test suite)

---

## 📚 Dokumentasi Lanjutan

Dokumentasi detail untuk pengembangan lebih lanjut:

| Topik                  | Location                    | Deskripsi                                          |
| ---------------------- | --------------------------- | -------------------------------------------------- |
| **Sistem Desain**      | `src/app/globals.css:51-84` | Design tokens (colors, fonts, radius, dark mode)   |
| **Komponen UI**        | `src/components/ui/`        | Semua komponen shadcn/ui yang terinstall           |
| **Spesifikasi Fitur**  | `AGENTS.md`                 | Blueprint agent, TAO protocol, constraints         |
| **Mock Data Schema**   | `src/lib/mock-data.ts`      | Interface & data structures untuk semua entitas    |
| **Sidebar Navigation** | `src/lib/sidebar-data.ts`   | Konfigurasi menu navigasi lengkap                  |
| **Auth Flow**          | `src/lib/auth-context.tsx`  | Detail implementasi autentikasi                    |
| **Layout Components**  | `src/components/shared/`    | Header, Sidebar, Footer implementations            |
| **Test Files**         | `src/__tests__/`            | Tests unit & integrasi (54 tests, ~75% coverage)   |

**Catatan:** Folder `/docs` belum dibuat. Dokumentasi inline tersedia di file-file di atas.

---

## 👥 Aturan Kontribusi

### Process

1. **Fork repository** ini
2. **Buat branch feature**:

   ```bash
   git checkout -b feat/nama-fitur-anda
   ```

3. **Ikuti konvensi kode:**
   - Baca `AGENTS.md` untuk pola front-end agent
   - Gunakan halaman existing sebagai template (misal `products/page.tsx`)
   - Selalu tambahkan `"use client";` untuk component dengan hooks/events
   - **Tidak ada backend logic** – gunakan mock data saja
   - Gunakan token desain Tailwind (`primary`, `secondary`), jangan hardcode hex
4. **Quality checks sebelum PR:**

   ```bash
   bun run test:run      # Semua tests harus lulus ✅
   bun run test:coverage # Cek coverage (target ≥70% untuk pages)
   bun run lint          # Perbaiki semua error
   bun run typecheck     # Zero errors wajib
   bun run build         # Build harus passing
   ```

5. **Pesan commit** – gunakan [Conventional Commits](https://conventionalcommits.org/):

   ```text
   feat: tambah halaman Low Stocks dengan notify toggle
   fix: perbaiki state pagination di Category page
   refactor: ekstrak image helper ke lib/utils
   ```

6. **Push & buka Pull Request** ke branch `main`
