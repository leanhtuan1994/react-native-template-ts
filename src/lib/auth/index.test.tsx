import { act, renderHook } from '@testing-library/react-native';

import { signIn, useAuth } from './index';

jest.mock('@/lib/storage', () => ({
  getItem: jest.fn(() => null),
  removeItem: jest.fn(),
  setItem: jest.fn(),
}));

describe('useAuth', () => {
  beforeEach(() => {
    useAuth.setState({ status: 'idle', token: null });
  });

  it('uses Zustand selectors without a custom use namespace', () => {
    const { result } = renderHook(() => ({
      status: useAuth((state) => state.status),
      token: useAuth((state) => state.token),
    }));

    expect('use' in useAuth).toBe(false);
    expect(result.current).toEqual({ status: 'idle', token: null });

    const token = { access: 'access-token', refresh: 'refresh-token' };

    act(() => {
      signIn(token);
    });

    expect(result.current).toEqual({ status: 'signIn', token });
  });
});
