import { WebR } from '@r-wasm/webr'

// this can be accessed everywhere as "webR"
globalThis.webR = new WebR();
await globalThis.webR.init();