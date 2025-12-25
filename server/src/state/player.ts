import type { Card } from './card';

const BUYS_LEFT_COUNT_DEFAULT = 3;

export class Player {
  public playerId: number = 1;

  public hand: Card[] = [];

  public buysLeftCount: number = BUYS_LEFT_COUNT_DEFAULT;

  addToHand(cards: Card[]) {
    this.hand.push(...cards);
  }

  removeFromHand(id: string) {
    this.hand.splice(this.hand.findIndex((card) => id == card.id));
  }

  restart() {
    this.buysLeftCount = BUYS_LEFT_COUNT_DEFAULT;
    this.hand = [];
  }
  //use a buy
  reduceBuyCount() {
    this.buysLeftCount -= 1;
  }
}
