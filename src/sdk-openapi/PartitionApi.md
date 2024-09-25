# .PartitionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPartitionById**](PartitionApi.md#getPartitionById) | **GET** /v1/partitions/{id} | Get a Partition by id
[**getPartitions**](PartitionApi.md#getPartitions) | **GET** /v1/partitions | Get a list of Partition


# **getPartitionById**
> PartitionDto getPartitionById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartitionApi(configuration);

let body:.PartitionApiGetPartitionByIdRequest = {
  // string
  id: "id_example",
  // string | Context header to access partitions of another account (optional)
  xContext: "X-Context_example",
};

apiInstance.getPartitionById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **xContext** | [**string**] | Context header to access partitions of another account | (optional) defaults to undefined


### Return type

**PartitionDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Partition with request id successfully retrieved |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPartitions**
> GetPartitions200Response getPartitions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartitionApi(configuration);

let body:.PartitionApiGetPartitionsRequest = {
  // string | Context header to access partitions of another account (optional)
  xContext: "X-Context_example",
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.getPartitions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xContext** | [**string**] | Context header to access partitions of another account | (optional) defaults to undefined
 **size** | [**number**] |  | (optional) defaults to 10
 **page** | [**number**] |  | (optional) defaults to 0


### Return type

**GetPartitions200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a list of Partition |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


