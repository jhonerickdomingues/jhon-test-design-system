import { Col, List, Row, Image } from "antd";
import { ListProps } from "antd/es/list";
import { useState } from "react";
import { ProductType, useTranslation, centsToReal } from "jhon-test-utils";

interface IListComponent extends ListProps<ProductType> {}

const ListComponent = ({
  dataSource,
  pagination,
  ...props
}: IListComponent) => {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();

  return (
    <List
      {...props}
      itemLayout="vertical"
      size="large"
      pagination={
        pagination || {
          pageSize: 5,
          showSizeChanger: true,
        }
      }
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item key={item.nome} style={{ height: "auto" }}>
          <Row>
            <Col xs={24} sm={24} md={12}>
              {item.imagens.length ? (
                <Image.PreviewGroup
                  items={item.imagens.map((image) => image.url)}
                  preview={{ current, onChange: (index) => setCurrent(index) }}
                >
                  {item.imagens.map((image, imageIndex) => (
                    <Image
                      key={`imagem_${imageIndex}`}
                      style={{ padding: "0 2px" }}
                      height={80}
                      onClick={() => setCurrent(imageIndex)}
                      src={image.url}
                    />
                  ))}
                </Image.PreviewGroup>
              ) : null}
            </Col>
            <Col md={12} xs={24} sm={24}>
              <Row align={"middle"} style={{ marginTop: "5px" }}>
                <Col span={12}>
                  <List.Item.Meta
                    title={item.nome}
                    description={item.descricao}
                  />
                </Col>
                <Col span={12} style={{ textAlign: "right" }}>
                  <div>
                    <span
                      style={{ color: "grey", textDecoration: "line-through" }}
                    >
                      {centsToReal(item.preco_original)}
                    </span>{" "}
                    <span>
                      <h3>
                        {t("BY")} <b>{centsToReal(item.preco_promocional)}</b>
                      </h3>
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </List.Item>
      )}
    />
  );
};

export default ListComponent;
