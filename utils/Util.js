module.exports = class Util{
  static reverse(char) {
    return char.split("").reverse().join("")
  }

  static fibonacci(n) {

    const result = [0, 1];
    for (var i = 2; i <= n; i++) {
      const a = (i - 1);
      const b = (i - 2);
      result.push(a + b);
    }
    return result.toString()
  
  }

  static factorial(number){
    var value = number;
    for ( var i = number; i > 1; i-- )
      value *= i - 1;
    return value;
  };

  static combination(n, r){
    if ( n == r) return 1;
    return this.factorial(n) / (this.factorial(r) * this.factorial(n - r));
  };
}