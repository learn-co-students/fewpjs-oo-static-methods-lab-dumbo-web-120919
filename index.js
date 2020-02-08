
class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]/g, "")
  } 

  static titleize(sentence) {
    let wordsArr = sentence.split(" ")
    let noCap = ["a", "an", "but", "of", "and", "for", "at", "by", "from", "the"]

    // capitalize first letter
    let result = []
    result.push(this.capitalize(wordsArr[0]))

    for (let i = 1; i < wordsArr.length; i++) {
      if (noCap.includes(wordsArr[i])) {
        result.push(wordsArr[i])
      } else {
        result.push(this.capitalize(wordsArr[i]))
      }
    }

    return result.join(" ")

  }
}