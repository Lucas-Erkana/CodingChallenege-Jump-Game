const canJump = require('./jump-game');
const assert = require('assert');

describe('Tests', function () {
  it('should return true for [2,3,1,1,4]', function () {
    assert.strictEqual(canJump([2,3,1,1,4]), true);
  });

  it('should return false for [3,2,1,0,4]', function () {
    assert.strictEqual(canJump([3,2,1,0,4]), false);
  });

  it('should return true for [0]', function () {
    assert.strictEqual(canJump([0]), true);
  });

  it('should return true for [1,0]', function () {
    assert.strictEqual(canJump([1,0]), true);
  });

  it('should return false for [0,1]', function () {
    assert.strictEqual(canJump([0,1]), false);
  });

  it('should return true for [2,0,0]', function () {
    assert.strictEqual(canJump([2,0,0]), true);
  });
});
