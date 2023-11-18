export interface IGetAllCategoriesRequest {}
export interface IGetAllCategoriesResponse {}

export interface ILinkCategoriesRequest {}
export interface ILinkCategoriesResponse {}

export interface IUnlinkCategoriesRequest {}
export interface IUnlinkCategoriesResponse {}

export interface IAddCategoryRequest {
  categoryName: string;
}
export interface IAddCategoryResponse {
  category: ICategory;
}

export interface IDeleteCategoryRequest {}
export interface IDeleteCategoryResponse {}

export interface ICategory {
  name: string;
  parentName: string;
}
