import { StockEventsRecord, Trading212Record } from "../types";

export function convertCsvRowToTrading212Record(
  row: string[]
): Trading212Record {
  const [
    action,
    time,
    isin,
    ticker,
    name,
    noOfShares,
    pricePerShare,
    currencyOfPricePerShare,
    exchangeRate,
    total,
    withholdingTax,
    currencyOfWithholdingTax,
    chargeAmount,
    stampDutyReserveTax,
    notes,
    id,
    currencyConversionFee,
  ] = row;
  return {
    action: action as Trading212Record["action"],
    time,
    isin,
    ticker,
    name,
    noOfShares: parseFloat(noOfShares),
    pricePerShare: parseFloat(pricePerShare),
    currencyOfPricePerShare,
    exchangeRate: parseFloat(exchangeRate),
    total: parseFloat(total),
    withholdingTax: parseFloat(withholdingTax),
    currencyOfWithholdingTax,
    chargeAmount: parseFloat(chargeAmount),
    stampDutyReserveTax: parseFloat(stampDutyReserveTax),
    notes,
    id,
    currencyConversionFee: parseFloat(currencyConversionFee),
  };
}

export function convertTrading212RecordToStockEventsRecord(
  trading212Record: Trading212Record
): StockEventsRecord {
  const { action, time, ticker, noOfShares, pricePerShare } = trading212Record;
  return {
    Price: pricePerShare,
    Date: time.substr(0, 10),
    Quantity: action === "Market sell" ? -noOfShares : noOfShares,
    Symbol: ticker,
  };
}
