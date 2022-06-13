### _1 min silent breathing_ 

<image src="https://miro.medium.com/max/1000/1*rhP98CcG2J_SfygESrsu5g.png" width=200>


### Understanding Objects 


_An object in JavaScript is a collection of key-value pairs. Each key-value pair is called as a property. A property can be a function, an array, an object itself or any primitive data type i.e. integer, string, etc. Functions in object are called as methods._


Using the values below to create an object with this exact information. Do this while thinking about: 

<i>1. What is a key?  2. What is a value?  3. What is a property?  4. What is a method? </i>


```javascript
let personName = "Ann";
let personJob = "Senior Lead";
let personIsCool = true; 
let personHobbies = ["dog mom", "code", "relaxing"];
let personNum = function (num) { return num * num };

```



### Accessing Properties:

```javascript
let person = { 
    name: "Ann", 
    job: "Senior Lead", 
    isAwesome: true,
    hobbies: ["dog mom", "code", "relaxing"],
    num: function (num){
        return num * num;
    } 
}

```


#### What are the two ways we can access properties from an object? 
* Dot Notation 
* Bracket Notation


#### What are the ways that we can iterate over objects?

```javascript
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

```

#### What if we don't want to iterate over a particular property? 

_An enumerable property in JavaScript means that a property can be viewed as iterable (meaning you can loop through it) using the for…in loop or Object.keys() method. All the properties which are created by simple assignment or property initializer are enumerable by default._


#### How do we delete a property from an object?

```javascript
var person = {
  firstName:"John",
  lastName:"Doe",
  age:50,
  eyeColor:"blue"
};

delete person.age; // or delete person["age"];

// Before deletion: person.age = 50, after deletion, person.age = undefined

```


### Labs 
- Office Hours 
- 2.5 or 2.6