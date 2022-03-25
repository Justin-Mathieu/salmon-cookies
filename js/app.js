'use strict';

let locationInput = document.getElementById('location');
let minInput = document.getElementById('min');
let maxInput = document.getElementById('max');
let avgInput = document.getElementById('avg');
let button = document.getElementById('button');

button.addEventListener('click', function (event) {
  event.preventDefault();

  let created = new Store(
    locationInput.value,
    minInput.value,
    maxInput.value,
    avgInput.value
  );
  // created.getCustomers();
  // created.cookiesPerhour();
  created.render();
});

/////////////////Seattle///////////////////
let salesData = document.getElementById('salesData');
let tableBody = document.getElementById('tableBody');
let footerTotal = document.getElementById('footerTotal');
let timeofDay = [
  '',
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
let locations = [];
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.salesPerhour = [];
  this.total = 0;
  locations.push(this);
}
Store.prototype.getCustomers = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};
Store.prototype.cookiesPerhour = function () {
  for (let i = 0; i < timeofDay.length; i++) {
    let cookieMath = Math.ceil(this.getCustomers() * this.avg);
    this.total += cookieMath;
    this.salesPerhour.push(cookieMath);
  }
};
function time() {
  let header = document.createElement('tr');
  salesData.appendChild(header);
  for (let i = 0; i < timeofDay.length; i++) {
    let headRow = document.createElement('td');
    headRow.textContent = `${timeofDay[i]}`;
    header.appendChild(headRow);
  }
}
time();
Store.prototype.render = function () {
  this.cookiesPerhour();
  // for (let i = 0; i < locations.length; i++) {
  // let locationRow = document.createElement('tr');
  // tableBody.appendChild(locationRow);
  let locationName = document.createElement('tr');
  locationName.textContent = this.name;
  tableBody.appendChild(locationName);

  for (let j = 1; j < timeofDay.length; j++) {
    let dataCell = document.createElement('td');
    dataCell.textContent = this.salesPerhour[j];
    locationName.appendChild(dataCell);
    // tableBody.appendChild(dataCell);
  }
  // function footer() {
  let footerRow = document.createElement('th');
  footerTotal.appendChild(footerRow);

  let footer = document.createElement('td');
  footer.textContent = `${this.name} Total: ${this.total}`;
  footerTotal.appendChild(footer);
};
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
