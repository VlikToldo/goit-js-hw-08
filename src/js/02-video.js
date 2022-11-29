 import Player from '@vimeo/player';
 import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate',throttle(({ seconds }) => {
        localStorage.setItem("videoplayer-current-time", seconds);
}), 1000);

const time = localStorage.getItem("videoplayer-current-time")

player
.setCurrentTime(time)
.then(function() {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

