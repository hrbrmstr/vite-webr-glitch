import { WebR } from '@r-wasm/webr'

// this can be accessed everywhere as "webR"
const webR = new WebR();
await webR.init();

document.getElementById("status-message").innerHTML = crossOriginIsolated
document.getElementById("webr-version").innerHTML = await webR.evalRString(`R.version.string`)