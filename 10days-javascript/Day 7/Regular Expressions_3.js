function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */

  /*
   * Do not remove the return statement
   */
  let re = new RegExp('\\d+', 'g');
  return re;
}
