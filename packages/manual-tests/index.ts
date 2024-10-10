import {ApiKeyAuthenticationProvider, ApiKeyLocation} from "@microsoft/kiota-abstractions";
import {FetchRequestAdapter} from "@microsoft/kiota-http-fetchlibrary";
import {createApiClient} from "../sdk/apiClient";

class Main {
    static async run() {
        const authenticationProvider = new ApiKeyAuthenticationProvider(
            'Pp0yTgytnZJE0FJ5udnJX5lOiBCFfv1l',
            'X-Api-Key',
            ApiKeyLocation.Header
        );
        const requestAdapter = new FetchRequestAdapter(authenticationProvider);
        const apiClient = createApiClient(requestAdapter).withUrl('https://api-next.dev.product-live.com/');

        const r = await apiClient.v1.accounts.byId('1');
        console.log(JSON.stringify(r, null, 4));
        console.log('plop');
    }
}

Main.run().then(() => {});