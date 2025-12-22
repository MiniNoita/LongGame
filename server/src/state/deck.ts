import { v4 } from 'uuid';
import type { Card } from './card';
import { SUITS, RANKS } from './card';

export class Deck {
  public cards: Card[] = [];

  public yoink(): Card | undefined {
    return this.cards.pop();
  }
  // reset
  public reset(): void {
    this.cards = [];
    for (let i = 0; i < 2; i++) {
      SUITS.forEach((suit) => {
        RANKS.forEach((rank) => {
          this.cards.push({
            id: v4(),
            kind: 'Stantard',
            suit: suit,
            rank: rank,
          });
        });
      });
    }
    for (let i = 0; i < 4; i++) {
      this.cards.push({
        id: v4(),
        kind: 'Joker',
      });
    }
  }
  // Shuffle function
  shuffle() {
    for (let i: number = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.cards[i]!;
      this.cards[i] = this.cards[j]!;
      this.cards[j] = temp;
    }
  }
  // add cards to the pile
  add(cards: Card[]) {
    this.cards.push(...cards);
  }
}
