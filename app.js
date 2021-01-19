'use strict';
console.log('Hello')

var salesData = {
  location: ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"],
  minCustomer: [23, 3, 11, 20, 2],
  maxCustomer: [65, 24, 38, 38, 16],
  avgCookie: [6.3, 1.2, 3.7, 2.3, 4.6],
  cpc: [],
  cph: null,
  generateCustomer: function (customerLimit) {
    console.log('Hello')
    var randomCustomer = Math.floor((Math.random() * customerLimit) + 1);
    this.cph = randomCustomer;
  }
}

var seattle = {
  
}

//potato[2] = "banana"