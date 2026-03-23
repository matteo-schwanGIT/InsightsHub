// bot-stats.js

// Display bot command statistics

class BotStats {
    constructor() {
        this.commands = {};
    }

    recordCommand(command) {
        if (!this.commands[command]) {
            this.commands[command] = 0;
        }
        this.commands[command]++;
    }

    displayStats() {
        console.log('Command Statistics:');
        for (const command in this.commands) {
            console.log(`${command}: ${this.commands[command]}`);
        }
    }
}

// Example usage
const stats = new BotStats();
stats.recordCommand('!help');
stats.recordCommand('!play');
stats.recordCommand('!help');
stats.displayStats();
