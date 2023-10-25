import { Layout, LayoutProps, Row, Col } from "antd";
const { Header } = Layout;
import DsInputSearch from "../InputSearch/InputSearch";
interface IHeaderComponent extends LayoutProps {
  onSearch?: (params: any) => void;
}

const HeaderComponent = ({ onSearch, ...props }: IHeaderComponent) => {
  return (
    <Header
      {...props}
      style={{
        display: "grid",
      }}
    >
      <Row align={"middle"}>
        <Col sm={12} md={16}>
          <h2 style={{ color: "white", margin: 0 }}>Products</h2>
        </Col>
        <Col
          style={{
            display: "inherit",
          }}
          md={8}
          sm={12}
        >
          <DsInputSearch allowClear onSearch={onSearch} />
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
