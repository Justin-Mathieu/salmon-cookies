'use strict';
function product(a, b) {
  let productResult = a * b;
  return productResult;
}
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
  dailyTotal: 0,
  getCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerhour: function () {
    let cookies = product(this.getCustomers(), this.avg);
    return cookies;
  },
};

//timeofDay.array.forEach(timeofDay) {
// timeofDay.push(cookiesPerhour())

for (let i = 0; (i = timeofDay.length); i++) {
  timeofDay.push(seattleObject.cookiesPerhour());
}
console.log(seattleObject.cookiesPerhour() + timeofDay);
