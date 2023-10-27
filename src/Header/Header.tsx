import { Layout, LayoutProps, Row, Col } from "antd";
const { Header } = Layout;
import DsInputSearch from "../InputSearch/InputSearch";
import { useTranslation } from "jhon-test-utils";

interface IHeaderComponent extends LayoutProps {
  onSearch?: (params: any) => void;
}

const HeaderComponent = ({ onSearch, ...props }: IHeaderComponent) => {
  const { t } = useTranslation();

  return (
    <Header
      {...props}
      style={{
        display: "grid",
        padding: "0 20px",
      }}
    >
      <Row align={"middle"}>
        <Col xs={10} sm={16} md={16}>
          <h2 style={{ color: "white", margin: 0 }}>{t("PRODUCTS")}</h2>
        </Col>
        <Col
          style={{
            display: "inherit",
          }}
          md={8}
          sm={12}
          xs={14}
        >
          <DsInputSearch allowClear onSearch={onSearch} />
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
