import { Col, Flex, Layout, Row } from "antd";
import { useSelector } from "react-redux";

import { RootReducer } from "../../redux/types";
import Icon from "../../assets/svg/commonIcon";
import "../../assets/styles/homeLayout/footer.scss";
import "../../utils/responsive.scss";

const { Footer } = Layout;
const FooterCustom: React.FC = () => {
    const footerContent = useSelector(
        (state: RootReducer) => state.dataReducer.footerContent
    );
    const { introduce, more } = footerContent;
    const { logo, info, ThirdPartyBtn } = introduce;

    return (
        <Footer>
            <div className="wrapper-footer">
                <div className="content-footer">
                    <Row gutter={[25, 25]}>
                        <Col
                            xs={24}
                            sm={24}
                            md={12}
                            xl={6}
                            className="footer__introduce"
                        >
                            <Icon type={logo} />
                            <ul>
                                {info.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <Flex gap={5}>
                                <ThirdPartyBtn.GooglePlayWhite />
                                <ThirdPartyBtn.AppStoreWhite />
                            </Flex>
                        </Col>
                        {more.map((item, index) => (
                            <Col key={index} xs={24} sm={24} md={12} xl={6}>
                                <p className="footer__item-title">
                                    {item.title}
                                </p>
                                <ul>
                                    {item.des.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.link}>{item.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </Footer>
    );
};

export default FooterCustom;
