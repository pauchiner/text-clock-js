class Clock {
  constructor(clockContainer, words) {
    this.container = clockContainer;
    this.words = words;
  }

  show(element) {
    element.style.transition = 'opacity 0.5s ease-in-out';
    element.style.opacity = 1;
  }

  hide(element) {
    element.style.transition = 'opacity 0.5s ease-in-out';
    element.style.opacity = 0.3;
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
    if(minutes >= 0 && minutes < 5) {
      //O'Clock.
      data[21] = true;
    }

    if(minutes >= 5 && minutes < 10) {
      //Five.
      data[5] = true;
      //Minutes.
      data[6] = true;
      //Past.
      data[8] = true;
    }

    if(minutes >= 10 && minutes < 15) {
      //Ten.
      data[2] = true;
      //Minutes
      data[6] = true;
      //Past.
      data[8] = true;
    }

    if(minutes >= 15 && minutes < 20) {
      //Quarter.
      data[3] = true;
      //Past.
      data[8] = true;
    }

    if(minutes >= 20 && minutes < 25) {
      //Twenty.
      data[4] = true;
      //Minutes.
      data[6] = true;
      //Past.
      data[8] = true;
    }

    if(minutes >= 25 && minutes < 30) {
      //Twenty.
      data[4] = true;
      //Five.
      data[5] = true;
      //Minutes.
      data[6] = true;
      //Past.
      data[8] = true;
    }

    if(minutes >= 30 && minutes < 35) {
      //Half.
      data[1] = true;
      //Past.
      data[8] = true;
    }

    if(minutes >= 35 && minutes < 40) {
      //Twenty.
      data[4] = true;
      //Five.
      data[5] = true;
      //Minutes.
      data[6] = true;
      //To.
      data[7] = true;
    }

    if(minutes >= 40 && minutes < 45) {
      //Twenty.
      data[4] = true;
      //Minutes.
      data[6] = true;
      //To.
      data[7] = true;
    }

    if(minutes >= 45 && minutes < 50) {
        //Quarter.
        data[3] = true;
        //To.
        data[7] = true;
    }

    if(minutes >= 50 && minutes < 55) {
      //Ten.
      data[2] = true;
      //Minutes.
      data[6] = true;
      //To.
      data[7] = true;
  }

    if(minutes >= 55) {
      //Five.
      data[5] = true;
      //Minutes.
      data[6] = true;
      //To.
      data[7] = true;
    }
    //
    if(minutes >= 35) {
      hours++;
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

  showMenu() {
    this.container.style.animation = 'show-clock-animation 0.3s cubic-bezier( 0.15, 0.41, 0, 1)';
    this.container.style.animationFillMode = 'Forwards';
    setTimeout(() => {
      this.container.style.display = 'grid';
    }, 300);
  }

  hideMenu() {
    this.container.style.animation = 'hide-clock-animation 0.3s cubic-bezier(1, 0.2, 0.65, 0.9)';
    this.container.style.animationFillMode = 'Forwards';
    setTimeout(() => {
      this.container.style.display = 'none';
    }, 300);
  }

}

class Settings {
  constructor(settingsContainer) {
    this.container = settingsContainer;
  }

  showMenu() {
    this.container.style.animation = 'show-settings-animation 0.3s cubic-bezier( 0.15, 0.41, 0, 1 )';
    this.container.style.animationFillMode = 'Forwards';
    setTimeout(() => {
      this.container.style.display = 'grid';
    }, 300);
  }

  hideMenu() {
    this.container.style.animation = 'hide-settings-animation 0.3s cubic-bezier(1, 0.2, 0.65, 0.9)';
    this.container.style.animationFillMode = 'Forwards';
    setTimeout(() => {
      this.container.style.display = 'none';
    }, 300);
  }
}

/**All of the words of the document are inside of this.
 * Order: [0] it's, [1] half, [2] ten,[3] quarter, [4] twenty, [5] five,
 * [6] minutes, [7] to, [8] past, [9 - 21] numbers, [22] o'clock
 * @type {HTMLElement}
 */
const wordsElements = document.querySelectorAll('.words');



/**this have the view/container of the clock.
 * @type {HTMLElement}
 */
const clockContainer = document.querySelector('.clock-container');
/**this have the view/container of the settings.
 * @type {HTMLElement}
 */
const settingsContainer = document.querySelector('.settings-container');


const clock = new Clock(clockContainer, wordsElements);
const settings = new Settings(settingsContainer);


function changeTest() {
  setTimeout(() => {})
  if(appState == appStates.settings) appState = appStates.clock;
  else appState = appStates.settings;
  console.log(appState);
}

/**This allocates all the avaliable states of the app.
 * @type {enum} */
const appStates = { clock: 'clock', settings: 'settings', start: 'start'};
//Start the appStates
let appState = appStates.start;

setInterval(() => {
  switch (appState) {
    case appStates.start:
      clock.showMenu();
      setTimeout(() => { appState = appStates.clock; }, 500)
      break;
    case appStates.clock:
      clock.showMenu();
      settings.hideMenu();
      clock.setDate(clock.getDate());
      break;
    case appStates.settings:
      clock.hideMenu();
      settings.showMenu();
      clock.setDate(clock.getDate());
      break;
    default:
      break;
  }
}, 100);