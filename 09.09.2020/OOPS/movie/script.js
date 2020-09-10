class Movie {
    constructor(title, studio, rating) {
        this.name = title;
        this.production= studio;
        this.ratings = rating ? rating : '7';
      
    }

    getPG(movie) {
        var blockbuster = movie.filter((movie) => movie.ratings === '7');
        return blockbuster.map((m)=>m.name);
    }
}

let m1 = new Movie('Casino Royale', 'EON Productions', '8.5');
let m2 = new Movie('Kingsman: The Golden Circle', ' ‎TSG Entertainment','7');
let m3 = new Movie('The Boss Baby', 'DreamWorks Animation', '7.2');

let array = [m1, m2, m3];

console.log(m1.getPG(array));