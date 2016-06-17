/*
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

Examples:

findNb(1071225) --> 45
findNb(91716553919377) --> -1

Suggestion:

Try to optimize your function.
*/

function findNb(m) {
  var sum = 0;
  var i = 1;
  while (sum <m) {
    sum = sum + Math.pow(i, 3);
    i++;
  }
  if (sum === m) {
    return (i-1);
  } else {
    return -1;
  }
}

// Best solution (tidied)

function findNb(m) {
  var n = 0;
  while (m > 0) {
    n=n+1;
    m=m-Math.pow(n,3); 
  }
  return m ? -1 : n;
}