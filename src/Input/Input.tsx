import { Input, InputProps } from "antd";

interface IInputComponent extends InputProps {}

const InputComponent = (props: IInputComponent) => <Input {...props} />;

export default InputComponent;
