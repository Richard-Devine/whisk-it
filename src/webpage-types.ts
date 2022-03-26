export type LandingPageState = {
    productId: number
    myBasket: itemProps[]
    basketTotal: number
};
export type HeaderProps = {
    myBasket: number
};
export type MenuProps = {
    myBasket: number
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
    options?: { 1?: string, 2?: string, 3?: string, 4?: string }
}
export type ProductDetailsProps = {
    id: number
    addProductButton: (x: dataProps) => void
}
export type ProductDetailsState = {
    productInfo: dataProps[]
}
export type OffersState = {
    productRange: dataProps[]
}
export type OffersProps = {
    onClick: (x: number) => void
}
export type HomeProps = {
    onClick: (x: number) => void
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
}
export type itemProps = {
    id: string
    title: string
    price: number
    imageURL: string
    options?: dataProps["options"]
}
export type CheckoutProps = {
    myBasket: itemProps[]
    completeOrder: () => void
}
export type CheckoutState = {
    basketTotal: string
    order: OrderProps
    confirmed: boolean
}
export type OrderProps = {
    name?: string
    house?: string
    street?: string
    city?: string
    postcode?: string
    email?: string
    order?: string
}
export type PaymentButtonsProps = {
    amount: string
    order: OrderProps
    completeOrder: () => void
    myBasket: itemProps[]
}

export type CheckoutCompleteProps = {
    myBasket: itemProps[]
}
export type DropDownState = {
    menuDisplay: boolean
}

