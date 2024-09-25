# .LevelApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLevelById**](LevelApi.md#getLevelById) | **GET** /v1/levels/{id} | Get a Level by id
[**getLevels**](LevelApi.md#getLevels) | **GET** /v1/levels | Get a list of Level


# **getLevelById**
> LevelDto getLevelById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LevelApi(configuration);

let body:.LevelApiGetLevelByIdRequest = {
  // string
  id: "id_example",
  // string | Context header to access levels of another account (optional)
  xContext: "X-Context_example",
};

apiInstance.getLevelById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **xContext** | [**string**] | Context header to access levels of another account | (optional) defaults to undefined


### Return type

**LevelDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Level with request id successfully retrieved |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLevels**
> GetLevels200Response getLevels()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LevelApi(configuration);

let body:.LevelApiGetLevelsRequest = {
  // string | Context header to access levels of another account (optional)
  xContext: "X-Context_example",
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.getLevels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xContext** | [**string**] | Context header to access levels of another account | (optional) defaults to undefined
 **size** | [**number**] |  | (optional) defaults to 10
 **page** | [**number**] |  | (optional) defaults to 0


### Return type

**GetLevels200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a list of Level |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


