import { Col, Row, Image, Flex, Button } from "antd";

import { InfoContentElementProps } from "../../redux/types";
import Icon from "../../assets/svg/commonIcon";
import { useState } from "react";
import ModalForm from "./modalForm";
import ModalVideo from "./modalVideo";

const InfoContent1: React.FC<InfoContentElementProps> = ({
    mainContent,
    purple,
    order,
}) => {
    const [openModalForm, setOpenModalForm] = useState<boolean>(false);
    const [openModalVideo, setOpenModalVideo] = useState<boolean>(false);
    const { img, name, title, des, button, embedId } = mainContent as {
        img: string;
        name: string[];
        title: string;
        des: string[];
        button: string[];
        embedId: string;
    };

    return (
        <div
            className={`type-1 ${order ? `order` : ``}`}
            style={
                purple
                    ? {
                          background:
                              "linear-gradient(to right, #B4B0E8, #C9C6EC)",
                      }
                    : {}
            }
        >
            <Row>
                <Col lg={24} md={24} xl={12}>
                    <Image preview={false} src={img} />
                </Col>
                <Col lg={24} md={24} xl={12}>
                    <Flex vertical gap={15} style={{ height: "100%" }}>
                        <div className="info-content__name">
                            {name.length === 1 && <p>{name[0]}</p>}
                            {name.length === 2 && (
                                <p>
                                    {name[0]}{" "}
                                    <span>
                                        <Icon type={name[1]} />
                                    </span>
                                </p>
                            )}
                        </div>
                        <h2>{title}</h2>
                        {des.map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                        ))}

                        <div>
                            {button && button.length === 1 && (
                                <Button
                                    ghost
                                    type="primary"
                                    onClick={() => setOpenModalForm(true)}
                                >
                                    {button[0]}
                                </Button>
                            )}
                            {button && button.length === 2 && (
                                <Button
                                    ghost
                                    icon={<Icon type={button[1]} />}
                                    style={
                                        purple
                                            ? {
                                                  color: "#000",
                                                  border: "0.1px solid #000",
                                              }
                                            : {}
                                    }
                                    onClick={() => setOpenModalVideo(true)}
                                >
                                    {button[0]}
                                </Button>
                            )}
                            <ModalForm
                                open={openModalForm}
                                setOpen={setOpenModalForm}
                            />
                            <ModalVideo
                                open={openModalVideo}
                                setOpen={setOpenModalVideo}
                                embedId={embedId}
                            />
                        </div>
                    </Flex>
                </Col>
            </Row>
        </div>
    );
};

export default InfoContent1;
