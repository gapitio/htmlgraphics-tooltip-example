import "./style.css";
import { computePosition } from "@floating-ui/dom";

const valueElt = htmlNode.querySelector<HTMLButtonElement>(
  "#htmlgraphics-value"
);
const tooltipElt = htmlNode.querySelector<HTMLDivElement>("#tooltip-text");

if (!valueElt) throw new Error("Couldn't find value element");
if (!tooltipElt) throw new Error("Couldn't find tooltip element");

const update = async () => {
  if (valueElt && tooltipElt) {
    const { x, y } = await computePosition(valueElt, tooltipElt, {
      placement: "top",
    });

    Object.assign(tooltipElt.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  }
};

const showTooltip = () => {
  tooltipElt.style.display = "block";
  console.log(3);
  void update();
};

const hideTooltip = () => {
  tooltipElt.style.display = "";
  console.log(2);
};

const showEvents = ["mouseenter", "focus"];
const hideEvents = ["mouseleave", "blur"];
for (const e of showEvents) valueElt.addEventListener(e, showTooltip);
for (const e of hideEvents) valueElt.addEventListener(e, hideTooltip);
