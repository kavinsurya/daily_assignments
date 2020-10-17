class Pet {
    type: String;
    available: Number;
}

interface petDetails {
    type: String;
    count: Number;
}


class PetsAvailability {
    pets: Array<Pet> = new Array();

    constructor(petsAvailable: Array<Pet>) {
        this.pets.push(...petsAvailable);
    }
    //inserting new pets

    insert(pet: Pet) {
        this.pets.push(pet);
    }
    //function to list the pets 
    showPets() {
        console.log(this.pets);
    }
    //Checkin the requests
    checkRequests(requestArray: Array<petDetails>) {
        for (let i = 0; i < requestArray.length; i++) {
            let available;
            let requested;
            for (let j = 0; j < this.pets.length; j++) {
                if ((requestArray[i].type === this.pets[j].type) && (requestArray[i].count <= this.pets[j].available)) {
                    available = this.pets[j].available;
                    break;
                }
            }
            if (!available) {
                console.log(`${requestArray[i].type} is not available`);
            } else {
                console.log(
                    `${requestArray[i].type} is available and  the available count is ${available}`);
            }
        }
    }
}

//initializing the pets 
let petsAvailable = new PetsAvailability([
    { type: "Fish", available: 15 },
    { type: "Dog", available: 32 },
    { type: "Cat", available: 21 },
    { type: "Equine", available: 19 },
    { type: "rabbit", available: 7 },
]);



class PetRequests {
    requests: Array<petDetails> = new Array();

    constructor(initialRequests: Array<petDetails>) {
        this.requests.push(...initialRequests);
    }
//adding new request
    add(newRequest: petDetails) {
        this.requests.push(newRequest);
    }

//Checking the Availability
    checkAvailability() {
        petsAvailable.checkRequests(this.requests);
    }
}
//Creating new request
let request1 = new PetRequests([
    {
        type: "rabbit",
        count: 4,
    },

]);

request1.add({ type: "Love birds", count: 2 });
request1.checkAvailability();
