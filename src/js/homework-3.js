import {developers} from "./developers.js";
import {data} from "./developers.js";
export function objects() {

  // Задача №1.

  (function () {

    let pattern = "НАЗВАНИЕ ЯП - язык программирования выпущенный в ГОД ВЫПУСКА ЯП году. Автором языка стал АВТОР ЯП - РОД ДЕЯТЕЛЬНОСТИ АВТОРА ЯП. Файлы программ, написанных на НАЗВАНИЕ ЯП, могут иметь расширение РАСШИРЕНИЯ ФАЙЛОВ. НАЗВАНИЕ ЯП испытал влияние ДЛИННА СПИСКА С ЯП ОКАЗАВШИМ ВЛИЯНИЕ языков программирования: СПИСОК ЯП ОКАЗАВШИХ ВЛИЯНИЕ. НАЗВАНИЕ ЯП повлиял на ЯП ИСПЫТАВШИЕ ВЛИЯНИЕ."
    // pattern.trim();

    // let textContainer = [];

    let timeCounter = 1;

    // Приветствие
    console.log(`Информация о языках программирования будет предоставлена через ${timeCounter} секунд.`);

    // Отсчёт
    const timer = setInterval(() => {

      if (timeCounter <= 1) {
        clearInterval(timer);
        console.log("Ну, погнали!");
        setTimeout(() => showText(), 1000);
        return;
      }

      console.log(`Осталось ${--timeCounter}...`);
    }, 1000);

    function showText() {
      console.log("Какая есть информация...");
      let i = 0;

      let counter = setInterval(() => {
        if (i >= developers.length) {
          clearInterval(counter);
          return;
        }

        let message = [];

        let extensions = data[i].filenameExtensions.split(", ")
                                                   .map(item => (`".${item}"`))
                                                   .join(", ");

        let languages = data[i].affectedBy;

        if (data[i].affectedBy.length > 4) {
          languages = data[i].affectedBy.slice(0,4).map(item => (`${item} и другие языки программирования`));
        }

        message.push(`${data[i].name} - язык программирования выпущенный в ${data[i].year} году.
                      Автором языка стал ${developers[i].name} - ${developers[i].work}.
                      Файлы программ, написанных на ${data[i].name}, могут иметь расширение: ${extensions}.
                      ${data[i].name} испытал влияние ${data[i].influencedBy.length} языков программирования: ${data[i].influencedBy}. ${data[i].name} повлиял на ${languages}.`);

        console.log(message.toString());

        i++;
      }, 2000);

    }

  }());

}
