# .CommentThreadSubscriberApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findCommentThreadSubscribers**](CommentThreadSubscriberApi.md#findCommentThreadSubscribers) | **POST** /v1/comment_thread_subscribers/find | Find a list of Comment Thread Subscriber
[**getCommentThreadSubscriberById**](CommentThreadSubscriberApi.md#getCommentThreadSubscriberById) | **GET** /v1/comment_thread_subscribers/{id} | Get a Comment Thread Subscriber by id
[**getCommentThreadSubscribers**](CommentThreadSubscriberApi.md#getCommentThreadSubscribers) | **GET** /v1/comment_thread_subscribers | Get a list of Comment Thread Subscriber


# **findCommentThreadSubscribers**
> GetCommentThreadSubscribers200Response findCommentThreadSubscribers(queryDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentThreadSubscriberApi(configuration);

let body:.CommentThreadSubscriberApiFindCommentThreadSubscribersRequest = {
  // QueryDTO
  queryDTO: null,
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.findCommentThreadSubscribers(body).then((data:any) => {
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

**GetCommentThreadSubscribers200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Find a list of Comment Thread Subscriber |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCommentThreadSubscriberById**
> CommentThreadSubscriberDto getCommentThreadSubscriberById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentThreadSubscriberApi(configuration);

let body:.CommentThreadSubscriberApiGetCommentThreadSubscriberByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.getCommentThreadSubscriberById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**CommentThreadSubscriberDto**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment Thread Subscriber with request id successfully retrieved |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCommentThreadSubscribers**
> GetCommentThreadSubscribers200Response getCommentThreadSubscribers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentThreadSubscriberApi(configuration);

let body:.CommentThreadSubscriberApiGetCommentThreadSubscribersRequest = {
  // number (optional)
  size: 10,
  // number (optional)
  page: 0,
};

apiInstance.getCommentThreadSubscribers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | [**number**] |  | (optional) defaults to 10
 **page** | [**number**] |  | (optional) defaults to 0


### Return type

**GetCommentThreadSubscribers200Response**

### Authorization

[ApiKeyAuthQuery](README.md#ApiKeyAuthQuery), [bearer](README.md#bearer), [ApiKeyAuthHeader](README.md#ApiKeyAuthHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a list of Comment Thread Subscriber |  -  |
**400** | Bad Request - Malformed syntax |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


