import { STRICT, WHITESPACES } from '../helpers/constants';

import { trimRight, trimEnd } from 'core-js-pure/features/string';
import Symbol from 'core-js-pure/features/symbol';

QUnit.test('String#trimRight', assert => {
  assert.isFunction(trimRight);
  assert.strictEqual(trimRight(' \n  q w e \n  '), ' \n  q w e', 'removes whitespaces at right side of string');
  assert.strictEqual(trimRight(WHITESPACES), '', 'removes all whitespaces');
  assert.strictEqual(trimRight('\u200B\u0085'), '\u200B\u0085', "shouldn't remove this symbols");

  assert.throws(() => trimRight(Symbol()), 'throws on symbol context');

  if (STRICT) {
    assert.throws(() => trimRight(null, 0), TypeError);
    assert.throws(() => trimRight(undefined, 0), TypeError);
  }
});

QUnit.test('String#trimEnd', assert => {
  assert.isFunction(trimEnd);
  assert.strictEqual(trimEnd(' \n  q w e \n  '), ' \n  q w e', 'removes whitespaces at right side of string');
  assert.strictEqual(trimEnd(WHITESPACES), '', 'removes all whitespaces');
  assert.strictEqual(trimEnd('\u200B\u0085'), '\u200B\u0085', "shouldn't remove this symbols");

  assert.throws(() => trimEnd(Symbol()), 'throws on symbol context');

  if (STRICT) {
    assert.throws(() => trimEnd(null, 0), TypeError);
    assert.throws(() => trimEnd(undefined, 0), TypeError);
  }
});
