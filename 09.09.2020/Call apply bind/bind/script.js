var person = {
    hello: function (thing) {
        console.log(this.name + " says, Hi " + thing);
    }
}

var helloFunc = person.hello.bind({ name: "Kavinsurya" }, "everyone");
helloFunc(); 