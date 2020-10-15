var Song = /** @class */ (function () {
    function Song() {
        this.playList = [];
        this.playListname = [];
        //Initaillay inserted songs to playlist
        var songList = [
            {
                songname: "Rakita Rakita",
                playlist: "Tamil songs",
                songURL: "songs/test.mp3"
            },
            {
                songname: " Aandipatti",
                playlist: "Tamil songs",
                songURL: "songs/Aandipatti.mp3"
            },
            {
                songname: "Aathangara-Marame",
                playlist: "Tamil songs",
                songURL: "songs/Aathangara-Marame.mp3"
            },
            {
                songname: " Aathichudi",
                playlist: "Tamil songs",
                songURL: "songs/Aathichudi.mp3"
            },
            {
                songname: "Aayiram-Jannal-Veedu",
                playlist: "Tamil songs",
                songURL: "songs/Aayiram-Jannal-Veedu.mp3"
            },
            {
                songname: " Azhakana-Ratsasiye",
                playlist: "Tamil songs",
                songURL: "songs/Azhakana-Ratsasiye.mp3"
            },
            {
                songname: " Bro",
                playlist: "Tamil songs",
                songURL: "songs/Bro.mp3"
            },
        ];
        for (var _i = 0, songList_1 = songList; _i < songList_1.length; _i++) {
            var det = songList_1[_i];
            this.addSongs(det);
        }
        this.showPlayLists();
    }
    //Add Songs
    Song.prototype.addSongs = function (list) {
        this.playList.push(list);
        if (!this.playlistExist(list.playlist)) {
            this.playListname.push(list.playlist);
        }
    };
    //Creating new playlist 
    Song.prototype.addNewPlaylist = function () {
        var temp = {
            songname: document.getElementById('songName').value,
            playlist: document.getElementById('playlistName').value,
            songURL: document.getElementById('songUrl').value
        };
        this.addSongs(temp);
        this.showPlayLists();
    };
    //Creating new song to the playlist 
    Song.prototype.addNewSong = function () {
        var temp = {
            songname: document.getElementById('newsongName').value,
            playlist: this.selectedPlaylist,
            songURL: document.getElementById('newsongUrl').value
        };
        this.showSongs(this.selectedPlaylist);
        this.addSongs(temp);
    };
    //playlist
    Song.prototype.playlistExist = function (name) {
        for (var _i = 0, _a = this.playListname; _i < _a.length; _i++) {
            var song = _a[_i];
            if (song == name) {
                return true;
            }
        }
        return false;
    };
    //Display the playlists
    Song.prototype.showPlayLists = function () {
        for (var _i = 0, _a = this.playListname; _i < _a.length; _i++) {
            var name_1 = _a[_i];
            var playlistdiv = document.getElementById("playlistSection");
            var li = document.createElement("li");
            li.setAttribute("class", "list-group-item chng-cursor");
            li.innerText = name_1;
            li.onclick = this.showSongs(name_1);
            playlistdiv.appendChild(li);
        }
    };
    //Displaying the playlists
    Song.prototype.showSongs = function (playList) {
        var _this = this;
        return function () {
            document.getElementById("songsSection").innerHTML = "";
            var songdiv = document.getElementById("songsSection");
            var mainDiv = document.createElement('div');
            mainDiv.setAttribute('class', 'card');
            var interDiv = document.createElement('div');
            interDiv.setAttribute('class', 'card-header font-weight-bolder');
            var interSpan = document.createElement('span');
            var spanI = document.createElement('i');
            spanI.setAttribute('class', 'far fa-plus-square');
            spanI.setAttribute('data-toggle', 'modal');
            spanI.setAttribute('data-target', '#addSong');
            interSpan.appendChild(spanI);
            interDiv.innerHTML = "Songs of " + playList;
            interDiv.append(interSpan);
            var ul = document.createElement('ul');
            ul.setAttribute('class', 'list-group list-group-flush');
            for (var _i = 0, _a = _this.playList; _i < _a.length; _i++) {
                var song = _a[_i];
                if (song.playlist == playList) {
                    var li = document.createElement("li");
                    li.setAttribute("class", "list-group-item chng-cursor");
                    li.innerText = song.songname;
                    li.onclick = _this.getSongDetails(song.songname);
                    ul.appendChild(li);
                }
            }
            mainDiv.append(interDiv, ul);
            songdiv.appendChild(mainDiv);
            _this.selectedPlaylist = playList;
        };
    };
    //For getting Song details
    Song.prototype.getSongDetails = function (songInp) {
        var _this = this;
        return function () {
            for (var _i = 0, _a = _this.playList; _i < _a.length; _i++) {
                var song = _a[_i];
                if (song.songname == songInp) {
                    document.getElementById("songDetails").innerHTML = "";
                    var songDetails = document.getElementById("songDetails");
                    var songDiv = document.createElement('div');
                    songDiv.setAttribute('class', 'card');
                    var h4 = document.createElement('h4');
                    h4.setAttribute('class', 'card-header');
                    h4.innerText = song.songname;
                    var cardBody = document.createElement('div');
                    cardBody.setAttribute('class', 'card-body');
                    var audio = document.createElement('audio');
                    audio.controls = true;
                    audio.id = 'audioPlayer';
                    var audioSrc = document.createElement('source');
                    audioSrc.src = song.songURL;
                    audioSrc.type = 'audio/mpeg';
                    audio.appendChild(audioSrc);
                    var pcardBody = document.createElement('p');
                    pcardBody.setAttribute('class', 'card-text');
                    cardBody.append(audio, pcardBody);
                    songDiv.append(h4, cardBody);
                    songDetails.appendChild(songDiv);
                    break;
                }
            }
        };
    };
    return Song;
}());
var media = new Song();
