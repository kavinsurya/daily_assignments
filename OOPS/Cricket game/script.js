//Player class
var Player = /** @class */ (function () {
    function Player(name) {
        this.ballscore = [];
        this.playerName = name;
        this.id = parseInt(name.split('-')[1]);
        this.isOut = false;
        this.ballcount = 1;
    }
    return Player;
}());
//Team class
var Team = /** @class */ (function () {
    function Team(name) {
        this.player = [];
        this.teamid = parseInt(name.split('-')[1]);
        this.teamName = name;
        for (var i = 1; i < 11; i++) {
            this.player.push(new Player("player-" + i));
        }
    }
    return Team;
}());
//Game Class 
var Game = /** @class */ (function () {
    function Game() {
        this.team = [new Team("team-1"), new Team("team-2")];
        this.currTeam = this.team[0];
    }
    //Starting game
    Game.prototype.gameStart = function () {
        document.getElementById('hit-2').setAttribute('disabled', 'true');
        document.getElementById('result').setAttribute('disabled', 'true');
    };
    //Generating score between 1-6
    Game.prototype.scoreGenerator = function () {
        return Math.floor(Math.random() * 7);
    };
    //Switching form current team to next team 
    Game.prototype.switchTeam = function (teamno) {
        this.team[teamno - 1] = this.currTeam;
        this.currTeam = this.team[teamno];
    };
    //Player's score
    Game.prototype.getPlayertotscore = function (pnum) {
        var totscore = 0;
        var arr = this.currTeam.player[pnum - 1].ballscore;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].score > 0) {
                totscore += arr[i].score;
            }
        }
        this.currTeam.player[pnum - 1].playerscore = totscore;
        return totscore;
    };
    //Team score
    Game.prototype.getTeamScore = function () {
        var teamscore = 0;
        for (var i = 1; i <= this.currTeam.player.length; i++) {
            teamscore += parseInt(document.getElementById("t" + this.currTeam.teamid + "p" + i + "-total").innerHTML);
        }
        this.currTeam.teamscore = teamscore;
        return teamscore;
    };
    //finding which team is winner
    Game.prototype.winner = function () {
        var wonby = document.getElementById('wonby');
        var winteam;
        if (this.team[0].teamscore > this.team[1].teamscore) {
            wonby.innerHTML = 'Team-' + this.team[0].teamid;
            winteam = this.team[0];
        }
        else {
            wonby.innerHTML = 'Team-' + this.team[1].teamid;
            winteam = this.team[1];
        }
        this.mom(winteam);
    };
    //To find the man of the match 
    Game.prototype.mom = function (winteam) {
        var highscorer = this.getHighscorer(winteam);
        var mom = document.getElementById('mom');
        mom.innerHTML = 'Player-' + highscorer.player.toString() + ' of Team-' + winteam.teamid;
    };
    //Finding the highest scorer
    Game.prototype.getHighscorer = function (teamno) {
        var highscorer1 = { player: 0, score: 0 };
        for (var i = 0; i < teamno.player.length; i++) {
            if (teamno.player[i].playerscore > highscorer1.score) {
                highscorer1.player = teamno.player[i].id;
                highscorer1.score = teamno.player[i].playerscore;
            }
        }
        return highscorer1;
    };
    return Game;
}());
// creating new game
var game = new Game();
game.gameStart();
var currteamid = game.currTeam.teamid;
var playerNumber = 0;
var ballNumber = 1;
// button click for hit 1
document.getElementById("hit-1").addEventListener('click', function () {
    updateballscore();
});
//button click for hit 2
document.getElementById("hit-2").addEventListener('click', function () {
    updateballscore();
});
//To generate result
document.getElementById("result").addEventListener('click', function () {
    game.winner();
});
//function to update balls and scores of a player
function updateballscore() {
    if (ballNumber <= 6 && playerNumber < 10 && !game.currTeam.player[playerNumber].isOut) {
        var td = document.getElementById("t" + currteamid + "p" + (playerNumber + 1) + "b" + ballNumber);
        var playerscore = game.scoreGenerator();
        td.innerHTML = playerscore.toString();
        var obj = { ball: ballNumber, score: playerscore };
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
    var pscore = 0;
    if (playerNumber < 9) {
        pscore = game.getPlayertotscore(playerNumber);
    }
    if (currteamid === 1) {
        document.getElementById("score-" + currteamid).innerHTML = playerNumber < 9 ? pscore.toString() : game.getTeamScore().toString();
        //disabling hit-1 button and enabling hit-2 button
        document.getElementById('hit-2').removeAttribute('disabled');
        document.getElementById('hit-1').setAttribute('disabled', 'true');
        game.switchTeam(currteamid);
        currteamid = game.currTeam.teamid;
        playerNumber = 0;
        ballNumber = 1;
    }
    else {
        document.getElementById("score-" + currteamid).innerHTML = playerNumber < 9 ? pscore.toString() : game.getTeamScore().toString();
        document.getElementById('hit-2').setAttribute('disabled', 'true');
        document.getElementById('hit-1').setAttribute('disabled', 'true');
        document.getElementById('result').removeAttribute('disabled');
    }
}
//To print player's score 
function printscore() {
    var total = document.getElementById("t" + currteamid + "p" + (playerNumber + 1) + "-total");
    var playertot = game.getPlayertotscore(playerNumber + 1);
    total.innerHTML = playertot.toString();
    ballNumber = 1;
    playerNumber++;
}
function reload() {
    window.location.reload();
}
