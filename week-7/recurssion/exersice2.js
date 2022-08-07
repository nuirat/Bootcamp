
function reverseString(string) {
    if (string === "") // This is the terminal case that will end the recursion
      return "";
    
    else
      return reverseString(string.substr(1)) + string.charAt(0);
}
console.log(reverseString("damha"));
