import { Modal } from "antd";
import YoutubeEmbed from "../common/video";
import { ModalVideoProps } from "../../redux/types";
import "../../assets/styles/homeLayout/modalVideo.scss";
import "../../utils/responsive.scss";

const ModalVideo: React.FC<ModalVideoProps> = ({ embedId, open, setOpen }) => {
    return (
        <Modal
            centered
            footer={null}
            open={open}
            onCancel={() => setOpen(false)}
            closable={false}
            className="modal-video"
        >
            <YoutubeEmbed embedId={embedId} />
        </Modal>
    );
};

export default ModalVideo;
