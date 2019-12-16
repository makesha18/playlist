;
(function() {
    "use strict";
    let playList = [{
            artist: "linkin park ",
            song: "my december",
            duration: "4:18"
        },
        {
            artist: "the hardkiss",
            song: "forever more",
            duration: "3:47"
        },
        {
            artist: "iamx",
            song: "sorrow",
            duration: "4:41"
        },
        {
            artist: "fallulah",
            song: "give us a little love",
            duration: "3:45"
        },
        {
            artist: "amy winehouse",
            song: "back to black",
            duration: "3:53"
        },
        {
            artist: "linkin park",
            song: "crawling",
            duration: "3:31"
        },
        {
            artist: "twenty one pilots",
            song: "stressed out",
            duration: "3:23"
        },
        {
            artist: "mike shinoda",
            song: "over again",
            duration: "3:48"
        }
    ];


    let playListEl = document.getElementById('playlist'),
        playListTmpl = document.getElementById('playlist-li').innerHTML,
        playListHTML = '';


    console.log();

    playList.forEach(function(item) {

        playListHTML += playListTmpl
            .replace(/{{artist}}/ig, item.artist)
            .replace(/{{duration}}/ig, item.duration)
            .replace(/{{song}}/ig, item.song);
    });

    playListEl.innerHTML = playListHTML;

})();