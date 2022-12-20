import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    boxShadow: {
      "neu": "4px 4px 8px #bebebe, -4px -4px 8px #ffffff",
      "neu-inner": "inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff",
      "neu-inner-sm": "inset 1px 1px 2px #bebebe, inset -1px -1px 2px #ffffff",
      "neu-bottom": "0px 4px 8px #bebebe",
      "neu-top": "0px -4px 8px #ffffff",
    },
    borderColor: {
      "light-gray": "#bebebe",
    },
    backgroundColor: {
      "neu": "#e0e0e0",
    },
    minWidth: {
      "xs": "320px",
      "fit": "fit-content",
    },
  },
  plugins: {},
} as Options;
