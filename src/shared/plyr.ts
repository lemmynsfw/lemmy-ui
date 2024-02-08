import { isBrowser } from "@utils/browser";

export let Plyr: any;

if (isBrowser()) {
  Plyr = require("plyr");
}
