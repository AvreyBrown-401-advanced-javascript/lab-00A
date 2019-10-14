'use strict';

let pol = require('../src/pol.js');

describe('proof of life', () => {

  it('lives by default', () => {
    expect(pol.isAlive()).toBeTruthy();
  });

  it('dies with a param', () => {
    expect(pol.isAlive('x')).toBeFalsy();
  });

});