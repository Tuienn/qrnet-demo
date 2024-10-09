import { useDispatch } from "react-redux";
import { changeVieToEng, changeEngToVie } from "../../redux/actions";

const LanguageButton = ({ type }: { type: string }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        const groupOverlay = document.querySelectorAll(".language-btn-overlay");
        if (type === "vietnamese") {
            groupOverlay[0].classList.remove("active");
            groupOverlay[1].classList.add("active");
            dispatch(changeEngToVie());
        } else if (type === "english") {
            groupOverlay[0].classList.add("active");
            groupOverlay[1].classList.remove("active");
            dispatch(changeVieToEng());
        }
    };
    if (type === "vietnamese") {
        return (
            <div className="language-btn" onClick={handleClick}>
                <div className="language-btn-overlay" />
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="3.42871"
                        width="24"
                        height="17.1429"
                        rx="3"
                        fill="#F93939"
                    ></rect>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0001 14.4172L9.61149 15.6743L10.0686 13.0149L8.13721 11.1326L10.8069 10.744L12.0001 8.32574L13.1943 10.744L15.8629 11.1326L13.9315 13.0149L14.3886 15.6732"
                        fill="#FFDA2C"
                    ></path>
                </svg>
            </div>
        );
    } else if (type === "english") {
        return (
            <div className="language-btn" onClick={handleClick}>
                <div className="language-btn-overlay active" />
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_6278_52894)">
                        <rect
                            y="3.43011"
                            width="24"
                            height="17.14"
                            rx="3"
                            fill="#1A47B8"
                        ></rect>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.55311 3.43011H0V6.28678L21.433 20.5701H24V17.7134L2.55311 3.43011Z"
                            fill="white"
                        ></path>
                        <path
                            d="M0.851541 3.43011L24 18.8966V20.5701H23.1684L0 5.08762V3.43011H0.851541Z"
                            fill="#F93939"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21.7143 3.43011H24V6.28678C24 6.28678 9.15406 15.803 2.28571 20.5701H0V17.7134L21.7143 3.43011Z"
                            fill="white"
                        ></path>
                        <path
                            d="M24 3.43011H23.2249L0 18.9099V20.5701H0.851541L24 5.10014V3.43011Z"
                            fill="#F93939"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.72809 3.43011H15.2919V8.71702H24V15.2797H15.2919V20.5701H8.72809V15.2797H0V8.71702H8.72809V3.43011Z"
                            fill="white"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.1053 3.43011H13.8947V10.0224H24V13.9778H13.8947V20.5701H10.1053V13.9778H0V10.0224H10.1053V3.43011Z"
                            fill="#F93939"
                        ></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_6278_52894">
                            <rect
                                y="3.43011"
                                width="24"
                                height="17.14"
                                rx="3"
                                fill="white"
                            ></rect>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        );
    }
};

export default LanguageButton;
