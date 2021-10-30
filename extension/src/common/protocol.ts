import { JsonRpcServer } from '@theia/core/lib/common/messaging';

export const HelloBackendService = Symbol('HelloBackendService');
export const HELLO_BACKEND_PATH = '/services/helloBackend';

export interface HelloBackendService {
    sayHelloTo(url: string, table: Array<string>): Promise<number>
}
export const HelloBackendWithClientService = Symbol('BackendWithClient');
export const HELLO_BACKEND_WITH_CLIENT_PATH = '/services/withClient';

export interface HelloBackendWithClientService extends JsonRpcServer<BackendClient> {
    greet(): Promise<string>
}
export const BackendClient = Symbol('BackendClient');
export interface BackendClient {
    getName(): Promise<string>;
}