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
export type ProductDetailsProps = {
    backButton: () => void
}
