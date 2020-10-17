var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isPlaying = false;
//Types of Tv's 
var tvMOdels;
(function (tvMOdels) {
    tvMOdels["xpro"] = "xpro";
    tvMOdels["a4"] = "a4";
})(tvMOdels || (tvMOdels = {}));
var channels = {
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
    20: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
};
var TV_class = /** @class */ (function () {
    function TV_class(setDetails) {
        this.channel = 1;
        this.volume = 10;
        this.details = setDetails;
        var videoTag = document.querySelector("#video");
        videoTag.style.width = this.details.size.width;
        videoTag.style.height = this.details.size.height;
        this.setChannel(this.channel);
        this.setVolume(this.volume);
        var rewind = document.querySelector("#rewind");
        rewind.onclick = this.previousChannel();
        var forward = document.querySelector("#forward");
        forward.onclick = this.nextChannel();
        var volumeUp = document.querySelector("#volumeUp");
        volumeUp.onclick = this.increaseVolume();
        var volumeDown = document.querySelector("#volumeDown");
        volumeDown.onclick = this.decreaseVolume();
        var onOff = document.querySelector("#onOff");
        onOff.onclick = this.power();
    }
    //Increase volume
    TV_class.prototype.increaseVolume = function () {
        var _this = this;
        return function () {
            if (_this.volume < 10) {
                _this.setVolume(_this.volume + 1);
            }
            else {
                console.log("Maximum volume is 10");
            }
        };
    };
    //Decrease volume
    TV_class.prototype.decreaseVolume = function () {
        var _this = this;
        return function () {
            if (_this.volume > 0) {
                _this.setVolume(_this.volume - 1);
            }
            else {
                console.log("Minimum volume is 0");
            }
        };
    };
    //Changing to previous channel 
    TV_class.prototype.previousChannel = function () {
        var _this = this;
        return function () {
            _this.setChannel(_this.channel - 1);
        };
    };
    //Changing the channel to the next channel
    TV_class.prototype.nextChannel = function () {
        var _this = this;
        return function () {
            _this.setChannel(_this.channel + 1);
        };
    };
    //initialize the channel number
    TV_class.prototype.setChannel = function (channelNumber) {
        if (channelNumber > 0 && channelNumber <= 50) {
            this.channel = channelNumber;
            console.log(this.channel);
            var col12 = document.querySelector(".col-12");
            col12.innerHTML = "";
            var videoTag = document.createElement("video");
            videoTag.setAttribute("id", "video");
            videoTag.setAttribute("controls", "true");
            videoTag.style.width = this.details.size.width;
            videoTag.style.height = this.details.size.height;
            var videoPlayer = document.createElement("source");
            videoPlayer.setAttribute("src", channels[this.channel]);
            videoPlayer.setAttribute("id", "videoPlayer");
            videoPlayer.setAttribute("type", "video/mp4");
            videoTag.appendChild(videoPlayer);
            col12.appendChild(videoTag);
            isPlaying = false;
            playVideo();
            this.displayInfo();
        }
        else {
            console.log("Please select a channel between 1 and 20");
        }
    };
    //initialize the volume
    TV_class.prototype.setVolume = function (volumeCount) {
        if (volumeCount >= 0 && volumeCount <= 10) {
            this.volume = volumeCount;
            var video = document.querySelector("#video");
            video.volume = this.volume / 10;
            this.displayInfo();
        }
        else {
            console.log("Volume can be between 0 and 10");
        }
    };
    //power button
    TV_class.prototype.power = function () {
        var _this = this;
        return function () {
            _this.setChannel(1);
            _this.setVolume(50);
            document.querySelector("video").pause();
        };
    };
    //Info
    TV_class.prototype.displayInfo = function () {
        var videoInfo = document.querySelector(".videoInfo");
        videoInfo.setAttribute('style', '  border: dashed black;margin: 20px;padding: 5px;text-align:center');
        videoInfo.innerHTML = "Current Channel: " + this.channel;
    };
    return TV_class;
}());
var a4 = /** @class */ (function (_super) {
    __extends(a4, _super);
    function a4(tvDetails) {
        return _super.call(this, tvDetails) || this;
    }
    return a4;
}(TV_class));
var xpro = /** @class */ (function (_super) {
    __extends(xpro, _super);
    function xpro(tvDetails) {
        return _super.call(this, tvDetails) || this;
    }
    return xpro;
}(TV_class));
//Function to play video
var playVideo = function () {
    if (!isPlaying) {
        isPlaying = !isPlaying;
        document.querySelector("video").play();
    }
    else {
        isPlaying = !isPlaying;
        document.querySelector("video").pause();
    }
};
//Change channel 
var changeChannel = function (pressedButton) { };
//Channel the Tv model
var changeTV = function () {
    var selectedTv = document.querySelector("#Tv")
        .value;
    switch (selectedTv) {
        case tvMOdels.a4:
            new a4({
                brand: "a4",
                size: {
                    width: "60%",
                    height: "80%"
                },
                energyUsage: "200W",
                refreshRate: 60
            });
            break;
        case tvMOdels.xpro:
            new xpro({
                brand: "Mi",
                size: {
                    width: "80%",
                    height: "100%"
                },
                energyUsage: "300W",
                refreshRate: 90
            });
            break;
        default:
            break;
    }
};
