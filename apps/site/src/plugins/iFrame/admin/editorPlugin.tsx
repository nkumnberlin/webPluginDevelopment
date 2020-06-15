import React from "react";
import styled from "@emotion/styled";
import {
    PbEditorPageElementPlugin
} from "@webiny/app-page-builder/types";
// @ts-ignore
import {ReactComponent as IFrameIcon} from "./iframe-icon.svg"
import IFrameEmbed from "./iFrameEmbed";

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
        name: "pb-editor-page-element-iframe",
        type: "pb-editor-page-element",
        elementType: "iframe",
        toolbar: {
            // We use `pb-editor-element-group-media` to put our plugin into the Media group.
            title: "iFrame",
            group: "pb-editor-element-group-media",
            preview() {
                return (
                    <PreviewBox>
                        <IFrameIcon/>
                    </PreviewBox>
                );
            }
        },
        settings: ["pb-editor-page-element-settings-delete"],
        onCreate: "open-settings",
        create(options) {
            /*
                Create function is here to create the initial data
                for the page element, which then is utilized in the
                IFrameEmbed component and in the settings dialog.
            */
            return {
                type: "iframe",
                elements: [],
                data: {
                    iframe: {
                        url: "",
                        height: 370
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
                        }
                    }
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
            return <IFrameEmbed {...props} />;
        },
        renderElementPreview({width, height}) {
            return <img style={{width, height}} alt={"iFrame"}/>;
        }
    } as PbEditorPageElementPlugin
}
// We will add a settings dialog plugin here,
// follow the steps in Settings dialog section below.