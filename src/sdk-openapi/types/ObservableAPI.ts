import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class ObservableAccountApi {
    private requestFactory: AccountApiRequestFactory;
    private responseProcessor: AccountApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountApiResponseProcessor();
    }

    /**
     * Find a list of Account
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findAccountsWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetAccounts200Response>> {
        const requestContextPromise = this.requestFactory.findAccounts(queryDTO, size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findAccountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Find a list of Account
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findAccounts(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<GetAccounts200Response> {
        return this.findAccountsWithHttpInfo(queryDTO, size, page, _options).pipe(map((apiResponse: HttpInfo<GetAccounts200Response>) => apiResponse.data));
    }

    /**
     * Get a Account by id
     * @param id 
     */
    public getAccountByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<AccountDto>> {
        const requestContextPromise = this.requestFactory.getAccountById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Account by id
     * @param id 
     */
    public getAccountById(id: string, _options?: Configuration): Observable<AccountDto> {
        return this.getAccountByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<AccountDto>) => apiResponse.data));
    }

    /**
     * Get a list of Account
     * @param size 
     * @param page 
     */
    public getAccountsWithHttpInfo(size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetAccounts200Response>> {
        const requestContextPromise = this.requestFactory.getAccounts(size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Account
     * @param size 
     * @param page 
     */
    public getAccounts(size?: number, page?: number, _options?: Configuration): Observable<GetAccounts200Response> {
        return this.getAccountsWithHttpInfo(size, page, _options).pipe(map((apiResponse: HttpInfo<GetAccounts200Response>) => apiResponse.data));
    }

}

import { CommentThreadApiRequestFactory, CommentThreadApiResponseProcessor} from "../apis/CommentThreadApi";
export class ObservableCommentThreadApi {
    private requestFactory: CommentThreadApiRequestFactory;
    private responseProcessor: CommentThreadApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentThreadApiRequestFactory,
        responseProcessor?: CommentThreadApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CommentThreadApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CommentThreadApiResponseProcessor();
    }

    /**
     * Add a reply to a comment thread
     * @param id 
     * @param commentThreadReplyCreateDto 
     */
    public addReplyWithHttpInfo(id: string, commentThreadReplyCreateDto: CommentThreadReplyCreateDto, _options?: Configuration): Observable<HttpInfo<CommentThreadDto>> {
        const requestContextPromise = this.requestFactory.addReply(id, commentThreadReplyCreateDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addReplyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a reply to a comment thread
     * @param id 
     * @param commentThreadReplyCreateDto 
     */
    public addReply(id: string, commentThreadReplyCreateDto: CommentThreadReplyCreateDto, _options?: Configuration): Observable<CommentThreadDto> {
        return this.addReplyWithHttpInfo(id, commentThreadReplyCreateDto, _options).pipe(map((apiResponse: HttpInfo<CommentThreadDto>) => apiResponse.data));
    }

    /**
     * Create a Comment Thread
     * @param commentThreadCreateDto 
     */
    public createCommentThreadWithHttpInfo(commentThreadCreateDto: CommentThreadCreateDto, _options?: Configuration): Observable<HttpInfo<CommentThreadDto>> {
        const requestContextPromise = this.requestFactory.createCommentThread(commentThreadCreateDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCommentThreadWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Comment Thread
     * @param commentThreadCreateDto 
     */
    public createCommentThread(commentThreadCreateDto: CommentThreadCreateDto, _options?: Configuration): Observable<CommentThreadDto> {
        return this.createCommentThreadWithHttpInfo(commentThreadCreateDto, _options).pipe(map((apiResponse: HttpInfo<CommentThreadDto>) => apiResponse.data));
    }

    /**
     * Find a list of Comment Thread
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findCommentThreadsWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetCommentThreads200Response>> {
        const requestContextPromise = this.requestFactory.findCommentThreads(queryDTO, size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findCommentThreadsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Find a list of Comment Thread
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findCommentThreads(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<GetCommentThreads200Response> {
        return this.findCommentThreadsWithHttpInfo(queryDTO, size, page, _options).pipe(map((apiResponse: HttpInfo<GetCommentThreads200Response>) => apiResponse.data));
    }

    /**
     * Get a Comment Thread by id
     * @param id 
     */
    public getCommentThreadByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<CommentThreadDto>> {
        const requestContextPromise = this.requestFactory.getCommentThreadById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCommentThreadByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Comment Thread by id
     * @param id 
     */
    public getCommentThreadById(id: string, _options?: Configuration): Observable<CommentThreadDto> {
        return this.getCommentThreadByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<CommentThreadDto>) => apiResponse.data));
    }

    /**
     * Get a list of Comment Thread
     * @param size 
     * @param page 
     */
    public getCommentThreadsWithHttpInfo(size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetCommentThreads200Response>> {
        const requestContextPromise = this.requestFactory.getCommentThreads(size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCommentThreadsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Comment Thread
     * @param size 
     * @param page 
     */
    public getCommentThreads(size?: number, page?: number, _options?: Configuration): Observable<GetCommentThreads200Response> {
        return this.getCommentThreadsWithHttpInfo(size, page, _options).pipe(map((apiResponse: HttpInfo<GetCommentThreads200Response>) => apiResponse.data));
    }

    /**
     * Patch a Comment Thread
     * @param id 
     * @param commentThreadUpdateDto 
     */
    public patchCommentThreadWithHttpInfo(id: string, commentThreadUpdateDto: CommentThreadUpdateDto, _options?: Configuration): Observable<HttpInfo<CommentThreadDto>> {
        const requestContextPromise = this.requestFactory.patchCommentThread(id, commentThreadUpdateDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchCommentThreadWithHttpInfo(rsp)));
            }));
    }

    /**
     * Patch a Comment Thread
     * @param id 
     * @param commentThreadUpdateDto 
     */
    public patchCommentThread(id: string, commentThreadUpdateDto: CommentThreadUpdateDto, _options?: Configuration): Observable<CommentThreadDto> {
        return this.patchCommentThreadWithHttpInfo(id, commentThreadUpdateDto, _options).pipe(map((apiResponse: HttpInfo<CommentThreadDto>) => apiResponse.data));
    }

}

import { CommentThreadSubscriberApiRequestFactory, CommentThreadSubscriberApiResponseProcessor} from "../apis/CommentThreadSubscriberApi";
export class ObservableCommentThreadSubscriberApi {
    private requestFactory: CommentThreadSubscriberApiRequestFactory;
    private responseProcessor: CommentThreadSubscriberApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentThreadSubscriberApiRequestFactory,
        responseProcessor?: CommentThreadSubscriberApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CommentThreadSubscriberApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CommentThreadSubscriberApiResponseProcessor();
    }

    /**
     * Find a list of Comment Thread Subscriber
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findCommentThreadSubscribersWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetCommentThreadSubscribers200Response>> {
        const requestContextPromise = this.requestFactory.findCommentThreadSubscribers(queryDTO, size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findCommentThreadSubscribersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Find a list of Comment Thread Subscriber
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findCommentThreadSubscribers(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<GetCommentThreadSubscribers200Response> {
        return this.findCommentThreadSubscribersWithHttpInfo(queryDTO, size, page, _options).pipe(map((apiResponse: HttpInfo<GetCommentThreadSubscribers200Response>) => apiResponse.data));
    }

    /**
     * Get a Comment Thread Subscriber by id
     * @param id 
     */
    public getCommentThreadSubscriberByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<CommentThreadSubscriberDto>> {
        const requestContextPromise = this.requestFactory.getCommentThreadSubscriberById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCommentThreadSubscriberByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Comment Thread Subscriber by id
     * @param id 
     */
    public getCommentThreadSubscriberById(id: string, _options?: Configuration): Observable<CommentThreadSubscriberDto> {
        return this.getCommentThreadSubscriberByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<CommentThreadSubscriberDto>) => apiResponse.data));
    }

    /**
     * Get a list of Comment Thread Subscriber
     * @param size 
     * @param page 
     */
    public getCommentThreadSubscribersWithHttpInfo(size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetCommentThreadSubscribers200Response>> {
        const requestContextPromise = this.requestFactory.getCommentThreadSubscribers(size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCommentThreadSubscribersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Comment Thread Subscriber
     * @param size 
     * @param page 
     */
    public getCommentThreadSubscribers(size?: number, page?: number, _options?: Configuration): Observable<GetCommentThreadSubscribers200Response> {
        return this.getCommentThreadSubscribersWithHttpInfo(size, page, _options).pipe(map((apiResponse: HttpInfo<GetCommentThreadSubscribers200Response>) => apiResponse.data));
    }

}

import { DataFactoryFileApiRequestFactory, DataFactoryFileApiResponseProcessor} from "../apis/DataFactoryFileApi";
export class ObservableDataFactoryFileApi {
    private requestFactory: DataFactoryFileApiRequestFactory;
    private responseProcessor: DataFactoryFileApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DataFactoryFileApiRequestFactory,
        responseProcessor?: DataFactoryFileApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DataFactoryFileApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DataFactoryFileApiResponseProcessor();
    }

    /**
     * Get a Data Factory File by id
     * @param id 
     */
    public getFileByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<FileDto>> {
        const requestContextPromise = this.requestFactory.getFileById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFileByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Data Factory File by id
     * @param id 
     */
    public getFileById(id: string, _options?: Configuration): Observable<FileDto> {
        return this.getFileByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<FileDto>) => apiResponse.data));
    }

    /**
     * Get a list of Data Factory File
     * @param size 
     * @param page 
     */
    public getFilesWithHttpInfo(size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetFiles200Response>> {
        const requestContextPromise = this.requestFactory.getFiles(size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFilesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Data Factory File
     * @param size 
     * @param page 
     */
    public getFiles(size?: number, page?: number, _options?: Configuration): Observable<GetFiles200Response> {
        return this.getFilesWithHttpInfo(size, page, _options).pipe(map((apiResponse: HttpInfo<GetFiles200Response>) => apiResponse.data));
    }

    /**
     * Post a file so it can be consume by a Data Factory job
     * @param file 
     */
    public uploadFileWithHttpInfo(file: HttpFile, _options?: Configuration): Observable<HttpInfo<FileDto>> {
        const requestContextPromise = this.requestFactory.uploadFile(file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Post a file so it can be consume by a Data Factory job
     * @param file 
     */
    public uploadFile(file: HttpFile, _options?: Configuration): Observable<FileDto> {
        return this.uploadFileWithHttpInfo(file, _options).pipe(map((apiResponse: HttpInfo<FileDto>) => apiResponse.data));
    }

}

import { ItemApiRequestFactory, ItemApiResponseProcessor} from "../apis/ItemApi";
export class ObservableItemApi {
    private requestFactory: ItemApiRequestFactory;
    private responseProcessor: ItemApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemApiRequestFactory,
        responseProcessor?: ItemApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemApiResponseProcessor();
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
    public findItemWithHttpInfo(tableId: string, partitionId: string, levelId: string, itemFindDTO: ItemFindDTO, size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetItems200Response>> {
        const requestContextPromise = this.requestFactory.findItem(tableId, partitionId, levelId, itemFindDTO, size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findItemWithHttpInfo(rsp)));
            }));
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
    public findItem(tableId: string, partitionId: string, levelId: string, itemFindDTO: ItemFindDTO, size?: number, page?: number, _options?: Configuration): Observable<GetItems200Response> {
        return this.findItemWithHttpInfo(tableId, partitionId, levelId, itemFindDTO, size, page, _options).pipe(map((apiResponse: HttpInfo<GetItems200Response>) => apiResponse.data));
    }

    /**
     * Find a list of Item
     * @param partitionId 
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findItemGenericWithHttpInfo(partitionId: string, queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetItems200Response>> {
        const requestContextPromise = this.requestFactory.findItemGeneric(partitionId, queryDTO, size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findItemGenericWithHttpInfo(rsp)));
            }));
    }

    /**
     * Find a list of Item
     * @param partitionId 
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findItemGeneric(partitionId: string, queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<GetItems200Response> {
        return this.findItemGenericWithHttpInfo(partitionId, queryDTO, size, page, _options).pipe(map((apiResponse: HttpInfo<GetItems200Response>) => apiResponse.data));
    }

    /**
     * Get a Item by id
     * @param id 
     */
    public getItemByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<ItemDto>> {
        const requestContextPromise = this.requestFactory.getItemById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getItemByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Item by id
     * @param id 
     */
    public getItemById(id: string, _options?: Configuration): Observable<ItemDto> {
        return this.getItemByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ItemDto>) => apiResponse.data));
    }

    /**
     * Get a list of Item
     * @param size 
     * @param page 
     */
    public getItemsWithHttpInfo(size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetItems200Response>> {
        const requestContextPromise = this.requestFactory.getItems(size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Item
     * @param size 
     * @param page 
     */
    public getItems(size?: number, page?: number, _options?: Configuration): Observable<GetItems200Response> {
        return this.getItemsWithHttpInfo(size, page, _options).pipe(map((apiResponse: HttpInfo<GetItems200Response>) => apiResponse.data));
    }

}

import { ItemLinkApiRequestFactory, ItemLinkApiResponseProcessor} from "../apis/ItemLinkApi";
export class ObservableItemLinkApi {
    private requestFactory: ItemLinkApiRequestFactory;
    private responseProcessor: ItemLinkApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemLinkApiRequestFactory,
        responseProcessor?: ItemLinkApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemLinkApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemLinkApiResponseProcessor();
    }

    /**
     * Delete a Item link by id
     * @param id 
     */
    public _deleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<TaskDto>> {
        const requestContextPromise = this.requestFactory._delete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._deleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a Item link by id
     * @param id 
     */
    public _delete(id: string, _options?: Configuration): Observable<TaskDto> {
        return this._deleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<TaskDto>) => apiResponse.data));
    }

    /**
     * Create a Item link
     * @param itemLinkCreateDto 
     */
    public createItemLinkWithHttpInfo(itemLinkCreateDto: ItemLinkCreateDto, _options?: Configuration): Observable<HttpInfo<ItemLinkDto>> {
        const requestContextPromise = this.requestFactory.createItemLink(itemLinkCreateDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createItemLinkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Item link
     * @param itemLinkCreateDto 
     */
    public createItemLink(itemLinkCreateDto: ItemLinkCreateDto, _options?: Configuration): Observable<ItemLinkDto> {
        return this.createItemLinkWithHttpInfo(itemLinkCreateDto, _options).pipe(map((apiResponse: HttpInfo<ItemLinkDto>) => apiResponse.data));
    }

    /**
     * Find a list of Item link
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findItemLinkWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetItemLinks200Response>> {
        const requestContextPromise = this.requestFactory.findItemLink(queryDTO, size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findItemLinkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Find a list of Item link
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findItemLink(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<GetItemLinks200Response> {
        return this.findItemLinkWithHttpInfo(queryDTO, size, page, _options).pipe(map((apiResponse: HttpInfo<GetItemLinks200Response>) => apiResponse.data));
    }

    /**
     * Get a Item link by id
     * @param id 
     */
    public getItemLinkByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<ItemLinkDto>> {
        const requestContextPromise = this.requestFactory.getItemLinkById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getItemLinkByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Item link by id
     * @param id 
     */
    public getItemLinkById(id: string, _options?: Configuration): Observable<ItemLinkDto> {
        return this.getItemLinkByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ItemLinkDto>) => apiResponse.data));
    }

    /**
     * Get a list of Item link
     * @param size 
     * @param page 
     */
    public getItemLinksWithHttpInfo(size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetItemLinks200Response>> {
        const requestContextPromise = this.requestFactory.getItemLinks(size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getItemLinksWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Item link
     * @param size 
     * @param page 
     */
    public getItemLinks(size?: number, page?: number, _options?: Configuration): Observable<GetItemLinks200Response> {
        return this.getItemLinksWithHttpInfo(size, page, _options).pipe(map((apiResponse: HttpInfo<GetItemLinks200Response>) => apiResponse.data));
    }

}

import { JobApiRequestFactory, JobApiResponseProcessor} from "../apis/JobApi";
export class ObservableJobApi {
    private requestFactory: JobApiRequestFactory;
    private responseProcessor: JobApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: JobApiRequestFactory,
        responseProcessor?: JobApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new JobApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new JobApiResponseProcessor();
    }

    /**
     * Create a Job
     * @param createJobDto 
     */
    public createJobWithHttpInfo(createJobDto: CreateJobDto, _options?: Configuration): Observable<HttpInfo<JobDto>> {
        const requestContextPromise = this.requestFactory.createJob(createJobDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createJobWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Job
     * @param createJobDto 
     */
    public createJob(createJobDto: CreateJobDto, _options?: Configuration): Observable<JobDto> {
        return this.createJobWithHttpInfo(createJobDto, _options).pipe(map((apiResponse: HttpInfo<JobDto>) => apiResponse.data));
    }

    /**
     * Get a Job by id
     * @param id 
     */
    public getJobByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<JobDto>> {
        const requestContextPromise = this.requestFactory.getJobById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJobByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Job by id
     * @param id 
     */
    public getJobById(id: string, _options?: Configuration): Observable<JobDto> {
        return this.getJobByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<JobDto>) => apiResponse.data));
    }

    /**
     * Get a list of Job
     * @param size 
     * @param page 
     */
    public getJobsWithHttpInfo(size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetJobs200Response>> {
        const requestContextPromise = this.requestFactory.getJobs(size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJobsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Job
     * @param size 
     * @param page 
     */
    public getJobs(size?: number, page?: number, _options?: Configuration): Observable<GetJobs200Response> {
        return this.getJobsWithHttpInfo(size, page, _options).pipe(map((apiResponse: HttpInfo<GetJobs200Response>) => apiResponse.data));
    }

    /**
     * Update a Job
     * @param id 
     * @param updateJobDto 
     */
    public updateJobWithHttpInfo(id: string, updateJobDto: UpdateJobDto, _options?: Configuration): Observable<HttpInfo<JobDto>> {
        const requestContextPromise = this.requestFactory.updateJob(id, updateJobDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateJobWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Job
     * @param id 
     * @param updateJobDto 
     */
    public updateJob(id: string, updateJobDto: UpdateJobDto, _options?: Configuration): Observable<JobDto> {
        return this.updateJobWithHttpInfo(id, updateJobDto, _options).pipe(map((apiResponse: HttpInfo<JobDto>) => apiResponse.data));
    }

    /**
     * Upload a zip to update a job
     * @param id 
     * @param file 
     */
    public updateJobZipWithHttpInfo(id: string, file: HttpFile, _options?: Configuration): Observable<HttpInfo<JobDto>> {
        const requestContextPromise = this.requestFactory.updateJobZip(id, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateJobZipWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upload a zip to update a job
     * @param id 
     * @param file 
     */
    public updateJobZip(id: string, file: HttpFile, _options?: Configuration): Observable<JobDto> {
        return this.updateJobZipWithHttpInfo(id, file, _options).pipe(map((apiResponse: HttpInfo<JobDto>) => apiResponse.data));
    }

}

import { JobExecutionApiRequestFactory, JobExecutionApiResponseProcessor} from "../apis/JobExecutionApi";
export class ObservableJobExecutionApi {
    private requestFactory: JobExecutionApiRequestFactory;
    private responseProcessor: JobExecutionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: JobExecutionApiRequestFactory,
        responseProcessor?: JobExecutionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new JobExecutionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new JobExecutionApiResponseProcessor();
    }

    /**
     * Create a Job Execution
     * @param createJobExecutionDto 
     */
    public createJobExecutionWithHttpInfo(createJobExecutionDto: CreateJobExecutionDto, _options?: Configuration): Observable<HttpInfo<JobExecutionDto>> {
        const requestContextPromise = this.requestFactory.createJobExecution(createJobExecutionDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createJobExecutionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Job Execution
     * @param createJobExecutionDto 
     */
    public createJobExecution(createJobExecutionDto: CreateJobExecutionDto, _options?: Configuration): Observable<JobExecutionDto> {
        return this.createJobExecutionWithHttpInfo(createJobExecutionDto, _options).pipe(map((apiResponse: HttpInfo<JobExecutionDto>) => apiResponse.data));
    }

    /**
     * (Not implemented) - Find a list of Job Execution
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetJobExecutions200Response>> {
        const requestContextPromise = this.requestFactory.find(queryDTO, size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findWithHttpInfo(rsp)));
            }));
    }

    /**
     * (Not implemented) - Find a list of Job Execution
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public find(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<GetJobExecutions200Response> {
        return this.findWithHttpInfo(queryDTO, size, page, _options).pipe(map((apiResponse: HttpInfo<GetJobExecutions200Response>) => apiResponse.data));
    }

    /**
     * Get a Job Execution by id
     * @param id 
     */
    public getJobExecutionByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<JobExecutionDto>> {
        const requestContextPromise = this.requestFactory.getJobExecutionById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJobExecutionByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Job Execution by id
     * @param id 
     */
    public getJobExecutionById(id: string, _options?: Configuration): Observable<JobExecutionDto> {
        return this.getJobExecutionByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<JobExecutionDto>) => apiResponse.data));
    }

    /**
     * Get a list of Job Execution
     * @param size 
     * @param page 
     */
    public getJobExecutionsWithHttpInfo(size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetJobExecutions200Response>> {
        const requestContextPromise = this.requestFactory.getJobExecutions(size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJobExecutionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Job Execution
     * @param size 
     * @param page 
     */
    public getJobExecutions(size?: number, page?: number, _options?: Configuration): Observable<GetJobExecutions200Response> {
        return this.getJobExecutionsWithHttpInfo(size, page, _options).pipe(map((apiResponse: HttpInfo<GetJobExecutions200Response>) => apiResponse.data));
    }

}

import { LevelApiRequestFactory, LevelApiResponseProcessor} from "../apis/LevelApi";
export class ObservableLevelApi {
    private requestFactory: LevelApiRequestFactory;
    private responseProcessor: LevelApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LevelApiRequestFactory,
        responseProcessor?: LevelApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LevelApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LevelApiResponseProcessor();
    }

    /**
     * Get a Level by id
     * @param id 
     * @param xContext Context header to access levels of another account
     */
    public getLevelByIdWithHttpInfo(id: string, xContext?: string, _options?: Configuration): Observable<HttpInfo<LevelDto>> {
        const requestContextPromise = this.requestFactory.getLevelById(id, xContext, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLevelByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Level by id
     * @param id 
     * @param xContext Context header to access levels of another account
     */
    public getLevelById(id: string, xContext?: string, _options?: Configuration): Observable<LevelDto> {
        return this.getLevelByIdWithHttpInfo(id, xContext, _options).pipe(map((apiResponse: HttpInfo<LevelDto>) => apiResponse.data));
    }

    /**
     * Get a list of Level
     * @param xContext Context header to access levels of another account
     * @param size 
     * @param page 
     */
    public getLevelsWithHttpInfo(xContext?: string, size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetLevels200Response>> {
        const requestContextPromise = this.requestFactory.getLevels(xContext, size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLevelsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Level
     * @param xContext Context header to access levels of another account
     * @param size 
     * @param page 
     */
    public getLevels(xContext?: string, size?: number, page?: number, _options?: Configuration): Observable<GetLevels200Response> {
        return this.getLevelsWithHttpInfo(xContext, size, page, _options).pipe(map((apiResponse: HttpInfo<GetLevels200Response>) => apiResponse.data));
    }

}

import { PartitionApiRequestFactory, PartitionApiResponseProcessor} from "../apis/PartitionApi";
export class ObservablePartitionApi {
    private requestFactory: PartitionApiRequestFactory;
    private responseProcessor: PartitionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PartitionApiRequestFactory,
        responseProcessor?: PartitionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PartitionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PartitionApiResponseProcessor();
    }

    /**
     * Get a Partition by id
     * @param id 
     * @param xContext Context header to access partitions of another account
     */
    public getPartitionByIdWithHttpInfo(id: string, xContext?: string, _options?: Configuration): Observable<HttpInfo<PartitionDto>> {
        const requestContextPromise = this.requestFactory.getPartitionById(id, xContext, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartitionByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Partition by id
     * @param id 
     * @param xContext Context header to access partitions of another account
     */
    public getPartitionById(id: string, xContext?: string, _options?: Configuration): Observable<PartitionDto> {
        return this.getPartitionByIdWithHttpInfo(id, xContext, _options).pipe(map((apiResponse: HttpInfo<PartitionDto>) => apiResponse.data));
    }

    /**
     * Get a list of Partition
     * @param xContext Context header to access partitions of another account
     * @param size 
     * @param page 
     */
    public getPartitionsWithHttpInfo(xContext?: string, size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetPartitions200Response>> {
        const requestContextPromise = this.requestFactory.getPartitions(xContext, size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartitionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Partition
     * @param xContext Context header to access partitions of another account
     * @param size 
     * @param page 
     */
    public getPartitions(xContext?: string, size?: number, page?: number, _options?: Configuration): Observable<GetPartitions200Response> {
        return this.getPartitionsWithHttpInfo(xContext, size, page, _options).pipe(map((apiResponse: HttpInfo<GetPartitions200Response>) => apiResponse.data));
    }

}

import { ProbeApiRequestFactory, ProbeApiResponseProcessor} from "../apis/ProbeApi";
export class ObservableProbeApi {
    private requestFactory: ProbeApiRequestFactory;
    private responseProcessor: ProbeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProbeApiRequestFactory,
        responseProcessor?: ProbeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProbeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProbeApiResponseProcessor();
    }

    /**
     */
    public livenessWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.liveness(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.livenessWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public liveness(_options?: Configuration): Observable<void> {
        return this.livenessWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public readinessWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.readiness(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readinessWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public readiness(_options?: Configuration): Observable<void> {
        return this.readinessWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { PublicationApiRequestFactory, PublicationApiResponseProcessor} from "../apis/PublicationApi";
export class ObservablePublicationApi {
    private requestFactory: PublicationApiRequestFactory;
    private responseProcessor: PublicationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicationApiRequestFactory,
        responseProcessor?: PublicationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PublicationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PublicationApiResponseProcessor();
    }

    /**
     * (Experimental) - Create a Publication
     * @param createPublicationDto 
     */
    public createPublicationWithHttpInfo(createPublicationDto: CreatePublicationDto, _options?: Configuration): Observable<HttpInfo<PublicationDto>> {
        const requestContextPromise = this.requestFactory.createPublication(createPublicationDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPublicationWithHttpInfo(rsp)));
            }));
    }

    /**
     * (Experimental) - Create a Publication
     * @param createPublicationDto 
     */
    public createPublication(createPublicationDto: CreatePublicationDto, _options?: Configuration): Observable<PublicationDto> {
        return this.createPublicationWithHttpInfo(createPublicationDto, _options).pipe(map((apiResponse: HttpInfo<PublicationDto>) => apiResponse.data));
    }

    /**
     * Find a list of Publication
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findPublicationsWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetPublications200Response>> {
        const requestContextPromise = this.requestFactory.findPublications(queryDTO, size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findPublicationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Find a list of Publication
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findPublications(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<GetPublications200Response> {
        return this.findPublicationsWithHttpInfo(queryDTO, size, page, _options).pipe(map((apiResponse: HttpInfo<GetPublications200Response>) => apiResponse.data));
    }

    /**
     * Get a Publication by id
     * @param id 
     */
    public getPublicationByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<PublicationDto>> {
        const requestContextPromise = this.requestFactory.getPublicationById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPublicationByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Publication by id
     * @param id 
     */
    public getPublicationById(id: string, _options?: Configuration): Observable<PublicationDto> {
        return this.getPublicationByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PublicationDto>) => apiResponse.data));
    }

    /**
     * Get a list of Publication
     * @param size 
     * @param page 
     */
    public getPublicationsWithHttpInfo(size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetPublications200Response>> {
        const requestContextPromise = this.requestFactory.getPublications(size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPublicationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Publication
     * @param size 
     * @param page 
     */
    public getPublications(size?: number, page?: number, _options?: Configuration): Observable<GetPublications200Response> {
        return this.getPublicationsWithHttpInfo(size, page, _options).pipe(map((apiResponse: HttpInfo<GetPublications200Response>) => apiResponse.data));
    }

    /**
     * (Experimental) - Update the status of a publication
     * @param id 
     * @param patchPublicationDto 
     */
    public patchPublicationWithHttpInfo(id: string, patchPublicationDto: PatchPublicationDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.patchPublication(id, patchPublicationDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchPublicationWithHttpInfo(rsp)));
            }));
    }

    /**
     * (Experimental) - Update the status of a publication
     * @param id 
     * @param patchPublicationDto 
     */
    public patchPublication(id: string, patchPublicationDto: PatchPublicationDto, _options?: Configuration): Observable<void> {
        return this.patchPublicationWithHttpInfo(id, patchPublicationDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ScreenApiRequestFactory, ScreenApiResponseProcessor} from "../apis/ScreenApi";
export class ObservableScreenApi {
    private requestFactory: ScreenApiRequestFactory;
    private responseProcessor: ScreenApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ScreenApiRequestFactory,
        responseProcessor?: ScreenApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ScreenApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ScreenApiResponseProcessor();
    }

    /**
     * (Experimental) - Get a Screen by id
     * @param id 
     * @param xContext Context header to access screens of table in another account
     */
    public getScreenByIdWithHttpInfo(id: string, xContext?: string, _options?: Configuration): Observable<HttpInfo<ScreenDto>> {
        const requestContextPromise = this.requestFactory.getScreenById(id, xContext, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getScreenByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * (Experimental) - Get a Screen by id
     * @param id 
     * @param xContext Context header to access screens of table in another account
     */
    public getScreenById(id: string, xContext?: string, _options?: Configuration): Observable<ScreenDto> {
        return this.getScreenByIdWithHttpInfo(id, xContext, _options).pipe(map((apiResponse: HttpInfo<ScreenDto>) => apiResponse.data));
    }

    /**
     * (Experimental) - Get a list of Screen
     * @param xContext Context header to access screens of table in another account
     * @param size 
     * @param page 
     */
    public getScreensWithHttpInfo(xContext?: string, size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetScreens200Response>> {
        const requestContextPromise = this.requestFactory.getScreens(xContext, size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getScreensWithHttpInfo(rsp)));
            }));
    }

    /**
     * (Experimental) - Get a list of Screen
     * @param xContext Context header to access screens of table in another account
     * @param size 
     * @param page 
     */
    public getScreens(xContext?: string, size?: number, page?: number, _options?: Configuration): Observable<GetScreens200Response> {
        return this.getScreensWithHttpInfo(xContext, size, page, _options).pipe(map((apiResponse: HttpInfo<GetScreens200Response>) => apiResponse.data));
    }

}

import { SuggestionApiRequestFactory, SuggestionApiResponseProcessor} from "../apis/SuggestionApi";
export class ObservableSuggestionApi {
    private requestFactory: SuggestionApiRequestFactory;
    private responseProcessor: SuggestionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SuggestionApiRequestFactory,
        responseProcessor?: SuggestionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SuggestionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SuggestionApiResponseProcessor();
    }

    /**
     * apply all fields and deleted fields from a suggestion
     * @param id 
     * @param applyAllSuggestionDto 
     */
    public applyAllSuggestionWithHttpInfo(id: string, applyAllSuggestionDto: ApplyAllSuggestionDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.applyAllSuggestion(id, applyAllSuggestionDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyAllSuggestionWithHttpInfo(rsp)));
            }));
    }

    /**
     * apply all fields and deleted fields from a suggestion
     * @param id 
     * @param applyAllSuggestionDto 
     */
    public applyAllSuggestion(id: string, applyAllSuggestionDto: ApplyAllSuggestionDto, _options?: Configuration): Observable<void> {
        return this.applyAllSuggestionWithHttpInfo(id, applyAllSuggestionDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * apply a suggestion
     * @param id 
     * @param applySuggestionDto 
     */
    public applySuggestionWithHttpInfo(id: string, applySuggestionDto: ApplySuggestionDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.applySuggestion(id, applySuggestionDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applySuggestionWithHttpInfo(rsp)));
            }));
    }

    /**
     * apply a suggestion
     * @param id 
     * @param applySuggestionDto 
     */
    public applySuggestion(id: string, applySuggestionDto: ApplySuggestionDto, _options?: Configuration): Observable<void> {
        return this.applySuggestionWithHttpInfo(id, applySuggestionDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create a Suggestion
     * @param suggestionCreateDto 
     */
    public createSuggestionWithHttpInfo(suggestionCreateDto: SuggestionCreateDto, _options?: Configuration): Observable<HttpInfo<SuggestionDto>> {
        const requestContextPromise = this.requestFactory.createSuggestion(suggestionCreateDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSuggestionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Suggestion
     * @param suggestionCreateDto 
     */
    public createSuggestion(suggestionCreateDto: SuggestionCreateDto, _options?: Configuration): Observable<SuggestionDto> {
        return this.createSuggestionWithHttpInfo(suggestionCreateDto, _options).pipe(map((apiResponse: HttpInfo<SuggestionDto>) => apiResponse.data));
    }

    /**
     * Find a list of Suggestion
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findSuggestionsWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetSuggestions200Response>> {
        const requestContextPromise = this.requestFactory.findSuggestions(queryDTO, size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findSuggestionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Find a list of Suggestion
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findSuggestions(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<GetSuggestions200Response> {
        return this.findSuggestionsWithHttpInfo(queryDTO, size, page, _options).pipe(map((apiResponse: HttpInfo<GetSuggestions200Response>) => apiResponse.data));
    }

    /**
     * Get a Suggestion by id
     * @param id 
     */
    public getSuggestionByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<SuggestionDto>> {
        const requestContextPromise = this.requestFactory.getSuggestionById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSuggestionByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Suggestion by id
     * @param id 
     */
    public getSuggestionById(id: string, _options?: Configuration): Observable<SuggestionDto> {
        return this.getSuggestionByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<SuggestionDto>) => apiResponse.data));
    }

    /**
     * Get a list of Suggestion
     * @param size 
     * @param page 
     */
    public getSuggestionsWithHttpInfo(size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetSuggestions200Response>> {
        const requestContextPromise = this.requestFactory.getSuggestions(size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSuggestionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Suggestion
     * @param size 
     * @param page 
     */
    public getSuggestions(size?: number, page?: number, _options?: Configuration): Observable<GetSuggestions200Response> {
        return this.getSuggestionsWithHttpInfo(size, page, _options).pipe(map((apiResponse: HttpInfo<GetSuggestions200Response>) => apiResponse.data));
    }

}

import { TableApiRequestFactory, TableApiResponseProcessor} from "../apis/TableApi";
export class ObservableTableApi {
    private requestFactory: TableApiRequestFactory;
    private responseProcessor: TableApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TableApiRequestFactory,
        responseProcessor?: TableApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TableApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TableApiResponseProcessor();
    }

    /**
     * Get a Table by id
     * @param id 
     * @param xContext Context header to access tables of another account
     */
    public getTableByIdWithHttpInfo(id: string, xContext?: string, _options?: Configuration): Observable<HttpInfo<TableDto>> {
        const requestContextPromise = this.requestFactory.getTableById(id, xContext, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTableByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Table by id
     * @param id 
     * @param xContext Context header to access tables of another account
     */
    public getTableById(id: string, xContext?: string, _options?: Configuration): Observable<TableDto> {
        return this.getTableByIdWithHttpInfo(id, xContext, _options).pipe(map((apiResponse: HttpInfo<TableDto>) => apiResponse.data));
    }

    /**
     * Get a list of Table
     * @param xContext Context header to access tables of another account
     * @param size 
     * @param page 
     */
    public getTablesWithHttpInfo(xContext?: string, size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetTables200Response>> {
        const requestContextPromise = this.requestFactory.getTables(xContext, size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTablesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Table
     * @param xContext Context header to access tables of another account
     * @param size 
     * @param page 
     */
    public getTables(xContext?: string, size?: number, page?: number, _options?: Configuration): Observable<GetTables200Response> {
        return this.getTablesWithHttpInfo(xContext, size, page, _options).pipe(map((apiResponse: HttpInfo<GetTables200Response>) => apiResponse.data));
    }

}

import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";
export class ObservableTaskApi {
    private requestFactory: TaskApiRequestFactory;
    private responseProcessor: TaskApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TaskApiRequestFactory,
        responseProcessor?: TaskApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TaskApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TaskApiResponseProcessor();
    }

    /**
     * Create a Task
     * @param createTaskDto 
     */
    public createTaskWithHttpInfo(createTaskDto: CreateTaskDto, _options?: Configuration): Observable<HttpInfo<TaskDto>> {
        const requestContextPromise = this.requestFactory.createTask(createTaskDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Task
     * @param createTaskDto 
     */
    public createTask(createTaskDto: CreateTaskDto, _options?: Configuration): Observable<TaskDto> {
        return this.createTaskWithHttpInfo(createTaskDto, _options).pipe(map((apiResponse: HttpInfo<TaskDto>) => apiResponse.data));
    }

    /**
     * Delete a Task by id
     * @param id 
     */
    public deleteTaskWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<TaskDto>> {
        const requestContextPromise = this.requestFactory.deleteTask(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a Task by id
     * @param id 
     */
    public deleteTask(id: string, _options?: Configuration): Observable<TaskDto> {
        return this.deleteTaskWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<TaskDto>) => apiResponse.data));
    }

    /**
     * Get a Task by id
     * @param id 
     */
    public getTaskByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<TaskDto>> {
        const requestContextPromise = this.requestFactory.getTaskById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTaskByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Task by id
     * @param id 
     */
    public getTaskById(id: string, _options?: Configuration): Observable<TaskDto> {
        return this.getTaskByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<TaskDto>) => apiResponse.data));
    }

    /**
     * Get a list of Task
     * @param size 
     * @param page 
     */
    public getTasksWithHttpInfo(size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetTasks200Response>> {
        const requestContextPromise = this.requestFactory.getTasks(size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTasksWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Task
     * @param size 
     * @param page 
     */
    public getTasks(size?: number, page?: number, _options?: Configuration): Observable<GetTasks200Response> {
        return this.getTasksWithHttpInfo(size, page, _options).pipe(map((apiResponse: HttpInfo<GetTasks200Response>) => apiResponse.data));
    }

    /**
     * Poll a task if there is not task to poll, the API returns a `404 Not Found` error
     * @param id 
     */
    public pollTaskExecutionWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<TaskExecutionDto>> {
        const requestContextPromise = this.requestFactory.pollTaskExecution(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pollTaskExecutionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Poll a task if there is not task to poll, the API returns a `404 Not Found` error
     * @param id 
     */
    public pollTaskExecution(id: string, _options?: Configuration): Observable<TaskExecutionDto> {
        return this.pollTaskExecutionWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<TaskExecutionDto>) => apiResponse.data));
    }

    /**
     * Update a Task
     * @param id 
     * @param updateTaskDto 
     */
    public updateTaskWithHttpInfo(id: string, updateTaskDto: UpdateTaskDto, _options?: Configuration): Observable<HttpInfo<TaskDto>> {
        const requestContextPromise = this.requestFactory.updateTask(id, updateTaskDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Task
     * @param id 
     * @param updateTaskDto 
     */
    public updateTask(id: string, updateTaskDto: UpdateTaskDto, _options?: Configuration): Observable<TaskDto> {
        return this.updateTaskWithHttpInfo(id, updateTaskDto, _options).pipe(map((apiResponse: HttpInfo<TaskDto>) => apiResponse.data));
    }

}

import { TaskExecutionApiRequestFactory, TaskExecutionApiResponseProcessor} from "../apis/TaskExecutionApi";
export class ObservableTaskExecutionApi {
    private requestFactory: TaskExecutionApiRequestFactory;
    private responseProcessor: TaskExecutionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TaskExecutionApiRequestFactory,
        responseProcessor?: TaskExecutionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TaskExecutionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TaskExecutionApiResponseProcessor();
    }

    /**
     * Get a Task Execution by id
     * @param id 
     */
    public getTaskExecutionByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<TaskExecutionDto>> {
        const requestContextPromise = this.requestFactory.getTaskExecutionById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTaskExecutionByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Task Execution by id
     * @param id 
     */
    public getTaskExecutionById(id: string, _options?: Configuration): Observable<TaskExecutionDto> {
        return this.getTaskExecutionByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<TaskExecutionDto>) => apiResponse.data));
    }

    /**
     * Update running task instance
     * @param id 
     * @param body 
     */
    public patchTaskExecutionWithHttpInfo(id: string, body: any, _options?: Configuration): Observable<HttpInfo<TaskExecutionDto>> {
        const requestContextPromise = this.requestFactory.patchTaskExecution(id, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchTaskExecutionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update running task instance
     * @param id 
     * @param body 
     */
    public patchTaskExecution(id: string, body: any, _options?: Configuration): Observable<TaskExecutionDto> {
        return this.patchTaskExecutionWithHttpInfo(id, body, _options).pipe(map((apiResponse: HttpInfo<TaskExecutionDto>) => apiResponse.data));
    }

}

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class ObservableUserApi {
    private requestFactory: UserApiRequestFactory;
    private responseProcessor: UserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserApiResponseProcessor();
    }

    /**
     * Find a list of User
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findUsersWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetUsers200Response>> {
        const requestContextPromise = this.requestFactory.findUsers(queryDTO, size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findUsersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Find a list of User
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findUsers(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<GetUsers200Response> {
        return this.findUsersWithHttpInfo(queryDTO, size, page, _options).pipe(map((apiResponse: HttpInfo<GetUsers200Response>) => apiResponse.data));
    }

    /**
     * Get a User by id
     * @param id 
     */
    public getUserByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<UserDto>> {
        const requestContextPromise = this.requestFactory.getUserById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a User by id
     * @param id 
     */
    public getUserById(id: string, _options?: Configuration): Observable<UserDto> {
        return this.getUserByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<UserDto>) => apiResponse.data));
    }

    /**
     * Get a list of User
     * @param size 
     * @param page 
     */
    public getUsersWithHttpInfo(size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetUsers200Response>> {
        const requestContextPromise = this.requestFactory.getUsers(size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUsersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of User
     * @param size 
     * @param page 
     */
    public getUsers(size?: number, page?: number, _options?: Configuration): Observable<GetUsers200Response> {
        return this.getUsersWithHttpInfo(size, page, _options).pipe(map((apiResponse: HttpInfo<GetUsers200Response>) => apiResponse.data));
    }

}

import { VariableApiRequestFactory, VariableApiResponseProcessor} from "../apis/VariableApi";
export class ObservableVariableApi {
    private requestFactory: VariableApiRequestFactory;
    private responseProcessor: VariableApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VariableApiRequestFactory,
        responseProcessor?: VariableApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VariableApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VariableApiResponseProcessor();
    }

    /**
     * Create a Variable
     * @param createVariableDto 
     */
    public createVariableWithHttpInfo(createVariableDto: CreateVariableDto, _options?: Configuration): Observable<HttpInfo<VariableDto>> {
        const requestContextPromise = this.requestFactory.createVariable(createVariableDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVariableWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Variable
     * @param createVariableDto 
     */
    public createVariable(createVariableDto: CreateVariableDto, _options?: Configuration): Observable<VariableDto> {
        return this.createVariableWithHttpInfo(createVariableDto, _options).pipe(map((apiResponse: HttpInfo<VariableDto>) => apiResponse.data));
    }

    /**
     * Find a list of Variable
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findVariablesWithHttpInfo(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetVariables200Response>> {
        const requestContextPromise = this.requestFactory.findVariables(queryDTO, size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findVariablesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Find a list of Variable
     * @param queryDTO 
     * @param size 
     * @param page 
     */
    public findVariables(queryDTO: QueryDTO, size?: number, page?: number, _options?: Configuration): Observable<GetVariables200Response> {
        return this.findVariablesWithHttpInfo(queryDTO, size, page, _options).pipe(map((apiResponse: HttpInfo<GetVariables200Response>) => apiResponse.data));
    }

    /**
     * Get a Variable by id
     * @param id 
     */
    public getVariableByIdWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<VariableDto>> {
        const requestContextPromise = this.requestFactory.getVariableById(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVariableByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a Variable by id
     * @param id 
     */
    public getVariableById(id: string, _options?: Configuration): Observable<VariableDto> {
        return this.getVariableByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<VariableDto>) => apiResponse.data));
    }

    /**
     * Get a list of Variable
     * @param size 
     * @param page 
     */
    public getVariablesWithHttpInfo(size?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetVariables200Response>> {
        const requestContextPromise = this.requestFactory.getVariables(size, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVariablesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Variable
     * @param size 
     * @param page 
     */
    public getVariables(size?: number, page?: number, _options?: Configuration): Observable<GetVariables200Response> {
        return this.getVariablesWithHttpInfo(size, page, _options).pipe(map((apiResponse: HttpInfo<GetVariables200Response>) => apiResponse.data));
    }

    /**
     * Update a Variable
     * @param id 
     * @param updateVariableDto 
     */
    public updateVariableWithHttpInfo(id: string, updateVariableDto: UpdateVariableDto, _options?: Configuration): Observable<HttpInfo<VariableDto>> {
        const requestContextPromise = this.requestFactory.updateVariable(id, updateVariableDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateVariableWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Variable
     * @param id 
     * @param updateVariableDto 
     */
    public updateVariable(id: string, updateVariableDto: UpdateVariableDto, _options?: Configuration): Observable<VariableDto> {
        return this.updateVariableWithHttpInfo(id, updateVariableDto, _options).pipe(map((apiResponse: HttpInfo<VariableDto>) => apiResponse.data));
    }

}
