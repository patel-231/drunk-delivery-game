// audioSystem.js

class AudioSystem {
    constructor() {
        this.beatPlaying = false;
        this.musicPlaying = false;
    }

    playBeat() {
        if (!this.beatPlaying) {
            console.log('Playing beat...');
            this.beatPlaying = true;
            // Logic to play beat audio
        }
    }

    stopBeat() {
        if (this.beatPlaying) {
            console.log('Stopping beat...');
            this.beatPlaying = false;
            // Logic to stop beat audio
        }
    }

    playMusic() {
        if (!this.musicPlaying) {
            console.log('Playing music...');
            this.musicPlaying = true;
            // Logic to play music audio
        }
    }

    stopMusic() {
        if (this.musicPlaying) {
            console.log('Stopping music...');
            this.musicPlaying = false;
            // Logic to stop music audio
        }
    }
}

// Example usage
const audioSystem = new AudioSystem();
audioSystem.playMusic();
audioSystem.playBeat();