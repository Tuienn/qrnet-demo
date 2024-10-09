import { Col, Image, Row } from "antd";

import { useSelector } from "react-redux";
import type { RootReducer } from "../../redux/types";
import "../../assets/styles/homeLayout/affiliate.scss";
import "../../utils/responsive.scss";

const Affiliate: React.FC = () => {
    const infoAffiliateContent = useSelector(
        (state: RootReducer) => state.dataReducer.infoAffiliateContent
    );
    const { title, logo } = infoAffiliateContent;

    return (
        <section className="affiliate">
            <div className="wrapper-affiliate">
                <div className="content-affiliate">
                    <h2>{title}</h2>
                    <div className="wrapper-logo">
                        <Row gutter={[15, 15]}>
                            {logo.map((item, index) => (
                                <Col key={index} xs={12} md={12} xl={4}>
                                    <div className="wrapper-img">
                                        <Image
                                            preview={false}
                                            src={item}
                                            alt=""
                                        />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Affiliate;
