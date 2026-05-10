import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn utility', () => {
  it('merges class names correctly', () => {
    const result = cn('class1', 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('handles conditional classes with true/false', () => {
    const result = cn('base', true && 'included', false && 'excluded');
    expect(result).toBe('base included');
  });

  it('handles undefined and null values', () => {
    const result = cn('base', undefined, null, 'valid');
    expect(result).toBe('base valid');
  });

  it('resolves conflicting Tailwind utility classes (last one wins)', () => {
    const result = cn('text-red-500', 'text-blue-500');
    expect(result).toBe('text-blue-500');
  });

  it('handles array of classes', () => {
    const result = cn(['class1', 'class2'], 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('works with object syntax for conditionals', () => {
    const condition = true;
    const result = cn('base', { 'conditional-class': condition });
    expect(result).toBe('base conditional-class');
  });

  it('handles empty input', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('handles responsive classes correctly', () => {
    const result = cn('p-4', 'sm:p-6', 'lg:p-8');
    expect(result).toBe('p-4 sm:p-6 lg:p-8');
  });

  it('handles color and hover variants together', () => {
    const result = cn('bg-red-500', 'hover:bg-red-600');
    expect(result).toBe('bg-red-500 hover:bg-red-600');
  });

  it('handles multiple conditional classes', () => {
    const isActive = true;
    const isDisabled = false;
    const result = cn(
      'base-styles',
      isActive && 'active-styles',
      isDisabled && 'disabled-styles',
      'always-included'
    );
    expect(result).toContain('base-styles');
    expect(result).toContain('active-styles');
    expect(result).toContain('always-included');
    expect(result).not.toContain('disabled-styles');
  });
});
