//--створити масив з:
// - з 5 числових значень
// - та вивести його в консоль
let arrayOfNumbers = [5,3,55,71,622];
console.log(arrayOfNumbers);
// - з 5 стічкових значень
let arrayOfStrings = ['hello','sdkd','dhhd','fhfh','djdj'];
console.log(arrayOfStrings);
// - з 5 значень стрічкового, числового та булевого типу
let arrayOfDifElements = ["string",55,true,false,"array"];
console.log(arrayOfDifElements);
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array = [];
array[0] = false;
array[1] = 54;
array[3] = 'gg';
console.log(array);


// - є масив
let num =  [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
let i=0;
while (i<num.length){
    console.log(num[i]);
    i++;
}
//     2. перебрати його циклом for
for (let j = 0; j < num.length; j++) {
    console.log(num[j]);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let a = 1;
while (a<num.length){
        console.log(num[a]);
        a+=2;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let j = 1; j < num.length; j+=2) {
    console.log(num[j])
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let b = 0;
while (b<num.length){
    if (num[b]%2 ===0){
        console.log(num[b]);
    }
    b++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < num.length; j++) {
    const item = num[j];
    if (item%2===0){
        console.log(item);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let c = 0; c < num.length; c++) {
    if (num[c]%3 ===0){
        num[c]="okten";
    }
    console.log(num[c]);
}
console.log(num);
// 8. вивести масив в зворотньому порядку.
for (let j = num.length - 1; j >= 0; j--) {
    console.log(num[j])
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let d= num.length-1;
while (d>=0){
    console.log(num[d]);
    d--;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers = [4,452,52,33,78,66,44,88,44,6969,44];
for (let f=0;f<numbers.length;f++){
    console.log(numbers[f]);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let str = ['qq','ff','yy','uyuj','iooi','ytfr','dhhd','dghfh','fgd','gd'];
for (let q=0;q<str.length;q++){
    console.log(str[q]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let array1 = [true,55,'few',57,false,33,'fgfgjs','ajsj',true,true];
for (let j = 0; j < array1.length; j++) {
    const item = array1[j];
    if (typeof item ==="boolean"){
        console.log(item);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let j = 0; j < array1.length; j++) {
    const item = array1[j];
    if (typeof item==="number"){
        console.log(item);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let j = 0; j < array1.length; j++) {
    const item = array1[j];
    if (typeof item === "string"){
        console.log(item);
    }
}
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let array2 = [];
array2[0] =true;
array2[1] = 47;
array2[2] = 74;
array2[3] = 'hello';
array2[4] = true;
array2[5] = 'name';
array2[6] = 23;
array2[7] = 99;
array2[8] = 'ooo';
array2[9] = false;

for (let j = 0; j < array2.length; j++) {
    console.log(array2[j]);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 10; j++) {
    console.log(j);
    document.write(`<div>${j}</div>`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j++) {
    console.log(j);
    document.write(`<div>${j}</div>`);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j+=2) {
    console.log(j);
    document.write(`<div>${j}</div>`)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (j%2===0){
        console.log(j)
        document.write(`<div>${j}</div>`)
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 1; j < 100; j++) {
    if (j%3 ===0){
        console.log(j);
        document.write(`<div>${j}</div>`)
    }
}
//стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let arrayOfBooks = [
    {name:"book 1",pageCount:100,authors:['author1','author2'],genre:['fantasy']},
    {name:"bo3",pageCount:501,authors:['author1'],genre:['fantasy','scary']},
    {name:"booook3",pageCount:87,authors:['author1','author2','author3'],genre:['fantasy','scary','detective']},
    {name:"boooooook4",pageCount:251,authors:['author1','author2'],genre:['fantasy','scary']}
]
// -знайти наібльшу книжку.
let max = arrayOfBooks[0].pageCount;
for (let j = 1; j < arrayOfBooks.length; j++) {
   if (arrayOfBooks[j].pageCount > max){
       max=arrayOfBooks[j];
   }
}
console.log(max);
// - знайти книжку/ки з найбільшою кількістю жанрів

let genreCount = arrayOfBooks[0].genre.length;
let bookWithTheMostGenres = null;
console.log(genreCount);
for (let j = 1; j < arrayOfBooks.length; j++) {
    if (arrayOfBooks[j].genre.length>genreCount){
        genreCount = arrayOfBooks[j].genre.length;
        bookWithTheMostGenres = arrayOfBooks[j];
    }
}
console.log(bookWithTheMostGenres);
// - знайти книжку/ки з найдовшою назвою
let bookLength = arrayOfBooks[0].name.length;
let longestTitle = null;

for (let j = 1; j < arrayOfBooks.length; j++) {
  if (arrayOfBooks[j].name.length>bookLength){
      bookLength=arrayOfBooks[j].genre.length;
      longestTitle = arrayOfBooks[j];
  }
}
console.log(longestTitle);
// - знайти книжку/ки які писали 2 автори
for (let j = 0; j < arrayOfBooks.length; j++) {
    if (arrayOfBooks[j].authors.length ===2){
        console.log(arrayOfBooks[j]);
    }
}
// - знайти книжку/ки які писав 1 автор
for (let j = 0; j < arrayOfBooks.length; j++) {
    if (arrayOfBooks[j].authors.length ===1){
        console.log(arrayOfBooks[j]);
    }
}



