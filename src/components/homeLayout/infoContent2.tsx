import { Col, Flex, Image, Row } from "antd";
import { InfoContentElementProps } from "../../redux/types";

const InfoContent2: React.FC<InfoContentElementProps> = ({ mainContent }) => {
    const { name, title, des } = mainContent as {
        name: string;
        title: string;
        des: string[][];
    };

    return (
        <div className="type-2">
            <Flex vertical gap={25}>
                <div className="info-content__name">
                    <p>{name}</p>
                </div>
                <h2>{title}</h2>
                <Row gutter={[20, 20]}>
                    {des.map((item: string[], index: number) => {
                        return (
                            <Col key={index} lg={8} sm={24} xs={24}>
                                <div>
                                    <Flex vertical gap={15}>
                                        <Image preview={false} src={item[0]} />
                                        <h2>{item[1]}</h2>
                                        <p>{item[2]}</p>
                                    </Flex>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Flex>
        </div>
    );
};

export default InfoContent2;
