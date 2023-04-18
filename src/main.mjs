const statusMessage = document.getElementById("status-message")
statusMessage.innerHTML = (crossOriginIsolated ? "🟢" : "🌕") + " WebR Loading…"

import { WebR } from '@r-wasm/webr'

// this can be accessed everywhere as "webR"
const webR = new WebR();
await webR.init();

const webRVersion = document.getElementById("webr-version")

webRVersion.innerHTML = await webR.evalRString(`R.version.string`)

statusMessage.innerHTML = (crossOriginIsolated ? "🟢" : "🌕") + " WebR Loaded!"
