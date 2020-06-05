import { PlayingCard } from "./playing-card.model"
export class Player {
    id?: number;
    name: string;
    bankroll: number;
    amountWon?: number;
    isDealer?: boolean;
    cards?: PlayingCard[];
    points: number;
    standing?: boolean; // refers to "standing" property, when the player stands (doesn't accept more cards)
    gameModeOn?: boolean;
    currentBetValue?: number;
    bust?: boolean; // refers to "bust" property, when player exceeds 21
    naturalBlackjack?: boolean; // refers to when the player has 21 points from just 2 cards
    winnerOfRound?: boolean;
}
