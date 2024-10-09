import { Avatar, Flex, Rate } from "antd";
import { InfoContentElementProps } from "../../redux/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const InfoContent4: React.FC<InfoContentElementProps> = ({ mainContent }) => {
    const { name, title, des } = mainContent as {
        name: string;
        title: string;
        des: string[][];
    };

    return (
        <div className="type-4" style={{ maxWidth: "100vw" }}>
            <Flex vertical gap={25} align="center">
                <div className="info-content__name">
                    <p>{name}</p>
                </div>
                <h2>{title}</h2>
                <Swiper
                    slidesPerView={"auto"}
                    modules={[Pagination]}
                    className="wrapper-list"
                >
                    {des.map((item: string[], index: number) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="content-item">
                                    <Flex vertical gap={15}>
                                        <Rate
                                            className="wrapper-item__rate"
                                            disabled
                                            defaultValue={parseInt(item[0])}
                                        />

                                        <div className="wrapper-item__comment">
                                            <p>{item[1]}</p>
                                        </div>

                                        <div className="wrapper-avatar">
                                            <Flex gap={5}>
                                                <div className="avatar">
                                                    <Avatar
                                                        src={
                                                            <img
                                                                src={item[2]}
                                                            />
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    <h4>{item[3]}</h4>
                                                    <p
                                                        style={{
                                                            fontSize: "small",
                                                            lineHeight: "1.2",
                                                        }}
                                                    >
                                                        {item[4]}
                                                    </p>
                                                </div>
                                            </Flex>
                                        </div>
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

export default InfoContent4;
