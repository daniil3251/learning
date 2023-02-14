"use strict";
console.log(1);
let number = 5;
const leftBorderWight = 1;
number = 10;
console.log(number);
const obj = {
    name: 'john',
    age: 25,
    isMarried: false
            };
    console.log(obj.name);
        
const storeName = 'Konter';
const storeDescription = {
    budget: 10000,
    employes: ['Anna', 'Diana', 'Miha'],
    prodects: {
         xBox: 1000,
         iPhone: 700
              },
    open: true
                         };

                         //alert('Hello');
                         //const result = confirm('Are U here?');
                         //console.log(result); // result can be true or false

                         const answers = [];

                         answers[0] = prompt('Как ваше имя?',''); // результат только текстовый, если надо цифровой - +prompt
                         answers[1] = prompt('Сколько вам лет?','');
                         answers[2] = prompt('Где вы проживаете?','');
                         console.log(answers);
                         document.write(answers);
