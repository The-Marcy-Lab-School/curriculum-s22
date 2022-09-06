### _1 min silent breathing_ 


<image src="https://miro.medium.com/max/1000/1*rhP98CcG2J_SfygESrsu5g.png" width=200>


### Warmup
In what order will the code segment below execute? ex. 2,1,3...
```javascript

let dogsName = "Rambo";
let oldDog;

console.log(dogsName); /// 1

function age(){ /// 2
  return 25;
}

function nameIntro(){ /// 3
  console.log(`Hello. My dog's name is${oldDog}`); /// 4
  return age(); /// 5
}

oldDog = "Buffy";

console.log(oldDog); /// 6
nameIntro(); /// 7

```

### While loop and a Do While Loop
```javascript
/// Set 1 /// while loop
let count = 6;
while (count < 5){
  console.log(count);
  count++;
}

/// Set 2 /// do while loop
let count = 6;
do {
  console.log(count);
  count++;
}while (count < 5)

```

### For Loop

What will print from the for loop below?: 
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

```

<img src="https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-for-loop.svg">


### Labs