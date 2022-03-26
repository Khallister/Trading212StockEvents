import { FunctionComponent, HTMLAttributes } from "react";

export type FnComponent = FunctionComponent<HTMLAttributes<HTMLElement>>;

export type Trading212ActionType = "Market buy" | "Market sell" | "Deposit";

export type Trading212Record = {
  action: Trading212ActionType;
  time: string;
  isin: string;
  ticker: string;
  name: string;
  noOfShares: number;
  pricePerShare: number;
  currencyOfPricePerShare: string;
  exchangeRate: number;
  total: number;
  withholdingTax: number;
  currencyOfWithholdingTax: string;
  chargeAmount: number;
  stampDutyReserveTax: number;
  notes: string;
  id: string;
  currencyConversionFee: number;
};

export type StockEventsRecord = {
  Symbol: string;
  Date: string;
  Quantity: number;
  Price: number;
};
