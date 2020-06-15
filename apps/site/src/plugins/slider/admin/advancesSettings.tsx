import React from "react";
import {Tab} from "@webiny/ui/Tabs";
import {Input} from "@webiny/ui/Input";
import {Grid, Cell} from "@webiny/ui/Grid";
import {
    PbEditorPageElementAdvancedSettingsPlugin
} from "@webiny/app-page-builder/types";
import {validation} from "@webiny/validation";
// @ts-ignore
import {ReactComponent as IFrameIcon} from "./iframe-icon.svg"


export default () => {
    return {
        name: "pb-editor-page-element-advanced-settings-iframe",
        type: "pb-editor-page-element-advanced-settings",
        elementType: "iframe",
        render({Bind}) {
            return (
                <Tab icon={<IFrameIcon/>} label="IFrame">
                    <Grid>
                        <Cell span={12}>
                            {/*
                                    Using the `Bind` component we are able to set
                                    the URL to the page elements `data` property,
                                    which can be accessed in the already mentioned
                                    render function via received props.
                                */}
                            <Bind
                                name={"iframe.url"}
                                validators={validation.create("required,url")}
                            >
                                <Input
                                    label={"IFrame URL"}
                                    description={"Enter an iFrame URL"}
                                />
                            </Bind>
                        </Cell>
                    </Grid>
                </Tab>
            );
        }
    } as PbEditorPageElementAdvancedSettingsPlugin
}