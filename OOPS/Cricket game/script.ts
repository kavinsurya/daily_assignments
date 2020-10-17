interface scorePerBall {
    ball: number;
    score: number;
}
//Player class
class Player {
    id: number;
    playerName: string;
    ballscore: Array<scorePerBall> = [];
    playerscore: number;
    ballcount: number;
    isOut: boolean;
    constructor(name) {
        this.playerName = name;
        this.id = parseInt(name.split('-')[1])
        this.isOut = false;
        this.ballcount = 1;
    }


}


//Team class
class Team {
    teamid: number;
    teamName: string;
    player: Array<Player> = [];
    teamscore: number;

    constructor(name) {
        this.teamid = parseInt(name.split('-')[1])
        this.teamName = name;
        for (let i = 1; i < 11; i++) {
            this.player.push(new Player(`player-${i}`));
        }
    }
}

//Game Class 
class Game {
    team: [Team, Team];
    currTeam: Team;
    winningTeam;
    manofmatch;

    constructor() {
        this.team = [new Team(`team-1`), new Team(`team-2`)];
        this.currTeam = this.team[0];
    }
    //Starting game
    gameStart() {
        document.getElementById('hit-2').setAttribute('disabled', 'true');
        document.getElementById('result').setAttribute('disabled', 'true');
    }
    //Generating score between 1-6
    scoreGenerator() {
        return Math.floor(Math.random() * 7)
    }
    //Switching form current team to next team 
    switchTeam(teamno) {
        this.team[teamno - 1] = this.currTeam;
        this.currTeam = this.team[teamno];
    }
    //Player's score
    getPlayertotscore(pnum) {
        let totscore = 0;
        let arr = this.currTeam.player[pnum - 1].ballscore;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].score > 0) {
                totscore += arr[i].score;
            }

        }
        this.currTeam.player[pnum - 1].playerscore = totscore;
        return totscore;
    }
    //Team score
    getTeamScore() {
        let teamscore = 0;
        for (let i = 1; i <= this.currTeam.player.length; i++) {
            teamscore += parseInt(document.getElementById(`t${this.currTeam.teamid}p${i}-total`).innerHTML);
        }
        this.currTeam.teamscore = teamscore;

        return teamscore;
    }
    //finding which team is winner
    winner() {
        let wonby = document.getElementById('wonby');
        let winteam;
        if (this.team[0].teamscore > this.team[1].teamscore) {
            wonby.innerHTML = 'Team-' + this.team[0].teamid;
            winteam = this.team[0];
        } else {
            wonby.innerHTML = 'Team-' + this.team[1].teamid;
            winteam = this.team[1];
        }
        this.mom(winteam);
    }

    //To find the man of the match 
    mom(winteam) {
        let highscorer = this.getHighscorer(winteam);
        let mom = document.getElementById('mom');
        mom.innerHTML = 'Player-' + highscorer.player.toString() + ' of Team-' + winteam.teamid;
    }
    //Finding the highest scorer
    getHighscorer(teamno) {
        let highscorer1 = { player: 0, score: 0 }
        for (let i = 0; i < teamno.player.length; i++) {
            if (teamno.player[i].playerscore > highscorer1.score) {
                highscorer1.player = teamno.player[i].id;
                highscorer1.score = teamno.player[i].playerscore;
            }
        }
        return highscorer1;

    }
}


// creating new game
let game = new Game();
game.gameStart();


let currteamid = game.currTeam.teamid;
let playerNumber = 0;
let ballNumber = 1;

// button click for hit 1
document.getElementById(`hit-1`).addEventListener('click', function () {
    updateballscore();
})

//button click for hit 2
document.getElementById(`hit-2`).addEventListener('click', function () {
    updateballscore();

})

//To generate result
document.getElementById(`result`).addEventListener('click', function () {

    game.winner();

})


//function to update balls and scores of a player

function updateballscore() {
    if (ballNumber <= 6 && playerNumber < 10 && !game.currTeam.player[playerNumber].isOut) {
        let td = <HTMLTableCellElement>document.getElementById(`t${currteamid}p${playerNumber + 1}b${ballNumber}`);


        let playerscore = game.scoreGenerator()
        td.innerHTML = playerscore.toString();
        let obj = { ball: ballNumber, score: playerscore };
        game.currTeam.player[playerNumber + 1 - 1].ballscore.push(obj);
        ballNumber++;


        if (playerscore == 0) {
            game.currTeam.player[playerNumber].isOut = true;
            printscore();
        }

    }
    else {

        if (playerNumber > 9) {
            switchteam();
        }
        else {

            printscore();
        }
    }
}


//Switching teams
function switchteam() {
    let pscore = 0;


    if (playerNumber < 9) {

        pscore = game.getPlayertotscore(playerNumber);
    }
    if (currteamid === 1) {
        document.getElementById(`score-${currteamid}`).innerHTML = playerNumber < 9 ? pscore.toString() : game.getTeamScore().toString();
        //disabling hit-1 button and enabling hit-2 button
        document.getElementById('hit-2').removeAttribute('disabled');
        document.getElementById('hit-1').setAttribute('disabled', 'true');

        game.switchTeam(currteamid);
        currteamid = game.currTeam.teamid;
        playerNumber = 0;
        ballNumber = 1;

    }
    else {
        document.getElementById(`score-${currteamid}`).innerHTML = playerNumber < 9 ? pscore.toString() : game.getTeamScore().toString();


        document.getElementById('hit-2').setAttribute('disabled', 'true');
        document.getElementById('hit-1').setAttribute('disabled', 'true');
        document.getElementById('result').removeAttribute('disabled');
    }
}

//To print player's score 
function printscore() {
    let total = <HTMLTableCellElement>document.getElementById(`t${currteamid}p${playerNumber + 1}-total`);
    let playertot = game.getPlayertotscore(playerNumber + 1);
    total.innerHTML = playertot.toString();
    ballNumber = 1;
    playerNumber++;
}

function reload() {
    window.location.reload()
}