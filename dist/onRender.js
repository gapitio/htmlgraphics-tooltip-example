!function(){"use strict";const t=htmlNode.querySelector("#htmlgraphics-value");if(t){const e=data.series[0]?.fields[1];if(e){const s=e.values.length;t.textContent=e.values.get(s-1)}else t.textContent="No data"}}();