import adminTemplate from "@webiny/app-template-admin-full";
import "./App.scss";
import plugin from "./plugins";
import {registerPlugins} from '@webiny/plugins';


registerPlugins(plugin);

export default adminTemplate({
    cognito: {
        region: process.env.REACT_APP_USER_POOL_REGION,
        userPoolId: process.env.REACT_APP_USER_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID
    }
});
