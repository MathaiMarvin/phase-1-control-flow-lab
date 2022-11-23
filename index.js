function scuberGreetingForFeet(someValue){
  
  let result
  if(someValue<=400){
    result = "This one is on me!";
  }else if(someValue>2000 && someValue<2500){
    result = "I will gladly take your thirty bucks.";
  }else if (someValue>2500){
    result = "No can do.";
  }
  return result
}
scuberGreetingForFeet(2501);


function ternaryCheckCity(city){
  // Write your code here!
  let result
  if(city==="NYC"){
    result = "Ok, sounds good."
  }else if(city!=="NYC"){
    result ="No go.";
  }
  return result
}
ternaryCheckCity('NYC');

function switchOnCharmFromTip(response){
  // Write your code here!
  let result
  if(response=='generous'){
    result = "Thank you so much."

  }else if(response=='not as generous'){
    result = "Thank you.";
  }else{
    result="Bye."
  }
  return result
}
switchOnCharmFromTip();