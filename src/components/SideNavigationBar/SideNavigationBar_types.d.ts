export type ISideNavigationBarItems = {
    label: string;
    url: string;
    submenu?: ISideNavigationBarSubItems[]
    Cell?: () => JSX.Element;
}
export type ISideNavigationBarSubItems = {
    label: string;
    url: string;
    Cell?: () => JSX.Element;
}
export type ISideNavigationBarProps = {
    navigations: ISideNavigationBarItems[]
    CustomTop?: () => JSX.Element;
    absolute?: boolean;
}