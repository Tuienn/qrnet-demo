import { Col, Row } from "antd";
import { useSelector } from "react-redux";

import type { RootReducer } from "../../redux/types";
import InfoContent1 from "./infoContent1";
import InfoContent2 from "./infoContent2";
import InfoContent3 from "./infoContent3";
import InfoContent4 from "./infoContent4";
import "../../assets/styles/homeLayout/listInfoContent.scss";
import "../../utils/responsive.scss";

const ListInfoContent: React.FC = () => {
    const dataReducer = useSelector(
        (state: RootReducer) => state.dataReducer.listInfoContent
    );
    const [
        theWhatContent,
        theWhyContent,
        powerByQRnetAIContent,
        theHowContent,
        shareContent,
        forTeamContent,
        whyQRNetContent,
        reviewContent,
    ] = dataReducer;

    return (
        <section className="list-info">
            <div className="wrapper-list-info container">
                <Row gutter={[0, 40]} className="content-list-info">
                    <Col span={24}>
                        <InfoContent1
                            mainContent={theWhatContent}
                            order={false}
                        />
                    </Col>
                    <Col span={24}>
                        <InfoContent1
                            mainContent={theWhyContent}
                            order={true}
                        />
                    </Col>
                    <Col span={24}>
                        <InfoContent1
                            mainContent={powerByQRnetAIContent}
                            purple={true}
                            order={false}
                        />
                    </Col>
                    <Col span={24}>
                        <InfoContent2 mainContent={theHowContent} />
                    </Col>
                    <Col span={24}>
                        <InfoContent3 mainContent={shareContent} />
                    </Col>
                    <Col span={24}>
                        <InfoContent1
                            mainContent={forTeamContent}
                            order={true}
                        />
                    </Col>
                    <Col span={24}>
                        <InfoContent1
                            mainContent={whyQRNetContent}
                            order={true}
                        />
                    </Col>
                    <Col span={24}>
                        <InfoContent4 mainContent={reviewContent} />
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default ListInfoContent;
