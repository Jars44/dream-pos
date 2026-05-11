import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { AuthProvider, useAuth } from '@/lib/auth-context';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('AuthContext', () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it('provides initial isAuthenticated as false', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    expect(result.current.isAuthenticated).toBe(false);
  });

  it('login stores token in localStorage', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    let loginResult = false;
    await act(async () => {
      loginResult = await result.current.login('admin@gmail.com', 'admin');
    });

    expect(loginResult).toBe(true);
    expect(localStorageMock.getItem('dreamspos_auth_token')).toBeTruthy();
  });

  it('login returns false for invalid credentials', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    let loginResult = false;
    await act(async () => {
      loginResult = await result.current.login('wrong@email.com', 'wrongpass');
    });

    expect(loginResult).toBe(false);
    expect(localStorageMock.getItem('dreamspos_auth_token')).toBeNull();
  });

  it('logout removes token from localStorage', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    // Login first
    await act(async () => {
      await result.current.login('admin@gmail.com', 'admin');
    });
    expect(localStorageMock.getItem('dreamspos_auth_token')).toBeTruthy();

    // Then logout
    act(() => {
      result.current.logout();
    });

    expect(localStorageMock.getItem('dreamspos_auth_token')).toBeNull();
  });

  it('logout clears authentication state', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(async () => {
      await result.current.login('admin@gmail.com', 'admin');
    });

    act(() => {
      result.current.logout();
    });

    // isAuthenticated should be false after logout
    expect(result.current.isAuthenticated).toBe(false);
  });

  it('throws error when useAuth used outside provider', () => {
    // Should throw when used without provider
    expect(() => {
      renderHook(() => useAuth());
    }).toThrow('useAuth must be used within an AuthProvider');
  });
});
