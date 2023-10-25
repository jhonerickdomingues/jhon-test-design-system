import { Col, List, Row, Image } from "antd";

import { ListProps } from "antd/es/list";
import { useState } from "react";

interface IProduct {
  nome: string;
  descrição: string;
  preco_promocional: number;
  preco_original: number;
  imagens: string[];
  categoria: string;
}

interface IListComponent extends ListProps<IProduct> {}

const ListComponent = ({ dataSource, ...props }: IListComponent) => {
  const [current, setCurrent] = useState(0);

  return (
    <List
      {...props}
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item key={item.nome} style={{ height: "100px" }}>
          <Row>
            <Col span={12}>
              {item.imagens.length ? (
                <Image.PreviewGroup
                  items={item.imagens}
                  preview={{ current, onChange: (index) => setCurrent(index) }}
                >
                  {item.imagens.map((image, imageIndex) => (
                    <Image
                      key={`imagem_${imageIndex}`}
                      style={{ padding: "0 2px" }}
                      height={60}
                      onClick={() => setCurrent(imageIndex)}
                      src={image}
                    />
                  ))}
                </Image.PreviewGroup>
              ) : null}
            </Col>
            <Col span={12}>
              <Row align={"middle"}>
                <Col span={12}>
                  <List.Item.Meta
                    title={item.nome}
                    description={item.descrição}
                  />
                </Col>
                <Col span={12} style={{ textAlign: "right" }}>
                  <div>
                    <span
                      style={{ color: "grey", textDecoration: "line-through" }}
                    >
                      R$ {item.preco_original}
                    </span>{" "}
                    <span>
                      <h3>
                        por <b>R$ {item.preco_promocional}</b>
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
