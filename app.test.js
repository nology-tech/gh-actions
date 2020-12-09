const getTip = require('./app.js');

test("should tell us amount of the tip", () => {
  const tip = getTip(10, 0.1)
  expect(tip === 1)
});