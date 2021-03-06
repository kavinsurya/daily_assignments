let isPlaying = false;

//Types of Tv's 
enum tvMOdels {
    xpro = "xpro",
    a4 = "a4",
}
//Tv details 
interface TV_Details {
    brand: string;
    refreshRate: number;
    energyUsage: string;
    size: sizeDetails;
}

interface sizeDetails {
    width: string;
    height: string;
}


let channels = {

    1: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    2: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    3: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    5: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    6: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    7: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    8: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    9: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    10: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    11: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    12: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    13: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    14: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    15: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    16: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    17: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    18: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    19: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    20: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",

};


type Light = "ON" | "OFF";

class TV_class {
    details: TV_Details;
    channel: number;
    volume: number;
    constructor(setDetails: TV_Details) {
        this.channel = 1;
        this.volume = 10;
        this.details = setDetails;
        let videoTag = <HTMLVideoElement>document.querySelector("#video");
        videoTag.style.width = this.details.size.width;
        videoTag.style.height = this.details.size.height;
        this.setChannel(this.channel);
        this.setVolume(this.volume);
        let rewind = <HTMLAreaElement>document.querySelector("#rewind");
        rewind.onclick = this.previousChannel()
        let forward = <HTMLAreaElement>document.querySelector("#forward");
        forward.onclick = this.nextChannel();
        let volumeUp = <HTMLAreaElement>document.querySelector("#volumeUp");
        volumeUp.onclick = this.increaseVolume();
        let volumeDown = <HTMLAreaElement>document.querySelector("#volumeDown");
        volumeDown.onclick = this.decreaseVolume();
        let onOff = <HTMLAreaElement>document.querySelector("#onOff");
        onOff.onclick = this.power();

    }
    //Increase volume
    increaseVolume(): () => void {
        return () => {
            if (this.volume < 10) {
                this.setVolume(this.volume + 1);
            } else {
                console.log("Maximum volume is 10");
            }
        };
    }
    //Decrease volume

    decreaseVolume(): () => void {
        return () => {
            if (this.volume > 0) {
                this.setVolume(this.volume - 1);
            } else {
                console.log("Minimum volume is 0");
            }
        };
    }
    //Changing to previous channel 
    previousChannel(): () => void {
        return () => {
            this.setChannel(this.channel - 1);
        };
    }
    //Changing the channel to the next channel
    nextChannel(): () => void {
        return () => {
            this.setChannel(this.channel + 1);
        };
    }
    //initialize the channel number
    setChannel(channelNumber: number) {
        if (channelNumber > 0 && channelNumber <= 50) {
            this.channel = channelNumber;
            console.log(this.channel);
            let col12 = <HTMLDivElement>document.querySelector(".col-12");
            col12.innerHTML = "";
            let videoTag = document.createElement("video");
            videoTag.setAttribute("id", "video");
            videoTag.setAttribute("controls", "true");
            videoTag.style.width = this.details.size.width;
            videoTag.style.height = this.details.size.height;
            let videoPlayer = document.createElement("source");
            videoPlayer.setAttribute("src", channels[this.channel]);
            videoPlayer.setAttribute("id", "videoPlayer");
            videoPlayer.setAttribute("type", "video/mp4");
            videoTag.appendChild(videoPlayer);
            col12.appendChild(videoTag);
            isPlaying = false;
            playVideo();
            this.displayInfo();
        } else {
            console.log("Please select a channel between 1 and 20");
        }
    }
    //initialize the volume
    setVolume(volumeCount: number) {
        if (volumeCount >= 0 && volumeCount <= 10) {
            this.volume = volumeCount;
            let video = <HTMLVideoElement>document.querySelector("#video");
            video.volume = this.volume / 10;
            this.displayInfo();
        } else {
          console.log("Volume can be between 0 and 10");
        }
    }
    //power button
    power(): () => void {
        return () => {
          
            this.setChannel(1);
            this.setVolume(50);
            (<HTMLVideoElement>document.querySelector("video")).pause();
            
          
        };
    }
//Info
    displayInfo() {
        let videoInfo = <HTMLDivElement>document.querySelector(".videoInfo");
        videoInfo.setAttribute('style','  border: dashed black;margin: 20px;padding: 5px;text-align:center')
        videoInfo.innerHTML = `Current Channel: ${this.channel}`;
    }
}



class a4 extends TV_class {
    constructor(tvDetails: TV_Details) {
        super(tvDetails);
    }
}

class xpro extends TV_class {
    constructor(tvDetails: TV_Details) {
        super(tvDetails);
    }
}
//Function to play video
let playVideo = () => {
    if (!isPlaying) {
        isPlaying = !isPlaying;
        (<HTMLVideoElement>document.querySelector("video")).play();
    } else {
        isPlaying = !isPlaying;
        (<HTMLVideoElement>document.querySelector("video")).pause();
    }
};
//Change channel 
let changeChannel = (pressedButton: string) => { };
//Channel the Tv model
let changeTV = () => {
    let selectedTv = (<HTMLSelectElement>document.querySelector("#Tv"))
        .value;
     
    switch (selectedTv) {
        case tvMOdels.a4:
            new a4({
                brand: "a4",
                size: {
                    width: "60%",
                    height: "80%",
                },
                energyUsage: "200W",
                refreshRate: 60,

            });
            break;
        case tvMOdels.xpro:
            new xpro({
                brand: "Mi",
                size: {
                    width: "80%",
                    height: "100%",
                },
                energyUsage: "300W",
                refreshRate: 90,

            });
            break;
        default:
            break;
    }
};
