import { forwardRef, useImperativeHandle, useEffect, useRef } from "react";
import { VideoPlayerRef, VideoPlayerProps } from "../../redux/types";

const YoutubeEmbed = forwardRef<VideoPlayerRef, VideoPlayerProps>(
    ({ embedId }, ref) => {
        const videoRef = useRef<HTMLIFrameElement>(null);
        useImperativeHandle(ref, () => ({
            playVideo(): void {
                // Gửi message đến iframe để phát video
                videoRef?.current?.contentWindow?.postMessage(
                    '{"event":"command","func":"playVideo","args":""}',
                    "*"
                );
            },
        }));

        useEffect(() => {
            if (videoRef && videoRef.current) {
                videoRef.current.src = `https://www.youtube.com/embed/${embedId}?enablejsapi=1`;
            }
        });

        return (
            <iframe
                ref={videoRef}
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        );
    }
);

// YoutubeEmbed.propTypes = {
//     embedId: PropTypes.string.isRequired,
// };

export default YoutubeEmbed;
