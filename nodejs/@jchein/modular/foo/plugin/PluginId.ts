/**
 * Created by jheinnic on 4/26/17.
 */
import {InjectionToken} from "@bstock/metajs/dist";


export class PluginId extends InjectionToken<IPluginProvider> {
    constructor(pluginId: string) {
        super(pluginId);
    }
}
