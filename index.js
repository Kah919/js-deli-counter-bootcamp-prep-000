
let katzDeliLine = [] // create empty array

let takeANumber = (katzDeliLine, newName) => { // push name and line number to array
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line`
}

let nowServing = katzDeliLine => { // lets you know whos turn it is and shifts array
  if(katzDeliLine.length) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  return "There is nobody waiting to be served!"
}

let currentLine = katzDeliLine => { // lets you know who is on the line
  let array = []
  if(katzDeliLine.length) {
    for(let i = 0; i < katzDeliLine.length; i++) {
      array.push(` ${i + 1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${array}`
  }
}

takeANumber(katzDeliLine, "Kah")
takeANumber(katzDeliLine, "Ludy")
nowServing(katzDeliLine)
currentLine(katzDeliLine)
