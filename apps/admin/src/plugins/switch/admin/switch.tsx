import React, {useState, useMemo} from 'react';
import {Switch} from '@rmwc/switch'
import {css} from "emotion"
import {ElementRoot} from '@webiny/app-page-builder/render/components/ElementRoot'
import ConnectedElement from "@webiny/app-page-builder/editor/components/ConnectedElement";
import styled from 'styled-components';
import {getPlugin, getPlugins} from '@webiny/plugins';
import {
    PbEditorPageElementPlugin
} from "@webiny/app-page-builder/types";
import {connect} from '@webiny/app-page-builder/editor/redux'
import {getElement} from "@webiny/app-page-builder/editor/selectors";
import {Store} from '@webiny/app-page-builder/types'

const outerWrapper = css({
    boxSizing: "border-box"
});

const center = css({textAlign: "center"});

const SwitchElement = (props) => (
    /**ElementRoot:
     Necessary to combine the existing css classes and converting them into spreadable useable css classes for react
     components
     **/
    <ElementRoot element={props.element}>
        {({getAllClasses, elementStyle}) => (
            <ConnectedElement elementId={props.element.id}>
                {element => {
                    /**
                     Functionbody
                     */
                    const {data} = element;
                    const [checked, setChecked] = useState(false);
                    const StyledSwitch = styled(Switch)`
                    --mdc-theme-secondary: ${data.settings.elementColor} !important; 
                    `;
                    const className = getAllClasses(
                        "webiny-pb-base-page-element-style webiny-pb-base-page-element-switch",
                        center
                    );
                    // const Loader = useMemo(() => {
                    //     const plugins = getPlugins<PbEditorPageElementPlugin>("pb-editor-page-element-switch");
                    //     const pl = plugins.find(pl => pl.elementType === "switch");
                    //     debugger;
                    //     return pl ? pl.plugin : null;
                    // }, []);
                    debugger;
                    return (
                        <div className={className} style={elementStyle}>
                            <div id={element.id}/>
                            <StyledSwitch checked={checked}

                                          onChange={evt => setChecked(!!evt.currentTarget.checked)}/>
                        </div>
                    )
                }}
            </ConnectedElement>
        )
        }
    </ElementRoot>
)

export default connect<any, any, any>(
    (state, props) => ({element: getElement(state, props.elementId)}),
)(SwitchElement)