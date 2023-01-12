import { IModel } from "../intf/settings.ts";

const MODEL: IModel = {
  "text-davinci-003": {
    desc:
      "最有能力，可以完成其他模型所能完成的任务，能够理解复杂意图和因果关系。",
    "max-tokens": 4000,
  },
  "text-curie-001": {
    desc:
      "能力稍逊于text-davinci-003，擅长文本情感、复杂分类、语言翻译及问答，且速度更快。",
    "max-tokens": 2048,
  },
  "text-babbage-001": {
    desc: "可以速度非常快地完成简单任务。",
    "max-tokens": 2048,
  },
  "text-ada-001": {
    desc: "可以完成非常简单的任务，速度最快。",
    "max-tokens": 2048,
  },
  "code-davinci-002": {
    desc: "尤为擅长将自然语言翻译成代码。",
    "max-tokens": 8000,
  },
  "code-cushman-001": {
    desc: "能力稍逊于code-davinci-002，但速度更快。",
    "max-tokens": 2048,
  },
};

const API_KEY = "API_Key";

const apiKeyCache = localStorage.getItem("apiKey");
const modelCache = localStorage.getItem("model");
const tempCache = localStorage.getItem("temperature");

const initSettingsState = {
  apiKey: apiKeyCache ? apiKeyCache : "",
  model: modelCache ? modelCache : "text-davinci-003",
  maxTokens: modelCache
    ? MODEL[modelCache]["max-tokens"]
    : MODEL["text-davinci-003"]["max-tokens"],
  temp: tempCache ? parseFloat(tempCache) : 0,
};

export { API_KEY, initSettingsState, MODEL };
