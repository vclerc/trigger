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
import { ObservableAccountApi } from './ObservableAPI';

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class PromiseAccountApi {
    private api: ObservableAccountApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Find a list of Account
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findAccountsWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetAccounts200Response>> {
        const result = this.api.findAccountsWithHttpInfo(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Find a list of Account
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findAccounts(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<GetAccounts200Response> {
        const result = this.api.findAccounts(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a Account by id
     * @param id 
     */
    public getAccountByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<AccountDto>> {
        const result = this.api.getAccountByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a Account by id
     * @param id 
     */
    public getAccountById(id: string, _options?: Configuration): Promise<AccountDto> {
        const result = this.api.getAccountById(id, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Account
     * @param size 
     * @param page 
     */
    public getAccountsWithHttpInfo(size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetAccounts200Response>> {
        const result = this.api.getAccountsWithHttpInfo(size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Account
     * @param size 
     * @param page 
     */
    public getAccounts(size?: number, page?: number, _options?: Configuration): Promise<GetAccounts200Response> {
        const result = this.api.getAccounts(size, page, _options);
        return result.toPromise();
    }


}



import { ObservableCommentThreadApi } from './ObservableAPI';

import { CommentThreadApiRequestFactory, CommentThreadApiResponseProcessor} from "../apis/CommentThreadApi";
export class PromiseCommentThreadApi {
    private api: ObservableCommentThreadApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentThreadApiRequestFactory,
        responseProcessor?: CommentThreadApiResponseProcessor
    ) {
        this.api = new ObservableCommentThreadApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a reply to a comment thread
     * @param id 
     * @param commentThreadReplyCreateDto 
     */
    public addReplyWithHttpInfo(id: string, commentThreadReplyCreateDto: CommentThreadReplyCreateDto, _options?: Configuration): Promise<HttpInfo<CommentThreadDto>> {
        const result = this.api.addReplyWithHttpInfo(id, commentThreadReplyCreateDto, _options);
        return result.toPromise();
    }

    /**
     * Add a reply to a comment thread
     * @param id 
     * @param commentThreadReplyCreateDto 
     */
    public addReply(id: string, commentThreadReplyCreateDto: CommentThreadReplyCreateDto, _options?: Configuration): Promise<CommentThreadDto> {
        const result = this.api.addReply(id, commentThreadReplyCreateDto, _options);
        return result.toPromise();
    }

    /**
     * Create a Comment Thread
     * @param commentThreadCreateDto 
     */
    public createCommentThreadWithHttpInfo(commentThreadCreateDto: CommentThreadCreateDto, _options?: Configuration): Promise<HttpInfo<CommentThreadDto>> {
        const result = this.api.createCommentThreadWithHttpInfo(commentThreadCreateDto, _options);
        return result.toPromise();
    }

    /**
     * Create a Comment Thread
     * @param commentThreadCreateDto 
     */
    public createCommentThread(commentThreadCreateDto: CommentThreadCreateDto, _options?: Configuration): Promise<CommentThreadDto> {
        const result = this.api.createCommentThread(commentThreadCreateDto, _options);
        return result.toPromise();
    }

    /**
     * Find a list of Comment Thread
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findCommentThreadsWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetCommentThreads200Response>> {
        const result = this.api.findCommentThreadsWithHttpInfo(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Find a list of Comment Thread
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findCommentThreads(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<GetCommentThreads200Response> {
        const result = this.api.findCommentThreads(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a Comment Thread by id
     * @param id 
     */
    public getCommentThreadByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<CommentThreadDto>> {
        const result = this.api.getCommentThreadByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a Comment Thread by id
     * @param id 
     */
    public getCommentThreadById(id: string, _options?: Configuration): Promise<CommentThreadDto> {
        const result = this.api.getCommentThreadById(id, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Comment Thread
     * @param size 
     * @param page 
     */
    public getCommentThreadsWithHttpInfo(size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetCommentThreads200Response>> {
        const result = this.api.getCommentThreadsWithHttpInfo(size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Comment Thread
     * @param size 
     * @param page 
     */
    public getCommentThreads(size?: number, page?: number, _options?: Configuration): Promise<GetCommentThreads200Response> {
        const result = this.api.getCommentThreads(size, page, _options);
        return result.toPromise();
    }

    /**
     * Patch a Comment Thread
     * @param id 
     * @param commentThreadUpdateDto 
     */
    public patchCommentThreadWithHttpInfo(id: string, commentThreadUpdateDto: CommentThreadUpdateDto, _options?: Configuration): Promise<HttpInfo<CommentThreadDto>> {
        const result = this.api.patchCommentThreadWithHttpInfo(id, commentThreadUpdateDto, _options);
        return result.toPromise();
    }

    /**
     * Patch a Comment Thread
     * @param id 
     * @param commentThreadUpdateDto 
     */
    public patchCommentThread(id: string, commentThreadUpdateDto: CommentThreadUpdateDto, _options?: Configuration): Promise<CommentThreadDto> {
        const result = this.api.patchCommentThread(id, commentThreadUpdateDto, _options);
        return result.toPromise();
    }


}



import { ObservableCommentThreadSubscriberApi } from './ObservableAPI';

import { CommentThreadSubscriberApiRequestFactory, CommentThreadSubscriberApiResponseProcessor} from "../apis/CommentThreadSubscriberApi";
export class PromiseCommentThreadSubscriberApi {
    private api: ObservableCommentThreadSubscriberApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentThreadSubscriberApiRequestFactory,
        responseProcessor?: CommentThreadSubscriberApiResponseProcessor
    ) {
        this.api = new ObservableCommentThreadSubscriberApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Find a list of Comment Thread Subscriber
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findCommentThreadSubscribersWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetCommentThreadSubscribers200Response>> {
        const result = this.api.findCommentThreadSubscribersWithHttpInfo(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Find a list of Comment Thread Subscriber
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findCommentThreadSubscribers(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<GetCommentThreadSubscribers200Response> {
        const result = this.api.findCommentThreadSubscribers(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a Comment Thread Subscriber by id
     * @param id 
     */
    public getCommentThreadSubscriberByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<CommentThreadSubscriberDto>> {
        const result = this.api.getCommentThreadSubscriberByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a Comment Thread Subscriber by id
     * @param id 
     */
    public getCommentThreadSubscriberById(id: string, _options?: Configuration): Promise<CommentThreadSubscriberDto> {
        const result = this.api.getCommentThreadSubscriberById(id, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Comment Thread Subscriber
     * @param size 
     * @param page 
     */
    public getCommentThreadSubscribersWithHttpInfo(size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetCommentThreadSubscribers200Response>> {
        const result = this.api.getCommentThreadSubscribersWithHttpInfo(size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Comment Thread Subscriber
     * @param size 
     * @param page 
     */
    public getCommentThreadSubscribers(size?: number, page?: number, _options?: Configuration): Promise<GetCommentThreadSubscribers200Response> {
        const result = this.api.getCommentThreadSubscribers(size, page, _options);
        return result.toPromise();
    }


}



import { ObservableDataFactoryFileApi } from './ObservableAPI';

import { DataFactoryFileApiRequestFactory, DataFactoryFileApiResponseProcessor} from "../apis/DataFactoryFileApi";
export class PromiseDataFactoryFileApi {
    private api: ObservableDataFactoryFileApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataFactoryFileApiRequestFactory,
        responseProcessor?: DataFactoryFileApiResponseProcessor
    ) {
        this.api = new ObservableDataFactoryFileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a Data Factory File by id
     * @param id 
     */
    public getFileByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<FileDto>> {
        const result = this.api.getFileByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a Data Factory File by id
     * @param id 
     */
    public getFileById(id: string, _options?: Configuration): Promise<FileDto> {
        const result = this.api.getFileById(id, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Data Factory File
     * @param size 
     * @param page 
     */
    public getFilesWithHttpInfo(size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetFiles200Response>> {
        const result = this.api.getFilesWithHttpInfo(size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Data Factory File
     * @param size 
     * @param page 
     */
    public getFiles(size?: number, page?: number, _options?: Configuration): Promise<GetFiles200Response> {
        const result = this.api.getFiles(size, page, _options);
        return result.toPromise();
    }

    /**
     * Post a file so it can be consume by a Data Factory job
     * @param file 
     */
    public uploadFileWithHttpInfo(file: HttpFile, _options?: Configuration): Promise<HttpInfo<FileDto>> {
        const result = this.api.uploadFileWithHttpInfo(file, _options);
        return result.toPromise();
    }

    /**
     * Post a file so it can be consume by a Data Factory job
     * @param file 
     */
    public uploadFile(file: HttpFile, _options?: Configuration): Promise<FileDto> {
        const result = this.api.uploadFile(file, _options);
        return result.toPromise();
    }


}



import { ObservableItemApi } from './ObservableAPI';

import { ItemApiRequestFactory, ItemApiResponseProcessor} from "../apis/ItemApi";
export class PromiseItemApi {
    private api: ObservableItemApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemApiRequestFactory,
        responseProcessor?: ItemApiResponseProcessor
    ) {
        this.api = new ObservableItemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Find a list of Item
     * @param tableId 
     * @param partitionId 
     * @param levelId 
     * @param itemFindDTO 
     * @param size 
     * @param page 
     */
    public findItemWithHttpInfo(tableId: string, partitionId: string, levelId: string, itemFindDTO: ItemFindDTO, size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetItems200Response>> {
        const result = this.api.findItemWithHttpInfo(tableId, partitionId, levelId, itemFindDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Find a list of Item
     * @param tableId 
     * @param partitionId 
     * @param levelId 
     * @param itemFindDTO 
     * @param size 
     * @param page 
     */
    public findItem(tableId: string, partitionId: string, levelId: string, itemFindDTO: ItemFindDTO, size?: number, page?: number, _options?: Configuration): Promise<GetItems200Response> {
        const result = this.api.findItem(tableId, partitionId, levelId, itemFindDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Find a list of Item
     * @param partitionId 
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findItemGenericWithHttpInfo(partitionId: string, queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetItems200Response>> {
        const result = this.api.findItemGenericWithHttpInfo(partitionId, queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Find a list of Item
     * @param partitionId 
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findItemGeneric(partitionId: string, queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<GetItems200Response> {
        const result = this.api.findItemGeneric(partitionId, queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a Item by id
     * @param id 
     */
    public getItemByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<ItemDto>> {
        const result = this.api.getItemByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a Item by id
     * @param id 
     */
    public getItemById(id: string, _options?: Configuration): Promise<ItemDto> {
        const result = this.api.getItemById(id, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Item
     * @param size 
     * @param page 
     */
    public getItemsWithHttpInfo(size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetItems200Response>> {
        const result = this.api.getItemsWithHttpInfo(size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Item
     * @param size 
     * @param page 
     */
    public getItems(size?: number, page?: number, _options?: Configuration): Promise<GetItems200Response> {
        const result = this.api.getItems(size, page, _options);
        return result.toPromise();
    }


}



import { ObservableItemLinkApi } from './ObservableAPI';

import { ItemLinkApiRequestFactory, ItemLinkApiResponseProcessor} from "../apis/ItemLinkApi";
export class PromiseItemLinkApi {
    private api: ObservableItemLinkApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemLinkApiRequestFactory,
        responseProcessor?: ItemLinkApiResponseProcessor
    ) {
        this.api = new ObservableItemLinkApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a Item link by id
     * @param id 
     */
    public _deleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<TaskDto>> {
        const result = this.api._deleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete a Item link by id
     * @param id 
     */
    public _delete(id: string, _options?: Configuration): Promise<TaskDto> {
        const result = this.api._delete(id, _options);
        return result.toPromise();
    }

    /**
     * Create a Item link
     * @param itemLinkCreateDto 
     */
    public createItemLinkWithHttpInfo(itemLinkCreateDto: ItemLinkCreateDto, _options?: Configuration): Promise<HttpInfo<ItemLinkDto>> {
        const result = this.api.createItemLinkWithHttpInfo(itemLinkCreateDto, _options);
        return result.toPromise();
    }

    /**
     * Create a Item link
     * @param itemLinkCreateDto 
     */
    public createItemLink(itemLinkCreateDto: ItemLinkCreateDto, _options?: Configuration): Promise<ItemLinkDto> {
        const result = this.api.createItemLink(itemLinkCreateDto, _options);
        return result.toPromise();
    }

    /**
     * Find a list of Item link
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findItemLinkWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetItemLinks200Response>> {
        const result = this.api.findItemLinkWithHttpInfo(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Find a list of Item link
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findItemLink(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<GetItemLinks200Response> {
        const result = this.api.findItemLink(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a Item link by id
     * @param id 
     */
    public getItemLinkByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<ItemLinkDto>> {
        const result = this.api.getItemLinkByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a Item link by id
     * @param id 
     */
    public getItemLinkById(id: string, _options?: Configuration): Promise<ItemLinkDto> {
        const result = this.api.getItemLinkById(id, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Item link
     * @param size 
     * @param page 
     */
    public getItemLinksWithHttpInfo(size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetItemLinks200Response>> {
        const result = this.api.getItemLinksWithHttpInfo(size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Item link
     * @param size 
     * @param page 
     */
    public getItemLinks(size?: number, page?: number, _options?: Configuration): Promise<GetItemLinks200Response> {
        const result = this.api.getItemLinks(size, page, _options);
        return result.toPromise();
    }


}



import { ObservableJobApi } from './ObservableAPI';

import { JobApiRequestFactory, JobApiResponseProcessor} from "../apis/JobApi";
export class PromiseJobApi {
    private api: ObservableJobApi

    public constructor(
        configuration: Configuration,
        requestFactory?: JobApiRequestFactory,
        responseProcessor?: JobApiResponseProcessor
    ) {
        this.api = new ObservableJobApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Job
     * @param createJobDto 
     */
    public createJobWithHttpInfo(createJobDto: CreateJobDto, _options?: Configuration): Promise<HttpInfo<JobDto>> {
        const result = this.api.createJobWithHttpInfo(createJobDto, _options);
        return result.toPromise();
    }

    /**
     * Create a Job
     * @param createJobDto 
     */
    public createJob(createJobDto: CreateJobDto, _options?: Configuration): Promise<JobDto> {
        const result = this.api.createJob(createJobDto, _options);
        return result.toPromise();
    }

    /**
     * Get a Job by id
     * @param id 
     */
    public getJobByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<JobDto>> {
        const result = this.api.getJobByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a Job by id
     * @param id 
     */
    public getJobById(id: string, _options?: Configuration): Promise<JobDto> {
        const result = this.api.getJobById(id, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Job
     * @param size 
     * @param page 
     */
    public getJobsWithHttpInfo(size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetJobs200Response>> {
        const result = this.api.getJobsWithHttpInfo(size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Job
     * @param size 
     * @param page 
     */
    public getJobs(size?: number, page?: number, _options?: Configuration): Promise<GetJobs200Response> {
        const result = this.api.getJobs(size, page, _options);
        return result.toPromise();
    }

    /**
     * Update a Job
     * @param id 
     * @param updateJobDto 
     */
    public updateJobWithHttpInfo(id: string, updateJobDto: UpdateJobDto, _options?: Configuration): Promise<HttpInfo<JobDto>> {
        const result = this.api.updateJobWithHttpInfo(id, updateJobDto, _options);
        return result.toPromise();
    }

    /**
     * Update a Job
     * @param id 
     * @param updateJobDto 
     */
    public updateJob(id: string, updateJobDto: UpdateJobDto, _options?: Configuration): Promise<JobDto> {
        const result = this.api.updateJob(id, updateJobDto, _options);
        return result.toPromise();
    }

    /**
     * Upload a zip to update a job
     * @param id 
     * @param file 
     */
    public updateJobZipWithHttpInfo(id: string, file: HttpFile, _options?: Configuration): Promise<HttpInfo<JobDto>> {
        const result = this.api.updateJobZipWithHttpInfo(id, file, _options);
        return result.toPromise();
    }

    /**
     * Upload a zip to update a job
     * @param id 
     * @param file 
     */
    public updateJobZip(id: string, file: HttpFile, _options?: Configuration): Promise<JobDto> {
        const result = this.api.updateJobZip(id, file, _options);
        return result.toPromise();
    }


}



import { ObservableJobExecutionApi } from './ObservableAPI';

import { JobExecutionApiRequestFactory, JobExecutionApiResponseProcessor} from "../apis/JobExecutionApi";
export class PromiseJobExecutionApi {
    private api: ObservableJobExecutionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: JobExecutionApiRequestFactory,
        responseProcessor?: JobExecutionApiResponseProcessor
    ) {
        this.api = new ObservableJobExecutionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Job Execution
     * @param createJobExecutionDto 
     */
    public createJobExecutionWithHttpInfo(createJobExecutionDto: CreateJobExecutionDto, _options?: Configuration): Promise<HttpInfo<JobExecutionDto>> {
        const result = this.api.createJobExecutionWithHttpInfo(createJobExecutionDto, _options);
        return result.toPromise();
    }

    /**
     * Create a Job Execution
     * @param createJobExecutionDto 
     */
    public createJobExecution(createJobExecutionDto: CreateJobExecutionDto, _options?: Configuration): Promise<JobExecutionDto> {
        const result = this.api.createJobExecution(createJobExecutionDto, _options);
        return result.toPromise();
    }

    /**
     * (Not implemented) - Find a list of Job Execution
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetJobExecutions200Response>> {
        const result = this.api.findWithHttpInfo(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * (Not implemented) - Find a list of Job Execution
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public find(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<GetJobExecutions200Response> {
        const result = this.api.find(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a Job Execution by id
     * @param id 
     */
    public getJobExecutionByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<JobExecutionDto>> {
        const result = this.api.getJobExecutionByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a Job Execution by id
     * @param id 
     */
    public getJobExecutionById(id: string, _options?: Configuration): Promise<JobExecutionDto> {
        const result = this.api.getJobExecutionById(id, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Job Execution
     * @param size 
     * @param page 
     */
    public getJobExecutionsWithHttpInfo(size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetJobExecutions200Response>> {
        const result = this.api.getJobExecutionsWithHttpInfo(size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Job Execution
     * @param size 
     * @param page 
     */
    public getJobExecutions(size?: number, page?: number, _options?: Configuration): Promise<GetJobExecutions200Response> {
        const result = this.api.getJobExecutions(size, page, _options);
        return result.toPromise();
    }


}



import { ObservableLevelApi } from './ObservableAPI';

import { LevelApiRequestFactory, LevelApiResponseProcessor} from "../apis/LevelApi";
export class PromiseLevelApi {
    private api: ObservableLevelApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LevelApiRequestFactory,
        responseProcessor?: LevelApiResponseProcessor
    ) {
        this.api = new ObservableLevelApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a Level by id
     * @param id 
     * @param xContext Context header to access levels of another account
     */
    public getLevelByIdWithHttpInfo(id: string, xContext?: string, _options?: Configuration): Promise<HttpInfo<LevelDto>> {
        const result = this.api.getLevelByIdWithHttpInfo(id, xContext, _options);
        return result.toPromise();
    }

    /**
     * Get a Level by id
     * @param id 
     * @param xContext Context header to access levels of another account
     */
    public getLevelById(id: string, xContext?: string, _options?: Configuration): Promise<LevelDto> {
        const result = this.api.getLevelById(id, xContext, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Level
     * @param xContext Context header to access levels of another account
     * @param size 
     * @param page 
     */
    public getLevelsWithHttpInfo(xContext?: string, size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetLevels200Response>> {
        const result = this.api.getLevelsWithHttpInfo(xContext, size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Level
     * @param xContext Context header to access levels of another account
     * @param size 
     * @param page 
     */
    public getLevels(xContext?: string, size?: number, page?: number, _options?: Configuration): Promise<GetLevels200Response> {
        const result = this.api.getLevels(xContext, size, page, _options);
        return result.toPromise();
    }


}



import { ObservablePartitionApi } from './ObservableAPI';

import { PartitionApiRequestFactory, PartitionApiResponseProcessor} from "../apis/PartitionApi";
export class PromisePartitionApi {
    private api: ObservablePartitionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PartitionApiRequestFactory,
        responseProcessor?: PartitionApiResponseProcessor
    ) {
        this.api = new ObservablePartitionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a Partition by id
     * @param id 
     * @param xContext Context header to access partitions of another account
     */
    public getPartitionByIdWithHttpInfo(id: string, xContext?: string, _options?: Configuration): Promise<HttpInfo<PartitionDto>> {
        const result = this.api.getPartitionByIdWithHttpInfo(id, xContext, _options);
        return result.toPromise();
    }

    /**
     * Get a Partition by id
     * @param id 
     * @param xContext Context header to access partitions of another account
     */
    public getPartitionById(id: string, xContext?: string, _options?: Configuration): Promise<PartitionDto> {
        const result = this.api.getPartitionById(id, xContext, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Partition
     * @param xContext Context header to access partitions of another account
     * @param size 
     * @param page 
     */
    public getPartitionsWithHttpInfo(xContext?: string, size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetPartitions200Response>> {
        const result = this.api.getPartitionsWithHttpInfo(xContext, size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Partition
     * @param xContext Context header to access partitions of another account
     * @param size 
     * @param page 
     */
    public getPartitions(xContext?: string, size?: number, page?: number, _options?: Configuration): Promise<GetPartitions200Response> {
        const result = this.api.getPartitions(xContext, size, page, _options);
        return result.toPromise();
    }


}



import { ObservableProbeApi } from './ObservableAPI';

import { ProbeApiRequestFactory, ProbeApiResponseProcessor} from "../apis/ProbeApi";
export class PromiseProbeApi {
    private api: ObservableProbeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProbeApiRequestFactory,
        responseProcessor?: ProbeApiResponseProcessor
    ) {
        this.api = new ObservableProbeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public livenessWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.livenessWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public liveness(_options?: Configuration): Promise<void> {
        const result = this.api.liveness(_options);
        return result.toPromise();
    }

    /**
     */
    public readinessWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.readinessWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public readiness(_options?: Configuration): Promise<void> {
        const result = this.api.readiness(_options);
        return result.toPromise();
    }


}



import { ObservablePublicationApi } from './ObservableAPI';

import { PublicationApiRequestFactory, PublicationApiResponseProcessor} from "../apis/PublicationApi";
export class PromisePublicationApi {
    private api: ObservablePublicationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicationApiRequestFactory,
        responseProcessor?: PublicationApiResponseProcessor
    ) {
        this.api = new ObservablePublicationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * (Experimental) - Create a Publication
     * @param createPublicationDto 
     */
    public createPublicationWithHttpInfo(createPublicationDto: CreatePublicationDto, _options?: Configuration): Promise<HttpInfo<PublicationDto>> {
        const result = this.api.createPublicationWithHttpInfo(createPublicationDto, _options);
        return result.toPromise();
    }

    /**
     * (Experimental) - Create a Publication
     * @param createPublicationDto 
     */
    public createPublication(createPublicationDto: CreatePublicationDto, _options?: Configuration): Promise<PublicationDto> {
        const result = this.api.createPublication(createPublicationDto, _options);
        return result.toPromise();
    }

    /**
     * Find a list of Publication
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findPublicationsWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetPublications200Response>> {
        const result = this.api.findPublicationsWithHttpInfo(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Find a list of Publication
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findPublications(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<GetPublications200Response> {
        const result = this.api.findPublications(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a Publication by id
     * @param id 
     */
    public getPublicationByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<PublicationDto>> {
        const result = this.api.getPublicationByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a Publication by id
     * @param id 
     */
    public getPublicationById(id: string, _options?: Configuration): Promise<PublicationDto> {
        const result = this.api.getPublicationById(id, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Publication
     * @param size 
     * @param page 
     */
    public getPublicationsWithHttpInfo(size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetPublications200Response>> {
        const result = this.api.getPublicationsWithHttpInfo(size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Publication
     * @param size 
     * @param page 
     */
    public getPublications(size?: number, page?: number, _options?: Configuration): Promise<GetPublications200Response> {
        const result = this.api.getPublications(size, page, _options);
        return result.toPromise();
    }

    /**
     * (Experimental) - Update the status of a publication
     * @param id 
     * @param patchPublicationDto 
     */
    public patchPublicationWithHttpInfo(id: string, patchPublicationDto: PatchPublicationDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.patchPublicationWithHttpInfo(id, patchPublicationDto, _options);
        return result.toPromise();
    }

    /**
     * (Experimental) - Update the status of a publication
     * @param id 
     * @param patchPublicationDto 
     */
    public patchPublication(id: string, patchPublicationDto: PatchPublicationDto, _options?: Configuration): Promise<void> {
        const result = this.api.patchPublication(id, patchPublicationDto, _options);
        return result.toPromise();
    }


}



import { ObservableScreenApi } from './ObservableAPI';

import { ScreenApiRequestFactory, ScreenApiResponseProcessor} from "../apis/ScreenApi";
export class PromiseScreenApi {
    private api: ObservableScreenApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ScreenApiRequestFactory,
        responseProcessor?: ScreenApiResponseProcessor
    ) {
        this.api = new ObservableScreenApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * (Experimental) - Get a Screen by id
     * @param id 
     * @param xContext Context header to access screens of table in another account
     */
    public getScreenByIdWithHttpInfo(id: string, xContext?: string, _options?: Configuration): Promise<HttpInfo<ScreenDto>> {
        const result = this.api.getScreenByIdWithHttpInfo(id, xContext, _options);
        return result.toPromise();
    }

    /**
     * (Experimental) - Get a Screen by id
     * @param id 
     * @param xContext Context header to access screens of table in another account
     */
    public getScreenById(id: string, xContext?: string, _options?: Configuration): Promise<ScreenDto> {
        const result = this.api.getScreenById(id, xContext, _options);
        return result.toPromise();
    }

    /**
     * (Experimental) - Get a list of Screen
     * @param xContext Context header to access screens of table in another account
     * @param size 
     * @param page 
     */
    public getScreensWithHttpInfo(xContext?: string, size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetScreens200Response>> {
        const result = this.api.getScreensWithHttpInfo(xContext, size, page, _options);
        return result.toPromise();
    }

    /**
     * (Experimental) - Get a list of Screen
     * @param xContext Context header to access screens of table in another account
     * @param size 
     * @param page 
     */
    public getScreens(xContext?: string, size?: number, page?: number, _options?: Configuration): Promise<GetScreens200Response> {
        const result = this.api.getScreens(xContext, size, page, _options);
        return result.toPromise();
    }


}



import { ObservableSuggestionApi } from './ObservableAPI';

import { SuggestionApiRequestFactory, SuggestionApiResponseProcessor} from "../apis/SuggestionApi";
export class PromiseSuggestionApi {
    private api: ObservableSuggestionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SuggestionApiRequestFactory,
        responseProcessor?: SuggestionApiResponseProcessor
    ) {
        this.api = new ObservableSuggestionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * apply all fields and deleted fields from a suggestion
     * @param id 
     * @param applyAllSuggestionDto 
     */
    public applyAllSuggestionWithHttpInfo(id: string, applyAllSuggestionDto: ApplyAllSuggestionDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.applyAllSuggestionWithHttpInfo(id, applyAllSuggestionDto, _options);
        return result.toPromise();
    }

    /**
     * apply all fields and deleted fields from a suggestion
     * @param id 
     * @param applyAllSuggestionDto 
     */
    public applyAllSuggestion(id: string, applyAllSuggestionDto: ApplyAllSuggestionDto, _options?: Configuration): Promise<void> {
        const result = this.api.applyAllSuggestion(id, applyAllSuggestionDto, _options);
        return result.toPromise();
    }

    /**
     * apply a suggestion
     * @param id 
     * @param applySuggestionDto 
     */
    public applySuggestionWithHttpInfo(id: string, applySuggestionDto: ApplySuggestionDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.applySuggestionWithHttpInfo(id, applySuggestionDto, _options);
        return result.toPromise();
    }

    /**
     * apply a suggestion
     * @param id 
     * @param applySuggestionDto 
     */
    public applySuggestion(id: string, applySuggestionDto: ApplySuggestionDto, _options?: Configuration): Promise<void> {
        const result = this.api.applySuggestion(id, applySuggestionDto, _options);
        return result.toPromise();
    }

    /**
     * Create a Suggestion
     * @param suggestionCreateDto 
     */
    public createSuggestionWithHttpInfo(suggestionCreateDto: SuggestionCreateDto, _options?: Configuration): Promise<HttpInfo<SuggestionDto>> {
        const result = this.api.createSuggestionWithHttpInfo(suggestionCreateDto, _options);
        return result.toPromise();
    }

    /**
     * Create a Suggestion
     * @param suggestionCreateDto 
     */
    public createSuggestion(suggestionCreateDto: SuggestionCreateDto, _options?: Configuration): Promise<SuggestionDto> {
        const result = this.api.createSuggestion(suggestionCreateDto, _options);
        return result.toPromise();
    }

    /**
     * Find a list of Suggestion
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findSuggestionsWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetSuggestions200Response>> {
        const result = this.api.findSuggestionsWithHttpInfo(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Find a list of Suggestion
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findSuggestions(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<GetSuggestions200Response> {
        const result = this.api.findSuggestions(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a Suggestion by id
     * @param id 
     */
    public getSuggestionByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<SuggestionDto>> {
        const result = this.api.getSuggestionByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a Suggestion by id
     * @param id 
     */
    public getSuggestionById(id: string, _options?: Configuration): Promise<SuggestionDto> {
        const result = this.api.getSuggestionById(id, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Suggestion
     * @param size 
     * @param page 
     */
    public getSuggestionsWithHttpInfo(size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetSuggestions200Response>> {
        const result = this.api.getSuggestionsWithHttpInfo(size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Suggestion
     * @param size 
     * @param page 
     */
    public getSuggestions(size?: number, page?: number, _options?: Configuration): Promise<GetSuggestions200Response> {
        const result = this.api.getSuggestions(size, page, _options);
        return result.toPromise();
    }


}



import { ObservableTableApi } from './ObservableAPI';

import { TableApiRequestFactory, TableApiResponseProcessor} from "../apis/TableApi";
export class PromiseTableApi {
    private api: ObservableTableApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TableApiRequestFactory,
        responseProcessor?: TableApiResponseProcessor
    ) {
        this.api = new ObservableTableApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a Table by id
     * @param id 
     * @param xContext Context header to access tables of another account
     */
    public getTableByIdWithHttpInfo(id: string, xContext?: string, _options?: Configuration): Promise<HttpInfo<TableDto>> {
        const result = this.api.getTableByIdWithHttpInfo(id, xContext, _options);
        return result.toPromise();
    }

    /**
     * Get a Table by id
     * @param id 
     * @param xContext Context header to access tables of another account
     */
    public getTableById(id: string, xContext?: string, _options?: Configuration): Promise<TableDto> {
        const result = this.api.getTableById(id, xContext, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Table
     * @param xContext Context header to access tables of another account
     * @param size 
     * @param page 
     */
    public getTablesWithHttpInfo(xContext?: string, size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetTables200Response>> {
        const result = this.api.getTablesWithHttpInfo(xContext, size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Table
     * @param xContext Context header to access tables of another account
     * @param size 
     * @param page 
     */
    public getTables(xContext?: string, size?: number, page?: number, _options?: Configuration): Promise<GetTables200Response> {
        const result = this.api.getTables(xContext, size, page, _options);
        return result.toPromise();
    }


}



import { ObservableTaskApi } from './ObservableAPI';

import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";
export class PromiseTaskApi {
    private api: ObservableTaskApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TaskApiRequestFactory,
        responseProcessor?: TaskApiResponseProcessor
    ) {
        this.api = new ObservableTaskApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Task
     * @param createTaskDto 
     */
    public createTaskWithHttpInfo(createTaskDto: CreateTaskDto, _options?: Configuration): Promise<HttpInfo<TaskDto>> {
        const result = this.api.createTaskWithHttpInfo(createTaskDto, _options);
        return result.toPromise();
    }

    /**
     * Create a Task
     * @param createTaskDto 
     */
    public createTask(createTaskDto: CreateTaskDto, _options?: Configuration): Promise<TaskDto> {
        const result = this.api.createTask(createTaskDto, _options);
        return result.toPromise();
    }

    /**
     * Delete a Task by id
     * @param id 
     */
    public deleteTaskWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<TaskDto>> {
        const result = this.api.deleteTaskWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete a Task by id
     * @param id 
     */
    public deleteTask(id: string, _options?: Configuration): Promise<TaskDto> {
        const result = this.api.deleteTask(id, _options);
        return result.toPromise();
    }

    /**
     * Get a Task by id
     * @param id 
     */
    public getTaskByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<TaskDto>> {
        const result = this.api.getTaskByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a Task by id
     * @param id 
     */
    public getTaskById(id: string, _options?: Configuration): Promise<TaskDto> {
        const result = this.api.getTaskById(id, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Task
     * @param size 
     * @param page 
     */
    public getTasksWithHttpInfo(size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetTasks200Response>> {
        const result = this.api.getTasksWithHttpInfo(size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Task
     * @param size 
     * @param page 
     */
    public getTasks(size?: number, page?: number, _options?: Configuration): Promise<GetTasks200Response> {
        const result = this.api.getTasks(size, page, _options);
        return result.toPromise();
    }

    /**
     * Poll a task if there is not task to poll, the API returns a `404 Not Found` error
     * @param id 
     */
    public pollTaskExecutionWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<TaskExecutionDto>> {
        const result = this.api.pollTaskExecutionWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Poll a task if there is not task to poll, the API returns a `404 Not Found` error
     * @param id 
     */
    public pollTaskExecution(id: string, _options?: Configuration): Promise<TaskExecutionDto> {
        const result = this.api.pollTaskExecution(id, _options);
        return result.toPromise();
    }

    /**
     * Update a Task
     * @param id 
     * @param updateTaskDto 
     */
    public updateTaskWithHttpInfo(id: string, updateTaskDto: UpdateTaskDto, _options?: Configuration): Promise<HttpInfo<TaskDto>> {
        const result = this.api.updateTaskWithHttpInfo(id, updateTaskDto, _options);
        return result.toPromise();
    }

    /**
     * Update a Task
     * @param id 
     * @param updateTaskDto 
     */
    public updateTask(id: string, updateTaskDto: UpdateTaskDto, _options?: Configuration): Promise<TaskDto> {
        const result = this.api.updateTask(id, updateTaskDto, _options);
        return result.toPromise();
    }


}



import { ObservableTaskExecutionApi } from './ObservableAPI';

import { TaskExecutionApiRequestFactory, TaskExecutionApiResponseProcessor} from "../apis/TaskExecutionApi";
export class PromiseTaskExecutionApi {
    private api: ObservableTaskExecutionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TaskExecutionApiRequestFactory,
        responseProcessor?: TaskExecutionApiResponseProcessor
    ) {
        this.api = new ObservableTaskExecutionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a Task Execution by id
     * @param id 
     */
    public getTaskExecutionByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<TaskExecutionDto>> {
        const result = this.api.getTaskExecutionByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a Task Execution by id
     * @param id 
     */
    public getTaskExecutionById(id: string, _options?: Configuration): Promise<TaskExecutionDto> {
        const result = this.api.getTaskExecutionById(id, _options);
        return result.toPromise();
    }

    /**
     * Update running task instance
     * @param id 
     * @param body 
     */
    public patchTaskExecutionWithHttpInfo(id: string, body: any, _options?: Configuration): Promise<HttpInfo<TaskExecutionDto>> {
        const result = this.api.patchTaskExecutionWithHttpInfo(id, body, _options);
        return result.toPromise();
    }

    /**
     * Update running task instance
     * @param id 
     * @param body 
     */
    public patchTaskExecution(id: string, body: any, _options?: Configuration): Promise<TaskExecutionDto> {
        const result = this.api.patchTaskExecution(id, body, _options);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Find a list of User
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findUsersWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetUsers200Response>> {
        const result = this.api.findUsersWithHttpInfo(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Find a list of User
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findUsers(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<GetUsers200Response> {
        const result = this.api.findUsers(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a User by id
     * @param id 
     */
    public getUserByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<UserDto>> {
        const result = this.api.getUserByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a User by id
     * @param id 
     */
    public getUserById(id: string, _options?: Configuration): Promise<UserDto> {
        const result = this.api.getUserById(id, _options);
        return result.toPromise();
    }

    /**
     * Get a list of User
     * @param size 
     * @param page 
     */
    public getUsersWithHttpInfo(size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetUsers200Response>> {
        const result = this.api.getUsersWithHttpInfo(size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of User
     * @param size 
     * @param page 
     */
    public getUsers(size?: number, page?: number, _options?: Configuration): Promise<GetUsers200Response> {
        const result = this.api.getUsers(size, page, _options);
        return result.toPromise();
    }


}



import { ObservableVariableApi } from './ObservableAPI';

import { VariableApiRequestFactory, VariableApiResponseProcessor} from "../apis/VariableApi";
export class PromiseVariableApi {
    private api: ObservableVariableApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VariableApiRequestFactory,
        responseProcessor?: VariableApiResponseProcessor
    ) {
        this.api = new ObservableVariableApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Variable
     * @param createVariableDto 
     */
    public createVariableWithHttpInfo(createVariableDto: CreateVariableDto, _options?: Configuration): Promise<HttpInfo<VariableDto>> {
        const result = this.api.createVariableWithHttpInfo(createVariableDto, _options);
        return result.toPromise();
    }

    /**
     * Create a Variable
     * @param createVariableDto 
     */
    public createVariable(createVariableDto: CreateVariableDto, _options?: Configuration): Promise<VariableDto> {
        const result = this.api.createVariable(createVariableDto, _options);
        return result.toPromise();
    }

    /**
     * Find a list of Variable
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findVariablesWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetVariables200Response>> {
        const result = this.api.findVariablesWithHttpInfo(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Find a list of Variable
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findVariables(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Promise<GetVariables200Response> {
        const result = this.api.findVariables(queryDTO, size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a Variable by id
     * @param id 
     */
    public getVariableByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<VariableDto>> {
        const result = this.api.getVariableByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a Variable by id
     * @param id 
     */
    public getVariableById(id: string, _options?: Configuration): Promise<VariableDto> {
        const result = this.api.getVariableById(id, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Variable
     * @param size 
     * @param page 
     */
    public getVariablesWithHttpInfo(size?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetVariables200Response>> {
        const result = this.api.getVariablesWithHttpInfo(size, page, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Variable
     * @param size 
     * @param page 
     */
    public getVariables(size?: number, page?: number, _options?: Configuration): Promise<GetVariables200Response> {
        const result = this.api.getVariables(size, page, _options);
        return result.toPromise();
    }

    /**
     * Update a Variable
     * @param id 
     * @param updateVariableDto 
     */
    public updateVariableWithHttpInfo(id: string, updateVariableDto: UpdateVariableDto, _options?: Configuration): Promise<HttpInfo<VariableDto>> {
        const result = this.api.updateVariableWithHttpInfo(id, updateVariableDto, _options);
        return result.toPromise();
    }

    /**
     * Update a Variable
     * @param id 
     * @param updateVariableDto 
     */
    public updateVariable(id: string, updateVariableDto: UpdateVariableDto, _options?: Configuration): Promise<VariableDto> {
        const result = this.api.updateVariable(id, updateVariableDto, _options);
        return result.toPromise();
    }


}



