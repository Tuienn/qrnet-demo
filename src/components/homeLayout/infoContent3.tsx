import { Flex, Image } from "antd";
import { InfoContentElementProps } from "../../redux/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const InfoContent3: React.FC<InfoContentElementProps> = ({ mainContent }) => {
    const { name, title, des } = mainContent as {
        name: string;
        title: string;
        des: string[][];
    };

    return (
        <div className="type-3">
            <Flex vertical gap={15}>
                <h2>{name}</h2>
                <p>{title}</p>
                <Swiper
                    slidesPerView={"auto"}
                    modules={[Pagination]}
                    className="wrapper-list"
                >
                    {des.map((item: string[], index: number) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="content-item">
                                    <Flex vertical align="center">
                                        <h3>{item[0]}</h3>
                                        <div className="para-sm">
                                            {index !== 2 ? (
                                                item[1]
                                            ) : (
                                                <a href="https://qrnet.me/nfc/accessories">
                                                    {item[1]}
                                                </a>
                                            )}
                                        </div>
                                        <Image preview={false} src={item[2]} />
                                    </Flex>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Flex>
        </div>
    );
};

export default InfoContent3;
