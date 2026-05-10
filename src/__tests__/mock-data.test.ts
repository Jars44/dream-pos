import { describe, it, expect } from 'vitest';
import { productsData } from '@/lib/mock-data';

describe('Mock Data Structure', () => {
  describe('productsData', () => {
    it('contains exactly 10 products', () => {
      expect(productsData).toHaveLength(10);
    });

    it('each product has required fields', () => {
      productsData.forEach((product) => {
        expect(product).toHaveProperty('sku');
        expect(product).toHaveProperty('name');
        expect(product).toHaveProperty('category');
        expect(product).toHaveProperty('brand');
        expect(product).toHaveProperty('price');
        expect(product).toHaveProperty('unit');
        expect(product).toHaveProperty('qty');
        expect(product).toHaveProperty('createdBy');
      });
    });

    it('all SKUs are unique', () => {
      const skus = productsData.map((p) => p.sku);
      expect(new Set(skus).size).toBe(skus.length);
    });

    it('SKUs follow expected format PT001-PT010', () => {
      const expectedSkus = [
        'PT001', 'PT002', 'PT003', 'PT004', 'PT005',
        'PT006', 'PT007', 'PT008', 'PT009', 'PT010',
      ];
      const actualSkus = productsData.map((p) => p.sku).sort();
      expect(actualSkus).toEqual(expectedSkus.sort());
    });

    it('prices are strings with $ prefix', () => {
      productsData.forEach((product) => {
        expect(product.price).toMatch(/^\$\d+$/);
      });
    });

    it('quantities are positive numbers', () => {
      productsData.forEach((product) => {
        expect(product.qty).toBeGreaterThanOrEqual(0);
        expect(typeof product.qty).toBe('number');
      });
    });

    it('covers all major product categories', () => {
      const categories = new Set(productsData.map((p) => p.category));
      expect(categories.has('Computers')).toBe(true);
      expect(categories.has('Electronics')).toBe(true);
      expect(categories.has('Shoe')).toBe(true);
      expect(categories.has('Furniture')).toBe(true);
      expect(categories.has('Bags')).toBe(true);
      expect(categories.has('Phone')).toBe(true);
    });

    it('includes major brands', () => {
      const brands = productsData.map((p) => p.brand);
      expect(brands).toContain('Apple');
      expect(brands).toContain('Nike');
      expect(brands).toContain('Lenovo');
      expect(brands).toContain('Beats');
    });

    it('all products have valid createdBy names', () => {
      productsData.forEach((product) => {
        expect(product.createdBy).toBeTruthy();
        expect(product.createdBy.length).toBeGreaterThan(0);
      });
    });
  });
});
