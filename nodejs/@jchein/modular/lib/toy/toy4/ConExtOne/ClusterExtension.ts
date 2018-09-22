/**
 * Created by jheinnic on 4/30/17.
 */
import {multiInject} from "inversify";
import {BrokerConnectInfo} from "./BrokerConnectInfo";
import {Type} from "../../../../scripts";


export class ClusterExtension {
    constructor(@multiInject(Type.Registry.getLatest().BrokerConnectInfo) plug: BrokerConnectInfo[]) {
        console.log(JSON.stringify(plug));
    }
}
