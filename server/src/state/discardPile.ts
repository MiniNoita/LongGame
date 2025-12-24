import type { Card } from './card';

export class DiscardPile {
  public discardCards: Card[] = [];

  //add a card to the discard pile
  add(card: Card) {
    this.discardCards.push(card);
  }

  // When player buys a card, take the last card aka the card on top of the discard pile
  takeLatestCard() {
    return this.discardCards.pop();
  }

  reset() {
    this.discardCards = [];
  }

  eject() {
    const remainingCards = this.discardCards;
    this.reset();
    return remainingCards;
  }
}
