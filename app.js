const getTip = (billTotal, tipPercent) => {
  const tip = billTotal * tipPercent;
  return tip;
}

module.exports = getTip;