import React from 'react';
import {Switch} from '@rmwc/switch'
import {css} from "emotion"

const outerWrapper = css({
    boxSizing: "border-box"
});

const innerWrapper = css({
    left: 0,
    width: "100%",
    height: "auto",
    position: "relative",
    paddingBottom: 0
});

const Slider = (props) => {
    const {element} = props;

    if (!element.data.iframe.url) {
        return <div>Loading Slider data...</div>;
    }

    return (
        <div
            className={
                "webiny-pb-base-page-element-style webiny-pb-page-element-iframe " + outerWrapper
            }
        >
            <div className={innerWrapper}>
                <div id={element.id}/>
                <iframe src={element.data.iframe.url} width="100%" height={element.data.iframe.height}/>
            </div>
        </div>
    );
};

export default Slider;