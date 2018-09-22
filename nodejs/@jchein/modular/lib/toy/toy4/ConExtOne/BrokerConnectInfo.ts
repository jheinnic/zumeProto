/**
 * Created by jheinnic on 4/30/17.
 */
import {injectable} from "inversify";

@injectable()
export class BrokerConnectInfo {
    readonly host: string;
    readonly port: number;
    
    constructor(host: string, port: number ) {
        this.host = host;
        this.port = port;
    }
}
