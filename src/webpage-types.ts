export type LandingPageState = {
    pageView: string
    productId: number
    myBasket: itemProps[]
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
    latestOffers: dataProps[],
    index: number,
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
    select?: number
    options?:{1?:string, 2?:string, 3?: string, 4?: string}
}
export type ProductDetailsProps = {
    backButton: () => void
    id: number
    addProductButton: (x:dataProps) => void
}
export type ProductDetailsState = {
    productInfo: dataProps[]
    selections: {
        selection1?: string
        selection2?: string
        selection3?: string
        selection4?: string
    }
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
    myBasket: itemProps[]
    myBasketTotal: number
    deleteItem: () => void
    checkout: () => void
}
export type itemProps = {
    id: string
    title: string
    price:number
    imageURL: string
    options?:dataProps["options"]
}
export type CheckoutProps = {
    myBasket: itemProps[]
    checkoutComplete: () => void
}
export type CheckoutState ={
    basketTotal:number
}

