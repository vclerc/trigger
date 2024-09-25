# .JobApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createJob**](JobApi.md#createJob) | **POST** /v1/data_factory/jobs | Create a Job
[**getJobById**](JobApi.md#getJobById) | **GET** /v1/data_factory/jobs/{id} | Get a Job by id
[**getJobs**](JobApi.md#getJobs) | **GET** /v1/data_factory/jobs | Get a list of Job
[**updateJob**](JobApi.md#updateJob) | **PUT** /v1/data_factory/jobs/{id} | Update a Job
[**updateJobZip**](JobApi.md#updateJobZip) | **PUT** /v1/data_factory/jobs/{id}/zip | Upload a zip to update a job


# **createJob**
> JobDto createJob(createJobDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiCreateJobRequest = {
  // CreateJobDto
  createJobDto: {
    key: "key_example",
    pipelineId: "pipelineId_example",
    projectId: "projectId_example",
    title: "title_example",
    periodicity: [
      {
        isEnabled: true,
        cronExpression: "cronExpression_example",
      },
    ],
    status: "DRAFT",
    titleLocal: {
      eng: "eng_example",
      fra: "fra_example",
    },
    description: "description_example",
    descriptionLocal: {
      eng: "eng_example",
      fra: "fra_example",
    },
    output: {},
    tasks: [
      {
        name: "name_example",
        taskReferenceName: "taskReferenceName_example",
        isOptional: true,
        type: "type_example",
        description: "description_example",
        input: {},
      },
    ],
  },
};

apiInstance.createJob(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createJobDto** | **CreateJobDto**|  |


### Return type

**JobDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Job successfully created |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getJobById**
> JobDto getJobById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiGetJobByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.getJobById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**JobDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Job with request id successfully retrieved |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getJobs**
> GetJobs200Response getJobs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiGetJobsRequest = {
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.getJobs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | [**number**] |  | (optional) defaults to 10
 **page** | [**number**] |  | (optional) defaults to 0


### Return type

**GetJobs200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a list of Job |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateJob**
> JobDto updateJob(updateJobDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiUpdateJobRequest = {
  // string
  id: "id_example",
  // UpdateJobDto
  updateJobDto: {
    id: "id_example",
    key: "key_example",
    periodicity: [
      {
        isEnabled: true,
        cronExpression: "cronExpression_example",
      },
    ],
    pipelineId: "pipelineId_example",
    projectId: "projectId_example",
    status: "DRAFT",
    title: "title_example",
    titleLocal: {
      eng: "eng_example",
      fra: "fra_example",
    },
    description: "description_example",
    descriptionLocal: {
      eng: "eng_example",
      fra: "fra_example",
    },
    output: {},
    tasks: [
      {
        name: "name_example",
        taskReferenceName: "taskReferenceName_example",
        isOptional: true,
        type: "type_example",
        description: "description_example",
        input: {},
      },
    ],
  },
};

apiInstance.updateJob(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateJobDto** | **UpdateJobDto**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**JobDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Job successfully updated |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateJobZip**
> JobDto updateJobZip()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiUpdateJobZipRequest = {
  // string
  id: "id_example",
  // HttpFile
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.updateJobZip(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **file** | [**HttpFile**] |  | defaults to undefined


### Return type

**JobDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Zip successfully updated job |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |
**413** | Request Entity Too Large |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


