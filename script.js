const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");
// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);
// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let billValue = Number(billTotalInput.value);
  //   console.log(billValue);
  // get the tip from user & convert it into a percentage (divide by 100)
  let tipValue = Number(tipInput.value) / 100;
  //   console.log(tipValue);
  // get the total tip amount
  let tipAmount = billValue * tipValue;
  //   console.log(tipAmount);
  // calculate the total (tip amount + bill)
  let totalAmount = tipAmount + billValue;
  console.log(totalAmount);
  // calculate the per person total (total divided by number of people)
  let perPerson = totalAmount / numberOfPeople;
  console.log(perPerson);
  // update the perPersonTotal on DOM & show it to user
  perPersonTotal.innerText = `$${perPerson.toFixed(2)}`;
};

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  // update the DOM with the new number of people
  // calculate the bill based on the new number of people
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  // decrement the amount of people
  // update the DOM with the new number of people
  // calculate the bill based on the new number of people
};
