import { Button, ButtonProps } from "antd";

interface IButtonComponent extends ButtonProps {}

const ButtonComponent = (props: IButtonComponent) => <Button {...props} />;

export default ButtonComponent;
