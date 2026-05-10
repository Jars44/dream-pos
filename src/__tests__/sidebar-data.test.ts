import { describe, it, expect } from 'vitest';
import { sidebarData } from '@/lib/sidebar-data';

describe('Sidebar Data', () => {
  it('contains at least one category', () => {
    expect(sidebarData.length).toBeGreaterThan(0);
  });

  it('each category has title and items array', () => {
    sidebarData.forEach((category) => {
      expect(category).toHaveProperty('title');
      expect(category).toHaveProperty('items');
      expect(Array.isArray(category.items)).toBe(true);
      expect(category.items.length).toBeGreaterThan(0);
    });
  });

  it('each item has title, href, and icon properties', () => {
    sidebarData.forEach((category) => {
      category.items.forEach((item) => {
        expect(item).toHaveProperty('title');
        expect(item).toHaveProperty('href');
        expect(item).toHaveProperty('icon');
        expect(typeof item.title).toBe('string');
        expect(typeof item.href).toBe('string');
        // icon is a React component (objecttype), not a plain function
        expect(item.icon).toBeDefined();
      });
    });
  });

  it('all hrefs are valid routes starting with / or # for dividers', () => {
    sidebarData.forEach((category) => {
      category.items.forEach((item) => {
        // Allow "/" for routes or "#" for placeholder/divider items
        expect(item.href).toMatch(/^(\/|#)/);
      });
    });
  });

  it('contains Inventory category with all 12 inventory pages', () => {
    const inventoryCategory = sidebarData.find((cat) => cat.title === 'Inventory');
    expect(inventoryCategory).toBeDefined();
    expect(inventoryCategory!.items.length).toBe(12);

    const expectedPages = [
      'Products',
      'Create Product',
      'Expired Products',
      'Low Stocks',
      'Category',
      'Sub Category',
      'Brands',
      'Units',
      'Variant Attributes',
      'Warranties',
      'Print Barcode',
      'Print QR Code',
    ];

    const actualPageTitles = inventoryCategory!.items.map((item) => item.title);
    expectedPages.forEach((page) => {
      expect(actualPageTitles).toContain(page);
    });
  });

  it('Dashboard link points to /dashboard', () => {
    const mainCategory = sidebarData.find((cat) => cat.title === 'Main');
    expect(mainCategory).toBeDefined();
    const dashboardItem = mainCategory!.items.find((item) => item.title === 'Dashboard');
    expect(dashboardItem).toBeDefined();
    expect(dashboardItem!.href).toBe('/dashboard');
  });

  it('all icon properties are defined (React component classes)', () => {
    sidebarData.forEach((category) => {
      category.items.forEach((item) => {
        expect(item.icon).toBeDefined();
        // React component classes are objects with $$typeof, not plain functions
      });
    });
  });
});
