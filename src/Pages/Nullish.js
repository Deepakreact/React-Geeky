// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand 
// when its left-hand side operand is null or undefined,
//  and otherwise returns its left-hand side operand.


const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0





// It is not possible to combine both the AND (&&) and OR operators (||) directly with ??. 
// A syntax error will be thrown in such cases.


// null || undefined ?? "foo"; // raises a SyntaxError
// true && undefined ?? "foo"; // raises a SyntaxError


(null || undefined) ?? "foo"; // returns "foo"