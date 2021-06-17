// Getter and Setter
let user = {
  get name() {
    return this._name
  },
  set name(value) {
    if(value.length < 4) {
      alert('Ten khong duoc be hon 4 ky tu')
      return
    }
    this._name = value
  }
}

user.name = 'Evan'
console.log(user.name)