import { describe, expect, it, vi } from 'vitest';

import { demo } from './demo';

describe('demo.ts', () => {
  it('should call console.log with "Demo"', () => {
    const logSpy = vi.spyOn(console, 'log');
    demo();
    expect(logSpy).toHaveBeenCalledWith('Demo');
    logSpy.mockRestore();
  });
});
