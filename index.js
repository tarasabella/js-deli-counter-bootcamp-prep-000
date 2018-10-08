var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
    //adds the person's name to the deli line array
    return "Welcome, " + name + ". You are number " + katzDeliLine.length +" in line."
  }
//returns the person's name with their place in line
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
  } else {
    var firstPerson = [];
    firstPerson = katzDeliLine.shift(0);
    return "Currently serving " + firstPerson + ".";
  }
}
function currentLine(katzDeliLine) {
  for (let i = 1; i < katzDeliLine.length; i++) {
    if (katzDeliLine.length === 0) {
      return "The line is currently empty."
  }
    } else {
      return `The Line is currently : ${katzDeliLine(i). ${name}`; }
    }
