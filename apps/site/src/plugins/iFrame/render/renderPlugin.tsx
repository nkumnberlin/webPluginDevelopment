import React from 'react';
import IFrame from "./IFrame";
import {PbRenderElementPlugin} from "@webiny/app-page-builder/types";

export default (): PbRenderElementPlugin => {
    return {
        name: "pb-render-page-element-iframe",
        type: "pb-render-page-element",
        elementType: "iframe",
        render({element}) {
            return <IFrame data={element.data}/>;
        }
    };
}