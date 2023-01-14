const HashMap = require('./implement_hashMap')
class MySet {
    constructor() {
      this.hashMap = new HashMap();
    }
  
    add(value) {
      this.hashMap.set(value);
    }
  
    has(value) {
      return this.hashMap.has(value);
    }
  
    get size() {
      return this.hashMap.size;
    }
  
    delete(value) {
      return this.hashMap.delete(value);
    }
  
    /*
       Most operations would be an amortized constant time except for getting the entries, O(n).
      */
  
    entries() {
      return this.hashMap.keys.reduce((acc, key) => {
        if (!(key === undefined)) {
          acc.push(key.content);
        }
        return acc;
      }, []);
    }
  }
  

  const assert = require('assert');
// const set = new Set(); // Using the built-in
const set = new MySet(); // Using our own implementation

set.add('one');
set.add('uno');
set.add('one'); // should NOT add this one twice

// assert.equal(set.has('one'), true);
assert.equal(set.has('dos'), false);

assert.equal(set.size, 2);
// assert.deepEqual(Array.from(set), ['one', 'uno']);

assert.equal(set.delete('one'), true);
assert.equal(set.delete('one'), false);
assert.equal(set.has('one'), false);
assert.equal(set.size, 1);
