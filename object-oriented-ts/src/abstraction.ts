abstract class MediaPlayer{
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class MusicPlayer extends MediaPlayer{
    play(){
        console.log(`Playing music...`)
    }

    pause(){
        console.log(`Music paused...`)
    }

    stop(){
        console.log(`Music stopped!!!`)
    }
}

const musicPlayer1 = new MusicPlayer();
musicPlayer1.play;
musicPlayer1.pause;
musicPlayer1.stop;