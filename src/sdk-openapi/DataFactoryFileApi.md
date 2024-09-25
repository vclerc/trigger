# .DataFactoryFileApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFileById**](DataFactoryFileApi.md#getFileById) | **GET** /v1/data_factory/files/{id} | Get a Data Factory File by id
[**getFiles**](DataFactoryFileApi.md#getFiles) | **GET** /v1/data_factory/files | Get a list of Data Factory File
[**uploadFile**](DataFactoryFileApi.md#uploadFile) | **POST** /v1/data_factory/files | Post a file so it can be consume by a Data Factory job


# **getFileById**
> FileDto getFileById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFactoryFileApi(configuration);

let body:.DataFactoryFileApiGetFileByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.getFileById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**FileDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Data Factory File with request id successfully retrieved |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFiles**
> GetFiles200Response getFiles()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFactoryFileApi(configuration);

let body:.DataFactoryFileApiGetFilesRequest = {
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.getFiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | [**number**] |  | (optional) defaults to 10
 **page** | [**number**] |  | (optional) defaults to 0


### Return type

**GetFiles200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a list of Data Factory File |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadFile**
> FileDto uploadFile()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataFactoryFileApi(configuration);

let body:.DataFactoryFileApiUploadFileRequest = {
  // HttpFile
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.uploadFile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**HttpFile**] |  | defaults to undefined


### Return type

**FileDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | File successfully created |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |
**413** | Request Entity Too Large |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


