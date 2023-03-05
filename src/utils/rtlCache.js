// Adding support for RTL
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

import createCache from "@emotion/cache";
// Create rtl cache
export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
export const cacheLtr = createCache({
  key: "muiltr",
});
