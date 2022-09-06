const crimeSyndicate = {
  boss: 'Superwoman',
  second_in_command: 'Owlman',
  third_in_command: 'Ultraman',
  sub_boss: 'Power Ring',
  henchman: 'Johnny Quick',
  second_henchman: 'White Martian',
  third_henchman: 'Jessica Cruz', 
  commands: 2,
  bosses: 2,
  henchman: 3
}

let count = 0; 
for(let i in crimeSyndicate){
    
    if(typeof i === "number"){
        count++;    
    }
}

console.log(count);

