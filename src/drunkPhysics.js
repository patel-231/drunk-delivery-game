// Drunk Character Physics System

class DrunkPhysics {
    constructor() {
        this.state = 'normal'; // normal, tipsy, wasted
        this.speed = 0;
        this.direction = 0; // angle in degrees
    }

    update() {
        switch (this.state) {
            case 'normal':
                this.speed = Math.random() * 5; // normal speed
                break;
            case 'tipsy':
                this.speed = Math.random() * 2; // slower
                this.direction += (Math.random() - 0.5) * 30; // random turn
                break;
            case 'wasted':
                this.speed = Math.random() * 1; // very slow
                this.direction += (Math.random() - 0.5) * 60; // more random turn
                break;
        }
    }

    changeState(newState) {
        if (['normal', 'tipsy', 'wasted'].includes(newState)) {
            this.state = newState;
        }
    }
}

// Export the class for use in other modules
export default DrunkPhysics;