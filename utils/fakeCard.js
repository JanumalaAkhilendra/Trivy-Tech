// utils/fakeCard.js
export function getFakeCard() {
  return {
    number: '**** **** **** ' + Math.floor(1000 + Math.random() * 9000),
    expiry: '01/28',
    cvv: '***',
    name: ['John Doe', 'Jane Smith', 'Alice Ray', 'Akhilendra J'][Math.floor(Math.random() * 4)],
  };
}
