import {developers} from "./developers.js";
import {data} from "./developers.js";
export function objects() {

  // Задача №1.

  (function () {

    let timeCounter = 10;

    // Приветствие.
    console.log(`Информация о языках программирования будет предоставлена через ${timeCounter} секунд.`);

    // Отсчёт времени.
    const timer = setInterval(() => {

      if (timeCounter <= 1) {
        clearInterval(timer);
        console.log("Ну, погнали!");
        setTimeout(() => showText(), 1000);
        return;
      }

      // Вывод счётчика.
      console.log(`Осталось ${--timeCounter}...`);
    }, 1000);

    // Основная функция.
    function showText() {
      console.log("Какая есть информация...");
      let i = 0;

      // Количество выводов на экран.
      let counter = setInterval(() => {
        if (i >= developers.length) {
          clearInterval(counter);
          return;
        }

        // Вывод расширений языка.
        let extensions = data[i].filenameExtensions.split(", ")
                                                   .map(item => (`".${item}"`))
                                                   .join(", ");

        // Проверка количества языков программирования, на которых повлиял описываемый язык программирования.
        let affectedlanguages = data[i].affectedBy;

        if (data[i].affectedBy.length > 4) {
          affectedlanguages = data[i].affectedBy.slice(0,4).map((item,index,array) => {
            if (index == 0) return `${item}`;
            return ` ${item}`;
          });
          affectedlanguages += " и другие языки программирования";
        } else {
          affectedlanguages = data[i].affectedBy.slice(0,data[i].affectedBy.length).map((item,index,array) => {
            if (index == 0) return `${item}`;
            return ` ${item}`;
          });
        }

        // Проверка количества языков программирования, повлиявших на описываемый язык программирования.
        let influencedLanguages = data[i].influencedBy;

        if (data[i].influencedBy.length > 4) {
          influencedLanguages = data[i].influencedBy.slice(0,4).map((item,index,array) => {
            if (index == 0) return `${item}`;
            return ` ${item}`;
          });
          influencedLanguages += " и других языков программирования";
        } else {
          influencedLanguages = data[i].influencedBy.slice(0,data[i].influencedBy.length).map((item,index,array) => {
            if (index == 0) return `${item}`;
            return ` ${item}`;
          });
        }

        // Вывод сообщения.
        console.log(
          `${data[i].name} - язык программирования выпущенный в ${data[i].year} году.
                   Автором языка стал ${developers[i].name} - ${developers[i].work}.
                   Файлы программ, написанных на ${data[i].name}, могут иметь расширение: ${extensions}.
                   ${data[i].name} испытал влияние ${data[i].influencedBy.length} языков программирования: ${influencedLanguages}.
                   ${data[i].name} повлиял на: ${affectedlanguages}.`
                 );

        i++;
      }, 2000);

    }

  }());

}
