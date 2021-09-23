const assert = require("assert");
const probModule = require("..");

assert.strictEqual(probModule.versus(1, 1111), 0.0005);
console.log("overwhelmed limit ok");

assert.strictEqual(probModule.versus(1111, 1), 0.9995);
console.log("overwhelming limit ok");

//
// lower interval where force-ratio < 1
assert.strictEqual(probModule.versus(2, 4), 0.25);
console.log("lower interval versus(2, 4) ok");

assert.strictEqual(probModule.versus(2, 6).toPrecision(3), "0.167");
console.log("lower interval versus(2, 6) ok");

assert.strictEqual(probModule.versus(2, 3).toPrecision(3), "0.333");
console.log("lower interval versus(2, 3) ok");

//
// higher interval where force-ratio > 2
assert.strictEqual(probModule.versus(6, 2).toPrecision(3), "0.833");
console.log("higher interval versus(6, 2) ok");

assert.strictEqual(probModule.versus(8, 2).toPrecision(3), "0.875");
console.log("higher interval versus(8, 2) ok");

assert.strictEqual(probModule.versus(10, 2), 0.9);
console.log("higher interval versus(10, 2) ok");

//
// middle interval where 1 ≤ force-ratio ≤ 2
assert.strictEqual(probModule.versus(4, 2), 0.75);
console.log("middle interval versus(4, 2) ok");

assert.strictEqual(probModule.versus(3, 2), 0.625);
console.log("middle interval versus(3, 2) ok");

assert.strictEqual(probModule.versus(11, 10), 0.525);
console.log("middle interval versus(11, 10) ok");

assert.strictEqual(probModule.versus(19, 10), 0.725);
console.log("middle interval versus(19, 10) ok");

//
// advantages
assert.strictEqual(probModule.versus(99, 99, 0, 1).toPrecision(3), "0.361");
assert.strictEqual(probModule.versus(99, 99, 1, 0).toPrecision(3), "0.597");
console.log("advantages ok");
