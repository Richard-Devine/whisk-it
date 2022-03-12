export type LandingPageState = {
    pageView: string
    productId: number
    myBasket: dataProps[]
    basketTotal: number
};
export type HeaderProps = {
    onClick: (x: string) => void
    myBasket: number
};
export type MenuProps = {
    onClick: (x: string) => void
    myBasket: number
}
export type HomeState = {
    productRange: dataProps[],
    latestOffers: object[],
    latestProducts: object[]
}
export type ProductListProps = {
    onClick: (x: number) => void
}
export type ProductListState = {
    productRange: dataProps[]
}
export type dataProps = {
    title: string,
    description: string,
    price: number,
    id: number,
    imageURL: string,
    allergens?: string
    offer: boolean
}
export type ProductDetailsProps = {
    backButton: () => void
    id: number
    addProductButton: (x:dataProps) => void
}
export type ProductDetailsState = {
    productInfo: dataProps[]
}
export type OffersState = {
    productRange: dataProps[]
}
export type OffersProps ={
    onClick: (x:number) => void
}
export type HomeProps = {
    onClick: (x: string) => void
}
export type ProductProps = {
    title: string,
    description: string,
    price: number,
    id: number,
    imageURL: string,
    allergens?: string
    onClick: (x: number) => void,
}
export type BasketProps = {
    myBasket: dataProps[]
    myBasketTotal: number
    backButton: () => void
}


