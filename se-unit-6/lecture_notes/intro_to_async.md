# 6-1: Intro To Async

## 1. Why this lesson?

___

### *Activity*

        Class enacts a sync and asychronous sequence:

        1. Create two lines of 3: line 1 is Async, line 2 is sync
        2. 1st person, pass marker to the 2nd person in line
        3. 2nd person in sync/async lines writes on the board waiting for data
        4. 3rd person in sync line waits for 2nd person and then grabs a marker from another room
        5. 3rd person in aync line goes as soon as person 2 get the marker. 

### *Content*

* [Video or image of a screen loading]
* Ask the following questions when the loading screen is projected:
  * What do you expect when you see this?
  * When does it show up?
  * Is there a function
  
___

## 2. Common language

* Asynchronous Programming
* Single-threaded
* webAPI
* JSON
* Promises

___

## 3. Single thread <-> Synchronous

*Javascript is a single-threaded language.*

> This means it has one call stack and one memory heap.
As expected, it executes code in order and must finish executing a
piece code before moving onto the next.
It’s synchronous, but at times that can be harmful.
For example, if a function takes a while to execute
or has to wait on something,
it freezes everything up in the meanwhile.

**Example 1:** *Line by line, sync*

*Lecture Note:* Code is typcially ran synchronously.

```javascript

function sequence(){

    console.log("Step 1");
    console.log("Step 2");
    console.log("Step 3");
    console.log("Step 4");
    console.log("Step 5");
    
}

sequence();


```

**Example 2:**  *Function Hold Up*

****Lecture Note:*** Sometimes sequential calls can be rather difficult when you're on
the verge of winning a million dollars but you don't get the notification*.

```javascript

function waitForMe(){

    alert("hey");
    console.log("wait for me!");
    console.log("I have to tell you something really important!");
    alert("hey");
    console.log("You won a million dollars");
}

waitForMe();


```

___

## 4. What is async?

**Example 3:** *Step 6 is async*

**Lecture Note:** *Async is a solution. Asynchronous programming
is a technique that enables your program
to start a potentially long-running task
and still be able to be responsive to other
events while that task runs, rather than having
to wait until that task has finished. Once that task has finished,
your program is presented with the result.*

```javascript

function sequence(){
    setTimeout(() => {
        console.log("hey")
    }, 1000) 
    console.log("Step 1");
    console.log("Step 2");
    console.log("Step 3");
    setTimeout(() => console.log('Step 6'), 1000)
    console.log("Step 4");
    console.log("Step 5");

        return "Step 7"
}


```
**Example 3a:** *async wait for me*

```javascript

    function waitForMe(){

        alert("hey");
        console.log("wait for me!");
        console.log("I have to tell you something really important!");
        alert("hey");
        console.log("You won a million dollars");
    }

    waitForMe();


```

**Example 4:** *setTimeout is a webAPI async method*

**Lecture Note:**
*If we have pending synchronous and
asynchronous instructions,
the synchronous ones will run
before the asynchronous one.
Because we’re using setTimeout here,
which is an asynchronous function,
the third line doesn’t wait for 2 to print.*

```javascript

function sequence(){

    console.log(1)
    setTimeout(() => console.log(2), 0)
    console.log(3)
    
}

sequence();


```

**Example 5:** *Create async order*

**Lecture Note:** *How can we make this go in order? We want to log 2 before 3 and after 1, but because setTimeout is asynchronous, 2 always logs last.*

```javascript

    function sequence(){

        console.log(1)
        setTimeout(() => {
            console.log(2)
            console.log(3)
        }, 1000)  
    }

    sequence();


```

___

## 5. Callbacks

**Example 6:** *What's the difference between example 6 and example 7*

```javascript

function sequence(){


    console.log(1)
    setTimeout(() => {
        console.log(1.5)
    setTimeout(() => {
        console.log(2)
        console.log(3)
    }, 1000)
    }, 2000)

}

sequence();


```

**Example 7:** **

```javascript

const logTheRest = () => {
    setTimeout(() => {
        console.log(2)
        console.log(3)
        }, 1000)
}
const logAsync = callback => {
    setTimeout (() => {
        console.log(1.5)
        callback()
    }, 2000)
}
console.log(1)
logAsync(logTheRest) 




/// find the similarities call back in addEventlister 
document.body.addEventListener('click', () => console.log('hi'))

```

___

## 6. Promises


```javascript
let completed = true;

const myPromise = new Promise((resolve, reject) => {  
   setTimeout(() => { 
     if(completed) {    
        resolve('Promise is resolved successfully.');  
     } else {    
        reject('Promise is rejected');  
     }
   }, 3000)
});


myPromise.then(text => { console.log(text)});

```


___
