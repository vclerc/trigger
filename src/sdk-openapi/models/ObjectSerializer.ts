export * from '../models/AccountDto';
export * from '../models/ApplyAllSuggestionDto';
export * from '../models/ApplySuggestionDto';
export * from '../models/CommentThreadCreateDto';
export * from '../models/CommentThreadDto';
export * from '../models/CommentThreadReplyCreateDto';
export * from '../models/CommentThreadReplyDTO';
export * from '../models/CommentThreadSubscriberDto';
export * from '../models/CommentThreadUpdateDto';
export * from '../models/CreateJobDto';
export * from '../models/CreateJobExecutionDto';
export * from '../models/CreatePublicationDto';
export * from '../models/CreateTaskDto';
export * from '../models/CreateVariableDto';
export * from '../models/CrudListDto';
export * from '../models/FileDto';
export * from '../models/GetAccounts200Response';
export * from '../models/GetCommentThreadSubscribers200Response';
export * from '../models/GetCommentThreads200Response';
export * from '../models/GetFiles200Response';
export * from '../models/GetItemLinks200Response';
export * from '../models/GetItems200Response';
export * from '../models/GetJobExecutions200Response';
export * from '../models/GetJobs200Response';
export * from '../models/GetLevels200Response';
export * from '../models/GetPartitions200Response';
export * from '../models/GetPublications200Response';
export * from '../models/GetScreens200Response';
export * from '../models/GetSuggestions200Response';
export * from '../models/GetTables200Response';
export * from '../models/GetTaskById400Response';
export * from '../models/GetTasks200Response';
export * from '../models/GetUsers200Response';
export * from '../models/GetVariables200Response';
export * from '../models/HighOrderQueryDTO';
export * from '../models/HighOrderQueryDTOQueriesInner';
export * from '../models/ItemDto';
export * from '../models/ItemDtoFieldsInner';
export * from '../models/ItemFieldDTO';
export * from '../models/ItemFieldDTOValue';
export * from '../models/ItemFieldFile';
export * from '../models/ItemFieldFileDTO';
export * from '../models/ItemFieldFileData';
export * from '../models/ItemFieldMultipleSelectWithCommentAndQuantity';
export * from '../models/ItemFieldMultipleSelectWithCommentAndQuantityDTO';
export * from '../models/ItemFieldMultipleSelectWithCommentAndQuantityData';
export * from '../models/ItemFieldNumberDTO';
export * from '../models/ItemFieldSimpleNumber';
export * from '../models/ItemFieldSimpleString';
export * from '../models/ItemFieldSimpleStringArray';
export * from '../models/ItemFieldStringArrayDTO';
export * from '../models/ItemFieldStringDTO';
export * from '../models/ItemFindDTO';
export * from '../models/ItemLinkCreateDto';
export * from '../models/ItemLinkDto';
export * from '../models/ItemMetadataDTO';
export * from '../models/JobDto';
export * from '../models/JobExecutionDto';
export * from '../models/JobExecutionInfoDto';
export * from '../models/JobLocalDto';
export * from '../models/JobPeriodicityDto';
export * from '../models/JobTaskDto';
export * from '../models/LevelDto';
export * from '../models/LowOrderQueryDTO';
export * from '../models/PartitionDto';
export * from '../models/PatchPublicationDto';
export * from '../models/PublicationDto';
export * from '../models/QueryDTO';
export * from '../models/ScreenDto';
export * from '../models/SuggestionCreateDto';
export * from '../models/SuggestionDeletedFieldDTO';
export * from '../models/SuggestionDto';
export * from '../models/TableDto';
export * from '../models/TaskDto';
export * from '../models/TaskDtoKey';
export * from '../models/TaskExecutionDto';
export * from '../models/UpdateJobDto';
export * from '../models/UpdateTaskDto';
export * from '../models/UpdateVariableDto';
export * from '../models/UserDto';
export * from '../models/VariableDto';

import { AccountDto, AccountDtoObjectEnum        } from '../models/AccountDto';
import { ApplyAllSuggestionDto } from '../models/ApplyAllSuggestionDto';
import { ApplySuggestionDto } from '../models/ApplySuggestionDto';
import { CommentThreadCreateDto, CommentThreadCreateDtoObjectEnum    , CommentThreadCreateDtoTargetTypeEnum   } from '../models/CommentThreadCreateDto';
import { CommentThreadDto, CommentThreadDtoObjectEnum           , CommentThreadDtoTypeEnum   , CommentThreadDtoTargetTypeEnum   } from '../models/CommentThreadDto';
import { CommentThreadReplyCreateDto } from '../models/CommentThreadReplyCreateDto';
import { CommentThreadReplyDTO   , CommentThreadReplyDTOTypeEnum    } from '../models/CommentThreadReplyDTO';
import { CommentThreadSubscriberDto, CommentThreadSubscriberDtoObjectEnum         } from '../models/CommentThreadSubscriberDto';
import { CommentThreadUpdateDto, CommentThreadUpdateDtoObjectEnum      } from '../models/CommentThreadUpdateDto';
import { CreateJobDto     , CreateJobDtoStatusEnum        } from '../models/CreateJobDto';
import { CreateJobExecutionDto } from '../models/CreateJobExecutionDto';
import { CreatePublicationDto } from '../models/CreatePublicationDto';
import { CreateTaskDto    , CreateTaskDtoTimeoutPolicyEnum  , CreateTaskDtoRetryLogicEnum          } from '../models/CreateTaskDto';
import { CreateVariableDto  , CreateVariableDtoStatusEnum     } from '../models/CreateVariableDto';
import { CrudListDto, CrudListDtoObjectEnum     } from '../models/CrudListDto';
import { FileDto, FileDtoObjectEnum        } from '../models/FileDto';
import { GetAccounts200Response, GetAccounts200ResponseObjectEnum     } from '../models/GetAccounts200Response';
import { GetCommentThreadSubscribers200Response, GetCommentThreadSubscribers200ResponseObjectEnum     } from '../models/GetCommentThreadSubscribers200Response';
import { GetCommentThreads200Response, GetCommentThreads200ResponseObjectEnum     } from '../models/GetCommentThreads200Response';
import { GetFiles200Response, GetFiles200ResponseObjectEnum     } from '../models/GetFiles200Response';
import { GetItemLinks200Response, GetItemLinks200ResponseObjectEnum     } from '../models/GetItemLinks200Response';
import { GetItems200Response, GetItems200ResponseObjectEnum     } from '../models/GetItems200Response';
import { GetJobExecutions200Response, GetJobExecutions200ResponseObjectEnum     } from '../models/GetJobExecutions200Response';
import { GetJobs200Response, GetJobs200ResponseObjectEnum     } from '../models/GetJobs200Response';
import { GetLevels200Response, GetLevels200ResponseObjectEnum     } from '../models/GetLevels200Response';
import { GetPartitions200Response, GetPartitions200ResponseObjectEnum     } from '../models/GetPartitions200Response';
import { GetPublications200Response, GetPublications200ResponseObjectEnum     } from '../models/GetPublications200Response';
import { GetScreens200Response, GetScreens200ResponseObjectEnum     } from '../models/GetScreens200Response';
import { GetSuggestions200Response, GetSuggestions200ResponseObjectEnum     } from '../models/GetSuggestions200Response';
import { GetTables200Response, GetTables200ResponseObjectEnum     } from '../models/GetTables200Response';
import { GetTaskById400Response } from '../models/GetTaskById400Response';
import { GetTasks200Response, GetTasks200ResponseObjectEnum     } from '../models/GetTasks200Response';
import { GetUsers200Response, GetUsers200ResponseObjectEnum     } from '../models/GetUsers200Response';
import { GetVariables200Response, GetVariables200ResponseObjectEnum     } from '../models/GetVariables200Response';
import { HighOrderQueryDTO } from '../models/HighOrderQueryDTO';
import { HighOrderQueryDTOQueriesInner } from '../models/HighOrderQueryDTOQueriesInner';
import { ItemDto, ItemDtoObjectEnum          } from '../models/ItemDto';
import { ItemDtoFieldsInner  , ItemDtoFieldsInnerTypeEnum   } from '../models/ItemDtoFieldsInner';
import { ItemFieldDTO , ItemFieldDTOTypeEnum    } from '../models/ItemFieldDTO';
import { ItemFieldDTOValue } from '../models/ItemFieldDTOValue';
import { ItemFieldFile } from '../models/ItemFieldFile';
import { ItemFieldFileDTO  , ItemFieldFileDTOTypeEnum   } from '../models/ItemFieldFileDTO';
import { ItemFieldFileData } from '../models/ItemFieldFileData';
import { ItemFieldMultipleSelectWithCommentAndQuantity } from '../models/ItemFieldMultipleSelectWithCommentAndQuantity';
import { ItemFieldMultipleSelectWithCommentAndQuantityDTO  , ItemFieldMultipleSelectWithCommentAndQuantityDTOTypeEnum   } from '../models/ItemFieldMultipleSelectWithCommentAndQuantityDTO';
import { ItemFieldMultipleSelectWithCommentAndQuantityData } from '../models/ItemFieldMultipleSelectWithCommentAndQuantityData';
import { ItemFieldNumberDTO  , ItemFieldNumberDTOTypeEnum   } from '../models/ItemFieldNumberDTO';
import { ItemFieldSimpleNumber } from '../models/ItemFieldSimpleNumber';
import { ItemFieldSimpleString } from '../models/ItemFieldSimpleString';
import { ItemFieldSimpleStringArray } from '../models/ItemFieldSimpleStringArray';
import { ItemFieldStringArrayDTO  , ItemFieldStringArrayDTOTypeEnum   } from '../models/ItemFieldStringArrayDTO';
import { ItemFieldStringDTO  , ItemFieldStringDTOTypeEnum   } from '../models/ItemFieldStringDTO';
import { ItemFindDTO , ItemFindDTOOrderEnum                        } from '../models/ItemFindDTO';
import { ItemLinkCreateDto, ItemLinkCreateDtoObjectEnum     } from '../models/ItemLinkCreateDto';
import { ItemLinkDto, ItemLinkDtoObjectEnum        } from '../models/ItemLinkDto';
import { ItemMetadataDTO } from '../models/ItemMetadataDTO';
import { JobDto, JobDtoObjectEnum          , JobDtoStatusEnum         } from '../models/JobDto';
import { JobExecutionDto, JobExecutionDtoObjectEnum          , JobExecutionDtoStatusEnum     } from '../models/JobExecutionDto';
import { JobExecutionInfoDto } from '../models/JobExecutionInfoDto';
import { JobLocalDto } from '../models/JobLocalDto';
import { JobPeriodicityDto } from '../models/JobPeriodicityDto';
import { JobTaskDto } from '../models/JobTaskDto';
import { LevelDto } from '../models/LevelDto';
import { LowOrderQueryDTO   , LowOrderQueryDTOTypeEnum   } from '../models/LowOrderQueryDTO';
import { PartitionDto } from '../models/PartitionDto';
import { PatchPublicationDto, PatchPublicationDtoStatusEnum   } from '../models/PatchPublicationDto';
import { PublicationDto, PublicationDtoObjectEnum            , PublicationDtoStatusEnum   } from '../models/PublicationDto';
import { QueryDTO   , QueryDTOTypeEnum    } from '../models/QueryDTO';
import { ScreenDto      , ScreenDtoLineHeightEnum  , ScreenDtoStatusEnum      } from '../models/ScreenDto';
import { SuggestionCreateDto, SuggestionCreateDtoObjectEnum          } from '../models/SuggestionCreateDto';
import { SuggestionDeletedFieldDTO , SuggestionDeletedFieldDTOTypeEnum    } from '../models/SuggestionDeletedFieldDTO';
import { SuggestionDto, SuggestionDtoObjectEnum               } from '../models/SuggestionDto';
import { TableDto } from '../models/TableDto';
import { TaskDto, TaskDtoObjectEnum         , TaskDtoTimeoutPolicyEnum  , TaskDtoRetryLogicEnum          } from '../models/TaskDto';
import { TaskDtoKey } from '../models/TaskDtoKey';
import { TaskExecutionDto , TaskExecutionDtoObjectEnum      , TaskExecutionDtoStatusEnum    } from '../models/TaskExecutionDto';
import { UpdateJobDto     , UpdateJobDtoStatusEnum         } from '../models/UpdateJobDto';
import { UpdateTaskDto     , UpdateTaskDtoTimeoutPolicyEnum  , UpdateTaskDtoRetryLogicEnum          } from '../models/UpdateTaskDto';
import { UpdateVariableDto    , UpdateVariableDtoStatusEnum    } from '../models/UpdateVariableDto';
import { UserDto, UserDtoObjectEnum        , UserDtoStatusEnum  , UserDtoRoleEnum   } from '../models/UserDto';
import { VariableDto, VariableDtoObjectEnum     , VariableDtoStatusEnum       } from '../models/VariableDto';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "AccountDtoObjectEnum",
    "CommentThreadCreateDtoObjectEnum",
    "CommentThreadCreateDtoTargetTypeEnum",
    "CommentThreadDtoObjectEnum",
    "CommentThreadDtoTypeEnum",
    "CommentThreadDtoTargetTypeEnum",
    "CommentThreadReplyDTOTypeEnum",
    "CommentThreadSubscriberDtoObjectEnum",
    "CommentThreadUpdateDtoObjectEnum",
    "CreateJobDtoStatusEnum",
    "CreateTaskDtoTimeoutPolicyEnum",
    "CreateTaskDtoRetryLogicEnum",
    "CreateVariableDtoStatusEnum",
    "CrudListDtoObjectEnum",
    "FileDtoObjectEnum",
    "GetAccounts200ResponseObjectEnum",
    "GetCommentThreadSubscribers200ResponseObjectEnum",
    "GetCommentThreads200ResponseObjectEnum",
    "GetFiles200ResponseObjectEnum",
    "GetItemLinks200ResponseObjectEnum",
    "GetItems200ResponseObjectEnum",
    "GetJobExecutions200ResponseObjectEnum",
    "GetJobs200ResponseObjectEnum",
    "GetLevels200ResponseObjectEnum",
    "GetPartitions200ResponseObjectEnum",
    "GetPublications200ResponseObjectEnum",
    "GetScreens200ResponseObjectEnum",
    "GetSuggestions200ResponseObjectEnum",
    "GetTables200ResponseObjectEnum",
    "GetTasks200ResponseObjectEnum",
    "GetUsers200ResponseObjectEnum",
    "GetVariables200ResponseObjectEnum",
    "ItemDtoObjectEnum",
    "ItemDtoFieldsInnerTypeEnum",
    "ItemFieldDTOTypeEnum",
    "ItemFieldFileDTOTypeEnum",
    "ItemFieldMultipleSelectWithCommentAndQuantityDTOTypeEnum",
    "ItemFieldNumberDTOTypeEnum",
    "ItemFieldStringArrayDTOTypeEnum",
    "ItemFieldStringDTOTypeEnum",
    "ItemFindDTOOrderEnum",
    "ItemLinkCreateDtoObjectEnum",
    "ItemLinkDtoObjectEnum",
    "JobDtoObjectEnum",
    "JobDtoStatusEnum",
    "JobExecutionDtoObjectEnum",
    "JobExecutionDtoStatusEnum",
    "LowOrderQueryDTOTypeEnum",
    "PatchPublicationDtoStatusEnum",
    "PublicationDtoObjectEnum",
    "PublicationDtoStatusEnum",
    "QueryDTOTypeEnum",
    "ScreenDtoLineHeightEnum",
    "ScreenDtoStatusEnum",
    "SuggestionCreateDtoObjectEnum",
    "SuggestionDeletedFieldDTOTypeEnum",
    "SuggestionDtoObjectEnum",
    "TaskDtoObjectEnum",
    "TaskDtoTimeoutPolicyEnum",
    "TaskDtoRetryLogicEnum",
    "TaskExecutionDtoObjectEnum",
    "TaskExecutionDtoStatusEnum",
    "UpdateJobDtoStatusEnum",
    "UpdateTaskDtoTimeoutPolicyEnum",
    "UpdateTaskDtoRetryLogicEnum",
    "UpdateVariableDtoStatusEnum",
    "UserDtoObjectEnum",
    "UserDtoStatusEnum",
    "UserDtoRoleEnum",
    "VariableDtoObjectEnum",
    "VariableDtoStatusEnum",
]);

let typeMap: {[index: string]: any} = {
    "AccountDto": AccountDto,
    "ApplyAllSuggestionDto": ApplyAllSuggestionDto,
    "ApplySuggestionDto": ApplySuggestionDto,
    "CommentThreadCreateDto": CommentThreadCreateDto,
    "CommentThreadDto": CommentThreadDto,
    "CommentThreadReplyCreateDto": CommentThreadReplyCreateDto,
    "CommentThreadReplyDTO": CommentThreadReplyDTO,
    "CommentThreadSubscriberDto": CommentThreadSubscriberDto,
    "CommentThreadUpdateDto": CommentThreadUpdateDto,
    "CreateJobDto": CreateJobDto,
    "CreateJobExecutionDto": CreateJobExecutionDto,
    "CreatePublicationDto": CreatePublicationDto,
    "CreateTaskDto": CreateTaskDto,
    "CreateVariableDto": CreateVariableDto,
    "CrudListDto": CrudListDto,
    "FileDto": FileDto,
    "GetAccounts200Response": GetAccounts200Response,
    "GetCommentThreadSubscribers200Response": GetCommentThreadSubscribers200Response,
    "GetCommentThreads200Response": GetCommentThreads200Response,
    "GetFiles200Response": GetFiles200Response,
    "GetItemLinks200Response": GetItemLinks200Response,
    "GetItems200Response": GetItems200Response,
    "GetJobExecutions200Response": GetJobExecutions200Response,
    "GetJobs200Response": GetJobs200Response,
    "GetLevels200Response": GetLevels200Response,
    "GetPartitions200Response": GetPartitions200Response,
    "GetPublications200Response": GetPublications200Response,
    "GetScreens200Response": GetScreens200Response,
    "GetSuggestions200Response": GetSuggestions200Response,
    "GetTables200Response": GetTables200Response,
    "GetTaskById400Response": GetTaskById400Response,
    "GetTasks200Response": GetTasks200Response,
    "GetUsers200Response": GetUsers200Response,
    "GetVariables200Response": GetVariables200Response,
    "HighOrderQueryDTO": HighOrderQueryDTO,
    "HighOrderQueryDTOQueriesInner": HighOrderQueryDTOQueriesInner,
    "ItemDto": ItemDto,
    "ItemDtoFieldsInner": ItemDtoFieldsInner,
    "ItemFieldDTO": ItemFieldDTO,
    "ItemFieldDTOValue": ItemFieldDTOValue,
    "ItemFieldFile": ItemFieldFile,
    "ItemFieldFileDTO": ItemFieldFileDTO,
    "ItemFieldFileData": ItemFieldFileData,
    "ItemFieldMultipleSelectWithCommentAndQuantity": ItemFieldMultipleSelectWithCommentAndQuantity,
    "ItemFieldMultipleSelectWithCommentAndQuantityDTO": ItemFieldMultipleSelectWithCommentAndQuantityDTO,
    "ItemFieldMultipleSelectWithCommentAndQuantityData": ItemFieldMultipleSelectWithCommentAndQuantityData,
    "ItemFieldNumberDTO": ItemFieldNumberDTO,
    "ItemFieldSimpleNumber": ItemFieldSimpleNumber,
    "ItemFieldSimpleString": ItemFieldSimpleString,
    "ItemFieldSimpleStringArray": ItemFieldSimpleStringArray,
    "ItemFieldStringArrayDTO": ItemFieldStringArrayDTO,
    "ItemFieldStringDTO": ItemFieldStringDTO,
    "ItemFindDTO": ItemFindDTO,
    "ItemLinkCreateDto": ItemLinkCreateDto,
    "ItemLinkDto": ItemLinkDto,
    "ItemMetadataDTO": ItemMetadataDTO,
    "JobDto": JobDto,
    "JobExecutionDto": JobExecutionDto,
    "JobExecutionInfoDto": JobExecutionInfoDto,
    "JobLocalDto": JobLocalDto,
    "JobPeriodicityDto": JobPeriodicityDto,
    "JobTaskDto": JobTaskDto,
    "LevelDto": LevelDto,
    "LowOrderQueryDTO": LowOrderQueryDTO,
    "PartitionDto": PartitionDto,
    "PatchPublicationDto": PatchPublicationDto,
    "PublicationDto": PublicationDto,
    "QueryDTO": QueryDTO,
    "ScreenDto": ScreenDto,
    "SuggestionCreateDto": SuggestionCreateDto,
    "SuggestionDeletedFieldDTO": SuggestionDeletedFieldDTO,
    "SuggestionDto": SuggestionDto,
    "TableDto": TableDto,
    "TaskDto": TaskDto,
    "TaskDtoKey": TaskDtoKey,
    "TaskExecutionDto": TaskExecutionDto,
    "UpdateJobDto": UpdateJobDto,
    "UpdateTaskDto": UpdateTaskDto,
    "UpdateVariableDto": UpdateVariableDto,
    "UserDto": UserDto,
    "VariableDto": VariableDto,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
