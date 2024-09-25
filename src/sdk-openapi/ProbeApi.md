# .ProbeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**liveness**](ProbeApi.md#liveness) | **GET** /probe/liveness | 
[**readiness**](ProbeApi.md#readiness) | **GET** /probe/readiness | 


# **liveness**
> void liveness()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProbeApi(configuration);

let body:any = {};

apiInstance.liveness(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readiness**
> void readiness()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProbeApi(configuration);

let body:any = {};

apiInstance.readiness(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


