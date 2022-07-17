const Arithmetic = require('../Arithmetic');


describe("Arithmetic", () => {
  describe('Initialization', () => {
    it('should return an object containing a "number" property when being called with the "new" keyword', () => {
      const newArithmetic = new Arithmetic();

      expect("number" in newArithmetic).toEqual(true);
    });
  });
});