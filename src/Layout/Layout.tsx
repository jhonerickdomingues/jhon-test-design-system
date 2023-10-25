import { Layout, LayoutProps, theme, BreadcrumbProps } from "antd";
import HeaderComponent from "../Header/Header";
import BreadcrumbComponent from "../Breadcrumb/Breadcrumb";

interface ILayoutComponent extends LayoutProps {
  routes?: BreadcrumbProps["routes"];
  items?: BreadcrumbProps["items"];
  hideHeader?: boolean;
  onSearch?: (params: any) => void;
}

const { Content } = Layout;

const LayoutComponent = ({
  children,
  routes,
  items,
  hideHeader,
  onSearch,
}: ILayoutComponent) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      {!hideHeader ? <HeaderComponent onSearch={onSearch} /> : null}
      <Layout>
        <Layout style={{ padding: "24px 24px" }}>
          {routes?.length ? <BreadcrumbComponent routes={routes} /> : null}
          {items?.length ? <BreadcrumbComponent items={items} /> : null}

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children || "content"}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
