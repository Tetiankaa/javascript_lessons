// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let evenNumbers = [];
for (let i = 1; i <= 100; i++) {
       if (i % 2 ===0){
           evenNumbers.push(i);
       }
}
console.log(evenNumbers);
//     b. заповнити його 50 непарними числами за допомоги циклу.
let oddNumbers = [];
for (let i = 1; i < 100; i+=2) {
        oddNumbers.push(i);
}
console.log(oddNumbers);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let random = [];
for (let i = 0; i < 20; i++) {
           random.push(Math.floor(Math.random()*100)) ;
}
console.log(random)

//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let randomArray = [];
for (let i = 0; i < 20; i++) {
   randomArray.push(Math.floor(Math.random() * 732)+8)
}
console.log(randomArray);