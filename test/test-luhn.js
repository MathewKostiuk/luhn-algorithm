var assert = require("chai").assert;
var check = require("../luhn.js");

describe("luhn", function() {
  it("should return true if a number is valid", function() {
    var num = "4153998753369646";
    var result = check(num);
    assert.isTrue(result);
  });

  it("should return false if a number is NOT valid", function() {
    var num = "1234567";
    assert.isFalse(check(num));
  });

  it("should return true if a number is valid", function() {
    var num = "377377337294000";
    assert.isTrue(check(num));
  });

  it("should return false if a number is NOT valid", function() {
    var num = "999999"
    assert.isFalse(check(num));
  });
});
