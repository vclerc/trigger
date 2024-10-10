import {ApiClient, createApiClient} from '../sdk/apiClient';
import {FetchRequestAdapter} from '@microsoft/kiota-http-fetchlibrary';
import {ApiKeyAuthenticationProvider, ApiKeyLocation, BaseRequestBuilder} from '@microsoft/kiota-abstractions';

// class Test implements V1RequestBuilder {}
describe('API Account JSON', () => {

    let apiClient: ApiClient;

    beforeAll(() => {
        const authenticationProvider = new ApiKeyAuthenticationProvider(
            'Pp0yTgytnZJE0FJ5udnJX5lOiBCFfv1l',
            'X-Api-Key',
            ApiKeyLocation.Header
        );
        const requestAdapter = new FetchRequestAdapter(authenticationProvider);
        apiClient = createApiClient(requestAdapter).withUrl('https://api-next.dev.product-live.com/');
    });

    it('account - get one by id at correct format', async () => {
        const r = await apiClient.v1.accounts.byId('1');
        console.log(JSON.stringify(r, null, 4));
    });
});