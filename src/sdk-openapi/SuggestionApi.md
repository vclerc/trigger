# .SuggestionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applyAllSuggestion**](SuggestionApi.md#applyAllSuggestion) | **POST** /v1/suggestions/{id}/apply-all | apply all fields and deleted fields from a suggestion
[**applySuggestion**](SuggestionApi.md#applySuggestion) | **POST** /v1/suggestions/{id}/apply | apply a suggestion
[**createSuggestion**](SuggestionApi.md#createSuggestion) | **POST** /v1/suggestions | Create a Suggestion
[**findSuggestions**](SuggestionApi.md#findSuggestions) | **POST** /v1/suggestions/find | Find a list of Suggestion
[**getSuggestionById**](SuggestionApi.md#getSuggestionById) | **GET** /v1/suggestions/{id} | Get a Suggestion by id
[**getSuggestions**](SuggestionApi.md#getSuggestions) | **GET** /v1/suggestions | Get a list of Suggestion


# **applyAllSuggestion**
> void applyAllSuggestion(applyAllSuggestionDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SuggestionApi(configuration);

let body:.SuggestionApiApplyAllSuggestionRequest = {
  // string
  id: "id_example",
  // ApplyAllSuggestionDto
  applyAllSuggestionDto: {
    isAcknowledged: true,
  },
};

apiInstance.applyAllSuggestion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applyAllSuggestionDto** | **ApplyAllSuggestionDto**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The suggestion has been fully applied |  -  |
**400** | The suggestion could not be applied due to a bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **applySuggestion**
> void applySuggestion(applySuggestionDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SuggestionApi(configuration);

let body:.SuggestionApiApplySuggestionRequest = {
  // string
  id: "id_example",
  // ApplySuggestionDto
  applySuggestionDto: {
    isAcknowledged: true,
    fieldsKey: [
      "fieldsKey_example",
    ],
  },
};

apiInstance.applySuggestion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applySuggestionDto** | **ApplySuggestionDto**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The suggestion has been applied |  -  |
**400** | The suggestion could not be applied due to a bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSuggestion**
> SuggestionDto createSuggestion(suggestionCreateDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SuggestionApi(configuration);

let body:.SuggestionApiCreateSuggestionRequest = {
  // SuggestionCreateDto
  suggestionCreateDto: {
    object: "suggestion-create",
    itemId: "itemId_example",
    screenId: "screenId_example",
    hasCreatedItem: true,
    publicationId: "publicationId_example",
    emitterName: "emitterName_example",
    fields: [
      null,
    ],
    deletedFieldsIds: [
      "deletedFieldsIds_example",
    ],
  },
};

apiInstance.createSuggestion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **suggestionCreateDto** | **SuggestionCreateDto**|  |


### Return type

**SuggestionDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Suggestion successfully created |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **findSuggestions**
> GetSuggestions200Response findSuggestions(queryDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SuggestionApi(configuration);

let body:.SuggestionApiFindSuggestionsRequest = {
  // QueryDTO
  queryDTO: null,
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.findSuggestions(body).then((data:any) => {
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

**GetSuggestions200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Find a list of Suggestion |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSuggestionById**
> SuggestionDto getSuggestionById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SuggestionApi(configuration);

let body:.SuggestionApiGetSuggestionByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.getSuggestionById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**SuggestionDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Suggestion with request id successfully retrieved |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSuggestions**
> GetSuggestions200Response getSuggestions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SuggestionApi(configuration);

let body:.SuggestionApiGetSuggestionsRequest = {
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.getSuggestions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | [**number**] |  | (optional) defaults to 10
 **page** | [**number**] |  | (optional) defaults to 0


### Return type

**GetSuggestions200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a list of Suggestion |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


