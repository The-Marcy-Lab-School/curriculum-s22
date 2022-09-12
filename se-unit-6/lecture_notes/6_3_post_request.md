# 6-3: Post Requests

## 1. Why this lesson?

***Lecture Note:** It's not only importatant to receive data from a server but
a lot of development is spent also sending data to a server. Whereas before we would
use the method GET to fetch data or request data from the server, now we are moving
into using POST in order to send data to the server to store.

___

**Example 1:** *explore post request*

```javascript

fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
                name: 'caston',
                age: 32
                };),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
    });


```
