// Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

let str = "33";  // строка на вход
console.log(str)
function checkString(str) {
   if (typeof str !== "string" || (!str)) {  // проверяет строка или нет
      console.log("not a string")
   } else if (/^\s*$/.test(str)) {  // строка не должна быть пустой
     console.log("string is empty")
   } else {
    if (str.length =< 5) { // минимум 5 символов в строке
    console.log("Error! str.lenght < 5", "length = ", str.length)  
   } if (str.length >= 64) { // максимум 64 символа в строке
     console.log("Error! str.lenght > 64", "length = ", str.length)
   } if (!/[a-z A-Z]+/.test(str)) {  // проверка на наличие букв
     console.log("Error! No letters in the string")
   } if (!/[A-Z]+/.test(str)) {  // проверка на наличие заглавных букв
     console.log("Error! No capital letter")
   } if (!/\d/.test(str)) {  // проверка на наличие цифр
     console.log("Error! No number")
   } if (!str.includes("@")) {  // наличие собаки
     console.log("Error! No @")
   }
  }
 }
   checkString(str)
