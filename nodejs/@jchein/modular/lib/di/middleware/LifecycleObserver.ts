/**
 * Created by jheinnic on 4/27/17.
 */
import {interfaces} from "inversify";
import Middleware = interfaces.Middleware;
import NextArgs = interfaces.NextArgs;
import Next = interfaces.Next;

export function lifecycleMiddleware(planAndResolve: Next): Next {
    return (args: NextArgs) => {
        console.log("Middleware: " + JSON.stringify(args));
        let nextContextInterceptor = args.contextInterceptor;
        args.contextInterceptor = (context: interfaces.Context) => {
            console.log("Interceptor: " + JSON.stringify(context));
            return nextContextInterceptor(context);
        };
        return planAndResolve(args);
    };
}

export const LifecycleObserver = lifecycleMiddleware;

export default LifecycleObserver;
