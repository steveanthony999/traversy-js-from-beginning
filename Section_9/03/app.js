let re;

// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i; // Must start with
re = /d$/i; // Must end with
re = /world$/i; // Must end with
re = / world$/i; // Must end with
re = /^hello$/i; // Must start and end with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; //Optional character
re = /gre?a?y\?/i; //Escape character

// String to Match
const str = 'Gray?';

// Log Results
const result = re.exec(str);
console.log(result);

const reTest = (re, str) => {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
};

reTest(re, str);
