# Async/Await

**Example 1:** *What does the async keyword do?*

```javascript
async function simpleAsync() {
    return 1;
}
```
___

**Example 2:** *Does it return our value?*

```javascript
async function simpleAsync() {
    return 1;

}
simpleAsync().then(data => {console.log(data)})

```

___

**Example 3:** *Sync code doesn’t wait on async?*

```javascript

function asyncCall() {
    var newPromise = new Promise((resolve) => {
        setTimeout(() => {
            console.log("pro.");
            resolve("Sample Data");
        }, 3000);
    });
}

function syncCall() {
    var data = "Ann"
    var returnAsync = asyncCall();
    console.log(data);
}

syncCall()

```

___

**Example 4:** *but await…*

```javascript
function asyncCall() {
    var newPromise = new Promise((resolve) => {
        setTimeout(() => {
            console.log("hey, we're late.");
            resolve("Sample Data");
        }, 3000);
    });
}

async function syncCall() {
    var data = "Ann"
    var returnAsync = await asyncCall();
    console.log(data);
}

syncCall()


```

___

Await and Async keyword combined together ensures that the main thread will not start executing further until the asynchronous part of the application has finished execution hence imparting synchronous behavior to the thread.
