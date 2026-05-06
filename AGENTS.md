# DreamsPOS Autonomous UI Agent Blueprint

<system_directive>
You are the Lead Front-End Automation Agent for "DreamsPOS". You are operating within a strict Next.js/Bun frontend environment.
Your primary objective is to rapidly build out a 14-page UI architecture in a 1-week sprint. You must prioritize component reusability, pixel-perfect translation of design tokens, and frontend performance.
</system_directive>

## 🎯 Project Overview

**DreamsPOS** is a modern Point of Sale management dashboard.

- **Sprint Goal:** 14 full UI pages within 1 week.
- **Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS 4, shadcn/ui, Framer Motion.
- **Backend Scope:** NONE. This phase is 100% UI/UX focused. All data must be mocked.

---

## 🏗️ Architecture & Project Structure

### **Key Directories**

- **`src/app/`**: Next.js App Router layout and pages (e.g., `/(dashboard)/inventory`, `/(auth)/login`).
- **`src/components/ui/`**: Base atomic components strictly from shadcn/ui.
- **`src/components/shared/`**: Reusable composite components (e.g., `Sidebar`, `Header`, `StatCard`, `DataTable`).
- **`src/lib/`**: `utils.ts` for `cn()`, and `mock-data.ts` for all dummy JSON arrays.
- **`src/types/`**: Strict TypeScript interfaces for all UI props and mock data models.

---

## 🎨 Design Tokens & UI/UX (The Perfume Notes)

### **1. Base Notes (Foundational Styles)**

- **Typography:** Exclusively use **Nunito Sans** for all text elements (Display 1 down to Body XS).
- **Color Matrix:**
  - Primary Brand: Orange (Base `bg-[#FE9F43]`, mapped to `primary-500` in Tailwind)[cite: 2].
  - Secondary Brand: Dark Navy/Charcoal (Base `bg-[#092C4C]`, mapped to `secondary-500`)[cite: 2].
  - Backgrounds: Light beige/cream for auth, standard slate-50 for dashboard canvas.

### **2. Heart Notes (Core Components)**

- **The Button Matrix:** STRICTLY use CVA (Class Variance Authority) to handle Solid, Outlined/Tinted, and Ghost variants across Primary, Success, and Danger colors[cite: 2].
- **Form Controls:** Construct robust Wrapper components for Labels, Inputs, and Error Messages mimicking shadcn Form behavior[cite: 2].

### **3. Top Notes (Micro-interactions)**

- Implement `duration-200 ease-in-out` transitions on all interactive elements (buttons, table rows, cards).
- Ensure high-quality accessibility with `focus-visible:ring-primary/50` on all inputs and buttons[cite: 2].

---

## 🛠️ Development Workflow

### **Component-First Strategy**

1. Generate base `shadcn/ui` components first.
2. Build composite blocks in `src/components/shared/` (e.g., build `MetricCard` before building the `Dashboard` page).
3. Assemble the page inside `src/app/` using the composite blocks and mock data.

### **Mock Data Pattern (MANDATORY)**

```typescript
// Always create realistic mock data in a separate file or at the top of the page
const MOCK_INVENTORY: InventoryItem[] = [
  { id: "INV-001", name: "Wireless Scanner", stock: 45, status: "IN_STOCK" },
  { id: "INV-002", name: "Receipt Printer", stock: 2, status: "LOW_STOCK" },
];
```

---

## 🚫 Prohibited Practices

- ❌ **NO BACKEND CODE:** Do not write database connections, Prisma schemas, or SQL queries.
- ❌ **NO API ROUTES:** Do not create `src/app/api/` folders unless explicitly requested for simple mock route testing.
- ❌ **NO MESSY CLASSES:** Do not write inline complex conditionals for Tailwind. Use `cva` and `cn()`.
- ❌ **NO EXTERNAL FONTS:** Stick strictly to Next.js `next/font/google` with Nunito Sans[cite: 2].

<execution_protocol>

Before modifying any file, adhere to the Think-Act-Observe loop:

1. **Analyze:** Identify which reusable component can be utilized or needs to be built.
2. **Type Check:** Ensure mock data interfaces are strictly typed.
3. **Execute:** Write the UI code with perfect Tailwind utility alignment.
4. **Self-Correction Check:** Verify no backend logic was introduced and CVA was used for component variants.
</execution_protocol>