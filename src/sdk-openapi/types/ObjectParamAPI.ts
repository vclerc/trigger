import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AccountDto } from '../models/AccountDto';
import { ApplyAllSuggestionDto } from '../models/ApplyAllSuggestionDto';
import { ApplySuggestionDto } from '../models/ApplySuggestionDto';
import { CommentThreadCreateDto } from '../models/CommentThreadCreateDto';
import { CommentThreadDto } from '../models/CommentThreadDto';
import { CommentThreadReplyCreateDto } from '../models/CommentThreadReplyCreateDto';
import { CommentThreadReplyDTO } from '../models/CommentThreadReplyDTO';
import { CommentThreadSubscriberDto } from '../models/CommentThreadSubscriberDto';
import { CommentThreadUpdateDto } from '../models/CommentThreadUpdateDto';
import { CreateJobDto } from '../models/CreateJobDto';
import { CreateJobExecutionDto } from '../models/CreateJobExecutionDto';
import { CreatePublicationDto } from '../models/CreatePublicationDto';
import { CreateTaskDto } from '../models/CreateTaskDto';
import { CreateVariableDto } from '../models/CreateVariableDto';
import { CrudListDto } from '../models/CrudListDto';
import { FileDto } from '../models/FileDto';
import { GetAccounts200Response } from '../models/GetAccounts200Response';
import { GetCommentThreadSubscribers200Response } from '../models/GetCommentThreadSubscribers200Response';
import { GetCommentThreads200Response } from '../models/GetCommentThreads200Response';
import { GetFiles200Response } from '../models/GetFiles200Response';
import { GetItemLinks200Response } from '../models/GetItemLinks200Response';
import { GetItems200Response } from '../models/GetItems200Response';
import { GetJobExecutions200Response } from '../models/GetJobExecutions200Response';
import { GetJobs200Response } from '../models/GetJobs200Response';
import { GetLevels200Response } from '../models/GetLevels200Response';
import { GetPartitions200Response } from '../models/GetPartitions200Response';
import { GetPublications200Response } from '../models/GetPublications200Response';
import { GetScreens200Response } from '../models/GetScreens200Response';
import { GetSuggestions200Response } from '../models/GetSuggestions200Response';
import { GetTables200Response } from '../models/GetTables200Response';
import { GetTaskById400Response } from '../models/GetTaskById400Response';
import { GetTasks200Response } from '../models/GetTasks200Response';
import { GetUsers200Response } from '../models/GetUsers200Response';
import { GetVariables200Response } from '../models/GetVariables200Response';
import { HighOrderQueryDTO } from '../models/HighOrderQueryDTO';
import { HighOrderQueryDTOQueriesInner } from '../models/HighOrderQueryDTOQueriesInner';
import { ItemDto } from '../models/ItemDto';
import { ItemDtoFieldsInner } from '../models/ItemDtoFieldsInner';
import { ItemFieldDTO } from '../models/ItemFieldDTO';
import { ItemFieldDTOValue } from '../models/ItemFieldDTOValue';
import { ItemFieldFile } from '../models/ItemFieldFile';
import { ItemFieldFileDTO } from '../models/ItemFieldFileDTO';
import { ItemFieldFileData } from '../models/ItemFieldFileData';
import { ItemFieldMultipleSelectWithCommentAndQuantity } from '../models/ItemFieldMultipleSelectWithCommentAndQuantity';
import { ItemFieldMultipleSelectWithCommentAndQuantityDTO } from '../models/ItemFieldMultipleSelectWithCommentAndQuantityDTO';
import { ItemFieldMultipleSelectWithCommentAndQuantityData } from '../models/ItemFieldMultipleSelectWithCommentAndQuantityData';
import { ItemFieldNumberDTO } from '../models/ItemFieldNumberDTO';
import { ItemFieldSimpleNumber } from '../models/ItemFieldSimpleNumber';
import { ItemFieldSimpleString } from '../models/ItemFieldSimpleString';
import { ItemFieldSimpleStringArray } from '../models/ItemFieldSimpleStringArray';
import { ItemFieldStringArrayDTO } from '../models/ItemFieldStringArrayDTO';
import { ItemFieldStringDTO } from '../models/ItemFieldStringDTO';
import { ItemFindDTO } from '../models/ItemFindDTO';
import { ItemLinkCreateDto } from '../models/ItemLinkCreateDto';
import { ItemLinkDto } from '../models/ItemLinkDto';
import { ItemMetadataDTO } from '../models/ItemMetadataDTO';
import { JobDto } from '../models/JobDto';
import { JobExecutionDto } from '../models/JobExecutionDto';
import { JobExecutionInfoDto } from '../models/JobExecutionInfoDto';
import { JobLocalDto } from '../models/JobLocalDto';
import { JobPeriodicityDto } from '../models/JobPeriodicityDto';
import { JobTaskDto } from '../models/JobTaskDto';
import { LevelDto } from '../models/LevelDto';
import { LowOrderQueryDTO } from '../models/LowOrderQueryDTO';
import { PartitionDto } from '../models/PartitionDto';
import { PatchPublicationDto } from '../models/PatchPublicationDto';
import { PublicationDto } from '../models/PublicationDto';
import { QueryDTO } from '../models/QueryDTO';
import { ScreenDto } from '../models/ScreenDto';
import { SuggestionCreateDto } from '../models/SuggestionCreateDto';
import { SuggestionDeletedFieldDTO } from '../models/SuggestionDeletedFieldDTO';
import { SuggestionDto } from '../models/SuggestionDto';
import { TableDto } from '../models/TableDto';
import { TaskDto } from '../models/TaskDto';
import { TaskDtoKey } from '../models/TaskDtoKey';
import { TaskExecutionDto } from '../models/TaskExecutionDto';
import { UpdateJobDto } from '../models/UpdateJobDto';
import { UpdateTaskDto } from '../models/UpdateTaskDto';
import { UpdateVariableDto } from '../models/UpdateVariableDto';
import { UserDto } from '../models/UserDto';
import { VariableDto } from '../models/VariableDto';

import { ObservableAccountApi } from "./ObservableAPI";
import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";

export interface AccountApiFindAccountsRequest {
    /**
     * 
     * @type QueryDTO
     * @memberof AccountApifindAccounts
     */
    queryDTO: QueryDTO
    /**
     * 
     * @type number
     * @memberof AccountApifindAccounts
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof AccountApifindAccounts
     */
    page?: number
}

export interface AccountApiGetAccountByIdRequest {
    /**
     * 
     * @type string
     * @memberof AccountApigetAccountById
     */
    id: string
}

export interface AccountApiGetAccountsRequest {
    /**
     * 
     * @type number
     * @memberof AccountApigetAccounts
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof AccountApigetAccounts
     */
    page?: number
}

export class ObjectAccountApi {
    private api: ObservableAccountApi

    public constructor(configuration: Configuration, requestFactory?: AccountApiRequestFactory, responseProcessor?: AccountApiResponseProcessor) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Find a list of Account
     * @param param the request object
     */
    public findAccountsWithHttpInfo(param: AccountApiFindAccountsRequest, options?: Configuration): Promise<HttpInfo<GetAccounts200Response>> {
        return this.api.findAccountsWithHttpInfo(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Find a list of Account
     * @param param the request object
     */
    public findAccounts(param: AccountApiFindAccountsRequest, options?: Configuration): Promise<GetAccounts200Response> {
        return this.api.findAccounts(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Get a Account by id
     * @param param the request object
     */
    public getAccountByIdWithHttpInfo(param: AccountApiGetAccountByIdRequest, options?: Configuration): Promise<HttpInfo<AccountDto>> {
        return this.api.getAccountByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a Account by id
     * @param param the request object
     */
    public getAccountById(param: AccountApiGetAccountByIdRequest, options?: Configuration): Promise<AccountDto> {
        return this.api.getAccountById(param.id,  options).toPromise();
    }

    /**
     * Get a list of Account
     * @param param the request object
     */
    public getAccountsWithHttpInfo(param: AccountApiGetAccountsRequest = {}, options?: Configuration): Promise<HttpInfo<GetAccounts200Response>> {
        return this.api.getAccountsWithHttpInfo(param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of Account
     * @param param the request object
     */
    public getAccounts(param: AccountApiGetAccountsRequest = {}, options?: Configuration): Promise<GetAccounts200Response> {
        return this.api.getAccounts(param.size, param.page,  options).toPromise();
    }

}

import { ObservableCommentThreadApi } from "./ObservableAPI";
import { CommentThreadApiRequestFactory, CommentThreadApiResponseProcessor} from "../apis/CommentThreadApi";

export interface CommentThreadApiAddReplyRequest {
    /**
     * 
     * @type string
     * @memberof CommentThreadApiaddReply
     */
    id: string
    /**
     * 
     * @type CommentThreadReplyCreateDto
     * @memberof CommentThreadApiaddReply
     */
    commentThreadReplyCreateDto: CommentThreadReplyCreateDto
}

export interface CommentThreadApiCreateCommentThreadRequest {
    /**
     * 
     * @type CommentThreadCreateDto
     * @memberof CommentThreadApicreateCommentThread
     */
    commentThreadCreateDto: CommentThreadCreateDto
}

export interface CommentThreadApiFindCommentThreadsRequest {
    /**
     * 
     * @type QueryDTO
     * @memberof CommentThreadApifindCommentThreads
     */
    queryDTO: QueryDTO
    /**
     * 
     * @type number
     * @memberof CommentThreadApifindCommentThreads
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof CommentThreadApifindCommentThreads
     */
    page?: number
}

export interface CommentThreadApiGetCommentThreadByIdRequest {
    /**
     * 
     * @type string
     * @memberof CommentThreadApigetCommentThreadById
     */
    id: string
}

export interface CommentThreadApiGetCommentThreadsRequest {
    /**
     * 
     * @type number
     * @memberof CommentThreadApigetCommentThreads
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof CommentThreadApigetCommentThreads
     */
    page?: number
}

export interface CommentThreadApiPatchCommentThreadRequest {
    /**
     * 
     * @type string
     * @memberof CommentThreadApipatchCommentThread
     */
    id: string
    /**
     * 
     * @type CommentThreadUpdateDto
     * @memberof CommentThreadApipatchCommentThread
     */
    commentThreadUpdateDto: CommentThreadUpdateDto
}

export class ObjectCommentThreadApi {
    private api: ObservableCommentThreadApi

    public constructor(configuration: Configuration, requestFactory?: CommentThreadApiRequestFactory, responseProcessor?: CommentThreadApiResponseProcessor) {
        this.api = new ObservableCommentThreadApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a reply to a comment thread
     * @param param the request object
     */
    public addReplyWithHttpInfo(param: CommentThreadApiAddReplyRequest, options?: Configuration): Promise<HttpInfo<CommentThreadDto>> {
        return this.api.addReplyWithHttpInfo(param.id, param.commentThreadReplyCreateDto,  options).toPromise();
    }

    /**
     * Add a reply to a comment thread
     * @param param the request object
     */
    public addReply(param: CommentThreadApiAddReplyRequest, options?: Configuration): Promise<CommentThreadDto> {
        return this.api.addReply(param.id, param.commentThreadReplyCreateDto,  options).toPromise();
    }

    /**
     * Create a Comment Thread
     * @param param the request object
     */
    public createCommentThreadWithHttpInfo(param: CommentThreadApiCreateCommentThreadRequest, options?: Configuration): Promise<HttpInfo<CommentThreadDto>> {
        return this.api.createCommentThreadWithHttpInfo(param.commentThreadCreateDto,  options).toPromise();
    }

    /**
     * Create a Comment Thread
     * @param param the request object
     */
    public createCommentThread(param: CommentThreadApiCreateCommentThreadRequest, options?: Configuration): Promise<CommentThreadDto> {
        return this.api.createCommentThread(param.commentThreadCreateDto,  options).toPromise();
    }

    /**
     * Find a list of Comment Thread
     * @param param the request object
     */
    public findCommentThreadsWithHttpInfo(param: CommentThreadApiFindCommentThreadsRequest, options?: Configuration): Promise<HttpInfo<GetCommentThreads200Response>> {
        return this.api.findCommentThreadsWithHttpInfo(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Find a list of Comment Thread
     * @param param the request object
     */
    public findCommentThreads(param: CommentThreadApiFindCommentThreadsRequest, options?: Configuration): Promise<GetCommentThreads200Response> {
        return this.api.findCommentThreads(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Get a Comment Thread by id
     * @param param the request object
     */
    public getCommentThreadByIdWithHttpInfo(param: CommentThreadApiGetCommentThreadByIdRequest, options?: Configuration): Promise<HttpInfo<CommentThreadDto>> {
        return this.api.getCommentThreadByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a Comment Thread by id
     * @param param the request object
     */
    public getCommentThreadById(param: CommentThreadApiGetCommentThreadByIdRequest, options?: Configuration): Promise<CommentThreadDto> {
        return this.api.getCommentThreadById(param.id,  options).toPromise();
    }

    /**
     * Get a list of Comment Thread
     * @param param the request object
     */
    public getCommentThreadsWithHttpInfo(param: CommentThreadApiGetCommentThreadsRequest = {}, options?: Configuration): Promise<HttpInfo<GetCommentThreads200Response>> {
        return this.api.getCommentThreadsWithHttpInfo(param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of Comment Thread
     * @param param the request object
     */
    public getCommentThreads(param: CommentThreadApiGetCommentThreadsRequest = {}, options?: Configuration): Promise<GetCommentThreads200Response> {
        return this.api.getCommentThreads(param.size, param.page,  options).toPromise();
    }

    /**
     * Patch a Comment Thread
     * @param param the request object
     */
    public patchCommentThreadWithHttpInfo(param: CommentThreadApiPatchCommentThreadRequest, options?: Configuration): Promise<HttpInfo<CommentThreadDto>> {
        return this.api.patchCommentThreadWithHttpInfo(param.id, param.commentThreadUpdateDto,  options).toPromise();
    }

    /**
     * Patch a Comment Thread
     * @param param the request object
     */
    public patchCommentThread(param: CommentThreadApiPatchCommentThreadRequest, options?: Configuration): Promise<CommentThreadDto> {
        return this.api.patchCommentThread(param.id, param.commentThreadUpdateDto,  options).toPromise();
    }

}

import { ObservableCommentThreadSubscriberApi } from "./ObservableAPI";
import { CommentThreadSubscriberApiRequestFactory, CommentThreadSubscriberApiResponseProcessor} from "../apis/CommentThreadSubscriberApi";

export interface CommentThreadSubscriberApiFindCommentThreadSubscribersRequest {
    /**
     * 
     * @type QueryDTO
     * @memberof CommentThreadSubscriberApifindCommentThreadSubscribers
     */
    queryDTO: QueryDTO
    /**
     * 
     * @type number
     * @memberof CommentThreadSubscriberApifindCommentThreadSubscribers
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof CommentThreadSubscriberApifindCommentThreadSubscribers
     */
    page?: number
}

export interface CommentThreadSubscriberApiGetCommentThreadSubscriberByIdRequest {
    /**
     * 
     * @type string
     * @memberof CommentThreadSubscriberApigetCommentThreadSubscriberById
     */
    id: string
}

export interface CommentThreadSubscriberApiGetCommentThreadSubscribersRequest {
    /**
     * 
     * @type number
     * @memberof CommentThreadSubscriberApigetCommentThreadSubscribers
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof CommentThreadSubscriberApigetCommentThreadSubscribers
     */
    page?: number
}

export class ObjectCommentThreadSubscriberApi {
    private api: ObservableCommentThreadSubscriberApi

    public constructor(configuration: Configuration, requestFactory?: CommentThreadSubscriberApiRequestFactory, responseProcessor?: CommentThreadSubscriberApiResponseProcessor) {
        this.api = new ObservableCommentThreadSubscriberApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Find a list of Comment Thread Subscriber
     * @param param the request object
     */
    public findCommentThreadSubscribersWithHttpInfo(param: CommentThreadSubscriberApiFindCommentThreadSubscribersRequest, options?: Configuration): Promise<HttpInfo<GetCommentThreadSubscribers200Response>> {
        return this.api.findCommentThreadSubscribersWithHttpInfo(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Find a list of Comment Thread Subscriber
     * @param param the request object
     */
    public findCommentThreadSubscribers(param: CommentThreadSubscriberApiFindCommentThreadSubscribersRequest, options?: Configuration): Promise<GetCommentThreadSubscribers200Response> {
        return this.api.findCommentThreadSubscribers(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Get a Comment Thread Subscriber by id
     * @param param the request object
     */
    public getCommentThreadSubscriberByIdWithHttpInfo(param: CommentThreadSubscriberApiGetCommentThreadSubscriberByIdRequest, options?: Configuration): Promise<HttpInfo<CommentThreadSubscriberDto>> {
        return this.api.getCommentThreadSubscriberByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a Comment Thread Subscriber by id
     * @param param the request object
     */
    public getCommentThreadSubscriberById(param: CommentThreadSubscriberApiGetCommentThreadSubscriberByIdRequest, options?: Configuration): Promise<CommentThreadSubscriberDto> {
        return this.api.getCommentThreadSubscriberById(param.id,  options).toPromise();
    }

    /**
     * Get a list of Comment Thread Subscriber
     * @param param the request object
     */
    public getCommentThreadSubscribersWithHttpInfo(param: CommentThreadSubscriberApiGetCommentThreadSubscribersRequest = {}, options?: Configuration): Promise<HttpInfo<GetCommentThreadSubscribers200Response>> {
        return this.api.getCommentThreadSubscribersWithHttpInfo(param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of Comment Thread Subscriber
     * @param param the request object
     */
    public getCommentThreadSubscribers(param: CommentThreadSubscriberApiGetCommentThreadSubscribersRequest = {}, options?: Configuration): Promise<GetCommentThreadSubscribers200Response> {
        return this.api.getCommentThreadSubscribers(param.size, param.page,  options).toPromise();
    }

}

import { ObservableDataFactoryFileApi } from "./ObservableAPI";
import { DataFactoryFileApiRequestFactory, DataFactoryFileApiResponseProcessor} from "../apis/DataFactoryFileApi";

export interface DataFactoryFileApiGetFileByIdRequest {
    /**
     * 
     * @type string
     * @memberof DataFactoryFileApigetFileById
     */
    id: string
}

export interface DataFactoryFileApiGetFilesRequest {
    /**
     * 
     * @type number
     * @memberof DataFactoryFileApigetFiles
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof DataFactoryFileApigetFiles
     */
    page?: number
}

export interface DataFactoryFileApiUploadFileRequest {
    /**
     * 
     * @type HttpFile
     * @memberof DataFactoryFileApiuploadFile
     */
    file: HttpFile
}

export class ObjectDataFactoryFileApi {
    private api: ObservableDataFactoryFileApi

    public constructor(configuration: Configuration, requestFactory?: DataFactoryFileApiRequestFactory, responseProcessor?: DataFactoryFileApiResponseProcessor) {
        this.api = new ObservableDataFactoryFileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a Data Factory File by id
     * @param param the request object
     */
    public getFileByIdWithHttpInfo(param: DataFactoryFileApiGetFileByIdRequest, options?: Configuration): Promise<HttpInfo<FileDto>> {
        return this.api.getFileByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a Data Factory File by id
     * @param param the request object
     */
    public getFileById(param: DataFactoryFileApiGetFileByIdRequest, options?: Configuration): Promise<FileDto> {
        return this.api.getFileById(param.id,  options).toPromise();
    }

    /**
     * Get a list of Data Factory File
     * @param param the request object
     */
    public getFilesWithHttpInfo(param: DataFactoryFileApiGetFilesRequest = {}, options?: Configuration): Promise<HttpInfo<GetFiles200Response>> {
        return this.api.getFilesWithHttpInfo(param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of Data Factory File
     * @param param the request object
     */
    public getFiles(param: DataFactoryFileApiGetFilesRequest = {}, options?: Configuration): Promise<GetFiles200Response> {
        return this.api.getFiles(param.size, param.page,  options).toPromise();
    }

    /**
     * Post a file so it can be consume by a Data Factory job
     * @param param the request object
     */
    public uploadFileWithHttpInfo(param: DataFactoryFileApiUploadFileRequest, options?: Configuration): Promise<HttpInfo<FileDto>> {
        return this.api.uploadFileWithHttpInfo(param.file,  options).toPromise();
    }

    /**
     * Post a file so it can be consume by a Data Factory job
     * @param param the request object
     */
    public uploadFile(param: DataFactoryFileApiUploadFileRequest, options?: Configuration): Promise<FileDto> {
        return this.api.uploadFile(param.file,  options).toPromise();
    }

}

import { ObservableItemApi } from "./ObservableAPI";
import { ItemApiRequestFactory, ItemApiResponseProcessor} from "../apis/ItemApi";

export interface ItemApiFindItemRequest {
    /**
     * 
     * @type string
     * @memberof ItemApifindItem
     */
    tableId: string
    /**
     * 
     * @type string
     * @memberof ItemApifindItem
     */
    partitionId: string
    /**
     * 
     * @type string
     * @memberof ItemApifindItem
     */
    levelId: string
    /**
     * 
     * @type ItemFindDTO
     * @memberof ItemApifindItem
     */
    itemFindDTO: ItemFindDTO
    /**
     * 
     * @type number
     * @memberof ItemApifindItem
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof ItemApifindItem
     */
    page?: number
}

export interface ItemApiFindItemGenericRequest {
    /**
     * 
     * @type string
     * @memberof ItemApifindItemGeneric
     */
    partitionId: string
    /**
     * 
     * @type QueryDTO
     * @memberof ItemApifindItemGeneric
     */
    queryDTO: QueryDTO
    /**
     * 
     * @type number
     * @memberof ItemApifindItemGeneric
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof ItemApifindItemGeneric
     */
    page?: number
}

export interface ItemApiGetItemByIdRequest {
    /**
     * 
     * @type string
     * @memberof ItemApigetItemById
     */
    id: string
}

export interface ItemApiGetItemsRequest {
    /**
     * 
     * @type number
     * @memberof ItemApigetItems
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof ItemApigetItems
     */
    page?: number
}

export class ObjectItemApi {
    private api: ObservableItemApi

    public constructor(configuration: Configuration, requestFactory?: ItemApiRequestFactory, responseProcessor?: ItemApiResponseProcessor) {
        this.api = new ObservableItemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Find a list of Item
     * @param param the request object
     */
    public findItemWithHttpInfo(param: ItemApiFindItemRequest, options?: Configuration): Promise<HttpInfo<GetItems200Response>> {
        return this.api.findItemWithHttpInfo(param.tableId, param.partitionId, param.levelId, param.itemFindDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Find a list of Item
     * @param param the request object
     */
    public findItem(param: ItemApiFindItemRequest, options?: Configuration): Promise<GetItems200Response> {
        return this.api.findItem(param.tableId, param.partitionId, param.levelId, param.itemFindDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Find a list of Item
     * @param param the request object
     */
    public findItemGenericWithHttpInfo(param: ItemApiFindItemGenericRequest, options?: Configuration): Promise<HttpInfo<GetItems200Response>> {
        return this.api.findItemGenericWithHttpInfo(param.partitionId, param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Find a list of Item
     * @param param the request object
     */
    public findItemGeneric(param: ItemApiFindItemGenericRequest, options?: Configuration): Promise<GetItems200Response> {
        return this.api.findItemGeneric(param.partitionId, param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Get a Item by id
     * @param param the request object
     */
    public getItemByIdWithHttpInfo(param: ItemApiGetItemByIdRequest, options?: Configuration): Promise<HttpInfo<ItemDto>> {
        return this.api.getItemByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a Item by id
     * @param param the request object
     */
    public getItemById(param: ItemApiGetItemByIdRequest, options?: Configuration): Promise<ItemDto> {
        return this.api.getItemById(param.id,  options).toPromise();
    }

    /**
     * Get a list of Item
     * @param param the request object
     */
    public getItemsWithHttpInfo(param: ItemApiGetItemsRequest = {}, options?: Configuration): Promise<HttpInfo<GetItems200Response>> {
        return this.api.getItemsWithHttpInfo(param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of Item
     * @param param the request object
     */
    public getItems(param: ItemApiGetItemsRequest = {}, options?: Configuration): Promise<GetItems200Response> {
        return this.api.getItems(param.size, param.page,  options).toPromise();
    }

}

import { ObservableItemLinkApi } from "./ObservableAPI";
import { ItemLinkApiRequestFactory, ItemLinkApiResponseProcessor} from "../apis/ItemLinkApi";

export interface ItemLinkApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof ItemLinkApi_delete
     */
    id: string
}

export interface ItemLinkApiCreateItemLinkRequest {
    /**
     * 
     * @type ItemLinkCreateDto
     * @memberof ItemLinkApicreateItemLink
     */
    itemLinkCreateDto: ItemLinkCreateDto
}

export interface ItemLinkApiFindItemLinkRequest {
    /**
     * 
     * @type QueryDTO
     * @memberof ItemLinkApifindItemLink
     */
    queryDTO: QueryDTO
    /**
     * 
     * @type number
     * @memberof ItemLinkApifindItemLink
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof ItemLinkApifindItemLink
     */
    page?: number
}

export interface ItemLinkApiGetItemLinkByIdRequest {
    /**
     * 
     * @type string
     * @memberof ItemLinkApigetItemLinkById
     */
    id: string
}

export interface ItemLinkApiGetItemLinksRequest {
    /**
     * 
     * @type number
     * @memberof ItemLinkApigetItemLinks
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof ItemLinkApigetItemLinks
     */
    page?: number
}

export class ObjectItemLinkApi {
    private api: ObservableItemLinkApi

    public constructor(configuration: Configuration, requestFactory?: ItemLinkApiRequestFactory, responseProcessor?: ItemLinkApiResponseProcessor) {
        this.api = new ObservableItemLinkApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a Item link by id
     * @param param the request object
     */
    public _deleteWithHttpInfo(param: ItemLinkApiDeleteRequest, options?: Configuration): Promise<HttpInfo<TaskDto>> {
        return this.api._deleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete a Item link by id
     * @param param the request object
     */
    public _delete(param: ItemLinkApiDeleteRequest, options?: Configuration): Promise<TaskDto> {
        return this.api._delete(param.id,  options).toPromise();
    }

    /**
     * Create a Item link
     * @param param the request object
     */
    public createItemLinkWithHttpInfo(param: ItemLinkApiCreateItemLinkRequest, options?: Configuration): Promise<HttpInfo<ItemLinkDto>> {
        return this.api.createItemLinkWithHttpInfo(param.itemLinkCreateDto,  options).toPromise();
    }

    /**
     * Create a Item link
     * @param param the request object
     */
    public createItemLink(param: ItemLinkApiCreateItemLinkRequest, options?: Configuration): Promise<ItemLinkDto> {
        return this.api.createItemLink(param.itemLinkCreateDto,  options).toPromise();
    }

    /**
     * Find a list of Item link
     * @param param the request object
     */
    public findItemLinkWithHttpInfo(param: ItemLinkApiFindItemLinkRequest, options?: Configuration): Promise<HttpInfo<GetItemLinks200Response>> {
        return this.api.findItemLinkWithHttpInfo(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Find a list of Item link
     * @param param the request object
     */
    public findItemLink(param: ItemLinkApiFindItemLinkRequest, options?: Configuration): Promise<GetItemLinks200Response> {
        return this.api.findItemLink(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Get a Item link by id
     * @param param the request object
     */
    public getItemLinkByIdWithHttpInfo(param: ItemLinkApiGetItemLinkByIdRequest, options?: Configuration): Promise<HttpInfo<ItemLinkDto>> {
        return this.api.getItemLinkByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a Item link by id
     * @param param the request object
     */
    public getItemLinkById(param: ItemLinkApiGetItemLinkByIdRequest, options?: Configuration): Promise<ItemLinkDto> {
        return this.api.getItemLinkById(param.id,  options).toPromise();
    }

    /**
     * Get a list of Item link
     * @param param the request object
     */
    public getItemLinksWithHttpInfo(param: ItemLinkApiGetItemLinksRequest = {}, options?: Configuration): Promise<HttpInfo<GetItemLinks200Response>> {
        return this.api.getItemLinksWithHttpInfo(param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of Item link
     * @param param the request object
     */
    public getItemLinks(param: ItemLinkApiGetItemLinksRequest = {}, options?: Configuration): Promise<GetItemLinks200Response> {
        return this.api.getItemLinks(param.size, param.page,  options).toPromise();
    }

}

import { ObservableJobApi } from "./ObservableAPI";
import { JobApiRequestFactory, JobApiResponseProcessor} from "../apis/JobApi";

export interface JobApiCreateJobRequest {
    /**
     * 
     * @type CreateJobDto
     * @memberof JobApicreateJob
     */
    createJobDto: CreateJobDto
}

export interface JobApiGetJobByIdRequest {
    /**
     * 
     * @type string
     * @memberof JobApigetJobById
     */
    id: string
}

export interface JobApiGetJobsRequest {
    /**
     * 
     * @type number
     * @memberof JobApigetJobs
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof JobApigetJobs
     */
    page?: number
}

export interface JobApiUpdateJobRequest {
    /**
     * 
     * @type string
     * @memberof JobApiupdateJob
     */
    id: string
    /**
     * 
     * @type UpdateJobDto
     * @memberof JobApiupdateJob
     */
    updateJobDto: UpdateJobDto
}

export interface JobApiUpdateJobZipRequest {
    /**
     * 
     * @type string
     * @memberof JobApiupdateJobZip
     */
    id: string
    /**
     * 
     * @type HttpFile
     * @memberof JobApiupdateJobZip
     */
    file: HttpFile
}

export class ObjectJobApi {
    private api: ObservableJobApi

    public constructor(configuration: Configuration, requestFactory?: JobApiRequestFactory, responseProcessor?: JobApiResponseProcessor) {
        this.api = new ObservableJobApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Job
     * @param param the request object
     */
    public createJobWithHttpInfo(param: JobApiCreateJobRequest, options?: Configuration): Promise<HttpInfo<JobDto>> {
        return this.api.createJobWithHttpInfo(param.createJobDto,  options).toPromise();
    }

    /**
     * Create a Job
     * @param param the request object
     */
    public createJob(param: JobApiCreateJobRequest, options?: Configuration): Promise<JobDto> {
        return this.api.createJob(param.createJobDto,  options).toPromise();
    }

    /**
     * Get a Job by id
     * @param param the request object
     */
    public getJobByIdWithHttpInfo(param: JobApiGetJobByIdRequest, options?: Configuration): Promise<HttpInfo<JobDto>> {
        return this.api.getJobByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a Job by id
     * @param param the request object
     */
    public getJobById(param: JobApiGetJobByIdRequest, options?: Configuration): Promise<JobDto> {
        return this.api.getJobById(param.id,  options).toPromise();
    }

    /**
     * Get a list of Job
     * @param param the request object
     */
    public getJobsWithHttpInfo(param: JobApiGetJobsRequest = {}, options?: Configuration): Promise<HttpInfo<GetJobs200Response>> {
        return this.api.getJobsWithHttpInfo(param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of Job
     * @param param the request object
     */
    public getJobs(param: JobApiGetJobsRequest = {}, options?: Configuration): Promise<GetJobs200Response> {
        return this.api.getJobs(param.size, param.page,  options).toPromise();
    }

    /**
     * Update a Job
     * @param param the request object
     */
    public updateJobWithHttpInfo(param: JobApiUpdateJobRequest, options?: Configuration): Promise<HttpInfo<JobDto>> {
        return this.api.updateJobWithHttpInfo(param.id, param.updateJobDto,  options).toPromise();
    }

    /**
     * Update a Job
     * @param param the request object
     */
    public updateJob(param: JobApiUpdateJobRequest, options?: Configuration): Promise<JobDto> {
        return this.api.updateJob(param.id, param.updateJobDto,  options).toPromise();
    }

    /**
     * Upload a zip to update a job
     * @param param the request object
     */
    public updateJobZipWithHttpInfo(param: JobApiUpdateJobZipRequest, options?: Configuration): Promise<HttpInfo<JobDto>> {
        return this.api.updateJobZipWithHttpInfo(param.id, param.file,  options).toPromise();
    }

    /**
     * Upload a zip to update a job
     * @param param the request object
     */
    public updateJobZip(param: JobApiUpdateJobZipRequest, options?: Configuration): Promise<JobDto> {
        return this.api.updateJobZip(param.id, param.file,  options).toPromise();
    }

}

import { ObservableJobExecutionApi } from "./ObservableAPI";
import { JobExecutionApiRequestFactory, JobExecutionApiResponseProcessor} from "../apis/JobExecutionApi";

export interface JobExecutionApiCreateJobExecutionRequest {
    /**
     * 
     * @type CreateJobExecutionDto
     * @memberof JobExecutionApicreateJobExecution
     */
    createJobExecutionDto: CreateJobExecutionDto
}

export interface JobExecutionApiFindRequest {
    /**
     * 
     * @type QueryDTO
     * @memberof JobExecutionApifind
     */
    queryDTO: QueryDTO
    /**
     * 
     * @type number
     * @memberof JobExecutionApifind
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof JobExecutionApifind
     */
    page?: number
}

export interface JobExecutionApiGetJobExecutionByIdRequest {
    /**
     * 
     * @type string
     * @memberof JobExecutionApigetJobExecutionById
     */
    id: string
}

export interface JobExecutionApiGetJobExecutionsRequest {
    /**
     * 
     * @type number
     * @memberof JobExecutionApigetJobExecutions
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof JobExecutionApigetJobExecutions
     */
    page?: number
}

export class ObjectJobExecutionApi {
    private api: ObservableJobExecutionApi

    public constructor(configuration: Configuration, requestFactory?: JobExecutionApiRequestFactory, responseProcessor?: JobExecutionApiResponseProcessor) {
        this.api = new ObservableJobExecutionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Job Execution
     * @param param the request object
     */
    public createJobExecutionWithHttpInfo(param: JobExecutionApiCreateJobExecutionRequest, options?: Configuration): Promise<HttpInfo<JobExecutionDto>> {
        return this.api.createJobExecutionWithHttpInfo(param.createJobExecutionDto,  options).toPromise();
    }

    /**
     * Create a Job Execution
     * @param param the request object
     */
    public createJobExecution(param: JobExecutionApiCreateJobExecutionRequest, options?: Configuration): Promise<JobExecutionDto> {
        return this.api.createJobExecution(param.createJobExecutionDto,  options).toPromise();
    }

    /**
     * (Not implemented) - Find a list of Job Execution
     * @param param the request object
     */
    public findWithHttpInfo(param: JobExecutionApiFindRequest, options?: Configuration): Promise<HttpInfo<GetJobExecutions200Response>> {
        return this.api.findWithHttpInfo(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * (Not implemented) - Find a list of Job Execution
     * @param param the request object
     */
    public find(param: JobExecutionApiFindRequest, options?: Configuration): Promise<GetJobExecutions200Response> {
        return this.api.find(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Get a Job Execution by id
     * @param param the request object
     */
    public getJobExecutionByIdWithHttpInfo(param: JobExecutionApiGetJobExecutionByIdRequest, options?: Configuration): Promise<HttpInfo<JobExecutionDto>> {
        return this.api.getJobExecutionByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a Job Execution by id
     * @param param the request object
     */
    public getJobExecutionById(param: JobExecutionApiGetJobExecutionByIdRequest, options?: Configuration): Promise<JobExecutionDto> {
        return this.api.getJobExecutionById(param.id,  options).toPromise();
    }

    /**
     * Get a list of Job Execution
     * @param param the request object
     */
    public getJobExecutionsWithHttpInfo(param: JobExecutionApiGetJobExecutionsRequest = {}, options?: Configuration): Promise<HttpInfo<GetJobExecutions200Response>> {
        return this.api.getJobExecutionsWithHttpInfo(param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of Job Execution
     * @param param the request object
     */
    public getJobExecutions(param: JobExecutionApiGetJobExecutionsRequest = {}, options?: Configuration): Promise<GetJobExecutions200Response> {
        return this.api.getJobExecutions(param.size, param.page,  options).toPromise();
    }

}

import { ObservableLevelApi } from "./ObservableAPI";
import { LevelApiRequestFactory, LevelApiResponseProcessor} from "../apis/LevelApi";

export interface LevelApiGetLevelByIdRequest {
    /**
     * 
     * @type string
     * @memberof LevelApigetLevelById
     */
    id: string
    /**
     * Context header to access levels of another account
     * @type string
     * @memberof LevelApigetLevelById
     */
    xContext?: string
}

export interface LevelApiGetLevelsRequest {
    /**
     * Context header to access levels of another account
     * @type string
     * @memberof LevelApigetLevels
     */
    xContext?: string
    /**
     * 
     * @type number
     * @memberof LevelApigetLevels
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof LevelApigetLevels
     */
    page?: number
}

export class ObjectLevelApi {
    private api: ObservableLevelApi

    public constructor(configuration: Configuration, requestFactory?: LevelApiRequestFactory, responseProcessor?: LevelApiResponseProcessor) {
        this.api = new ObservableLevelApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a Level by id
     * @param param the request object
     */
    public getLevelByIdWithHttpInfo(param: LevelApiGetLevelByIdRequest, options?: Configuration): Promise<HttpInfo<LevelDto>> {
        return this.api.getLevelByIdWithHttpInfo(param.id, param.xContext,  options).toPromise();
    }

    /**
     * Get a Level by id
     * @param param the request object
     */
    public getLevelById(param: LevelApiGetLevelByIdRequest, options?: Configuration): Promise<LevelDto> {
        return this.api.getLevelById(param.id, param.xContext,  options).toPromise();
    }

    /**
     * Get a list of Level
     * @param param the request object
     */
    public getLevelsWithHttpInfo(param: LevelApiGetLevelsRequest = {}, options?: Configuration): Promise<HttpInfo<GetLevels200Response>> {
        return this.api.getLevelsWithHttpInfo(param.xContext, param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of Level
     * @param param the request object
     */
    public getLevels(param: LevelApiGetLevelsRequest = {}, options?: Configuration): Promise<GetLevels200Response> {
        return this.api.getLevels(param.xContext, param.size, param.page,  options).toPromise();
    }

}

import { ObservablePartitionApi } from "./ObservableAPI";
import { PartitionApiRequestFactory, PartitionApiResponseProcessor} from "../apis/PartitionApi";

export interface PartitionApiGetPartitionByIdRequest {
    /**
     * 
     * @type string
     * @memberof PartitionApigetPartitionById
     */
    id: string
    /**
     * Context header to access partitions of another account
     * @type string
     * @memberof PartitionApigetPartitionById
     */
    xContext?: string
}

export interface PartitionApiGetPartitionsRequest {
    /**
     * Context header to access partitions of another account
     * @type string
     * @memberof PartitionApigetPartitions
     */
    xContext?: string
    /**
     * 
     * @type number
     * @memberof PartitionApigetPartitions
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof PartitionApigetPartitions
     */
    page?: number
}

export class ObjectPartitionApi {
    private api: ObservablePartitionApi

    public constructor(configuration: Configuration, requestFactory?: PartitionApiRequestFactory, responseProcessor?: PartitionApiResponseProcessor) {
        this.api = new ObservablePartitionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a Partition by id
     * @param param the request object
     */
    public getPartitionByIdWithHttpInfo(param: PartitionApiGetPartitionByIdRequest, options?: Configuration): Promise<HttpInfo<PartitionDto>> {
        return this.api.getPartitionByIdWithHttpInfo(param.id, param.xContext,  options).toPromise();
    }

    /**
     * Get a Partition by id
     * @param param the request object
     */
    public getPartitionById(param: PartitionApiGetPartitionByIdRequest, options?: Configuration): Promise<PartitionDto> {
        return this.api.getPartitionById(param.id, param.xContext,  options).toPromise();
    }

    /**
     * Get a list of Partition
     * @param param the request object
     */
    public getPartitionsWithHttpInfo(param: PartitionApiGetPartitionsRequest = {}, options?: Configuration): Promise<HttpInfo<GetPartitions200Response>> {
        return this.api.getPartitionsWithHttpInfo(param.xContext, param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of Partition
     * @param param the request object
     */
    public getPartitions(param: PartitionApiGetPartitionsRequest = {}, options?: Configuration): Promise<GetPartitions200Response> {
        return this.api.getPartitions(param.xContext, param.size, param.page,  options).toPromise();
    }

}

import { ObservableProbeApi } from "./ObservableAPI";
import { ProbeApiRequestFactory, ProbeApiResponseProcessor} from "../apis/ProbeApi";

export interface ProbeApiLivenessRequest {
}

export interface ProbeApiReadinessRequest {
}

export class ObjectProbeApi {
    private api: ObservableProbeApi

    public constructor(configuration: Configuration, requestFactory?: ProbeApiRequestFactory, responseProcessor?: ProbeApiResponseProcessor) {
        this.api = new ObservableProbeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public livenessWithHttpInfo(param: ProbeApiLivenessRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.livenessWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public liveness(param: ProbeApiLivenessRequest = {}, options?: Configuration): Promise<void> {
        return this.api.liveness( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public readinessWithHttpInfo(param: ProbeApiReadinessRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.readinessWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public readiness(param: ProbeApiReadinessRequest = {}, options?: Configuration): Promise<void> {
        return this.api.readiness( options).toPromise();
    }

}

import { ObservablePublicationApi } from "./ObservableAPI";
import { PublicationApiRequestFactory, PublicationApiResponseProcessor} from "../apis/PublicationApi";

export interface PublicationApiCreatePublicationRequest {
    /**
     * 
     * @type CreatePublicationDto
     * @memberof PublicationApicreatePublication
     */
    createPublicationDto: CreatePublicationDto
}

export interface PublicationApiFindPublicationsRequest {
    /**
     * 
     * @type QueryDTO
     * @memberof PublicationApifindPublications
     */
    queryDTO: QueryDTO
    /**
     * 
     * @type number
     * @memberof PublicationApifindPublications
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof PublicationApifindPublications
     */
    page?: number
}

export interface PublicationApiGetPublicationByIdRequest {
    /**
     * 
     * @type string
     * @memberof PublicationApigetPublicationById
     */
    id: string
}

export interface PublicationApiGetPublicationsRequest {
    /**
     * 
     * @type number
     * @memberof PublicationApigetPublications
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof PublicationApigetPublications
     */
    page?: number
}

export interface PublicationApiPatchPublicationRequest {
    /**
     * 
     * @type string
     * @memberof PublicationApipatchPublication
     */
    id: string
    /**
     * 
     * @type PatchPublicationDto
     * @memberof PublicationApipatchPublication
     */
    patchPublicationDto: PatchPublicationDto
}

export class ObjectPublicationApi {
    private api: ObservablePublicationApi

    public constructor(configuration: Configuration, requestFactory?: PublicationApiRequestFactory, responseProcessor?: PublicationApiResponseProcessor) {
        this.api = new ObservablePublicationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * (Experimental) - Create a Publication
     * @param param the request object
     */
    public createPublicationWithHttpInfo(param: PublicationApiCreatePublicationRequest, options?: Configuration): Promise<HttpInfo<PublicationDto>> {
        return this.api.createPublicationWithHttpInfo(param.createPublicationDto,  options).toPromise();
    }

    /**
     * (Experimental) - Create a Publication
     * @param param the request object
     */
    public createPublication(param: PublicationApiCreatePublicationRequest, options?: Configuration): Promise<PublicationDto> {
        return this.api.createPublication(param.createPublicationDto,  options).toPromise();
    }

    /**
     * Find a list of Publication
     * @param param the request object
     */
    public findPublicationsWithHttpInfo(param: PublicationApiFindPublicationsRequest, options?: Configuration): Promise<HttpInfo<GetPublications200Response>> {
        return this.api.findPublicationsWithHttpInfo(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Find a list of Publication
     * @param param the request object
     */
    public findPublications(param: PublicationApiFindPublicationsRequest, options?: Configuration): Promise<GetPublications200Response> {
        return this.api.findPublications(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Get a Publication by id
     * @param param the request object
     */
    public getPublicationByIdWithHttpInfo(param: PublicationApiGetPublicationByIdRequest, options?: Configuration): Promise<HttpInfo<PublicationDto>> {
        return this.api.getPublicationByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a Publication by id
     * @param param the request object
     */
    public getPublicationById(param: PublicationApiGetPublicationByIdRequest, options?: Configuration): Promise<PublicationDto> {
        return this.api.getPublicationById(param.id,  options).toPromise();
    }

    /**
     * Get a list of Publication
     * @param param the request object
     */
    public getPublicationsWithHttpInfo(param: PublicationApiGetPublicationsRequest = {}, options?: Configuration): Promise<HttpInfo<GetPublications200Response>> {
        return this.api.getPublicationsWithHttpInfo(param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of Publication
     * @param param the request object
     */
    public getPublications(param: PublicationApiGetPublicationsRequest = {}, options?: Configuration): Promise<GetPublications200Response> {
        return this.api.getPublications(param.size, param.page,  options).toPromise();
    }

    /**
     * (Experimental) - Update the status of a publication
     * @param param the request object
     */
    public patchPublicationWithHttpInfo(param: PublicationApiPatchPublicationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.patchPublicationWithHttpInfo(param.id, param.patchPublicationDto,  options).toPromise();
    }

    /**
     * (Experimental) - Update the status of a publication
     * @param param the request object
     */
    public patchPublication(param: PublicationApiPatchPublicationRequest, options?: Configuration): Promise<void> {
        return this.api.patchPublication(param.id, param.patchPublicationDto,  options).toPromise();
    }

}

import { ObservableScreenApi } from "./ObservableAPI";
import { ScreenApiRequestFactory, ScreenApiResponseProcessor} from "../apis/ScreenApi";

export interface ScreenApiGetScreenByIdRequest {
    /**
     * 
     * @type string
     * @memberof ScreenApigetScreenById
     */
    id: string
    /**
     * Context header to access screens of table in another account
     * @type string
     * @memberof ScreenApigetScreenById
     */
    xContext?: string
}

export interface ScreenApiGetScreensRequest {
    /**
     * Context header to access screens of table in another account
     * @type string
     * @memberof ScreenApigetScreens
     */
    xContext?: string
    /**
     * 
     * @type number
     * @memberof ScreenApigetScreens
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof ScreenApigetScreens
     */
    page?: number
}

export class ObjectScreenApi {
    private api: ObservableScreenApi

    public constructor(configuration: Configuration, requestFactory?: ScreenApiRequestFactory, responseProcessor?: ScreenApiResponseProcessor) {
        this.api = new ObservableScreenApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * (Experimental) - Get a Screen by id
     * @param param the request object
     */
    public getScreenByIdWithHttpInfo(param: ScreenApiGetScreenByIdRequest, options?: Configuration): Promise<HttpInfo<ScreenDto>> {
        return this.api.getScreenByIdWithHttpInfo(param.id, param.xContext,  options).toPromise();
    }

    /**
     * (Experimental) - Get a Screen by id
     * @param param the request object
     */
    public getScreenById(param: ScreenApiGetScreenByIdRequest, options?: Configuration): Promise<ScreenDto> {
        return this.api.getScreenById(param.id, param.xContext,  options).toPromise();
    }

    /**
     * (Experimental) - Get a list of Screen
     * @param param the request object
     */
    public getScreensWithHttpInfo(param: ScreenApiGetScreensRequest = {}, options?: Configuration): Promise<HttpInfo<GetScreens200Response>> {
        return this.api.getScreensWithHttpInfo(param.xContext, param.size, param.page,  options).toPromise();
    }

    /**
     * (Experimental) - Get a list of Screen
     * @param param the request object
     */
    public getScreens(param: ScreenApiGetScreensRequest = {}, options?: Configuration): Promise<GetScreens200Response> {
        return this.api.getScreens(param.xContext, param.size, param.page,  options).toPromise();
    }

}

import { ObservableSuggestionApi } from "./ObservableAPI";
import { SuggestionApiRequestFactory, SuggestionApiResponseProcessor} from "../apis/SuggestionApi";

export interface SuggestionApiApplyAllSuggestionRequest {
    /**
     * 
     * @type string
     * @memberof SuggestionApiapplyAllSuggestion
     */
    id: string
    /**
     * 
     * @type ApplyAllSuggestionDto
     * @memberof SuggestionApiapplyAllSuggestion
     */
    applyAllSuggestionDto: ApplyAllSuggestionDto
}

export interface SuggestionApiApplySuggestionRequest {
    /**
     * 
     * @type string
     * @memberof SuggestionApiapplySuggestion
     */
    id: string
    /**
     * 
     * @type ApplySuggestionDto
     * @memberof SuggestionApiapplySuggestion
     */
    applySuggestionDto: ApplySuggestionDto
}

export interface SuggestionApiCreateSuggestionRequest {
    /**
     * 
     * @type SuggestionCreateDto
     * @memberof SuggestionApicreateSuggestion
     */
    suggestionCreateDto: SuggestionCreateDto
}

export interface SuggestionApiFindSuggestionsRequest {
    /**
     * 
     * @type QueryDTO
     * @memberof SuggestionApifindSuggestions
     */
    queryDTO: QueryDTO
    /**
     * 
     * @type number
     * @memberof SuggestionApifindSuggestions
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof SuggestionApifindSuggestions
     */
    page?: number
}

export interface SuggestionApiGetSuggestionByIdRequest {
    /**
     * 
     * @type string
     * @memberof SuggestionApigetSuggestionById
     */
    id: string
}

export interface SuggestionApiGetSuggestionsRequest {
    /**
     * 
     * @type number
     * @memberof SuggestionApigetSuggestions
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof SuggestionApigetSuggestions
     */
    page?: number
}

export class ObjectSuggestionApi {
    private api: ObservableSuggestionApi

    public constructor(configuration: Configuration, requestFactory?: SuggestionApiRequestFactory, responseProcessor?: SuggestionApiResponseProcessor) {
        this.api = new ObservableSuggestionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * apply all fields and deleted fields from a suggestion
     * @param param the request object
     */
    public applyAllSuggestionWithHttpInfo(param: SuggestionApiApplyAllSuggestionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.applyAllSuggestionWithHttpInfo(param.id, param.applyAllSuggestionDto,  options).toPromise();
    }

    /**
     * apply all fields and deleted fields from a suggestion
     * @param param the request object
     */
    public applyAllSuggestion(param: SuggestionApiApplyAllSuggestionRequest, options?: Configuration): Promise<void> {
        return this.api.applyAllSuggestion(param.id, param.applyAllSuggestionDto,  options).toPromise();
    }

    /**
     * apply a suggestion
     * @param param the request object
     */
    public applySuggestionWithHttpInfo(param: SuggestionApiApplySuggestionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.applySuggestionWithHttpInfo(param.id, param.applySuggestionDto,  options).toPromise();
    }

    /**
     * apply a suggestion
     * @param param the request object
     */
    public applySuggestion(param: SuggestionApiApplySuggestionRequest, options?: Configuration): Promise<void> {
        return this.api.applySuggestion(param.id, param.applySuggestionDto,  options).toPromise();
    }

    /**
     * Create a Suggestion
     * @param param the request object
     */
    public createSuggestionWithHttpInfo(param: SuggestionApiCreateSuggestionRequest, options?: Configuration): Promise<HttpInfo<SuggestionDto>> {
        return this.api.createSuggestionWithHttpInfo(param.suggestionCreateDto,  options).toPromise();
    }

    /**
     * Create a Suggestion
     * @param param the request object
     */
    public createSuggestion(param: SuggestionApiCreateSuggestionRequest, options?: Configuration): Promise<SuggestionDto> {
        return this.api.createSuggestion(param.suggestionCreateDto,  options).toPromise();
    }

    /**
     * Find a list of Suggestion
     * @param param the request object
     */
    public findSuggestionsWithHttpInfo(param: SuggestionApiFindSuggestionsRequest, options?: Configuration): Promise<HttpInfo<GetSuggestions200Response>> {
        return this.api.findSuggestionsWithHttpInfo(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Find a list of Suggestion
     * @param param the request object
     */
    public findSuggestions(param: SuggestionApiFindSuggestionsRequest, options?: Configuration): Promise<GetSuggestions200Response> {
        return this.api.findSuggestions(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Get a Suggestion by id
     * @param param the request object
     */
    public getSuggestionByIdWithHttpInfo(param: SuggestionApiGetSuggestionByIdRequest, options?: Configuration): Promise<HttpInfo<SuggestionDto>> {
        return this.api.getSuggestionByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a Suggestion by id
     * @param param the request object
     */
    public getSuggestionById(param: SuggestionApiGetSuggestionByIdRequest, options?: Configuration): Promise<SuggestionDto> {
        return this.api.getSuggestionById(param.id,  options).toPromise();
    }

    /**
     * Get a list of Suggestion
     * @param param the request object
     */
    public getSuggestionsWithHttpInfo(param: SuggestionApiGetSuggestionsRequest = {}, options?: Configuration): Promise<HttpInfo<GetSuggestions200Response>> {
        return this.api.getSuggestionsWithHttpInfo(param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of Suggestion
     * @param param the request object
     */
    public getSuggestions(param: SuggestionApiGetSuggestionsRequest = {}, options?: Configuration): Promise<GetSuggestions200Response> {
        return this.api.getSuggestions(param.size, param.page,  options).toPromise();
    }

}

import { ObservableTableApi } from "./ObservableAPI";
import { TableApiRequestFactory, TableApiResponseProcessor} from "../apis/TableApi";

export interface TableApiGetTableByIdRequest {
    /**
     * 
     * @type string
     * @memberof TableApigetTableById
     */
    id: string
    /**
     * Context header to access tables of another account
     * @type string
     * @memberof TableApigetTableById
     */
    xContext?: string
}

export interface TableApiGetTablesRequest {
    /**
     * Context header to access tables of another account
     * @type string
     * @memberof TableApigetTables
     */
    xContext?: string
    /**
     * 
     * @type number
     * @memberof TableApigetTables
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof TableApigetTables
     */
    page?: number
}

export class ObjectTableApi {
    private api: ObservableTableApi

    public constructor(configuration: Configuration, requestFactory?: TableApiRequestFactory, responseProcessor?: TableApiResponseProcessor) {
        this.api = new ObservableTableApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a Table by id
     * @param param the request object
     */
    public getTableByIdWithHttpInfo(param: TableApiGetTableByIdRequest, options?: Configuration): Promise<HttpInfo<TableDto>> {
        return this.api.getTableByIdWithHttpInfo(param.id, param.xContext,  options).toPromise();
    }

    /**
     * Get a Table by id
     * @param param the request object
     */
    public getTableById(param: TableApiGetTableByIdRequest, options?: Configuration): Promise<TableDto> {
        return this.api.getTableById(param.id, param.xContext,  options).toPromise();
    }

    /**
     * Get a list of Table
     * @param param the request object
     */
    public getTablesWithHttpInfo(param: TableApiGetTablesRequest = {}, options?: Configuration): Promise<HttpInfo<GetTables200Response>> {
        return this.api.getTablesWithHttpInfo(param.xContext, param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of Table
     * @param param the request object
     */
    public getTables(param: TableApiGetTablesRequest = {}, options?: Configuration): Promise<GetTables200Response> {
        return this.api.getTables(param.xContext, param.size, param.page,  options).toPromise();
    }

}

import { ObservableTaskApi } from "./ObservableAPI";
import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";

export interface TaskApiCreateTaskRequest {
    /**
     * 
     * @type CreateTaskDto
     * @memberof TaskApicreateTask
     */
    createTaskDto: CreateTaskDto
}

export interface TaskApiDeleteTaskRequest {
    /**
     * 
     * @type string
     * @memberof TaskApideleteTask
     */
    id: string
}

export interface TaskApiGetTaskByIdRequest {
    /**
     * 
     * @type string
     * @memberof TaskApigetTaskById
     */
    id: string
}

export interface TaskApiGetTasksRequest {
    /**
     * 
     * @type number
     * @memberof TaskApigetTasks
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof TaskApigetTasks
     */
    page?: number
}

export interface TaskApiPollTaskExecutionRequest {
    /**
     * 
     * @type string
     * @memberof TaskApipollTaskExecution
     */
    id: string
}

export interface TaskApiUpdateTaskRequest {
    /**
     * 
     * @type string
     * @memberof TaskApiupdateTask
     */
    id: string
    /**
     * 
     * @type UpdateTaskDto
     * @memberof TaskApiupdateTask
     */
    updateTaskDto: UpdateTaskDto
}

export class ObjectTaskApi {
    private api: ObservableTaskApi

    public constructor(configuration: Configuration, requestFactory?: TaskApiRequestFactory, responseProcessor?: TaskApiResponseProcessor) {
        this.api = new ObservableTaskApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Task
     * @param param the request object
     */
    public createTaskWithHttpInfo(param: TaskApiCreateTaskRequest, options?: Configuration): Promise<HttpInfo<TaskDto>> {
        return this.api.createTaskWithHttpInfo(param.createTaskDto,  options).toPromise();
    }

    /**
     * Create a Task
     * @param param the request object
     */
    public createTask(param: TaskApiCreateTaskRequest, options?: Configuration): Promise<TaskDto> {
        return this.api.createTask(param.createTaskDto,  options).toPromise();
    }

    /**
     * Delete a Task by id
     * @param param the request object
     */
    public deleteTaskWithHttpInfo(param: TaskApiDeleteTaskRequest, options?: Configuration): Promise<HttpInfo<TaskDto>> {
        return this.api.deleteTaskWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete a Task by id
     * @param param the request object
     */
    public deleteTask(param: TaskApiDeleteTaskRequest, options?: Configuration): Promise<TaskDto> {
        return this.api.deleteTask(param.id,  options).toPromise();
    }

    /**
     * Get a Task by id
     * @param param the request object
     */
    public getTaskByIdWithHttpInfo(param: TaskApiGetTaskByIdRequest, options?: Configuration): Promise<HttpInfo<TaskDto>> {
        return this.api.getTaskByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a Task by id
     * @param param the request object
     */
    public getTaskById(param: TaskApiGetTaskByIdRequest, options?: Configuration): Promise<TaskDto> {
        return this.api.getTaskById(param.id,  options).toPromise();
    }

    /**
     * Get a list of Task
     * @param param the request object
     */
    public getTasksWithHttpInfo(param: TaskApiGetTasksRequest = {}, options?: Configuration): Promise<HttpInfo<GetTasks200Response>> {
        return this.api.getTasksWithHttpInfo(param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of Task
     * @param param the request object
     */
    public getTasks(param: TaskApiGetTasksRequest = {}, options?: Configuration): Promise<GetTasks200Response> {
        return this.api.getTasks(param.size, param.page,  options).toPromise();
    }

    /**
     * Poll a task if there is not task to poll, the API returns a `404 Not Found` error
     * @param param the request object
     */
    public pollTaskExecutionWithHttpInfo(param: TaskApiPollTaskExecutionRequest, options?: Configuration): Promise<HttpInfo<TaskExecutionDto>> {
        return this.api.pollTaskExecutionWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Poll a task if there is not task to poll, the API returns a `404 Not Found` error
     * @param param the request object
     */
    public pollTaskExecution(param: TaskApiPollTaskExecutionRequest, options?: Configuration): Promise<TaskExecutionDto> {
        return this.api.pollTaskExecution(param.id,  options).toPromise();
    }

    /**
     * Update a Task
     * @param param the request object
     */
    public updateTaskWithHttpInfo(param: TaskApiUpdateTaskRequest, options?: Configuration): Promise<HttpInfo<TaskDto>> {
        return this.api.updateTaskWithHttpInfo(param.id, param.updateTaskDto,  options).toPromise();
    }

    /**
     * Update a Task
     * @param param the request object
     */
    public updateTask(param: TaskApiUpdateTaskRequest, options?: Configuration): Promise<TaskDto> {
        return this.api.updateTask(param.id, param.updateTaskDto,  options).toPromise();
    }

}

import { ObservableTaskExecutionApi } from "./ObservableAPI";
import { TaskExecutionApiRequestFactory, TaskExecutionApiResponseProcessor} from "../apis/TaskExecutionApi";

export interface TaskExecutionApiGetTaskExecutionByIdRequest {
    /**
     * 
     * @type string
     * @memberof TaskExecutionApigetTaskExecutionById
     */
    id: string
}

export interface TaskExecutionApiPatchTaskExecutionRequest {
    /**
     * 
     * @type string
     * @memberof TaskExecutionApipatchTaskExecution
     */
    id: string
    /**
     * 
     * @type any
     * @memberof TaskExecutionApipatchTaskExecution
     */
    body: any
}

export class ObjectTaskExecutionApi {
    private api: ObservableTaskExecutionApi

    public constructor(configuration: Configuration, requestFactory?: TaskExecutionApiRequestFactory, responseProcessor?: TaskExecutionApiResponseProcessor) {
        this.api = new ObservableTaskExecutionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a Task Execution by id
     * @param param the request object
     */
    public getTaskExecutionByIdWithHttpInfo(param: TaskExecutionApiGetTaskExecutionByIdRequest, options?: Configuration): Promise<HttpInfo<TaskExecutionDto>> {
        return this.api.getTaskExecutionByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a Task Execution by id
     * @param param the request object
     */
    public getTaskExecutionById(param: TaskExecutionApiGetTaskExecutionByIdRequest, options?: Configuration): Promise<TaskExecutionDto> {
        return this.api.getTaskExecutionById(param.id,  options).toPromise();
    }

    /**
     * Update running task instance
     * @param param the request object
     */
    public patchTaskExecutionWithHttpInfo(param: TaskExecutionApiPatchTaskExecutionRequest, options?: Configuration): Promise<HttpInfo<TaskExecutionDto>> {
        return this.api.patchTaskExecutionWithHttpInfo(param.id, param.body,  options).toPromise();
    }

    /**
     * Update running task instance
     * @param param the request object
     */
    public patchTaskExecution(param: TaskExecutionApiPatchTaskExecutionRequest, options?: Configuration): Promise<TaskExecutionDto> {
        return this.api.patchTaskExecution(param.id, param.body,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiFindUsersRequest {
    /**
     * 
     * @type QueryDTO
     * @memberof UserApifindUsers
     */
    queryDTO: QueryDTO
    /**
     * 
     * @type number
     * @memberof UserApifindUsers
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof UserApifindUsers
     */
    page?: number
}

export interface UserApiGetUserByIdRequest {
    /**
     * 
     * @type string
     * @memberof UserApigetUserById
     */
    id: string
}

export interface UserApiGetUsersRequest {
    /**
     * 
     * @type number
     * @memberof UserApigetUsers
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof UserApigetUsers
     */
    page?: number
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Find a list of User
     * @param param the request object
     */
    public findUsersWithHttpInfo(param: UserApiFindUsersRequest, options?: Configuration): Promise<HttpInfo<GetUsers200Response>> {
        return this.api.findUsersWithHttpInfo(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Find a list of User
     * @param param the request object
     */
    public findUsers(param: UserApiFindUsersRequest, options?: Configuration): Promise<GetUsers200Response> {
        return this.api.findUsers(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Get a User by id
     * @param param the request object
     */
    public getUserByIdWithHttpInfo(param: UserApiGetUserByIdRequest, options?: Configuration): Promise<HttpInfo<UserDto>> {
        return this.api.getUserByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a User by id
     * @param param the request object
     */
    public getUserById(param: UserApiGetUserByIdRequest, options?: Configuration): Promise<UserDto> {
        return this.api.getUserById(param.id,  options).toPromise();
    }

    /**
     * Get a list of User
     * @param param the request object
     */
    public getUsersWithHttpInfo(param: UserApiGetUsersRequest = {}, options?: Configuration): Promise<HttpInfo<GetUsers200Response>> {
        return this.api.getUsersWithHttpInfo(param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of User
     * @param param the request object
     */
    public getUsers(param: UserApiGetUsersRequest = {}, options?: Configuration): Promise<GetUsers200Response> {
        return this.api.getUsers(param.size, param.page,  options).toPromise();
    }

}

import { ObservableVariableApi } from "./ObservableAPI";
import { VariableApiRequestFactory, VariableApiResponseProcessor} from "../apis/VariableApi";

export interface VariableApiCreateVariableRequest {
    /**
     * 
     * @type CreateVariableDto
     * @memberof VariableApicreateVariable
     */
    createVariableDto: CreateVariableDto
}

export interface VariableApiFindVariablesRequest {
    /**
     * 
     * @type QueryDTO
     * @memberof VariableApifindVariables
     */
    queryDTO: QueryDTO
    /**
     * 
     * @type number
     * @memberof VariableApifindVariables
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof VariableApifindVariables
     */
    page?: number
}

export interface VariableApiGetVariableByIdRequest {
    /**
     * 
     * @type string
     * @memberof VariableApigetVariableById
     */
    id: string
}

export interface VariableApiGetVariablesRequest {
    /**
     * 
     * @type number
     * @memberof VariableApigetVariables
     */
    size?: number
    /**
     * 
     * @type number
     * @memberof VariableApigetVariables
     */
    page?: number
}

export interface VariableApiUpdateVariableRequest {
    /**
     * 
     * @type string
     * @memberof VariableApiupdateVariable
     */
    id: string
    /**
     * 
     * @type UpdateVariableDto
     * @memberof VariableApiupdateVariable
     */
    updateVariableDto: UpdateVariableDto
}

export class ObjectVariableApi {
    private api: ObservableVariableApi

    public constructor(configuration: Configuration, requestFactory?: VariableApiRequestFactory, responseProcessor?: VariableApiResponseProcessor) {
        this.api = new ObservableVariableApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Variable
     * @param param the request object
     */
    public createVariableWithHttpInfo(param: VariableApiCreateVariableRequest, options?: Configuration): Promise<HttpInfo<VariableDto>> {
        return this.api.createVariableWithHttpInfo(param.createVariableDto,  options).toPromise();
    }

    /**
     * Create a Variable
     * @param param the request object
     */
    public createVariable(param: VariableApiCreateVariableRequest, options?: Configuration): Promise<VariableDto> {
        return this.api.createVariable(param.createVariableDto,  options).toPromise();
    }

    /**
     * Find a list of Variable
     * @param param the request object
     */
    public findVariablesWithHttpInfo(param: VariableApiFindVariablesRequest, options?: Configuration): Promise<HttpInfo<GetVariables200Response>> {
        return this.api.findVariablesWithHttpInfo(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Find a list of Variable
     * @param param the request object
     */
    public findVariables(param: VariableApiFindVariablesRequest, options?: Configuration): Promise<GetVariables200Response> {
        return this.api.findVariables(param.queryDTO, param.size, param.page,  options).toPromise();
    }

    /**
     * Get a Variable by id
     * @param param the request object
     */
    public getVariableByIdWithHttpInfo(param: VariableApiGetVariableByIdRequest, options?: Configuration): Promise<HttpInfo<VariableDto>> {
        return this.api.getVariableByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a Variable by id
     * @param param the request object
     */
    public getVariableById(param: VariableApiGetVariableByIdRequest, options?: Configuration): Promise<VariableDto> {
        return this.api.getVariableById(param.id,  options).toPromise();
    }

    /**
     * Get a list of Variable
     * @param param the request object
     */
    public getVariablesWithHttpInfo(param: VariableApiGetVariablesRequest = {}, options?: Configuration): Promise<HttpInfo<GetVariables200Response>> {
        return this.api.getVariablesWithHttpInfo(param.size, param.page,  options).toPromise();
    }

    /**
     * Get a list of Variable
     * @param param the request object
     */
    public getVariables(param: VariableApiGetVariablesRequest = {}, options?: Configuration): Promise<GetVariables200Response> {
        return this.api.getVariables(param.size, param.page,  options).toPromise();
    }

    /**
     * Update a Variable
     * @param param the request object
     */
    public updateVariableWithHttpInfo(param: VariableApiUpdateVariableRequest, options?: Configuration): Promise<HttpInfo<VariableDto>> {
        return this.api.updateVariableWithHttpInfo(param.id, param.updateVariableDto,  options).toPromise();
    }

    /**
     * Update a Variable
     * @param param the request object
     */
    public updateVariable(param: VariableApiUpdateVariableRequest, options?: Configuration): Promise<VariableDto> {
        return this.api.updateVariable(param.id, param.updateVariableDto,  options).toPromise();
    }

}
