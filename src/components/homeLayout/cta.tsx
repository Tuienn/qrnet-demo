import { useSelector } from "react-redux";
import { Flex } from "antd";

import { RootReducer } from "../../redux/types";
import "../../assets/styles/homeLayout/cta.scss";
import "../../utils/responsive.scss";

const Cta: React.FC = () => {
    const { title, des, img, ThirdPartyBtn } = useSelector(
        (state: RootReducer) => state.dataReducer.ctaContent
    );

    return (
        <section className="cta">
            <Flex vertical align="center" gap={10}>
                <h2>{title}</h2>
                <p>{des}</p>
                <div className="cta__img">
                    <img src={img[0]} />
                    <div className="cta-img__content">
                        <Flex vertical gap={15} align="center">
                            <img src={img[1]} />
                            <Flex gap={10}>
                                <ThirdPartyBtn.GooglePlay />
                                <ThirdPartyBtn.AppStore />
                            </Flex>
                        </Flex>
                    </div>
                </div>
            </Flex>
        </section>
    );
};

export default Cta;
