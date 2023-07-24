import numeral from "numeral";

export const FormatMoney = (value, useDecimals) => {
  if (!value) return 0;

  if (typeof value === "string") value = Number(value);

  let currency = process.env.REACT_APP_COUNTRY_CURRENCY
    ? process.env.REACT_APP_COUNTRY_CURRENCY + " "
    : "";

  return currency + numeral(value).format(useDecimals ? "0,0,0.00" : "0,0,0");
};

export const numberFormat = (
  number,
  maximumFractionDigits = 2,
  minimumFractionDigits = 2
) => {
  if (minimumFractionDigits > maximumFractionDigits) {
    minimumFractionDigits = maximumFractionDigits;
  }
  return Number(number).toLocaleString(undefined, {
    maximumFractionDigits,
    minimumFractionDigits,
  });
};
