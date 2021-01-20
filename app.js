'use strict';
console.log('Hello')

var salesData = {
  location: ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'],
  cpc: [],
  cph: null,

  generateCustomer: function (customerLimit) {
    console.log('Hello')
    var randomCustomer = Math.floor((Math.random() * customerLimit) + 1);
    this.cph = randomCustomer;
  }
}

var seattle = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  cookieArray: [],
  newArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getRandomArbitrary: function () {
    //return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
    for (var i = 0; i < this.newArray.length; i++) {
      this.cookieArray.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
    }
  },
  renderToDom: function () {
    this.getRandomArbitrary();
    //var seattleList = document.getElementById ("seattleList")
    var seattleTable = document.getElementById("seattleTable")
    for (var i = 0; i < this.cookieArray.length; i++) {
      var newTd = document.createElement('td');
      newTd.textContent = this.newArray[i] + ': ' + this.cookieArray[i] + ' cookies'
      seattleTable.appendChild(newTd)
    }
  }
}
seattle.renderToDom();

var tokyo = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  cookieArray: [],
  newArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getRandomArbitrary: function () {
    //return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
    for (var i = 0; i < this.newArray.length; i++) {
      this.cookieArray.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
    }
  },
  renderToDom: function () {
    this.getRandomArbitrary();
    //var tokyoList = document.getElementById ("tokyoList")
    var tokyoTable = document.getElementById("tokyoTable")
    for (var i = 0; i < this.cookieArray.length; i++) {
      var newTd = document.createElement('td');
      newTd.textContent = this.newArray[i] + ': ' + this.cookieArray[i] + ' cookies'
      tokyoTable.appendChild(newTd)
    }
  }
}
tokyo.renderToDom();

var dubai = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  cookieArray: [],
  newArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getRandomArbitrary: function () {
    //return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
    for (var i = 0; i < this.newArray.length; i++) {
      this.cookieArray.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
    }
  },
  renderToDom: function () {
    this.getRandomArbitrary();
    // var dubaiList = document.getElementById ("dubaiList")
    var dubaiTable = document.getElementById("dubaiTable")
    for (var i = 0; i < this.cookieArray.length; i++) {
      var newTd = document.createElement('td');
      newTd.textContent = this.newArray[i] + ': ' + this.cookieArray[i] + ' cookies'
      dubaiTable.appendChild(newTd)
    }
  }
}
dubai.renderToDom();

var paris = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  cookieArray: [],
  newArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getRandomArbitrary: function () {
    //return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
    for (var i = 0; i < this.newArray.length; i++) {
      this.cookieArray.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
    }
  },
  renderToDom: function () {
    this.getRandomArbitrary();
    // var parisList = document.getElementById ("parisList")
    var parisTable = document.getElementById("parisTable")
    for (var i = 0; i < this.cookieArray.length; i++) {
      var newTd = document.createElement('td');
      newTd.textContent = this.newArray[i] + ': ' + this.cookieArray[i] + ' cookies'
      parisTable.appendChild(newTd)
    }
  }
}
paris.renderToDom();

var lima = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  cookieArray: [],
  newArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getRandomArbitrary: function () {
    //return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
    for (var i = 0; i < this.newArray.length; i++) {
      this.cookieArray.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
    }
  },
  renderToDom: function () {
    this.getRandomArbitrary();
    // var limaList = document.getElementById ("limaList")
    var limaTable = document.getElementById("limaTable")
    for (var i = 0; i < this.cookieArray.length; i++) {
      var newTd = document.createElement('td');
      newTd.textContent = this.newArray[i] + ': ' + this.cookieArray[i] + ' cookies'
      limaTable.appendChild(newTd)
    }
  }
}
lima.renderToDom();


