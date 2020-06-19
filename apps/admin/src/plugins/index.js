import editorPlugin from "./iFrame/admin/editorPlugin";
import advancesSettings from "./iFrame/admin/advancesSettings";
import RenderIframe from './iFrame/render/renderPlugin'
import SwitchEditor from './switch/admin/switchEditor'
import CustomSettings from './customSettings/index';
import Block from './redesignBlock/index'

const plugins = [
    editorPlugin(),
    advancesSettings(),
    RenderIframe(),
    SwitchEditor(),
    CustomSettings,
    Block
]

export default plugins;