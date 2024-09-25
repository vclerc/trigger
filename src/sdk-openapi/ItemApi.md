# .ItemApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findItem**](ItemApi.md#findItem) | **POST** /v1/items/find/table/{tableId}/partition/{partitionId}/level/{levelId} | Find a list of Item
[**findItemGeneric**](ItemApi.md#findItemGeneric) | **POST** /v1/items/find | Find a list of Item
[**getItemById**](ItemApi.md#getItemById) | **GET** /v1/items/{id} | Get a Item by id
[**getItems**](ItemApi.md#getItems) | **GET** /v1/items | Get a list of Item


# **findItem**
> GetItems200Response findItem(itemFindDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemApi(configuration);

let body:.ItemApiFindItemRequest = {
  // string
  tableId: "tableId_example",
  // string
  partitionId: "partitionId_example",
  // string
  levelId: "levelId_example",
  // ItemFindDTO
  itemFindDTO: {
    keyName: "keyName_example",
    order: "ASC",
    isEmpty: true,
    isNotEmpty: true,
    numberMin: 3.14,
    numberMax: 3.14,
    rangeMin: "rangeMin_example",
    rangeMax: "rangeMax_example",
    stringContains: [
      "stringContains_example",
    ],
    stringStartsWith: [
      "stringStartsWith_example",
    ],
    stringEndsWith: [
      "stringEndsWith_example",
    ],
    stringEquals: [
      "stringEquals_example",
    ],
    imageWidthMin: 3.14,
    imageWidthMax: 3.14,
    imageHeightMin: 3.14,
    imageHeightMax: 3.14,
    imageExtension: "imageExtension_example",
    imageColorSpace: "imageColorSpace_example",
    imageColorProfile: "imageColorProfile_example",
    attachmentExtension: "attachmentExtension_example",
    selectOptions: [
      "selectOptions_example",
    ],
    negate: true,
    itemIds: [
      "itemIds_example",
    ],
  },
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.findItem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemFindDTO** | **ItemFindDTO**|  |
 **tableId** | [**string**] |  | defaults to undefined
 **partitionId** | [**string**] |  | defaults to undefined
 **levelId** | [**string**] |  | defaults to undefined
 **size** | [**number**] |  | (optional) defaults to 10
 **page** | [**number**] |  | (optional) defaults to 0


### Return type

**GetItems200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Find a list of Item |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **findItemGeneric**
> GetItems200Response findItemGeneric(queryDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemApi(configuration);

let body:.ItemApiFindItemGenericRequest = {
  // string
  partitionId: "partitionId_example",
  // QueryDTO
  queryDTO: null,
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.findItemGeneric(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryDTO** | **QueryDTO**|  |
 **partitionId** | [**string**] |  | defaults to undefined
 **size** | [**number**] |  | (optional) defaults to 10
 **page** | [**number**] |  | (optional) defaults to 0


### Return type

**GetItems200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Find a list of Item |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getItemById**
> ItemDto getItemById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemApi(configuration);

let body:.ItemApiGetItemByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.getItemById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**ItemDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Item with request id successfully retrieved |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getItems**
> GetItems200Response getItems()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemApi(configuration);

let body:.ItemApiGetItemsRequest = {
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.getItems(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | [**number**] |  | (optional) defaults to 10
 **page** | [**number**] |  | (optional) defaults to 0


### Return type

**GetItems200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a list of Item |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


