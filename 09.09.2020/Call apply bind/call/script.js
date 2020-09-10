var person = {
  hello: function (thing) {
    console.log(this.name + " says, Hi " + thing);
  }
}

person.hello.call({ name: "Kavinsurya" }, "every one");