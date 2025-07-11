import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ScrollToTop from '../ScrollToTop';

// Mock wouter
vi.mock('wouter', () => ({
  useLocation: () => ['/']
}));

// Mock scrollToTop utility
vi.mock('@/lib/utils', () => ({
  scrollToTop: vi.fn()
}));

describe('ScrollToTop', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = render(<ScrollToTop />);
    expect(container).toBeInTheDocument();
  });

  it('returns null (no visible content)', () => {
    const { container } = render(<ScrollToTop />);
    expect(container.firstChild).toBeNull();
  });
});
