import { Breadcrumb, BreadcrumbProps } from "antd";

interface IBreadcrumbProps extends BreadcrumbProps {}

const BreadcrumbComponent = (props: IBreadcrumbProps) => (
  <Breadcrumb {...props} />
);

export default BreadcrumbComponent;
