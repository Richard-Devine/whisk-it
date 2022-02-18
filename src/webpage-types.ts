export type LandingPageState = {
    pageView: string
    productId: string
};
export type HeaderProps = {
    onClick: (x:string) => void
};
export type MenuProps = {
    onClick: (x: string) => void
}
export type ProductListProps = {
    onClick: (x: string) => void
}
export type ProductListState = {
    productRange: object[]
}
export type ProductDetailsProps = {
    backButton: () => void
    id: string
}
export type HomeProps = {
    onClick: (x: string) => void
}
export type ProductProps = {
    title: string
    description: string
    price: string
    image?: string
    onClick: (x:string) => void
    id: string
}
