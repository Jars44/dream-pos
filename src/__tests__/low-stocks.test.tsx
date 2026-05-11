import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import LowStocksPage from '@/app/dashboard/inventory/low-stocks/page';

describe('LowStocksPage', () => {
  it('renders page title correctly', () => {
    render(<LowStocksPage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('Low Stocks');
  });

  it('renders breadcrumb with Dashboard link', () => {
    render(<LowStocksPage />);
    expect(screen.getByRole('link', { name: /dashboard/i })).toBeInTheDocument();
  });

  it('renders Send Email button in header', () => {
    render(<LowStocksPage />);
    const header = screen.getByRole('heading', { level: 1 }).closest('div')!.parentElement!;
    const sendEmailBtn = within(header).getByRole('button', { name: /send email/i });
    expect(sendEmailBtn).toBeInTheDocument();
  });

  it('renders Low Stocks tab button and Out of Stock button', () => {
    render(<LowStocksPage />);
    const lowStocksBtn = screen.getByRole('button', { name: /low stocks/i });
    expect(lowStocksBtn).toBeInTheDocument();
    const outOfStockBtn = screen.getByRole('button', { name: /out of stock/i });
    expect(outOfStockBtn).toBeInTheDocument();
  });

  it('switches to Out of Stock tab when clicked', () => {
    render(<LowStocksPage />);
    const outOfStockBtn = screen.getByRole('button', { name: /out of stock/i });
    fireEvent.click(outOfStockBtn);
    expect(outOfStockBtn).toHaveClass('bg-[#FE9F43]');
  });

  it('renders Notify text label', () => {
    render(<LowStocksPage />);
    expect(screen.getByText('Notify')).toBeInTheDocument();
  });

  it('Notify switch toggles correctly', () => {
    render(<LowStocksPage />);
    let switchEl: HTMLElement | null = null;
    try {
      switchEl = screen.getByRole('switch');
    } catch {
      switchEl = screen.getByRole('checkbox');
    }
    expect(switchEl).toBeChecked();
    fireEvent.click(switchEl);
    expect(switchEl).not.toBeChecked();
    fireEvent.click(switchEl);
    expect(switchEl).toBeChecked();
  });

  it('renders at least 3 filter dropdown selects', () => {
    render(<LowStocksPage />);
    const selects = screen.getAllByRole('combobox');
    expect(selects.length).toBeGreaterThanOrEqual(3);
  });

  it('filters by warehouse', () => {
    render(<LowStocksPage />);
    const selects = screen.getAllByRole('combobox');
    const warehouseSelect = selects[0];
    fireEvent.click(warehouseSelect);
    const option = screen.getByRole('option', { name: 'Lavish Warehouse' });
    fireEvent.click(option);
    const table = screen.getByRole('table');
    const cells = within(table).getAllByRole('cell');
    const cellTexts = cells.map((c) => c.textContent?.trim());
    expect(cellTexts).toContain('Lavish Warehouse');
  });

  it('filters by store', () => {
    render(<LowStocksPage />);
    const selects = screen.getAllByRole('combobox');
    const storeSelect = selects[1];
    fireEvent.click(storeSelect);
    const option = screen.getByRole('option', { name: 'Electro Mart' });
    fireEvent.click(option);
    const table = screen.getByRole('table');
    const cells = within(table).getAllByRole('cell');
    const cellTexts = cells.map((c) => c.textContent?.trim());
    expect(cellTexts).toContain('Electro Mart');
  });

  it('filters by category', () => {
    render(<LowStocksPage />);
    const selects = screen.getAllByRole('combobox');
    const categorySelect = selects[2];
    fireEvent.click(categorySelect);
    const option = screen.getByRole('option', { name: 'Computers' });
    fireEvent.click(option);
    const table = screen.getByRole('table');
    const cells = within(table).getAllByRole('cell');
    const cellTexts = cells.map((c) => c.textContent?.trim());
    expect(cellTexts).toContain('Computers');
  });

  it('renders data table with proper columns', () => {
    render(<LowStocksPage />);
    const table = screen.getByRole('table');
    const headers = within(table).getAllByRole('columnheader');
    expect(headers.length).toBeGreaterThan(5);
    const headerTexts = headers.map((h) => h.textContent?.trim().toLowerCase());
    expect(headerTexts).toContain('warehouse');
    expect(headerTexts).toContain('store');
    expect(headerTexts).toContain('product name');
    expect(headerTexts).toContain('category');
    expect(headerTexts).toContain('sku');
    expect(headerTexts).toContain('qty');
    expect(headerTexts).toContain('qty alert');
  });

  it('renders action buttons (Edit and Delete) in each row, no View button', () => {
    render(<LowStocksPage />);
    const table = screen.getByRole('table');
    const rows = within(table).getAllByRole('row');
    const dataRows = rows.slice(1);
    dataRows.forEach((row) => {
      const buttons = within(row).getAllByRole('button');
      expect(buttons.length).toBeGreaterThanOrEqual(2);
    });
    expect(screen.queryByRole('button', { name: /view/i })).not.toBeInTheDocument();
  });

  it('renders pagination and row-per-page controls', () => {
    render(<LowStocksPage />);
    expect(screen.getByText('Row Per Page')).toBeInTheDocument();
    expect(screen.getByText('Entries')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /previous/i })).toBeInTheDocument();
  });

  it('sorts by SKU', () => {
    render(<LowStocksPage />);
    const table = screen.getByRole('table');
    const skuHeader = within(table).getByText('SKU');
    fireEvent.click(skuHeader);
    const rows = within(table).getAllByRole('row');
    const firstDataRow = rows[1] as HTMLElement;
    const cells = within(firstDataRow).getAllByRole('cell');
    const firstSku = cells[5].textContent;
    expect(firstSku).toBe('PT001');
  });

  it('sorts by Qty', () => {
    render(<LowStocksPage />);
    const table = screen.getByRole('table');
    const qtyHeader = within(table).getByText('Qty');
    fireEvent.click(qtyHeader);
    const rows = within(table).getAllByRole('row');
    const firstDataRow = rows[1] as HTMLElement;
    const cells = within(firstDataRow).getAllByRole('cell');
    const firstQty = cells[6].textContent;
    expect(parseInt(firstQty!)).toBeLessThanOrEqual(20);
  });

  it('sorts by Qty', () => {
    render(<LowStocksPage />);
    const table = screen.getByRole('table');
    const qtyHeader = within(table).getByText('Qty').closest('div')!.parentElement!;
    fireEvent.click(qtyHeader);
    const rows = within(table).getAllByRole('row');
    const firstDataRow = rows[1];
    const cells = within(firstDataRow).getAllByRole('cell');
    const firstQty = cells[6].textContent;
    expect(parseInt(firstQty!)).toBeLessThanOrEqual(20);
  });

  it('shows empty state when no data matches', () => {
    render(<LowStocksPage />);
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'ZZZNonexistent' } });
    const table = screen.getByRole('table');
    expect(within(table).getByText('No Data Found')).toBeInTheDocument();
  });
});
