export type LandingPageState = {
    pageView: string
    productId: string
};
export type HeaderProps = {
    onClick: (x: string) => void
};
export type MenuProps = {
    onClick: (x: string) => void
}
export type ProductListProps = {
    onClick: (x: string) => void
}
export type ProductListState = {
    productRange: dataProps[]
}
export type dataProps = {
    title: string,
    description: string,
    price: string,
    id: string,
    imageURL: string,
    allergens?: string
}
export type ProductDetailsProps = {
    backButton: () => void
    id: string
}
export type ProductDetailsState = {
    productInfo: dataProps[]
}

export type HomeProps = {
    onClick: (x: string) => void
}
export type ProductProps = {
    title: string,
    description: string,
    price: string,
    id: string,
    imageURL: string,
    allergens?: string
    onClick: (x: string) => void,
}

