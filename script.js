class Clock {
  constructor(words) {
    this.words = words;
  }

  show(element) {
    element.style.color = '#fff';
  }

  hide(element) {
    element.style.color = '#444';
  }

  getDate() {
    var data = Array(22);
    var date = Date();
    //Show it's value always.
    data[0] = true;
    //
    switch (date) {
      default:
        console.log(date);
        break;
    }
    return data;
  }

}

/**All of the words of the document are inside of this.
 * Order: [0] it's, [1] half, [2] ten,[3] quarter, [4] twenty, [5] five,
 * [6] minutes, [7] to, [8] past, [9 - 21] numbers, [22] o'clock
 * @type {HTMLElement}
 */
const wordsElements = document.querySelectorAll('.words');

const clock = new Clock(wordsElements);

clock.getDate();