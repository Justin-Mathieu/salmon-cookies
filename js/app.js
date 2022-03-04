'use strict';
/////////////////Seattle///////////////////
let salesData = document.getElementById('salesData');
let timeofDay = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];
let seattleObject = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  total: 0,
  salesPerhour: [],
  getCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerhour: function () {
    for (let i = 0; i < timeofDay.length; i++) {
      let cookieMath = Math.ceil(this.getCustomers() * this.avg);
      this.total += cookieMath;
      this.salesPerhour.push(cookieMath);
    }
  },

  render: function () {
    seattleObject.cookiesPerhour();
    for (let i = 0; i < timeofDay.length; i++) {
      let list = document.createElement('li');
      list.textContent = `${timeofDay[i]}: ${this.salesPerhour[i]}`;
      salesData.appendChild(list);
    }
    let totalcookies = document.createElement('li');
    totalcookies.textContent = `Total: ${this.total}`;
    salesData.appendChild(totalcookies);
  },
};
seattleObject.render();
////////////////////////Tokyo//////////////////////////////////////////
let salesData1 = document.getElementById('salesData1');

let tokyoObject = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  total: 0,
  salesPerhour: [],
  getCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerhour: function () {
    for (let i = 0; i < timeofDay.length; i++) {
      let cookieMath = Math.ceil(this.getCustomers() * this.avg);
      this.total += cookieMath;
      this.salesPerhour.push(cookieMath);
    }
  },

  render: function () {
    tokyoObject.cookiesPerhour();
    for (let i = 0; i < timeofDay.length; i++) {
      let list = document.createElement('li');
      list.textContent = `${timeofDay[i]}: ${this.salesPerhour[i]}`;
      salesData1.appendChild(list);
    }
    let totalcookies = document.createElement('li');
    totalcookies.textContent = `Total: ${this.total}`;
    salesData1.appendChild(totalcookies);
  },
};
tokyoObject.render();
////////////////////////////////Dubai//////////////////////////////////////////
let salesData2 = document.getElementById('salesData2');
let dubaiObject = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  total: 0,
  salesPerhour: [],
  getCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerhour: function () {
    for (let i = 0; i < timeofDay.length; i++) {
      let cookieMath = Math.ceil(this.getCustomers() * this.avg);
      this.total += cookieMath;
      this.salesPerhour.push(cookieMath);
    }
  },

  render: function () {
    dubaiObject.cookiesPerhour();
    for (let i = 0; i < timeofDay.length; i++) {
      let list = document.createElement('li');
      list.textContent = `${timeofDay[i]}: ${this.salesPerhour[i]}`;
      salesData2.appendChild(list);
    }
    let totalcookies = document.createElement('li');
    totalcookies.textContent = `Total: ${this.total}`;
    salesData2.appendChild(totalcookies);
  },
};
dubaiObject.render();
///////////////////////////Paris/////////////////////////////////////////////////
let salesData3 = document.getElementById('salesData3');
let parisObject = {
  name: 'paris',
  min: 20,
  max: 38,
  avg: 2.3,
  total: 0,
  salesPerhour: [],
  getCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerhour: function () {
    for (let i = 0; i < timeofDay.length; i++) {
      let cookieMath = Math.ceil(this.getCustomers() * this.avg);
      this.total += cookieMath;
      this.salesPerhour.push(cookieMath);
    }
  },

  render: function () {
    parisObject.cookiesPerhour();
    for (let i = 0; i < timeofDay.length; i++) {
      let list = document.createElement('li');
      list.textContent = `${timeofDay[i]}: ${this.salesPerhour[i]}`;
      salesData3.appendChild(list);
    }
    let totalcookies = document.createElement('li');
    totalcookies.textContent = `Total: ${this.total}`;
    salesData3.appendChild(totalcookies);
  },
};
parisObject.render();
////////////////////////////Lima////////////////////////////////////////////////
let salesData4 = document.getElementById('salesData4');
let limaObject = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  total: 0,
  salesPerhour: [],
  getCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerhour: function () {
    for (let i = 0; i < timeofDay.length; i++) {
      let cookieMath = Math.ceil(this.getCustomers() * this.avg);
      this.total += cookieMath;
      this.salesPerhour.push(cookieMath);
    }
  },

  render: function () {
    limaObject.cookiesPerhour();
    for (let i = 0; i < timeofDay.length; i++) {
      let list = document.createElement('li');
      list.textContent = `${timeofDay[i]}: ${this.salesPerhour[i]}`;
      salesData4.appendChild(list);
    }
    let totalcookies = document.createElement('li');
    totalcookies.textContent = `Total: ${this.total}`;
    salesData4.appendChild(totalcookies);
  },
};
limaObject.render();
