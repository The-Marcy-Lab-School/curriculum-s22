### _1 min silent breathing_ 

<image src="https://miro.medium.com/max/1000/1*rhP98CcG2J_SfygESrsu5g.png" width=200>


## Warmup:  
* * *
##### Quickly look up and talk with your partner about the following concepts:  

* Spread syntax
* Rest parameters
* Destructring assignment


### Spread Syntax 
* * *



> MDN: Spread syntax (...) allows an iterable such as an array expression or string to be expanded 

Removes  syntax as an eraser that removes the brackets of the array

<strong> When To Use Spread Syntax</strong>
***
```
    1. Use Spread for Merging Array
    2. Cloning Arrays
    3. String to Array
    4. Min() and Max()

```


<strong> Example #1: Merging </strong>
```javascript
let array1 = [1,2,3];
let array2 = [4,5,6];

const mergedArray = [
  ...array1,
  ...array2
];

mergedArray;
// [ 1, 2, 3, 4, 5, 6 ] 👈 lattened array
```

<strong> Example #2: Cloning </strong>
```javascript
const original = ['zero', 'one'];
const newArray = original;

original; // ['zero', 'one']
newArray; // ['zero', 'one']

```
<strong> Let's Try It </strong>

> Use Math.min and Math.max to find the minimum and maximum values in an array. Store your max and min value in a variable and log them to the console once your done. BE SURE TO USE <i> Spread Syntax </i>



### Rest Parameters
* * *



> MDN: The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

Basically takes all the individual elements of a parameter argument and turns it into an array that can be iterated through. 

<strong> Example Case</strong>
***

Answer the following questions after examining the code below with your partner: 
1. What is the code below doing? 
2. How does the example below show a working use case for resting parameters? 

```javascript
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

```

### Destructring Assignment
* * *



> MDN: The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.



<strong> Example Case</strong>
***

Answer the following questions after examining the code below with your partner: 
1. What is the code below doing? 
2. How does the example below show a working use case for destructuring assignment? 

```javascript
let a, b, rest;

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
// expected output: 10
console.log(b);
// expected output: 20
console.log(rest);
// expected output: Array [30,40,50]
```

<strong> Let's Try It </strong>

> Store the elements in array below into variables using destructuring assignment</i>

```javascript
let marcyPeople = ['ann', 'jowel', 'caston', 'ana', 'reuben', 'maya','travis'];

```

Labs 2pm - 3:15pm

* Complete 2.5 


**Recreate `Array.prototype.reverse`**: Create a function named `reverseArray` that returns the contents of the array it receives as an argument, but with the values in reversed order. This should be a _non-mutating_ method. Meaning the original array should not be changed.


    > **Note:** `Array.prototype.reverse` _is_ actually mutating but to make this particular problem easier, we will allow you to reverse a _copy_ of the array. For extra credit, try to reverse the array "in place."

