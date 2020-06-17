import React from 'react';
import {Switch} from '@rmwc/switch'
import {css} from "emotion"
import {set} from "dot-prop-immutable";
import {useHandler} from "@webiny/app/hooks/useHandler";
import {ElementRoot} from '@webiny/app-page-builder/render/components/ElementRoot'
import ConnectedElement from "@webiny/app-page-builder/editor/components/ConnectedElement";
import styled from 'styled-components';

import {updateElement} from "@webiny/app-page-builder/editor/actions";
import {connect} from '@webiny/app-page-builder/editor/redux'

import {getElement} from "@webiny/app-page-builder/editor/selectors";

const center = css({textAlign: "center"});

const SwitchElement = props => {
    const {element} = props;
    return (
        /**ElementRoot:
         Necessary to combine the existing css classes and converting them into spreadable useable css classes for react
         components
         **/
        <ElementRoot element={element}>
            {({getAllClasses, elementStyle}) => (
                <ConnectedElement elementId={element.id}>
                    {element => {
                        /**
                         Functionbody
                         */
                        const key = `data.switch.state`;
                        const {data} = element;
                        const updateSwitch = useHandler(props, ({element, updateElement}) => async (data, form) => {
                            const newState = !element.data.switch.state;
                            const newElement = set(element, key, newState);
                            updateElement({element: newElement})
                        })
                        const StyledSwitch = styled(Switch)`
                        --mdc-theme-secondary: ${data.settings.elementColor} !important; 
                        `;
                        const className = getAllClasses(
                            "webiny-pb-base-page-element-style webiny-pb-base-page-element-switch",
                            center
                        );
                        return (
                            <div className={className} style={elementStyle}>
                                <div id={element.id}/>
                                <StyledSwitch checked={data.switch.state}
                                              onChange={updateSwitch}/>
                            </div>
                        )
                    }}
                </ConnectedElement>
            )
            }
        </ElementRoot>
    )
}
export default connect<any, any, any>(
    (state, props) => ({element: getElement(state, props.element.id)}),
    ({updateElement: updateElement})
)(SwitchElement)