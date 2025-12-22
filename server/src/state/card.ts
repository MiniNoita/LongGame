// H = hearts/hertta, D = diamonds/ruutu, C= Clubs/risti, S = spades/pata
export type Suit = 'H' | 'D' | 'C' | 'S';
export const SUITS = ['H', 'D', 'C', 'S'] as const;

export type Rank =
  | 'A'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K';
export const RANKS = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
] as const;

type StantardCard = {
  id: string;
  kind: 'Stantard';
  suit: Suit;
  rank: Rank;
};

type JokerCard = {
  id: string;
  kind: 'Joker';
};

export type Card = StantardCard | JokerCard;
