import React from "react";
import {get} from "lodash";
import {set} from "dot-prop-immutable";

import {connect} from "@webiny/app-page-builder/editor/redux";
import {useHandler} from "@webiny/app/hooks/useHandler";
import {Tabs, Tab} from "@webiny/ui/Tabs";
import {InputContainer} from "@webiny/app-page-builder/editor/plugins/elementSettings/components/StyledComponents";
import {Typography} from "@webiny/ui/Typography";
import {Grid, Cell} from "@webiny/ui/Grid";
import {Form} from "@webiny/form";
import ColorPicker from "@webiny/app-page-builder/editor/components/ColorPicker";

import {updateElement} from "@webiny/app-page-builder/editor/actions";
import {getActiveElement} from "@webiny/app-page-builder/editor/selectors";

const Settings = props => {
    const key = `data.settings.elementColor`;

    const updateColor = useHandler(props, ({element, updateElement}) => async (data, form) => {
        const newData = {}
        const newElement = set(element, key, newData);
        updateElement({element: newElement});
    });
    const onColorChangeComplete = useHandler(props, ({element, updateElement}) => async (data, form) => {
        const newElement = set(element, key, data)
        updateElement({element: newElement})
    })
    const data = get(props.element.data, "settings.elementColor", {fullHeight: false, value: "100%"});

    return (
        <Form data={data}>
            {({Bind, data}) => (
                <Tabs>
                    <Tab label={"Ändere die Farbe"}>
                        <Grid>
                            <Cell span={5}>
                                <Typography use={"overline"}>Farben:</Typography>
                            </Cell>
                            <Cell span={7}>
                                <InputContainer width={"auto"} margin={0}>
                                    <Bind name={"settings.elementColor"}>
                                        <ColorPicker
                                            value={get(key, "color", "#fff")}
                                            onChange={updateColor}
                                            onChangeComplete={onColorChangeComplete}/>
                                    </Bind>
                                </InputContainer>
                            </Cell>
                        </Grid>
                    </Tab>
                </Tabs>
            )}
        </Form>
    );
};

export default connect<any, any, any>(
    state => ({element: getActiveElement(state)}),
    {updateElement}
)(Settings);