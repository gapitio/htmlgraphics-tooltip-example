// Sets the value from the first series on every refresh
const htmlgraphicsValue = htmlNode.querySelector<HTMLSpanElement>(
  "#htmlgraphics-value"
);

if (htmlgraphicsValue) {
  const valueField = data.series[0]?.fields[1];
  if (valueField) {
    const length = valueField.values.length;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    htmlgraphicsValue.textContent = valueField.values.get(length - 1);
  } else {
    htmlgraphicsValue.textContent = "No data";
  }
}
