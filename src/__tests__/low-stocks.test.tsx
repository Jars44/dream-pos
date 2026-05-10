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

  it('renders Low Stocks tab button and Out of Stocks label', () => {
    render(<LowStocksPage />);
    // Get both flex containers with justify-between: header + sub-header
    const flexContainers = document.querySelectorAll('.flex.items-center.justify-between');
    // Sub-header is the second one (index 1)
    const subHeader = flexContainers[1] as HTMLElement;

    // Low Stocks button should be in subHeader
    const lowStocksBtn = within(subHeader).getByRole('button', { name: /low stocks/i });
    expect(lowStocksBtn).toBeInTheDocument();

    // Out of Stock text label (span)
    expect(within(subHeader).getByText('Out of Stock')).toBeInTheDocument();
  });

  it('renders Notify text label', () => {
    render(<LowStocksPage />);
    expect(screen.getByText('Notify')).toBeInTheDocument();
  });

  it('renders at least 3 filter dropdown selects', () => {
    render(<LowStocksPage />);
    const selects = screen.getAllByRole('combobox');
    expect(selects.length).toBeGreaterThanOrEqual(3);
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
    // Data rows (skip header)
    const dataRows = rows.slice(1);
    // Each row should have at least 2 action buttons
    dataRows.forEach((row) => {
      const buttons = within(row).getAllByRole('button');
      expect(buttons.length).toBeGreaterThanOrEqual(2);
    });
    // Verify no View (Eye) button exists anywhere
    expect(screen.queryByRole('button', { name: /view/i })).not.toBeInTheDocument();
  });

  it('renders pagination and row-per-page controls', () => {
    render(<LowStocksPage />);
    expect(screen.getByText('Row Per Page')).toBeInTheDocument();
    expect(screen.getByText('Entries')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /previous/i })).toBeInTheDocument();
  });

  it('Notify switch is checked by default', () => {
    render(<LowStocksPage />);
    let switchEl: HTMLElement | null = null;
    try {
      switchEl = screen.getByRole('switch');
    } catch {
      switchEl = screen.getByRole('checkbox');
    }
    expect(switchEl).toBeChecked();
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
});
