class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^\w\s]/gi, '')
  }

  static titleize(string) {
    return string
      .split(' ')
      .map(word => Formatter.capitalize(word))
      .join(' ')
  }
  
}