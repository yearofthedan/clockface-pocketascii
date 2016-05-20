'use strict';

var expect = require('chai').expect;
var renderer = require('..');

describe('a clock face', () => {
    describe('it should render the intervals', () => {
        const expected =
 `  ooo
 o   o
h     o
 o   o
  moo`;
      expect(renderer('ooooooomohoo'.split(''))).to.equal(expected);
   });
});
