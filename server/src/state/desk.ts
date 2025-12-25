import type { Card } from './card';
import { Player } from './player';

type DeskGroupItem = {
  card: Card;
  player: Player;
};
type DeskGroup = {
  id: string;
  items: DeskGroupItem[];
  rule: 'Same number' | 'Same suit straight';
};

class Desk {
  //each players own desk
  public deskGroup: DeskGroup[] = [];

  // addToPlayer(cards: Card[], index?: number) {
  //   if (index === undefined) {
  //     this.deskGroup.push(cards);
  //     return;
  //   }

  //   const group = this.deskGroup[index];
  //   if (!group) {
  //     return;
  //   }

  //   group.push(...cards);
  // }

  restart() {
    this.deskGroup = [];
  }
}
