import React from 'react';
import Action from '@webiny/app-page-builder/editor/plugins/elementSettings/components/Action';
import {PbEditorPageElementSettingsPlugin} from '@webiny/app-page-builder/types'
import Settings from "./settings";
//import {ReactComponent as ColorIcon} from "./yformat_size.svg"


export default {
    name: "pb-editor-page-element-settings-fontchange",
    type: "pb-editor-page-element-settings",
    renderAction() {
        return <Action tooltip={"Ändere die Farbe"} plugin={this.name} icon={"Fa"}/>
    },
    renderMenu() {
        return <Settings/>
    }
} as PbEditorPageElementSettingsPlugin;