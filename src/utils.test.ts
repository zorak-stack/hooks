import { describe, expect, test } from 'vitest';

import { hello } from './utils';

describe('utils.ts', () => {
  test('hello', () => {
    expect(hello('world')).toBe('Hello, world!');
  });
});
