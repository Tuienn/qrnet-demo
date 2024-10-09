import { useSelector } from "react-redux";
import { Button, Flex, Image } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { useRef } from "react";

import type { RootReducer, VideoPlayerRef } from "../../redux/types";
import YoutubeEmbed from "../common/video";
import "../../assets/styles/homeLayout/introduce.scss";
import "../../utils/responsive.scss";

const Introduce: React.FC = () => {
    const videoRef = useRef<VideoPlayerRef>(null);
    const wrapperVideoRef = useRef<HTMLDivElement>(null);
    const introduceContent = useSelector(
        (state: RootReducer) => state.dataReducer.introduceContent
    );
    const { title, img, des, watchVideoBtn, ThirdPartyBtn, embedId } =
        introduceContent;

    const handlePlay = () => {
        wrapperVideoRef.current?.scrollIntoView({
            behavior: "smooth", // Cuộn mượt mà
            block: "center", // Vị trí dọc: cuộn phần tử vào giữa màn hình
            inline: "nearest", // Vị trí ngang: giữ vị trí ngang gần nhất
        });

        videoRef.current?.playVideo();
    };

    return (
        <section className="introduce">
            <div className="wrapper-introduce">
                <div className="content-introduce">
                    <Flex vertical align="center" gap={15}>
                        <h1>{title}</h1>
                        <p>
                            {des[0]}
                            <br />
                            {des[1]}
                        </p>
                        <Flex align="center" gap={10}>
                            <ThirdPartyBtn.GooglePlay />
                            <ThirdPartyBtn.AppStore />
                        </Flex>
                        <Button
                            icon={<CaretRightOutlined />}
                            onClick={handlePlay}
                            ghost
                            size="large"
                        >
                            {watchVideoBtn}
                        </Button>
                        <Image preview={false} src={img} />

                        <div className="wrapper-video" ref={wrapperVideoRef}>
                            <YoutubeEmbed embedId={embedId} ref={videoRef} />
                        </div>
                    </Flex>
                </div>
            </div>
        </section>
    );
};

export default Introduce;
