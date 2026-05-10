import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import ProductsPage from '@/app/dashboard/inventory/products/page';
import { productsData } from '@/lib/mock-data';

// Mock the Image component already handled in setup.tsx

describe('ProductsPage', () => {
  it('renders page title correctly', () => {
    render(<ProductsPage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('Products');
  });

  it('renders breadcrumb navigation', () => {
    render(<ProductsPage />);
    const dashboardLink = screen.getByRole('link', { name: /dashboard/i });
    expect(dashboardLink).toBeInTheDocument();
  });

  it('renders action buttons in header', () => {
    render(<ProductsPage />);
    // Check for utility icon buttons - they don't have accessible names sometimes
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('renders Add Product and Import Product buttons', () => {
    render(<ProductsPage />);
    expect(screen.getByRole('button', { name: /add product/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /import product/i })).toBeInTheDocument();
  });

  it('renders search input', () => {
    render(<ProductsPage />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('renders filter dropdowns for Category and Brand', () => {
    render(<ProductsPage />);
    // These selects may not have accessible names, use placeholder
    const selects = screen.getAllByRole('combobox');
    expect(selects.length).toBeGreaterThanOrEqual(2);
  });

  it('renders table with correct columns', () => {
    render(<ProductsPage />);
    const table = screen.getByRole('table');
    const headers = within(table).getAllByRole('columnheader');
    const headerTexts = headers.map((h) => h.textContent?.trim());

    expect(headerTexts).toContain('SKU');
    expect(headerTexts).toContain('Product Name');
    expect(headerTexts).toContain('Category');
    expect(headerTexts).toContain('Brand');
    expect(headerTexts).toContain('Price');
    expect(headerTexts).toContain('Unit');
    expect(headerTexts).toContain('Qty');
    expect(headerTexts).toContain('Created By');
  });

  it('renders product data in table rows', () => {
    render(<ProductsPage />);
    // Check first product exists - use getAllByRole to find multiple
    const table = screen.getByRole('table');
    const cells = within(table).getAllByRole('cell');
    const cellTexts = cells.map((c) => c.textContent?.trim());

    expect(cellTexts).toContain(productsData[0].sku);
    expect(cellTexts).toContain(productsData[0].name);
  });

  it('renders pagination controls', () => {
    render(<ProductsPage />);
    expect(screen.getByRole('link', { name: /previous/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /next/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '1' })).toBeInTheDocument();
  });

  it('renders row per page selector', () => {
    render(<ProductsPage />);
    expect(screen.getByText('Row Per Page')).toBeInTheDocument();
    expect(screen.getByText('Entries')).toBeInTheDocument();
  });

  it('has checkbox for each product plus select-all', () => {
    render(<ProductsPage />);
    const checkboxes = screen.getAllByRole('checkbox');
    // One "select all" checkbox + one per product
    expect(checkboxes.length).toBe(productsData.length + 1);
  });
});
