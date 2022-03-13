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
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.salesPerhour = [];
  this.total = 0;
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

  let headRow = document.createElement('td');
  headRow.textContent = timeofDay;
  salesData.appendChild(headRow);
}
time();
Store.prototype.render = function () {
  this.cookiesPerhour();

  let salesRow = document.createElement('tr');
  tableBody.appendChild(salesRow);

  let data = document.createElement('td');
  data.textContent = this.name + this.salesPerhour;
  tableBody.appendChild(data);
  // };

  // function footer() {
  let footerRow = document.createElement('tr');
  footerTotal.appendChild(footerRow);

  let footer = document.createElement('td');
  footer.textContent = this.total;
  footerTotal.appendChild(footer);
};

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 2.3);
let paris = new Store('Paris', 20, 16, 4.6);
let lima = new Store('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
footer();
