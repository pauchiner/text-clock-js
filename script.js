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
    var date = new Date();
    //Set Hours and minutes from the date
    var hours = parseFloat(date.toLocaleString('en', { hour: 'numeric', hour12: true }).substring(0, 2));
    var minutes = date.getMinutes();
    //Show "IT'S" value always.
    data[0] = true;
    //Set the words states with minutes.
    if(minutes > 0 && minutes < 5) {
      //O'Clock
      data[21] = true;
    }

    if(minutes > 5 && minutes < 15) {
      //Five.
      data[5] = true;
      //Minutes
      data[6] = true;
      //Past.
      data[8] = true;
    }

    if(minutes > 15 && minutes < 30) {
      //Quarter.
      data[3] = true;
      //Past.
      data[8] = true;
    }

    if(minutes > 30 && minutes < 35) {
      //Half.
      data[1] = true;
      //Past.
      data[8] = true;
    }

    if(minutes > 35 && minutes < 45) {
      //Twenty.
      data[4] = true;
      //Five.
      data[5] = true;
      //Minutes
      data[6] = true;
      //To.
      data[7] = true;
    }

    if(minutes > 45 && minutes < 55) {
        //Quarter
        data[3] = true;
        //To.
        data[7] = true;
    }

    if(minutes > 55) {
      //Five
      data[5] = true;
      //Minutes
      data[6] = true;
      //To.
      data[7] = true;
    }

    //Set the words states with hours.
    switch(hours) {
      case 1:
        data[9] = true;
        break;

      case 2:
        data[10] = true;
        break;

      case 3:
        data[11] = true;
        break;

      case 4:
        data[12] = true;
        break;

      case 5:
        data[13] = true;
        break;

      case 6:
        data[14] = true;
        break;

      case 7:
        data[15] = true;
        break;

      case 8:
        data[16] = true;
        break;

      case 9:
        data[17] = true;
        break;

      case 10:
        data[18] = true;
        break;

      case 11:
        data[19] = true;
        break;

      case 12:
        data[20] = true;
        break;

      default:
        break;
    }
    return data;
  }

  setDate(data) {
    for (let i = 0; i < this.words.length; i++) {
      if(data[i]) { this.show(this.words[i]); }
      else { this.hide(this.words[i]); }
    }
  }

}

/**All of the words of the document are inside of this.
 * Order: [0] it's, [1] half, [2] ten,[3] quarter, [4] twenty, [5] five,
 * [6] minutes, [7] to, [8] past, [9 - 21] numbers, [22] o'clock
 * @type {HTMLElement}
 */
const wordsElements = document.querySelectorAll('.words');

const clock = new Clock(wordsElements);

clock.setDate(clock.getDate());
//Repeat
setInterval(() => clock.setDate(clock.getDate()), 10000);