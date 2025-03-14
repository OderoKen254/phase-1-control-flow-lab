function scuberGreetingForFeet(distance){

  let greeting;

  if (distance <= 400) {
    greeting = "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    greeting = "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    greeting = "I will gladly take your thirty bucks.";
  } else {
    greeting = 'No can do.';
  }
  return greeting;
}


function ternaryCheckCity(city){
  if (city=== "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}


function ternaryCheckCity(city) {
  return (city === "NYC") ? "Ok, sounds good." : "No go.";
}
console.log(ternaryCheckCity("NYC"));
console.log(ternaryCheckCity("Pittsburgh"));



function switchOnCharmFromTip(tip){
  
  switch(tip){
    case 'generous':
      switchOnCharmFromTip = 'Thank you so much.';
      break;
    case 'not as generous':
      switchOnCharmFromTip = 'Thank you.';
      break;
    case 'thanks for everything':
      switchOnCharmFromTip = 'Bye.';
      break;
  }

  return switchOnCharmFromTip;
}

// console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('thanks for everything'));


// alternative 

function switchOnCharmFromTip(tip){
  let tipResponse;

  switch(tip){
    case 'generous':
      tipResponse = 'Thank you so much.';
      break;
    case 'not as generous':
      tipResponse = 'Thank you.';
      break;
    case 'thanks for everything':
      tipResponse = 'Bye.';
      break;
      default:
      tipResponse = "Welcome!"
  }
  
  return tipResponse;
}

console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('thanks for everything'));
console.log(switchOnCharmFromTip());
