// Code your solutions in this file


function writeCards(names) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }

  return messages;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"]));


function countDown(num){
    let i = 0;
    while (num >= i){
        console.log(num--);
    }
}
countDown(10);
