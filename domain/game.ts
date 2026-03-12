export enum Choice{
    ROCK = "rock",
    PAPER = "paper",
    SCISSORS = "scissors"
}

export enum GameResult {
    USER_WINS="User Wins", COMPUTER_WINS="Computer Wins", REPLAY="Replay"
}

export interface GameData{
    computerChoice: Choice;
    userChoice: Choice;
    gameResult: GameResult;
}

const choices: Choice[] = [Choice.ROCK, Choice.PAPER, Choice.SCISSORS];

export function getRandomChoice(): Choice {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

export function getGameResult(userChoice: Choice, computerChoice: Choice): GameResult {
    switch (userChoice) {
        case Choice.PAPER:
            switch (computerChoice) {
                case Choice.PAPER:
                    return GameResult.REPLAY;
                case Choice.ROCK:
                    return GameResult.USER_WINS;
                default: // Choice.SCISSORS:
                    return GameResult.COMPUTER_WINS;
            }
        case Choice.ROCK:
            switch (computerChoice) {
                case Choice.PAPER:
                    return GameResult.COMPUTER_WINS;
                case Choice.ROCK:
                    return GameResult.REPLAY;
                default: // Choice.SCISSORS:
                    return GameResult.USER_WINS;
            }
        case Choice.SCISSORS: {
            switch (computerChoice) {
                case Choice.PAPER:
                    return GameResult.USER_WINS;
                case Choice.ROCK:
                    return GameResult.COMPUTER_WINS;
                default: // Choice.SCISSORS:
                    return GameResult.REPLAY;
            }
        }
    }
}