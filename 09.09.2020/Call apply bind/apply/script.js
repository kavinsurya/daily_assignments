function personContainer() {
    var person = {
        name: "kavinsurya",
        hello: function () {
            console.log(this.name + " says, Hi " + arguments[0] +" " + arguments[1] );
        }
    }
    person.hello.apply(person, arguments);
}
personContainer("everyone.", "How are you guys?")