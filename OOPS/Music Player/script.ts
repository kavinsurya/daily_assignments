interface songs {
    songname: string;
    playlist: string;
    songURL: string;
    
  }
  
  
  
  class Song {
    playList: Array<songs> = [];
    playListname: Array<string> = [];
    selectedPlaylist:string;
  
    constructor() {
      //Initaillay inserted songs to playlist
      let songList = [
        {
          songname: "Rakita Rakita",
          playlist: "Tamil songs",
          songURL:"songs/test.mp3",
        },
        {
          songname: " Aandipatti",
          playlist: "Tamil songs",
          songURL:"songs/Aandipatti.mp3",
        },
        {
          songname: "Aathangara-Marame",
          playlist: "Tamil songs",
          songURL:"songs/Aathangara-Marame.mp3",
        },
        {
          songname: " Aathichudi",
          playlist: "Tamil songs",
          songURL:"songs/Aathichudi.mp3",
        },
        {
          songname: "Aayiram-Jannal-Veedu",
          playlist: "Tamil songs",
          songURL:"songs/Aayiram-Jannal-Veedu.mp3",
        },
        {
          songname: " Azhakana-Ratsasiye",
          playlist: "Tamil songs",
          songURL:"songs/Azhakana-Ratsasiye.mp3",
        },
        {
          songname: " Bro",
          playlist: "Tamil songs",
          songURL:"songs/Bro.mp3",
        },
        
       
      ];
      for (let det of songList) {
        this.addSongs(det);
      }
      this.showPlayLists();
    }
  //Add Songs
    addSongs(list: songs) {
      this.playList.push(list);
      if (!this.playlistExist(list.playlist)) {
        this.playListname.push(list.playlist);
      }
    }
  
   //Creating new playlist 
  
    addNewPlaylist(){
      let temp = {
          songname: (<HTMLInputElement>document.getElementById('songName')).value,
          playlist: (<HTMLInputElement>document.getElementById('playlistName')).value,
          songURL:(<HTMLInputElement>document.getElementById('songUrl')).value,
      }
      this.addSongs(temp)
      this.showPlayLists();
    }
  //Creating new song to the playlist 
    addNewSong(){
      let temp = {
          songname: (<HTMLInputElement>document.getElementById('newsongName')).value, 
          playlist: this.selectedPlaylist,
          songURL:(<HTMLInputElement>document.getElementById('newsongUrl')).value,
        
      }
      this.showSongs(this.selectedPlaylist)
      this.addSongs(temp);
     
    }

    //playlist
  
    playlistExist(name) {
      for (let song of this.playListname) {
        if (song == name) {
          return true;
        }
      }
      return false;
    }

    //Display the playlists
  
    showPlayLists() {
      for (let name of this.playListname) {
        let playlistdiv = document.getElementById("playlistSection");
        let li = document.createElement("li");
        li.setAttribute("class", "list-group-item chng-cursor");
        li.innerText = name;
        li.onclick = this.showSongs(name);
        playlistdiv.appendChild(li);
      }
    }
  
    //Displaying the playlists
    showSongs(playList): () => void {
      return () => {
        (<HTMLDivElement>document.getElementById("songsSection")).innerHTML = "";
        let songdiv = document.getElementById("songsSection");
        let mainDiv = document.createElement('div');
            mainDiv.setAttribute('class', 'card');
  
            let interDiv = document.createElement('div');
            interDiv.setAttribute('class', 'card-header font-weight-bolder');
  
            let interSpan = document.createElement('span');
            let spanI = document.createElement('i');
            spanI.setAttribute('class', 'far fa-plus-square');
            spanI.setAttribute('data-toggle', 'modal')
            spanI.setAttribute('data-target', '#addSong')
            interSpan.appendChild(spanI);
  
            interDiv.innerHTML = `Songs of ${playList}`;
            interDiv.append(interSpan);
  
            let ul = document.createElement('ul');
            ul.setAttribute('class', 'list-group list-group-flush')
  
        for (let song of this.playList) {
          if (song.playlist == playList) {
            let li = document.createElement("li");
            li.setAttribute("class", "list-group-item chng-cursor");
            li.innerText = song.songname;
            li.onclick = this.getSongDetails(song.songname);
            ul.appendChild(li);
          }
        }
        mainDiv.append(interDiv, ul);
        songdiv.appendChild(mainDiv);
        this.selectedPlaylist = playList;
      };
    }

    //For getting Song details
  
    getSongDetails(songInp): () => void{
      return () =>{
        for (let song of this.playList) {
          if (song.songname == songInp) {
            
            (<HTMLDivElement>document.getElementById("songDetails")).innerHTML = "";
            let songDetails = document.getElementById("songDetails");
            let songDiv = document.createElement('div');
            songDiv.setAttribute('class', 'card');
  
            let h4 = document.createElement('h4');
            h4.setAttribute('class', 'card-header');
            h4.innerText= song.songname;
  
            let cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body');

  
            let audio = document.createElement('audio');
            audio.controls = true;
            audio.id = 'audioPlayer';
  
            let audioSrc  = document.createElement('source');
            audioSrc.src = song.songURL;
            audioSrc.type = 'audio/mpeg';
            audio.appendChild(audioSrc);
  
            let pcardBody = document.createElement('p');
            pcardBody.setAttribute('class', 'card-text');
           
            cardBody.append( audio, pcardBody);
            songDiv.append(h4, cardBody);
            songDetails.appendChild(songDiv);
            
            break;
          }
        }
      }
    }
  }
  
  let media = new Song();
  