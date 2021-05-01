export function numbers(max) {

  // Задача №1.

  // let n = prompt(`Задача №1. Введите любое число от 1 до ${max}.`);
  //
  // while (isNaN(Number(n)) || (n > max) ) {
  //   alert("Вы ввели некорректные данные!");
  //   n = prompt(`Введите, пожалуйста, число от 1 до ${max}.`);
  // }
  //
  // console.log("Homework task №1.");
  // for (let i = 1; i < n; i++) {
  //   (i % 4) ? console.log(i) : "";
  // }

  // Задача №2.

  // let f = prompt(`Задача №2. Введите любое целое число.`);
  //
  // while (isNaN(Number(f)) || (f % 1) ) {
  //   alert("Вы ввели некорректные данные!");
  //   f = prompt(`Введите, пожалуйста, любое целое число.`);
  // }
  //
  // let factorial = 1;
  //
  // while(f > 1) {
  //   factorial *= f;
  //   f--;
  // }
  //
  // alert(`Факториалом данного числа является: ${factorial}.`);
  // console.log(`Факториалом данного числа является: ${factorial}.`);

  // Задача №3.

  // let num = prompt("Введите любое целое положительное число:")
  //
  // while ( isNaN(Number(num)) || (num % 1) || (num == 0) ) {
  //
  //   if (num === 0) {
  //     alert("Ноль вводить нельзя.");
  //   } else {
  //     (num % 1) ? alert("Необходимо ввести целое число.") : alert("Очевидно, Вы ввели не число или ничего не ввели.");
  //   }
  //
  //   num = prompt("Введите, пожалуйста, любое целое число.");
  // }
  //
  // let degree = prompt("Введите степень в виде любого натурального числа.");
  //
  // while ( isNaN(Number(degree)) || (degree % 1) || (degree == 0) ) {
  //
  //   if (degree === 0 ) {
  //     alert("Ноль вводить нельзя.");
  //   } else {
  //     (degree % 1) ? alert("Необходимо ввести целое число.") : alert("Очевидно, Вы ввели не число или ничего не ввели.");
  //   }
  //
  //   degree = prompt("Введите степень в виде любого натурального числа:");
  // }
  //
  // let total = num;
  //
  // // let total = Math.pow(num,degree);
  //
  // for (let i = 1; i < degree; i++) {
  //   total *= num;
  // }
  //
  // alert(`Результатом возведения в степень ${degree} числа ${num} является ${total}.`);
  // console.log(`Результатом возведения в степень ${degree} числа ${num} является ${total}.`);

  // Задача №4.
  // Реализована в задачах №1-3.

  // Задача №5.

  // let randomNumber = Math.floor(1 + Math.random() * max);
  // console.log(randomNumber);
  //
  // let userAnswer = prompt(`Загадано целое число от 1 до ${max}. Если у Вам нечем заняться - попробуйте отгадать его.`);
  // let userAttempts = 1;
  // let userAttemptsTotal = 1;
  // let userDecision = false;
  //
  // while (userAnswer != randomNumber) {
  //
  //       userAttempts += 1;
  //       userAttemptsTotal += 1;
  //
  //       if (isNaN(Number(userAnswer)) || userAnswer == "") {
  //         alert("Какого?! Нужно ввести число!");
  //         userAttempts -= 1;
  //         userAttemptsTotal -= 1;
  //       } else if (userAnswer == 0) {
  //         alert("Но, но, ноооль! Не надо ноля.");
  //         userAttempts -= 1;
  //         userAttemptsTotal -= 1;
  //       } else if (userAnswer % 1) {
  //         alert("Целое! Целое число нужно!");
  //         userAttempts -= 1;
  //         userAttemptsTotal -= 1;
  //       } else if (userAnswer < 1 || userAnswer > max) {
  //         alert(`Пу-пу-пууу... Число от 1 до ${max}.`);
  //         userAttempts -= 1;
  //         userAttemptsTotal -= 1;
  //       } else {
  //
  //         if (userAnswer > randomNumber) {
  //           alert("Жаль! Но Вы не угадали - это число меньше введённого Вами.");
  //         } else {
  //           alert("Жаль! Но Вы не угадали - это число больше введённого Вами.");
  //         }
  //
  //         if (userAttempts > 5) {
  //           userDecision = confirm("Вы не устали? Может, ну, его в баньку!");
  //
  //           if (userDecision) {
  //             return;
  //           } else {
  //             userAttempts = 0;
  //             alert("Тогда пляшем дальше!");
  //           }
  //
  //         }
  //       }
  //
  //       userAnswer = prompt(`Загадано целое число от 1 до ${max}. Если у Вам нечем заняться - попробуйте отгадать его.`);
  // }
  //
  // if (userAttemptsTotal == 1) {
  //   alert(`Что ты такое? Отгадал после ${userAttemptsTotal} раза! Это число ${randomNumber}!`);
  // } else {
  //   alert(`Красава! Получилось отгадать после ${userAttemptsTotal} раза! Это именно число ${randomNumber}!`);
  // }


}
