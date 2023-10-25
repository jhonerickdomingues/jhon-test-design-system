import { Input } from "antd";
import { SearchProps } from "antd/es/input/Search";

const { Search } = Input;

export interface IInputSearchComponent extends SearchProps {}

const InputSearchComponent = (props: IInputSearchComponent) => (
  <Search {...props} />
);

export default InputSearchComponent;
