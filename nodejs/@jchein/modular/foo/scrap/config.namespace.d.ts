import "reflect-metadata";
export declare module configmodel {
    interface ILogging {
        logDir: string;
        filePrefix: string;
        fileSuffix: string;
        defaultLevel: string;
    }
    interface IRetry {
        wait: number;
        count: number;
    }
    interface ITimeout {
        connection: number;
        session: number;
    }
    interface IZookeeper {
        connectString: string;
        basePath: string;
        retry: IRetry;
        timeout: ITimeout;
    }
    interface IEventBus {
        publish: string;
        subscribe: string;
    }
    interface IMessaging {
        app: IEventBus;
        cluster: IEventBus;
    }
    interface IKafkaDataSource {
        type: "kafka";
        host: string;
        port: number;
        username: string;
        password: string;
    }
    interface IMongoDataSource {
        type: "mongodb";
        host: string;
        port: number;
        username: string;
        password: string;
        schema: string;
    }
    type IDataSource = IKafkaDataSource | IMongoDataSource;
    interface IDataSources {
        mongodb: Map<string, IMongoDataSource>;
        kafka: Map<string, IKafkaDataSource>;
    }
    interface IBaseMicroservice {
        discoveryName: string;
        version: string;
        searchPaths: string;
        moduleIds: string;
        dataSources: string;
        clientOf: string;
    }
    interface IWebMicroservice extends IBaseMicroservice {
        type: 'web';
        bindHost: string;
        bindPort: number;
        mountPath: string;
    }
    interface IRpcMicroservice extends IBaseMicroservice {
        type: 'rpc';
        bindHost: string;
        requestBindPort: number;
        replyBindPort: number;
    }
    interface ITaskMicroservice extends IBaseMicroservice {
        type: 'task';
    }
    type IMicroservice = IWebMicroservice | IRpcMicroservice | ITaskMicroservice;
    interface IMicroservices {
        web: Map<string, IWebMicroservice>;
        rpc: Map<string, IRpcMicroservice>;
        task: Map<string, ITaskMicroservice>;
    }
    interface IBStockConfig {
        thisMicroservice?: string;
        logging: ILogging;
        zookeeper: IZookeeper;
        messaging: IMessaging;
        dataSources: IDataSources;
        microservices: IMicroservices;
    }
    /**
     * Classes!!
     */
    class Logging implements ILogging {
        logDir: string;
        filePrefix: string;
        fileSuffix: string;
        defaultLevel: string;
    }
    class Retry implements IRetry {
        wait: number;
        count: number;
    }
    class Timeout implements ITimeout {
        connection: number;
        session: number;
    }
    class Zookeeper implements IZookeeper {
        connectString: string;
        basePath: string;
        retry: Retry;
        timeout: Timeout;
    }
    class EventBus implements IEventBus {
        publish: string;
        subscribe: string;
    }
    class Messaging implements IMessaging {
        app: EventBus;
        cluster: EventBus;
    }
    class KafkaDataSource implements IKafkaDataSource {
        type: "kafka";
        host: string;
        port: number;
        username: string;
        password: string;
        schema: string;
    }
    class MongoDataSource implements IMongoDataSource {
        type: "mongodb";
        host: string;
        port: number;
        username: string;
        password: string;
        schema: string;
    }
    class DataSources implements IDataSources {
        mongodb: Map<string, MongoDataSource>;
        kafka: Map<string, KafkaDataSource>;
    }
    abstract class BaseMicroservice implements IBaseMicroservice {
        discoveryName: string;
        version: string;
        searchPaths: string;
        moduleIds: string;
        clientOf: string;
        dataSources: string;
    }
    class WebMicroservice extends BaseMicroservice implements IWebMicroservice {
        type: "web";
        bindHost: string;
        bindPort: number;
        mountPath: string;
    }
    class RpcMicroservice extends BaseMicroservice implements IRpcMicroservice {
        type: "rpc";
        bindHost: string;
        requestBindPort: number;
        replyBindPort: number;
        mountPath: string;
    }
    class TaskMicroservice extends BaseMicroservice implements ITaskMicroservice {
        discoveryName: string;
        version: string;
        searchPaths: string;
        moduleIds: string;
        dataSources: string;
        clientOf: string;
        type: "task";
    }
    class Microservices implements IMicroservices {
        web: Map<string, IWebMicroservice>;
        rpc: Map<string, IRpcMicroservice>;
        task: Map<string, ITaskMicroservice>;
    }
    class BStockConfig implements IBStockConfig {
        thisMicroservice: string;
        logging: Logging;
        zookeeper: Zookeeper;
        messaging: Messaging;
        dataSources: DataSources;
        microservices: Microservices;
    }
}
