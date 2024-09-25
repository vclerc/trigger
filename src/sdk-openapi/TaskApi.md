# .TaskApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTask**](TaskApi.md#createTask) | **POST** /v1/data_factory/tasks | Create a Task
[**deleteTask**](TaskApi.md#deleteTask) | **DELETE** /v1/data_factory/tasks/{id} | Delete a Task by id
[**getTaskById**](TaskApi.md#getTaskById) | **GET** /v1/data_factory/tasks/{id} | Get a Task by id
[**getTasks**](TaskApi.md#getTasks) | **GET** /v1/data_factory/tasks | Get a list of Task
[**pollTaskExecution**](TaskApi.md#pollTaskExecution) | **GET** /v1/data_factory/tasks/{id}/poll | Poll a task if there is not task to poll, the API returns a &#x60;404 Not Found&#x60; error
[**updateTask**](TaskApi.md#updateTask) | **PUT** /v1/data_factory/tasks/{id} | Update a Task


# **createTask**
> TaskDto createTask(createTaskDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskApi(configuration);

let body:.TaskApiCreateTaskRequest = {
  // CreateTaskDto
  createTaskDto: {
    key: "key_example",
    description: "description_example",
    retryCount: 3.14,
    timeoutSeconds: 3.14,
    timeoutPolicy: "RETRY",
    retryLogic: "FIXED",
    retryDelaySeconds: 3.14,
    responseTimeoutSeconds: 3.14,
    concurrentExecLimit: 3.14,
    pollTimeoutSeconds: 3.14,
    backoffScaleFactor: 3.14,
    inputKeys: [
      {
        key: "key_example",
        description: "description_example",
      },
    ],
    outputKeys: [
      {
        key: "key_example",
        description: "description_example",
      },
    ],
  },
};

apiInstance.createTask(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTaskDto** | **CreateTaskDto**|  |


### Return type

**TaskDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Task successfully created |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTask**
> TaskDto deleteTask()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskApi(configuration);

let body:.TaskApiDeleteTaskRequest = {
  // string
  id: "id_example",
};

apiInstance.deleteTask(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**TaskDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Task with request id successfully deleted |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTaskById**
> TaskDto getTaskById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskApi(configuration);

let body:.TaskApiGetTaskByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.getTaskById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**TaskDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task with request id successfully retrieved |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTasks**
> GetTasks200Response getTasks()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskApi(configuration);

let body:.TaskApiGetTasksRequest = {
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.getTasks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | [**number**] |  | (optional) defaults to 10
 **page** | [**number**] |  | (optional) defaults to 0


### Return type

**GetTasks200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a list of Task |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pollTaskExecution**
> TaskExecutionDto pollTaskExecution()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskApi(configuration);

let body:.TaskApiPollTaskExecutionRequest = {
  // string
  id: "id_example",
};

apiInstance.pollTaskExecution(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**TaskExecutionDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A task is polled return a task execution |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTask**
> TaskDto updateTask(updateTaskDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TaskApi(configuration);

let body:.TaskApiUpdateTaskRequest = {
  // string
  id: "id_example",
  // UpdateTaskDto
  updateTaskDto: {
    id: "id_example",
    key: "key_example",
    description: "description_example",
    retryCount: 3.14,
    timeoutSeconds: 3.14,
    timeoutPolicy: "RETRY",
    retryLogic: "FIXED",
    retryDelaySeconds: 3.14,
    responseTimeoutSeconds: 3.14,
    concurrentExecLimit: 3.14,
    pollTimeoutSeconds: 3.14,
    backoffScaleFactor: 3.14,
    inputKeys: [
      {
        key: "key_example",
        description: "description_example",
      },
    ],
    outputKeys: [
      {
        key: "key_example",
        description: "description_example",
      },
    ],
  },
};

apiInstance.updateTask(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTaskDto** | **UpdateTaskDto**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**TaskDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Task successfully updated |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


