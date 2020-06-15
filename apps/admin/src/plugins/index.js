import editorPlugin from "./iFrame/admin/editorPlugin";
import advancesSettings from "./iFrame/admin/advancesSettings";
import Switch from './switch/admin/switchEditor'
import AdditionalSettings from './customSettings/index'
import RenderIframe from './iFrame/render/renderPlugin'

const plugins = [
    editorPlugin(),
    advancesSettings(),
    Switch(),
    AdditionalSettings,
    RenderIframe()
]

export default plugins;