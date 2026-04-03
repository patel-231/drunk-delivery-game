// Drunk Delivery Game Logic

class Player {
    constructor() {
        this.position = { x: 0, y: 0 }; // player's position
        this.velocity = { x: 0, y: 0 }; // player's velocity
        this.isDrunk = false; // drunken state
    }

    move(direction) {
        // Basic movement logic
        switch(direction) {
            case 'left':
                this.velocity.x = -5;
                break;
            case 'right':
                this.velocity.x = 5;
                break;
            case 'up':
                this.velocity.y = -5;
                break;
            case 'down':
                this.velocity.y = 5;
                break;
            default:
                this.velocity = { x: 0, y: 0 }; // stop moving
        }
        this.updatePosition();
    }

    updatePosition() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.handleBoundaries();
        this.applyDrunkPhysics();
    }

    handleBoundaries() {
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.y < 0) this.position.y = 0;
        // Add more boundaries as needed
    }

    applyDrunkPhysics() {
        if (this.isDrunk) {
            this.position.x += (Math.random() - 0.5) * 10; // Randomly alters position
            this.position.y += (Math.random() - 0.5) * 10;
        }
    }

    toggleDrunkState() {
        this.isDrunk = !this.isDrunk;
    }
}

class Toilet {
    constructor() {
        this.pressure = 100; // pressure level
    }

    flush() {
        this.pressure = 0;
    }

    updatePressure(amount) {
        this.pressure += amount;
        if (this.pressure > 100) this.pressure = 100; // Max pressure
    }
}

class DeliveryGame {
    constructor() {
        this.player = new Player();
        this.toilet = new Toilet();
        this.score = 0;
        this.obstacles = []; // Array to hold obstacles
    }

    spawnObstacle(obstacle) {
        this.obstacles.push(obstacle);
    }

    collisionCheck() {
        // Check collisions between player and obstacles
        this.obstacles.forEach((obstacle) => {
            if (this.isColliding(this.player.position, obstacle)) {
                this.handleCollision();
            }
        });
    }

    isColliding(playerPos, obstacle) {
        // Basic collision detection logic
        return playerPos.x < obstacle.x + obstacle.width &&
               playerPos.x + 50 > obstacle.x && // Assuming player width of 50
               playerPos.y < obstacle.y + obstacle.height &&
               playerPos.y + 50 > obstacle.y; // Assuming player height of 50
    }

    handleCollision() {
        // Logic for when player collides with an obstacle
        this.player.toggleDrunkState(); // Example reaction
    }

    updateUI() {
        // Logic to update UI (score, pressure, etc.)
        console.log(`Score: ${this.score}, Toilet Pressure: ${this.toilet.pressure}`);
    }
}

// Game initialization
const game = new DeliveryGame();

// Simulated game loop
setInterval(() => {
    game.updateUI();
    game.collisionCheck();
}, 1000); // Update UI and check collisions every second

