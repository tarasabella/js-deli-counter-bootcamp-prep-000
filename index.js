var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }

function nowServing(x) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = x[0];
    x.splice(0, 1);
    return "Currently serving " + name + ".";
  }
  function currentLine(n) {
      var line = []
      if (n.length === 0) {
        return "The line is currently empty."
      } else {
        for(var i = 0; i < n.length; i++) {
          line += (i + 1) + ". " + n[i] + ", "
        }
    }
