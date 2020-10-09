var Pet = /** @class */ (function () {
    function Pet() {
    }
    return Pet;
}());
var PetsAvailability = /** @class */ (function () {
    function PetsAvailability(petsAvailable) {
        var _a;
        this.pets = new Array();
        (_a = this.pets).push.apply(_a, petsAvailable);
    }
    PetsAvailability.prototype.insert = function (pet) {
        this.pets.push(pet);
    };
    PetsAvailability.prototype.showPets = function () {
        console.log(this.pets);
    };
    PetsAvailability.prototype.checkRequests = function (requestArray) {
        for (var i = 0; i < requestArray.length; i++) {
            var available = void 0;
            var requested = void 0;
            for (var j = 0; j < this.pets.length; j++) {
                if ((requestArray[i].type === this.pets[j].type) && (requestArray[i].count <= this.pets[j].available)) {
                    available = this.pets[j].available;
                    break;
                }
            }
            if (!available) {
                console.log(requestArray[i].type + " is not available");
            }
            else {
                console.log(requestArray[i].type + " is available and  the available count is " + available);
            }
        }
    };
    return PetsAvailability;
}());
var petsAvailable = new PetsAvailability([
    { type: "Fish", available: 15 },
    { type: "Dog", available: 32 },
    { type: "Cat", available: 21 },
    { type: "Equine", available: 19 },
    { type: "rabbit", available: 7 },
]);
var PetRequests = /** @class */ (function () {
    function PetRequests(initialRequests) {
        var _a;
        this.requests = new Array();
        (_a = this.requests).push.apply(_a, initialRequests);
    }
    PetRequests.prototype.add = function (newRequest) {
        this.requests.push(newRequest);
    };
    PetRequests.prototype.checkAvailability = function () {
        petsAvailable.checkRequests(this.requests);
    };
    return PetRequests;
}());
var request1 = new PetRequests([
    {
        type: "rabbit",
        count: 4
    },
]);
request1.add({ type: "Love birds", count: 2 });
request1.checkAvailability();
