import { LayoutProps, BreadcrumbProps } from "antd";
interface ILayoutComponent extends LayoutProps {
    routes?: BreadcrumbProps["routes"];
    items?: BreadcrumbProps["items"];
    hideHeader?: boolean;
    onSearch?: (params: any) => void;
}
declare const LayoutComponent: ({ children, routes, items, hideHeader, onSearch, }: ILayoutComponent) => import("react/jsx-runtime").JSX.Element;
export default LayoutComponent;
