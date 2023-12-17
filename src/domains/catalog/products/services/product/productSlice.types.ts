export interface IProduct {
  id: string;
  name: string;
  linkToPictures: string;
  tooBigForAParcelLocker: string;
  height: string;
  volume: string;
  pictures: string[];
  weight: string;
  deliveryTime: string;
  nextDelivery: string;
  amountInBox: string;
  suggestedRetailPrice: string;
  shortDescription: string;
  description: string;
  category: string;
  discountGroup: string;
  linkToInstruction: string;
  state: string;
  vat: string;
  providerPrice: string;
  price: string;
  code: string;
  length: string;
  barcode: string;

  categoryMissing: boolean;
  pendingPriceChanged: boolean;
  pendingUpdates: boolean;
}

export interface IGetProductResponse {
  product: IProduct;
}
export interface IGetProductRequest {
  id: string;
}

export interface IAddNewProductResponse {
  productAdded: boolean;
}
export interface IAddNewProductRequest {
  newProduct: IProduct;
}

export interface IUpdateProductResponse {
  productUpdated: boolean;
}
export interface IUpdateProductRequest {
  updatedProduct: {
    id: string;
    name: string;
    linkToPictures: string;
    tooBigForAParcelLocker: string;
    height: string;
    volume: string;
    pictures: string[];
    weight: string;
    deliveryTime: string;
    nextDelivery: string;
    amountInBox: string;
    suggestedRetailPrice: string;
    shortDescription: string;
    description: string;
    category: string;
    discountGroup: string;
    linkToInstruction: string;
    state: string;
    vat: string;
    providerPrice: string;
    price: string;
    code: string;
    length: string;
    barcode: string;
  };
}

export interface IDeleteProductResponse {
  productDeleted: boolean;
}
export interface IDeleteProductRequest {
  id: string;
}

export interface ISubstituteProductResponse {
  substituteAppliedToProducts: boolean;
}
export interface ISubstituteProductRequest {
  firstProductId: string;
  secondProductId: string;
}

export interface ICancelSubstituteProductResponse {
  productSubstituteCanceled: boolean;
}
export interface ICancelSubstituteProductRequest {
  firstProductId: string;
  secondProductId: string;
}

export interface ILinkProductResponse {
  productsLinked: boolean;
}
export interface ILinkProductRequest {
  firstProductId: string;
  secondProductId: string;
}

export interface IUnlinkProductResponse {
  productsUnlinked: boolean;
}
export interface IUnlinkProductRequest {
  firstProductId: string;
  secondProductId: string;
}
