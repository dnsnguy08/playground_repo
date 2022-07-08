const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("should return a string in reverse order", () => {
      const string = 'hello';
      const result = new Algo().reverse(string);
      
      expect(result).toEqual('olleh');
    });
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("should return true if a word that is a palindrome is passed into isPalindrome", () => {
      const string = 'racecar';
      const result = new Algo().isPalindrome(string);
      
      expect(result).toEqual(true);
    });
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it("should return a new string with every word capitalized", () => {
      const string = 'hello world';
      const result = new Algo().capitalize(string);
      
      expect(result).toEqual('Hello World');
    });
  });
});
