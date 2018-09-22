// import ProvideInWhenOnSyntax from "../syntax/provide_in_when_on_syntax";
// import ProvideWhenSyntax from "../syntax/provide_when_syntax";
// import ProvideOnSyntax from "../syntax/provide_on_syntax";
// import ProvideInSyntax from "../syntax/provide_in_syntax";
// import ProvideDoneSyntax from "../syntax/provide_done_syntax";
// import interfaces from "../interfaces/interfaces";
// import { interfaces as inversifyInterfaces } from "inversify";
//
// function fluentProvide(moduleProvider: ModuleProvider) {
//
//    // function is named for testing
//    return function _fluentProvide(serviceIdentifier: inversifyInterfaces.ServiceIdentifier<any>) {
//
//       let bindingWhenOnSyntax = container.bind<any>(serviceIdentifier).to(<any>null);
//       let binding = (<any>bindingWhenOnSyntax)._binding;
//       let provideDoneSyntax = new ProvideDoneSyntax(binding);
//
//       let provideInWhenOnSyntax: interfaces.ProvideInWhenOnSyntax<any> = new ProvideInWhenOnSyntax<any>(
//             new ProvideInSyntax<any>(bindingWhenOnSyntax, provideDoneSyntax),
//             new ProvideWhenSyntax<any>(bindingWhenOnSyntax, provideDoneSyntax),
//             new ProvideOnSyntax<any>(bindingWhenOnSyntax, provideDoneSyntax)
//       );
//
//       return provideInWhenOnSyntax;
//
//    };
// }
//
// export default fluentProvide;
//
// interface BindingOnSyntax<T> {
//    onActivation(fn: (context: inversifyInterfaces.Context, injectable: T) => T): BindingWhenSyntax<T>;
// }
// interface BindingWhenSyntax<T> {
//    when(constraint: (request: Request) => boolean): BindingOnSyntax<T>;
//    whenTargetNamed(name: string | number | symbol): BindingOnSyntax<T>;
//    whenTargetIsDefault(): BindingOnSyntax<T>;
//    whenTargetTagged(tag: string | number | symbol, value: any): BindingOnSyntax<T>;
//    whenInjectedInto(parent: (Function | string)): BindingOnSyntax<T>;
//    whenParentNamed(name: string | number | symbol): BindingOnSyntax<T>;
//    whenParentTagged(tag: string | number | symbol, value: any): BindingOnSyntax<T>;
//    whenAnyAncestorIs(ancestor: (Function | string)): BindingOnSyntax<T>;
//    whenNoAncestorIs(ancestor: (Function | string)): BindingOnSyntax<T>;
//    whenAnyAncestorNamed(name: string | number | symbol): BindingOnSyntax<T>;
//    whenAnyAncestorTagged(tag: string | number | symbol, value: any): BindingOnSyntax<T>;
//    whenNoAncestorNamed(name: string | number | symbol): BindingOnSyntax<T>;
//    whenNoAncestorTagged(tag: string | number | symbol, value: any): BindingOnSyntax<T>;
//    whenAnyAncestorMatches(constraint: (request: Request) => boolean): BindingOnSyntax<T>;
//    whenNoAncestorMatches(constraint: (request: Request) => boolean): BindingOnSyntax<T>;
// }
// interface BindingWhenOnSyntax<T> extends BindingWhenSyntax<T>, BindingOnSyntax<T> {
// }
// interface BindingInSyntax<T> {
//    inSingletonScope(): BindingWhenOnSyntax<T>;
//    inTransientScope(): BindingWhenOnSyntax<T>;
//    inRequestScope(): BindingWhenOnSyntax<T>;
// }
//
// declare class ProvideWhenSyntax<T> implements interfaces.ProvideWhenSyntax<T> {
//    private _bindingWhenSyntax;
//    private _provideDoneSyntax;
//    constructor(bindingWhenSyntax: inversifyInterfaces.BindingWhenSyntax<T>, provideDoneSyntax: interfaces.ProvideDoneSyntax);
//    when(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>;
//    whenTargetNamed(name: string): interfaces.ProvideOnSyntax<T>;
//    whenTargetTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>;
//    whenInjectedInto(parent: (Function | string)): interfaces.ProvideOnSyntax<T>;
//    whenParentNamed(name: string): interfaces.ProvideOnSyntax<T>;
//    whenParentTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>;
//    whenAnyAncestorIs(ancestor: (Function | string)): interfaces.ProvideOnSyntax<T>;
//    whenNoAncestorIs(ancestor: (Function | string)): interfaces.ProvideOnSyntax<T>;
//    whenAnyAncestorNamed(name: string): interfaces.ProvideOnSyntax<T>;
//    whenAnyAncestorTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>;
//    whenNoAncestorNamed(name: string): interfaces.ProvideOnSyntax<T>;
//    whenNoAncestorTagged(tag: string, value: any): interfaces.ProvideOnSyntax<T>;
//    whenAnyAncestorMatches(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>;
//    whenNoAncestorMatches(constraint: (request: inversifyInterfaces.Request) => boolean): interfaces.ProvideOnSyntax<T>;
//    done(force?: boolean): (target: any) => any;
// }
// export default ProvideWhenSyntax;