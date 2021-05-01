export function functions() {

  // Задача №1.

  // Версия №1.

  // (function checkAge() {
  //
  //   let userAge = prompt("А сколько Вам лет? Просто интересно.");
  //
  //   if (userAge > 18) {
  //     alert("Вам уже можно показать эту фоточку.");
  //   } else {
  //     checkAge(userAge);
  //   }
  //
  // }());

  // Задача №2.
  // Это "чистые" функции, так как они не изменяют глабальное пространство и отвечают за обработку данных только внутри самих себя.

  (function () {

    function add(x,y) {
      return x + y;
    }

    function subtract(x,y) {
      return x - y;
    }

    function divide(x,y) {
      return x / y;
    }

    function multiply(x,y) {
      return x * y;
    }

  }());


  // Задача №3.

  (function () {

    const a = counter(0);

    console.log(a(5));
    console.log(a(1));
    console.log(counter(1)(3));

    function counter(step = 2) {
      let i = 0;
      return (num = 0) => i += step + num;
    }

  }());


  // Задача №4.

  (function () {

    const b = counter2(-1);
    const c = counter2(5);
    const e = counter2();

    console.log(b());
    console.log(b());

    console.log(c());
    console.log(c());
    console.log(c());

    console.log(e());
    console.log(e());

    function counter2(step = 2) {
      let i = 0;
      return () => i += step;
    }

  }());


}
