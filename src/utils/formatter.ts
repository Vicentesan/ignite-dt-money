export const priceFormatter = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency',
  currencyDisplay: 'symbol',
  useGrouping: true,
})
