import { ListProps } from "antd/es/list";
interface IProduct {
    nome: string;
    descrição: string;
    preco_promocional: number;
    preco_original: number;
    imagens: string[];
    categoria: string;
}
interface IListComponent extends ListProps<IProduct> {
}
declare const ListComponent: ({ dataSource, ...props }: IListComponent) => import("react/jsx-runtime").JSX.Element;
export default ListComponent;
