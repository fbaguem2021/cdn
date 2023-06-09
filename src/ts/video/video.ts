export class Video {
    video: HTMLVideoElement;
    static create(q:string) {
        const video = $(q)
        if ( video && video instanceof HTMLVideoElement ) {
            return new Video(video)
        } else {
            console.warn('The',q,'selector did not return a HTMLVideoElement object')
            return null
        }
    }
    private constructor(video: HTMLVideoElement) {
        this.video = video
    }
    public PlayPause(): void {
        if (this.video.paused) {
            this.video.play()
        } else {
            this.video.pause()
        }
    }
    public Stop(): void {
        this.video.pause()
        this.video.currentTime = 0
    }
    public Advance(): void {
        this.video.currentTime += 10
    }
    public Rewind(): void {
        const curTime = this.video.currentTime
        if (curTime < 10) {
            this.video.currentTime = 0
        } else if (curTime > 10) {
            this.video.currentTime -= 10
        }
    }
    public goto(identifyer:number): void {
        const moments = [
            0, seconds(42,7), seconds(45,13), seconds(28,25), seconds(6,33), seconds(55,38)
        ]
        this.video.currentTime = moments[identifyer];
        this.video.play()
    }
}