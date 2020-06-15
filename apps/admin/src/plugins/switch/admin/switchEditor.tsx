import React from "react";
import styled from "@emotion/styled";
import {
    PbEditorPageElementPlugin
} from "@webiny/app-page-builder/types";
// @ts-ignore
import {ReactComponent as IFrameIcon} from "./iframe-icon.svg"
import Switch from "./switch";

const PreviewBox = styled("div")({
    textAlign: "center",
    height: 50,
    svg: {
        height: 50,
        width: 50
    }
});

export default () => {
    return {
        name: "pb-editor-page-element-switch",
        type: "pb-editor-page-element",
        elementType: "switch",
        toolbar: {
            title: "Switch",
            group: "pb-editor-element-group-basic",
            preview() {
                return (
                    <PreviewBox>
                        <div> SWTICH</div>
                    </PreviewBox>
                );
            }
        },
        settings: [
            "pb-editor-page-element-settings-horizontal-align",
            "pb-editor-page-element-settings-delete",
            "pb-editor-page-element-settings-padding",
            "pb-editor-page-element-settings-margin",
            "pb-editor-page-element-settings-width",
            "pb-editor-page-element-settings-height",
            "pb-editor-page-element-settings-background",
            "pb-editor-page-element-settings-fontchange",

        ],
        // onCreate: "open-settings",
        create(options) {
            /*
                Create function is here to create the initial data
                for the page element, which then is utilized in the
                IFrameEmbed component and in the settings dialog.
            */
            return {
                type: "switch",
                elements: [],
                data: {
                    dd: {
                        height: 10,
                        text: "dasd"
                    },
                    settings: {
                        horizontalAlign: "center",
                        margin: {
                            desktop: {all: 0},
                            mobile: {all: 0}
                        },
                        padding: {
                            desktop: {all: 0},
                            mobile: {all: 0}
                        },
                    },

                },
                ...options
            };
        },
        render(props) {
            /*
                Every render function receives the page element's
                data assigned to the "element.data" property in
                the received props. In here we will store the
                "iframe.url" which will be provided via the page
                element's settings dialog.
            */
            console.log(props)
            return <Switch {...props} />;
        }
        ,
        renderElementPreview({width, height}) {
            return <img style={{width, height}} alt={"Switch"}/>;
        }
    } as PbEditorPageElementPlugin
}
// We will add a settings dialog plugin here,
// follow the steps in Settings dialog section below.