# **Komprehensif Design System Dokumentasi (Dengan Nilai Token)**

Dokumen ini merangkum seluruh elemen visual dan komponen antarmuka pengguna (UI) lengkap dengan nilai _Design Tokens_ (Hex, px, rem) agar dapat langsung diimplementasikan ke dalam _framework_ CSS seperti Tailwind atau SCSS.

## **1. Fondasi Visual (Visual Foundations)**

### **1.1. Palet Warna (Color Palette)**

Sistem warna diatur menggunakan pendekatan skala 50-900 untuk fleksibilitas _state_ (Hover, Active, Disabled).  
**A. Core Colors & Neutrals:**

- **Brand/Primary**: #FE9F43
- **Secondary/Navy**: #092C4C
- **System Colors:**
  - **Success (Hijau):** #28C76F
  - **Danger (Merah):** #FF0000
  - **Warning (Kuning/Oranye):** #FFCA18
  - **Info (Biru):** #155EEF

- **Transparent:**
  - **Primary Transparent:** #FFF6EE
  - **Secondary Transparent:** #E6EAED
  - **Error Transparent:** #FFE8E8
  - **Success Transparent:** #ECFAF2
  - **Warning Transparent:** #FFFAEA
  - **Info Transparent:** #EAF1FE

- **Primary Shades:**
  - Primary 100: #FFF6EE
  - Primary 200: #FFEDDD
  - Primary 300: #FFE3CB
  - Primary 400: #FFDABA
  - Primary 500: #FFD0A8
  - Primary 600: #FFC796
  - Primary 700: #FFBD84
  - Primary 800: #FFB370
  - Primary 900: #FFA95B

- **Secondary Shades:**
  - Secondary 100: #E4E8EC
  - Secondary 200: #C9D1D9
  - Secondary 300: #B0BBC7
  - Secondary 400: #96A5B4
  - Secondary 500: #7E8FA2
  - Secondary 600: #667A91
  - Secondary 700: #4E667F
  - Secondary 800: #38526E
  - Secondary 900: #213F5D

- **Grey:**
  - Grey 100: #D3D5D7
  - Grey 200: #BCBFC3
  - Grey 300: #A6AAAF
  - Grey 400: #90959B
  - Grey 500: #7A8086
  - Grey 600: #646B72
  - Grey 700: #4D555E
  - Grey 800: #37404A
  - Grey 900: #212B36

- **Light:**
  - Light 100: #FCFCFC
  - Light 200: #FBFBFB
  - Light 300: #FAFAFA
  - Light 400: #F9F9F9
  - Light 500: #F7F7F7
  - Light 600: #F6F6F6
  - Light 700: #F6F6F6
  - Light 800: #F3F3F3
  - Light 900: #F2F2F2

**B. Semantic Colors (Warna Status):**

- **Success (Hijau):** #28C76F
- **Danger (Merah):** #FF0000
- **Warning (Kuning/Oranye):** #FFCA18
- **Info (Biru):** #155EEF

### **1.2. Tipografi (Typography)**

Nunito sans

**A. Display Text:** Nunito sans bold.

- **Display 1:** 40px / 60px
- **Display 2:** 32px / 48px
- **Display 3:** 24px / 36px
- **Display 4:** 20px / 30px
- **Display 5:** 18px / 27px
- **Display 6:** 16px / 24px

**B. Headings:** Nunito sans bold.

- **Heading 1:** 28px / 42px
- **Heading 2:** 24px / 36px
- **Heading 3:** 20px / 30px
- **Heading 4:** 18px / 27px
- **Heading 5:** 16px / 24px
- **Heading 6:** 14px / 21px

**C. Body Text:** Nunito sans regular.

- **Body Extra Large (xl):**
  - Regular: Nunito sans regular (16px / 24px)
  - Medium: Nunito sans Medium (16px / 24px)
  - SemiBold: Nunito sans SemiBold (16px / 24px)
  - Bold: Nunito sans Bold (16px / 24px)

- **Body Large (lg):**
  - - Regular: Nunito sans regular (14px / 21px)
  - Medium: Nunito sans Medium (14px / 21px)
  - SemiBold: Nunito sans SemiBold (14px / 21px)
  - Bold: Nunito sans Bold (14px / 21px)

- **Body Medium (md):**
  - Regular: Nunito sans regular (13px / 19.5px)
  - Medium: Nunito sans Medium (13px / 19.5px)
  - SemiBold: Nunito sans SemiBold (13px / 19.5px)
  - Bold: Nunito sans Bold (13px / 19.5px)

- **Body Small (sm):**
  - Regular: Nunito sans regular (12px / 18px)
  - Medium: Nunito sans Medium (12px / 18px)
  - SemiBold: Nunito sans SemiBold (12px / 18px)
  - Bold: Nunito sans Bold (12px / 18px)

- **Body Extra Small (xs):**
  - Regular: Nunito sans regular (10px / 15px)
  - Medium: Nunito sans Medium (10px / 15px)
  - SemiBold: Nunito sans SemiBold (10px / 15px)
  - Bold: Nunito sans Bold (10px / 15px)

## **2. Komponen UI (UI Components)**

- **Date formats:** DD/MM/YYYY
- **Time formats:** HH:mm (24-hour)
- **Currency formats:** Rp 1.000,00
