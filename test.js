import test from 'ava';
import computer from './index.js';

test('computer os return type to be string', t => {
    t.is(typeof computer().os(), 'string');
});

test('computer platform return type to be string', t => {
    t.is(typeof computer().platform(), 'string');
});

test('computer type return type to be string', t => {
    t.is(typeof computer().type(), 'string');
});
