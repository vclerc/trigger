# .AccountApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findAccounts**](AccountApi.md#findAccounts) | **POST** /v1/accounts/find | Find a list of Account
[**getAccountById**](AccountApi.md#getAccountById) | **GET** /v1/accounts/{id} | Get a Account by id
[**getAccounts**](AccountApi.md#getAccounts) | **GET** /v1/accounts | Get a list of Account


# **findAccounts**
> GetAccounts200Response findAccounts(queryDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountApi(configuration);

let body:.AccountApiFindAccountsRequest = {
  // QueryDTO
  queryDTO: null,
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.findAccounts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryDTO** | **QueryDTO**|  |
 **size** | [**number**] |  | (optional) defaults to 10
 **page** | [**number**] |  | (optional) defaults to 0


### Return type

**GetAccounts200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Find a list of Account |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountById**
> AccountDto getAccountById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountApi(configuration);

let body:.AccountApiGetAccountByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.getAccountById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**AccountDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Account with request id successfully retrieved |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccounts**
> GetAccounts200Response getAccounts()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountApi(configuration);

let body:.AccountApiGetAccountsRequest = {
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.getAccounts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | [**number**] |  | (optional) defaults to 10
 **page** | [**number**] |  | (optional) defaults to 0


### Return type

**GetAccounts200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a list of Account |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


