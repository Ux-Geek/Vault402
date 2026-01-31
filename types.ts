
export interface GatedContent {
  id: string;
  sellerId: string;
  teaser: string;
  payload: string;
  price: number; // in USDC
  timestamp: number;
}

export enum PaymentStatus {
  IDLE = 'IDLE',
  WAITING = 'WAITING',
  VERIFYING = 'VERIFYING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
