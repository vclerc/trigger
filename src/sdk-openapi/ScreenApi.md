# .ScreenApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getScreenById**](ScreenApi.md#getScreenById) | **GET** /v1/screens/{id} | (Experimental) - Get a Screen by id
[**getScreens**](ScreenApi.md#getScreens) | **GET** /v1/screens | (Experimental) - Get a list of Screen


# **getScreenById**
> ScreenDto getScreenById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ScreenApi(configuration);

let body:.ScreenApiGetScreenByIdRequest = {
  // string
  id: "id_example",
  // string | Context header to access screens of table in another account (optional)
  xContext: "X-Context_example",
};

apiInstance.getScreenById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **xContext** | [**string**] | Context header to access screens of table in another account | (optional) defaults to undefined


### Return type

**ScreenDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Screen with request id successfully retrieved |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getScreens**
> GetScreens200Response getScreens()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ScreenApi(configuration);

let body:.ScreenApiGetScreensRequest = {
  // string | Context header to access screens of table in another account (optional)
  xContext: "X-Context_example",
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.getScreens(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xContext** | [**string**] | Context header to access screens of table in another account | (optional) defaults to undefined
 **size** | [**number**] |  | (optional) defaults to 10
 **page** | [**number**] |  | (optional) defaults to 0


### Return type

**GetScreens200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a list of Screen |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


