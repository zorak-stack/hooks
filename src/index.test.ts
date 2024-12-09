import { describe, expect, it, vi } from 'vitest';

import * as library from './index';

describe('index.ts', () => {
  it('should re-export the demo function', () => {
    expect(library.demo).toBeDefined();

    const logSpy = vi.spyOn(console, 'log');
    library.demo();
    expect(logSpy).toHaveBeenCalledWith('Demo');
    logSpy.mockRestore();
  });

  it('should re-export all utilities from utils', () => {
    expect(library.hello).toBeDefined();

    const result = library.hello('world');
    expect(result).toBe('Hello, world!');
  });
});
