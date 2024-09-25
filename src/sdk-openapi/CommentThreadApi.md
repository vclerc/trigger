# .CommentThreadApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReply**](CommentThreadApi.md#addReply) | **POST** /v1/comment_threads/{id}/add-reply | Add a reply to a comment thread
[**createCommentThread**](CommentThreadApi.md#createCommentThread) | **POST** /v1/comment_threads | Create a Comment Thread
[**findCommentThreads**](CommentThreadApi.md#findCommentThreads) | **POST** /v1/comment_threads/find | Find a list of Comment Thread
[**getCommentThreadById**](CommentThreadApi.md#getCommentThreadById) | **GET** /v1/comment_threads/{id} | Get a Comment Thread by id
[**getCommentThreads**](CommentThreadApi.md#getCommentThreads) | **GET** /v1/comment_threads | Get a list of Comment Thread
[**patchCommentThread**](CommentThreadApi.md#patchCommentThread) | **PATCH** /v1/comment_threads/{id} | Patch a Comment Thread


# **addReply**
> CommentThreadDto addReply(commentThreadReplyCreateDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentThreadApi(configuration);

let body:.CommentThreadApiAddReplyRequest = {
  // string
  id: "id_example",
  // CommentThreadReplyCreateDto
  commentThreadReplyCreateDto: {
    message: "message_example",
  },
};

apiInstance.addReply(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentThreadReplyCreateDto** | **CommentThreadReplyCreateDto**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**CommentThreadDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Reply successfully added |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCommentThread**
> CommentThreadDto createCommentThread(commentThreadCreateDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentThreadApi(configuration);

let body:.CommentThreadApiCreateCommentThreadRequest = {
  // CommentThreadCreateDto
  commentThreadCreateDto: {
    object: "comment_thread",
    comments: [
      {
        message: "message_example",
      },
    ],
    targetId: "targetId_example",
    targetType: "suggestion",
  },
};

apiInstance.createCommentThread(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentThreadCreateDto** | **CommentThreadCreateDto**|  |


### Return type

**CommentThreadDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Comment Thread successfully created |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **findCommentThreads**
> GetCommentThreads200Response findCommentThreads(queryDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentThreadApi(configuration);

let body:.CommentThreadApiFindCommentThreadsRequest = {
  // QueryDTO
  queryDTO: null,
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.findCommentThreads(body).then((data:any) => {
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

**GetCommentThreads200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Find a list of Comment Thread |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCommentThreadById**
> CommentThreadDto getCommentThreadById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentThreadApi(configuration);

let body:.CommentThreadApiGetCommentThreadByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.getCommentThreadById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**CommentThreadDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment Thread with request id successfully retrieved |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCommentThreads**
> GetCommentThreads200Response getCommentThreads()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentThreadApi(configuration);

let body:.CommentThreadApiGetCommentThreadsRequest = {
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.getCommentThreads(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | [**number**] |  | (optional) defaults to 10
 **page** | [**number**] |  | (optional) defaults to 0


### Return type

**GetCommentThreads200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a list of Comment Thread |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchCommentThread**
> CommentThreadDto patchCommentThread(commentThreadUpdateDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentThreadApi(configuration);

let body:.CommentThreadApiPatchCommentThreadRequest = {
  // string
  id: "id_example",
  // CommentThreadUpdateDto
  commentThreadUpdateDto: {
    object: "comment_thread",
    isClosed: true,
    accountAssigneesId: [
      "accountAssigneesId_example",
    ],
    message: "message_example",
  },
};

apiInstance.patchCommentThread(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentThreadUpdateDto** | **CommentThreadUpdateDto**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**CommentThreadDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Comment Thread successfully patched |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


