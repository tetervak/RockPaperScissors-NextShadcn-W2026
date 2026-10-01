'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import {Choice, GameData, GameResult, getGameResult, getRandomChoice} from "@/domain/game";

interface GameContextType {
    gameData: GameData;
    updateUserChoice: (choice: Choice) => void;
    updateComputerChoice: () => void;
    updateGameResult: () => void;
    resetGame: () => void;
}

const defaultGameData: GameData = {
    computerChoice: Choice.ROCK,
    userChoice: Choice.ROCK,
    gameResult: GameResult.REPLAY
}

const GameContext = createContext<GameContextType | null>(null);

interface GameProviderProps {
    children: ReactNode;
}

export function GameProvider({ children }: GameProviderProps) {
    const [gameData, setGameData] = useState<GameData>(defaultGameData);

    const updateUserChoice = (choice: Choice) => {
        setGameData(prevState => ({
            ...prevState,
            userChoice: choice
        }));
    }

    const updateComputerChoice = () => {
        setGameData(prevState => ({
            ...prevState,
            computerChoice: getRandomChoice()
        }));
    }

    const updateGameResult = () => {
        setGameData(prevState => ({
            ...prevState,
            gameResult: getGameResult(prevState.userChoice, prevState.computerChoice)
        }));
    }

    const resetGame = () => {
        setGameData(defaultGameData);
    }

    return(
        <GameContext value={{
            gameData,
            updateUserChoice,
            updateComputerChoice,
            updateGameResult,
            resetGame
        }}>
            {children}
        </GameContext>
    )
}

export function useGame(): GameContextType {
    const context = useContext(GameContext);
    if (context === null) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
}
