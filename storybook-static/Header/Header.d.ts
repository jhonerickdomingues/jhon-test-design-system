import { LayoutProps } from "antd";
interface IHeaderComponent extends LayoutProps {
    onSearch?: (params: any) => void;
}
declare const HeaderComponent: ({ onSearch, ...props }: IHeaderComponent) => import("react/jsx-runtime").JSX.Element;
export default HeaderComponent;
