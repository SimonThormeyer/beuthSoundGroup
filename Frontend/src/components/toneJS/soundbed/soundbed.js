let Tone;

export class Soundbed {

    constructor() {
        this.initialized = false;
        import('tone').then(module => {
            Tone = module.default;
            this.delay = new Tone.Delay(0.2, 8).toMaster()
            this.player = new Tone.Player("./soundbed1.mp3").connect(this.delay)
            this.player.set("volume", -23)
            this.player.loop = true
            this.initialized = true;
        })
    }

    playPauseSoundbed() {
        if(!this.initialized) return;
        this.player.set("fadeIn", 5)
        this.player.set("playbackRate", 1)
        this.player.set("fadeOut", 5)
        this.player.state === "started" ? this.player.stop() : this.player.start()
    }

}




