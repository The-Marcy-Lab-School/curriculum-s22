### Unit 3-0: Functional Abstraction
---
What is functional abstraction?
> According to CSSTricks: _Abstraction hides certain details and only show the essential features of the object. It tries to reduce and factor out details so that the developer can focus on a few concepts at a time. This approach improves understandability as well as maintainability of the code. Abstraction helps us to reduce code duplication._

Why functional? Why abstraction?


<b>Question</b>:
What are some ways that we have taken data such as 1 or "name" and used abstraction?  
How can we make actions abstract?

___
#### High Order Functions?

```javascript
/// Use functional abstraction for the code segment below 4 mins in BOG
const nums = [2,4,6,8,10];

function multiplyTwo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * 2);
  }
}

multiplyTwo(nums);

```

#### Did you arrive at this?  

```javascript
const nums = [2,4,6,8,10];
nums.forEach((number) => console.log(number * 2));

```
##### What did we do above that makes this abstract? <br>
##### Why do you think we call them high order functions?

> According To Medium: A “higher-order function” is a function that accepts functions as parameters and/or returns a function. In other words, it’s a function that operates on other functions, either by taking them as arguments or by returning them, which are called higher-order functions.



___


##### High Order Functions we will use (Array iterator methods)
* `Array.prototype.forEach()`
// for each element, do something
// return `undefined`

* `Array.prototype.map()`
// for each element, map (transform) it to a new element in a new array
// return a new array

* `Array.prototype.filter()`
// for each element, keep it if it meets the condition  
// return a new array

* `Array.prototype.reduce()`
// for each element, calculate the next value and keep going until the end
// return a single reduced value

* `Array.prototype.sort()`
* `Array.prototype.some()`
* `Array.prototype.every()`

#### Functions as first class citizens?

Take the following code snippets and compare. Be ready to explain the following?
1. In comparing the first code snippet and the second, what argument could you make about functions as "first class citizens"? Take the time to look up first class citizens.(Create an articulate response with your group)
BOG 6 mins

```javascript
function thisFunction(value){
    console.log(value)
}

var students = {student1: "Mike"}

thisFunction(students);

```

```javascript
function thisFunction(value){
    console.log(value)
}


function students(){
    return "Mike"
}

thisFunction(students);
```

What is the difference between the two?

`thisFunction(students)` && `thisFunction(students())`

#### Callback Functions

We have used callback function before. Could you and your group give an example of a callback function and explain why?


> According to Fotios Floros from Medium: In Javascript every function is a _first class object_, which means that every function is an Object and can be used like any other object(String, Number etc.). This allows the use of a function as a parameter in another function which is the fundamental idea of callback functions.





#### Functional Programming 
In the functional programming paradigm, functions are first class objects in the language. That means that you can create an "instance" of a function, as have a variable reference that function instance, just like a reference to a String, Map or any other object.



#### Labs: 
Canvas -> Problem Set: 3-0