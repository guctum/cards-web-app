export class PlayingCard {
    id: number;
    suit: string;
    clasicValue: number; // used for the UI to render cards from 2-10, J, K, Q, A
    blackjackValue?: number;
    isAce:boolean;
}
