# 6-2: Fetch

## 1. Why this lesson?

***Lecture Note:** Some of the most common tasks in modern
software development involve communicating with an API.
Most programming languages have a built-in method or
a package that enables them to make requests to an API. JavaScript has 3:

1. XMLHttpRequest()
2. fetch()

___

**Example 1:** *fetching with xhr*

```javascript
let url = 'https://jsonplaceholder.typicode.com/todos/';

let request = new XMLHttpRequest();
request.open("GET", url);
request.onload = function(){
   console.log(request.response);
}

request.send();



```

**Example 2:** *fetching with xhr*

```javascript
const myFetch = () => {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()).then(data => console.log(data));
}

myFetch();
```

___

## 2. Common language

* AJAX
* Promises
* Fetch
* Endpoint URL

___

**Example 1:** **

*Lecture Note:* Why does fetch return a promises? What's going on?.

```javascript

const myFetch = () => {

    console.log(fetch('https://jsonplaceholder.typicode.com/todos/'));
}


myFetch();

```

**Example** *trying to perform method chaining on return value*

```javascript

const myFetch = () => {

    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(json => console.log(json.json()))
}

myFetch();

```

## *Questions to explore today:*

* What is the right url?
* API Endpoint
* What is the promise object doing?
* What is .then()?
* Response object
* Accessing data from a fetch return
