import { BigNumber } from 'ethers';
import { UnibotPosition } from '../connectors/unibot/unibot';
import { NetworkSelectionRequest } from '../services/common-interfaces';

export interface FactoryInfoRequest {
  chain?: string;
  network?: string;
  pair?: string;
}

export interface EstimateBuyTradeRequest extends NetworkSelectionRequest {
  pair: string;
  address: string;
  amount: BigNumber;
  stopLossPercent: BigNumber;
}

export interface EstimateBuyTradResponse {
  pair: any;
  tick: any;
  estimatePrice: any;
  wantAmount: any;
  balance: any;
  stopLossUpper: any;
  stopLossLower: any;
  estimatePriceStopLossUpper: any;
  estimatePriceStopLossLower: any;
  borrowRatioList: any;
  tickSpacing: any;
  positionIds: any;
}

export interface EstimateSellTradeRequest extends NetworkSelectionRequest {
  pair: string;
  address: string;
  positionId?: any;
}

export interface EstimateOpenPositionRequest extends NetworkSelectionRequest {
  address: string;
  pair: string;
  wantTokenAmount: BigNumber;
  amount: BigNumber;
  borrowRatio: BigNumber;
  spotPriceTick: BigNumber;
  slippage: BigNumber;
  reserveRatio: BigNumber;
  stopLossUpperPriceTick: BigNumber;
  stopLossLowerPriceTick: BigNumber;
  tickRange: BigNumber;
  proof?: string[];
  gasLimit?: number;
  gasPrice?: number;
}

export interface EstimateClosePositionRequest extends NetworkSelectionRequest {
  address: string;
  pair: string;
  positionId: BigNumber;
  spotPriceTick: BigNumber;
  slippage: BigNumber;
  proof?: string[];
  gasLimit?: number;
  gasPrice?: number;
}

export interface UnibotPositionResponse extends UnibotPosition {
  network: string;
  timestamp: number;
  latency: number;
  base: string;
  quote: string;
}
