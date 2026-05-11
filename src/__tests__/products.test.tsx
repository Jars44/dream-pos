import { describe, it, expect, vi } from 'vitest';
import { render, screen, within, fireEvent } from '@testing-library/react';
import ProductsPage from '@/app/dashboard/inventory/products/page';
import { productsData } from '@/lib/mock-data';

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

  it('filters products by search query', () => {
    render(<ProductsPage />);
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'Lenovo' } });

    const table = screen.getByRole('table');
    const cells = within(table).getAllByRole('cell');
    const cellTexts = cells.map((c) => c.textContent?.trim());

    expect(cellTexts).toContain('Lenovo IdeaPad 3');
    expect(cellTexts).not.toContain('Beats Pro');
  });

  it('renders filter dropdowns for Category and Brand', () => {
    render(<ProductsPage />);
    const selects = screen.getAllByRole('combobox');
    expect(selects.length).toBeGreaterThanOrEqual(2);
  });

  it('filters products by category', () => {
    render(<ProductsPage />);
    const selects = screen.getAllByRole('combobox');
    const categorySelect = selects[0];

    fireEvent.click(categorySelect);
    const computersOption = screen.getByRole('option', { name: 'Computers' });
    fireEvent.click(computersOption);

    const table = screen.getByRole('table');
    const cells = within(table).getAllByRole('cell');
    const cellTexts = cells.map((c) => c.textContent?.trim());

    expect(cellTexts).toContain('Computers');
    expect(cellTexts).not.toContain('Electronics');
  });

  it('filters products by brand', () => {
    render(<ProductsPage />);
    const selects = screen.getAllByRole('combobox');
    const brandSelect = selects[1];

    fireEvent.click(brandSelect);
    const appleOption = screen.getByRole('option', { name: 'Apple' });
    fireEvent.click(appleOption);

    const table = screen.getByRole('table');
    const cells = within(table).getAllByRole('cell');
    const cellTexts = cells.map((c) => c.textContent?.trim());

    expect(cellTexts).toContain('Apple');
    expect(cellTexts).not.toContain('Lenovo');
  });

  it('sorts products by SKU ascending', () => {
    render(<ProductsPage />);
    const table = screen.getByRole('table');
    const skuHeader = within(table).getByText('SKU');
    fireEvent.click(skuHeader);

    const rows = within(table).getAllByRole('row');
    const firstDataRow = rows[1] as HTMLElement;
    const cells = within(firstDataRow).getAllByRole('cell');
    const firstSku = cells[1].textContent;

    expect(firstSku).toBe('PT001');
  });

  it('sorts products by SKU descending', () => {
    render(<ProductsPage />);
    const table = screen.getByRole('table');
    const skuHeader = within(table).getByText('SKU');
    fireEvent.click(skuHeader);
    fireEvent.click(skuHeader);

    const rows = within(table).getAllByRole('row');
    const firstDataRow = rows[1] as HTMLElement;
    const cells = within(firstDataRow).getAllByRole('cell');
    const firstSku = cells[1].textContent;

    expect(firstSku).toBe('PT010');
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
    // With 10 items and 10 per page, only 1 page should exist
    expect(screen.queryByRole('link', { name: '2' })).not.toBeInTheDocument();
  });

  it('changes items per page resets to page 1', () => {
    render(<ProductsPage />);
    const rowPerPageSelect = screen.getByText('Row Per Page').parentElement!.querySelector('button')!;
    fireEvent.click(rowPerPageSelect);

    const option20 = screen.getByRole('option', { name: '20' });
    fireEvent.click(option20);

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
    expect(checkboxes.length).toBe(productsData.length + 1);
  });

  it('select-all checkbox selects all products', () => {
    render(<ProductsPage />);
    const selectAllCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(selectAllCheckbox);

    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.slice(1).forEach((cb) => {
      expect(cb).toBeChecked();
    });
  });

  it('shows empty state when no products match filter', () => {
    render(<ProductsPage />);
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'ZZZNonexistent' } });

    const table = screen.getByRole('table');
    expect(within(table).getByText('No Data Found')).toBeInTheDocument();
  });
});
