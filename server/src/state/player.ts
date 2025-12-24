import type { Card } from './card';

const BUYS_LEFT_COUNT_DEFAULT = 3;

export class Player {
  public hand: Card[] = [];

  public buysLeftCount: number = BUYS_LEFT_COUNT_DEFAULT;

  public desk: Card[][] = [];

  addToHand(cards: Card[]) {
    this.hand.push(...cards);
  }

  addToDesk(cards: Card[], index?: number) {
    if (index === undefined) {
      this.desk.push(cards);
      return;
    }

    const deskGroup = this.desk[index];
    if (!deskGroup) {
      return;
    }

    deskGroup.push(...cards);
  }

  removeFromHand(id: string) {
    return this.hand.filter((card) => id == card.id);
  }

  //restart buy count
  restart() {
    this.buysLeftCount = BUYS_LEFT_COUNT_DEFAULT;
    this.hand = [];
    this.desk = [];
  }
  //use a buy
  reduceBuyCount() {
    this.buysLeftCount -= 1;
  }
}
