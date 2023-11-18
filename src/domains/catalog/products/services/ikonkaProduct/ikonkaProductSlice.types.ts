export interface IFetchAllIkonkaProductsResponse {
  allIkonkaProductsFetched: boolean;
}
export interface IFetchAllIkonkaProductsRequest {}

export interface ITransferAllIkonkaProductsToProductsResponse {
  allIkonkaIkonsTransferedToProducts: boolean;
}
export interface ITransferAllIkonkaProductsToProductsRequest {}

export interface IIkonkaProduct {
  kod_kreskowy: string;
  nazwa: string;
  link_do_zdjec: string;
  zdp: string;
  ysokosc: string;
  objectosc: string;
  zdjecia: string[];
  waga: string;
  czas_dostawy: string;
  najblizsza_dostawa: string;
  sztuk_w_kartonie: string;
  sugerowana_cena_detaliczna: string;
  opis_krotki: string;
  opis: string;
  kategoria: string;
  grupa_rabatowa: string;
  link_do_instrukcji: string;
  stan: string;
  vat: string;
  cena: string;
  kod: string;
  dlugosc: string;
}

export interface IGetAllIkonkaProductResponse {
  allIkonkaProducts: IIkonkaProduct[];
}
export interface IGetAllIkonkaProductRequest {}

export interface ISaveIkonkaProductToProductsResponse {
  ikonkaProductSavedToProduct: boolean;
}
export interface ISaveIkonkaProductToProductsRequest {}

export interface IUpdateIkonkaProductResponse {
  ikonkaProductUpdated: boolean;
}
export interface IUpdateIkonkaProductRequest {}

export interface IGetIkonkaProductResponse {}
export interface IGetIkonkaProductRequest {}
