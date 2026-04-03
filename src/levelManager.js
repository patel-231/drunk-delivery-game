// levelManager.js

class LevelManager {
    constructor() {
        this.currentLevel = 0;
        this.gameModes = ['easy', 'medium', 'hard'];
        this.levels = [];
    }

    initLevels() {
        // Initialize levels according to game modes
        // This is just a skeleton, customize as needed
        this.levels = this.gameModes.map((mode, index) => ({
            mode: mode,
            level: {
                number: index + 1,
                difficulty: this.getDifficulty(mode),
            }
        }));
    }

    getDifficulty(mode) {
        const difficulties = {
            easy: 'Low',
            medium: 'Medium',
            hard: 'High'
        };
        return difficulties[mode];
    }

    advanceLevel() {
        if (this.currentLevel < this.levels.length - 1) {
            this.currentLevel++;
        } else {
            console.log('All levels completed!');
        }
    }

    getCurrentLevel() {
        return this.levels[this.currentLevel];
    }
}

module.exports = LevelManager;