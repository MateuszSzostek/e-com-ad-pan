export interface IGetAllProductTagsRequest {}
export interface IGetAllProductTagsResponse {}

export interface IAddProductTagRequest {
    productTag: IProductTag
}
export interface IAddProductTagResponse {
    productTag: IProductTag
}

export interface IDeleteProductTagRequest {}
export interface IDeleteProductTagResponse {}

export interface IProductTag {
  name: string;
}
