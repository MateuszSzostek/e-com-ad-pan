export interface IGetAllCategoriesRequest {}
export interface IGetAllCategoriesResponse {}

export interface IUpdateCategoriesRequest {}
export interface IUpdateCategoriesResponse {}

export interface IAddCategoryRequest {
  category: ICategory;
}
export interface IAddCategoryResponse {
  data: { category: ICategory };
}

export interface IDeleteCategoryRequest {}
export interface IDeleteCategoryResponse {}

export interface ICategory {
  name: string;
  parentName: string;
}
