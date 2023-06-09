export class Video {
    video;
    static create(q) {
        const video = $(q);
        if (video && video instanceof HTMLVideoElement) {
            return new Video(video);
        }
        else {
            console.warn('The', q, 'selector did not return a HTMLVideoElement object');
            return null;
        }
    }
    constructor(video) {
        this.video = video;
    }
    PlayPause() {
        if (this.video.paused) {
            this.video.play();
        }
        else {
            this.video.pause();
        }
    }
    Stop() {
        this.video.pause();
        this.video.currentTime = 0;
    }
    Advance() {
        this.video.currentTime += 10;
    }
    Rewind() {
        const curTime = this.video.currentTime;
        if (curTime < 10) {
            this.video.currentTime = 0;
        }
        else if (curTime > 10) {
            this.video.currentTime -= 10;
        }
    }
    goto(identifyer) {
        const moments = [
            0, seconds(42, 7), seconds(45, 13), seconds(28, 25), seconds(6, 33), seconds(55, 38)
        ];
        this.video.currentTime = moments[identifyer];
        this.video.play();
    }
}
