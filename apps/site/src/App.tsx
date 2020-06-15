import createSite, {SiteAppOptions} from "@webiny/app-template-site";
import "./App.scss";
import {Drawer} from '@webiny/ui/Drawer';
import {registerPlugins} from '@webiny/plugins';
import plugins from "./plugins";

registerPlugins(plugins);

export default (params: SiteAppOptions = {}) => {
    return createSite(params);
};
