import Toolbar from '@webiny/app-page-builder/editor/components/Editor/Toolbar'
import {getPlugins} from "@webiny/plugins";
import {
    PbEditorToolbarBottomPlugin,
    PbEditorToolbarTopPlugin
} from "@webiny/app-page-builder/types";
import plugins from "../../index";
import {set} from "dot-prop-immutable";
import index from '@webiny/app-page-builder/editor/plugins/elements/block/index';
import {updateElement} from "@webiny/app-page-builder/editor/actions";

const get = () => {
    const Indi = index();
    const {settings} = Indi;
    console.log(settings)
    const key = `settings`
    const newSetting = "pb-editor-page-element-settings-fontchange";
    const newElement = set(Indi, key, newSetting);
    updateElement({element: newElement})
    const newKey = `name`
    const newName = "pb-editor-page-element-block-new";
    const newerElement = set(newElement, newKey, newName);
    updateElement({element: newerElement})
    console.log(newElement)
    console.log("nun")
    console.log(newerElement)
}

export default get;