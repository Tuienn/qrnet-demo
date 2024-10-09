import ThirdPartyVieBtn from "../../assets/svg/engThirdParty";
import ThirdPartyEngBtn from "../../assets/svg/vieThirdParty";
import { action, RootType } from "../types";
import actionType from "../actionType";
import logo1 from "../../assets/images/logo-1.webp";
import logo2 from "../../assets/images/logo-2.webp";
import logo3 from "../../assets/images/logo-3.webp";
import logo4 from "../../assets/images/logo-4.webp";
import logo5 from "../../assets/images/logo-5.webp";
import logo6 from "../../assets/images/logo-6.webp";
import img1Vie from "../../assets/images/img-1-vie.webp";
import img1Eng from "../../assets/images/img-1-eng.webp";
import img2Vie from "../../assets/images/img-2-vie.webp";
import img2Eng from "../../assets/images/img-2-eng.webp";
import img3Vie from "../../assets/images/img-3-vie.webp";
import img3Eng from "../../assets/images/img-3-eng.webp";
import img4Vie from "../../assets/images/img-4-vie.webp";
import img4Eng from "../../assets/images/img-4-eng.webp";
import img5Vie from "../../assets/images/img-5-vie.webp";
import img5Eng from "../../assets/images/img-5-eng.webp";
import img6 from "../../assets/images/img-6.webp";
import img7 from "../../assets/images/img-7.webp";
import img8Vie from "../../assets/images/img-8-vie.webp";
import img8Eng from "../../assets/images/img-8-eng.webp";
import img9Vie from "../../assets/images/img-9-vie.webp";
import img9Eng from "../../assets/images/img-9-eng.webp";
import img10 from "../../assets/images/img-10.webp";
import img11 from "../../assets/images/img-11.webp";
import img12Vie from "../../assets/images/img-12-vie.webp";
import img12Eng from "../../assets/images/img-12-eng.webp";
import avatar1 from "../../assets/images/avatar-1.webp";
import avatar2 from "../../assets/images/avatar-2.webp";
import avatar3 from "../../assets/images/avatar-3.webp";
import cta from "../../assets/images/cta.png";
import qrCta from "../../assets/images/qrCta.jpg";
import imgSuccess from "../../assets/images/success.gif";

const vieDataState: RootType = {
    navbarContent: {
        logo: "logo",
        listItem: [
            "Trang chủ",
            "Phụ kiện NFC",
            "Tính năng",
            "Trang QRNet",
            "Dành cho doanh nghiệp",
        ],
        loginBtn: "Đăng nhập",
        menuIcon: "MenuOutlined",
        closeIcon: "CloseOutlined",
        smallLogo: "small-logo",
    },
    introduceContent: {
        title: "QRnet - Danh thiếp điện tử của bạn",
        img: img1Vie,
        des: [
            "QRnet là một ứng dụng miễn phí về danh thiếp điện tử và quản lý liên lạc,",
            "được thiết kế để giúp bạn mở rộng mạng lưới của mình.",
        ],
        watchVideoBtn: "XEM VIDEO",
        ThirdPartyBtn: ThirdPartyVieBtn,
        embedId: "60MRZ_R0WSE",
    },
    infoAffiliateContent: {
        title: "Những khách hàng đã tin tưởng QRnet",
        logo: [logo1, logo2, logo3, logo4, logo5, logo6],
    },
    listInfoContent: [
        {
            img: img2Vie,
            name: ["THE WHAT"],
            title: "Danh thiếp điện tử là gì?",
            des: [
                "Cùng QRnet chuyên nghiệp hóa cách thức chia sẻ và thu thập thông tin của đối tác, khách hàng và bạn bè ngay hôm nay.",
                "Danh thiếp điện tử cho phép tạo và tùy chỉnh thông tin trên danh thiếp nhanh chóng và thuận tiện mà không cần phải in danh thiếp giấy truyền thống.",
                "Bạn có thể chia sẻ thông của mình với mã QR, chạm phụ kiện NFC, liên kết trang web hoặc cộng đồng người dùng trên nền tảng QRnet.",
                "Thông tin mà bạn muốn chia sẻ sẽ được mở ngay lập tức trong trình duyệt điện thoại của đối tác.",
            ],
        },
        {
            img: img3Vie,
            name: ["THE WHY"],
            title: "Tại sao tôi sử dụng danh thiếp điện tử?",
            des: [
                "Theo nghiên cứu cho thấy hơn 90% mọi người hình thành ấn tượng đầu tiên về đối tác mới trong vòng 1/20 giây. Danh thiếp điện tử QRnet sẽ giúp khoảnh khắc đó của bạn trở nên chuyên nghiệp và nổi bật.",
                "Tạo, tùy chỉnh và chia sẻ danh thiếp điện tử của bạn nhanh chóng mà không sợ bị thất lạc. Đối tác có thể ngay lập tức lưu và trao đổi lại liên hệ cho bạn mà không cần ứng dụng QRnet.",
                "Không chỉ là chia sẻ thông tin, QRnet cung cấp giải pháp thông minh giúp bạn có thể lưu liên hệ và kết nối với các đối tác ngay trên nền tảng ứng dụng.",
            ],
        },
        {
            img: img4Vie,
            name: ["POWERED BY QRNET AI", "AIIcon"],
            title: "Công nghệ AI giúp bạn quét và lưu danh thiếp",
            des: [
                "Với QRnet, Trải nghiệm lưu thông tin liên lạc của bạn bè, khách hàng và đối tác chưa bao giờ dễ dàng đến vậy. Ứng dụng QRnet sử dụng công nghệ AI có thể quét và lưu lại danh thiếp của đối tác ngay trong ứng dụng.",
                "Tính năng Quét và lưu danh thiếp có thể nhận diện mã QR và hiển thị danh thiếp điện tử của đối tác, hay thậm chí là chuyển đổi văn bản trên danh thiếp giấy của đối tác thành dữ liệu số và cho phép bạn lưu lại thông tin vào Mạng lưới trên QRnet của mình.",
            ],
            button: ["XEM VIDEO", "CaretRightOutlined"],
            embedId: "FRebYAhm-2I",
        },
        {
            name: "THE HOW",
            title: "Tạo danh thiếp chỉ trong 2 phút",
            des: [
                [img5Vie, "1", "Tải APP QRnet bằng cách quét mã QR dưới dây"],
                [
                    img6,
                    "2",
                    "Đăng ký tài khoản và thiết lập thông tin cho danh thiếp của bạn",
                ],
                [
                    img7,
                    "3",
                    "Bạn có thể chia sẻ danh thiếp điện tử của mình bằng mã QR và đường liên kết hiển thị trong Ứng dụng",
                ],
            ],
        },
        {
            name: "Linh động cách mà bạn chia sẻ thông tin",
            title: "Hãy tự chọn phương thức chia sẻ danh thiếp điện tử phù hợp với bạn. QRnet cung cấp cho bạn những phương thức tiện lợi nhất để chia sẻ thông tin.",
            des: [
                [
                    "Mã QR code trên APP",
                    "Hãy tự chọn cho mình phương thức chia sẻ danh thiếp điện tử phù hợp với bạn.",
                    img8Vie,
                ],
                [
                    "Đường Link liên kết",
                    "Chia sẻ đường liên kết đến danh thiếp điện tử của bạn trên Facebook hay các mạng xã hội khác.",
                    img9Vie,
                ],
                ["Phụ kiện QRnet NFC", "Đặt hàng ngay →", img10],
            ],
        },
        {
            img: img11,
            name: ["FOR TEAM"],
            title: "Dành cho tổ chức và đội nhóm của bạn",
            des: [
                "QRnet cung cấp giải pháp quản lý thẻ nhân viên cho tổ chức và đội nhóm của bạn. Bạn có thể tự lựa chọn thiết kế thẻ riêng mang phong cách của thương hiệu, doanh nghiệp hoặc tổ chức của mình.",
                "Với công nghệ NFC, doanh nghiệp có thể lựa chọn tích hợp thẻ nhân viên với danh thiếp điện tử, hệ thống chấm công, thẻ ra vào tòa nhà, văn phòng, thang máy…",
            ],
            button: ["YÊU CẦU TƯ VẤN"],
        },
        {
            img: img12Vie,
            name: ["WHY QRNET"],
            title: "QRnet - Lựa chọn hàng đầu của bạn",
            des: [
                "QRnet là một trong những nền tảng đầu tiên cung cấp danh thiếp điện tử tích hợp với phụ kiện NFC tại Việt Nam.",
                "Với ứng dụng QRnet, bạn đã có cho mình một giải pháp hoàn chỉnh cho việc tạo, tùy chỉnh danh thiếp điện tử, quản lý thông tin, danh thiếp được chia sẻ từ đối tác, tìm kiếm và mở rộng mạng lưới kinh doanh, cập nhật liên tục thông tin từ bạn bè, đối tác.",
            ],
        },
        {
            name: "REVIEW",
            title: "Phản Hồi Từ Khách Hàng",
            des: [
                [
                    "5",
                    "“Rất phù hợp với doanh nghiệp. Thẻ danh thiếp điện tử có thể đặt thiết kế riêng. Danh thiếp doanh nghiệp của tôi đã trở nên độc đáo và chuyên nghiệp, ngoài ra còn có thể áp dụng cho tất cả nhân viên trong doanh nghiệp.”",
                    avatar1,
                    "Anh Tùng Linh",
                    "Giám đốc Công nghệ tại Công ty TNHH Công nghệ VNTRIP",
                ],
                [
                    "5",
                    "“Danh thiếp điện tử có thể đáp ứng nhu cầu thêm rất nhiều loại thông tin hữu ích. Ứng dụng có khả năng tùy chỉnh các tường thông tin cá nhân, bao gồm cả thông tin của tổ chức, các liên kết mạng xã hội và cả gian hàng trên các sàn thương mãi điện tử.”",
                    avatar2,
                    "Anh Thanh Hải",
                    "Giám đốc sản phẩm tại Công ty Cổ phần MYTECH",
                ],
                [
                    "5",
                    "“Tiện lợi và rất dễ sử dụng. Chia sẻ danh thiếp chỉ cần chạm phụ kiện NFC vào mặt sau của điện thoại.”",
                    avatar3,
                    "Chị Kim Anh",
                    "Giám đốc Công Ty TNHH Dịch Vụ - Thương Mại Và Đầu Tư Huyền Anh",
                ],
            ],
        },
    ],
    ctaContent: {
        title: "Tạo danh thiếp điện tử của bạn ngay hôm nay",
        des: "Hãy bắt đầu miễn phí với QRnet và mở rộng mạng lưới kết nối của bạn.",
        img: [cta, qrCta],
        ThirdPartyBtn: ThirdPartyVieBtn,
    },
    footerContent: {
        introduce: {
            logo: "white-logo",
            info: [
                "QRNET PTE. LTD.",
                "Hotline: 037 455 6688",
                "Email: support@qrnet.me",
                "Địa chỉ: #02-01 68 CIRCULAR ROAD SINGAPORE (049422)",
                "Mã số thuế: 202224661M",
            ],
            ThirdPartyBtn: ThirdPartyVieBtn,
        },
        more: [
            {
                title: "Phụ kiện NFC",
                des: [
                    {
                        name: "Thẻ QRnet NFC cá nhân",
                        link: "#",
                    },
                    {
                        name: "Thẻ NFC thiết kế",
                        link: "#",
                    },
                    {
                        name: "Nhẫn NFC",
                        link: "#",
                    },
                    {
                        name: "Móc chìa khóa NFC",
                        link: "#",
                    },
                    {
                        name: "Móc dán ốp lưng điện thoại NFC",
                        link: "#",
                    },
                    {
                        name: "Thẻ NFC cho doanh nghiệp",
                        link: "#",
                    },
                ],
            },
            {
                title: "Điều khoản",
                des: [
                    { name: "Điều khoản và dịch vụ", link: "#" },
                    { name: "Bảo mật và quyền riêng tư", link: "#" },
                    { name: "Nguyên tắc cộng đồng", link: "#" },
                    { name: "Chính sách về Trang", link: "3" },
                ],
            },
            {
                title: "Tìm hiểu thêm",
                des: [
                    { name: "Phụ kiện NFC là gì?", link: "#" },
                    {
                        name: "Làm thế nào để kích hoạt phụ kiện NFC?",
                        link: "3",
                    },
                    {
                        name: "Làm thế nào để chia sẻ thông tin phụ kiện NFC?",
                        link: "#",
                    },
                    { name: "Danh sách thiết bị tương thích", link: "#" },
                    { name: "Giới thiệu ứng dụng QRNet", link: "#" },
                    { name: "Huy hiệu đã xác minh trên QRNet", link: "#" },
                ],
            },
        ],
    },
    formRequestContent: {
        title: "Yêu cầu tư vấn",
        group: [
            {
                title: "Thông tin công ty",
                fields: [
                    {
                        name: ["organization", "name"],
                        label: "Tên công ty",
                        required: true,
                        requiredMessage: "Vui lòng điền tên công ty!",
                    },
                    {
                        name: ["organization", "size"],
                        label: "Quy mô",
                        required: false,
                        dropdown: [
                            { value: "below100", label: "Dưới 100" },
                            { value: "100-300", label: "100-300" },
                            { value: "301-700", label: "301-700" },
                            { value: "701-1000", label: "701-1000" },
                            { value: "over1000", label: "Trên 1000" },
                        ],
                    },
                ],
            },
            {
                title: "Thông tin cá nhân",
                fields: [
                    {
                        name: ["personal", "name"],
                        label: "Họ và tên",
                        required: true,
                        requiredMessage: "Vui lòng điền họ và tên!",
                    },
                    {
                        name: ["personal", "phone"],
                        label: "Số điện thoại",
                        required: true,
                        pattern: /^[0-9]{10}$/,
                        errorMessage:
                            "Vui lòng điền số điện thoại đúng định dạng!",
                        requiredMessage: "Vui lòng điền số điện thoại!",
                    },
                    {
                        name: ["personal", "email"],
                        label: "Địa chỉ email",
                        required: true,
                        type: "email",
                        errorMessage: "Vui lòng điền email đúng định dạng!",
                        requiredMessage: "Vui lòng điền email!",
                    },
                ],
            },
        ],
        button: "Gửi yêu cầu",
    },
    formSuccessContent: {
        img: imgSuccess,
        successTitle: "Yêu cầu đã được ghi nhận",
        successDes:
            "Yêu cầu tư vấn của bạn đã được ghi nhận, QRnet sẽ liên hệ với bạn qua hotline 037 455 6688 để hỗ trợ xác nhận yêu cầu trong vòng 7-10 ngày làm việc.",
        successButton: "Tôi đã hiểu",
    },
};
const engDataState: RootType = {
    navbarContent: {
        logo: "logo",
        listItem: [
            "Home",
            "NFC Accessories",
            "Features",
            "QRNet Pages",
            "For Organization",
        ],
        loginBtn: "Sign in",
        menuIcon: "MenuOutlined",
        closeIcon: "CloseOutlined",
        smallLogo: "small-logo",
    },
    introduceContent: {
        title: "QRnet - Your digital business card",
        img: img1Eng,
        des: [
            "QRnet is a digital business card and contact management application",
            "designed to help you expand your network.",
        ],
        watchVideoBtn: "WATCH VIDEO",
        ThirdPartyBtn: ThirdPartyEngBtn,
        embedId: "60MRZ_R0WSE",
    },
    infoAffiliateContent: {
        title: "Teams and professionals around the world trust QRnet",
        logo: [logo1, logo2, logo3, logo4, logo5, logo6],
    },
    listInfoContent: [
        {
            img: img2Eng,
            name: ["THE WHAT"],
            title: "What is a digital business card?",
            des: [
                "Join QRnet to professionalize the way you share and collect information from partners, customers, and friends today.",
                "Digital business cards allow you to create and customize your information on business cards rapidly and conveniently without having to print traditional paper business cards.",
                "Instantly share your information with a QR code, a tap against NFC accessories, or a website link.",
                "The information you want to share will immediately open in your partner's phone browser.",
            ],
        },
        {
            img: img3Eng,
            name: ["THE WHY"],
            title: "Why do I use digital business cards?",
            des: [
                "More than 90% of people form a first impression of a new partner within 1/20 of a second. QRnet digital business cards can make your impression become professional and outstanding.",
                "Create, customize, and share your digital business cards rapidly. Others can instantly save and exchange contacts back to you even without the QRnet APP.",
                "More than sharing information, QRnet provides a smart solution that helps you save contacts and connect with partners right on our APP platform.",
            ],
        },
        {
            img: img4Eng,
            name: ["POWERED BY QRNET AI", "AIIcon"],
            title: "Scan and Save Business Cards with QRnet AI",
            des: [
                "Scan and save received business cards effortlessly with QRnet scanner. QRnet scanner uses AI technology to scan and save partners' business cards right in the APP.",
                "Our Scan and Save Business Card feature can recognize QR codes and display your partner's digital business card, or even convert the text on your partner's traditional paper business card into digital data and allow you to save the information to your QRnet Network.",
            ],
            button: ["WATCH VIDEO", "CaretRightOutlined"],
            embedId: "FRebYAhm-2I",
        },
        {
            name: "THE HOW",
            title: "Set up your Digital Business Card within 2 minutes",
            des: [
                [
                    img5Eng,
                    "1",
                    "Download the QRnet APP by scanning the QR code below",
                ],
                [
                    img6,
                    "2",
                    "Register an account and set up information for your business card",
                ],
                [
                    img7,
                    "3",
                    "You can now share your Digital business card using the QR code and link displayed in the APP",
                ],
            ],
        },
        {
            name: "Be flexible in the way you share information",
            title: "Choose for yourself the method of sharing digital business cards. QRnet here provides you with the most convenient ways to share your information.",
            des: [
                [
                    "QRnet APP QR Code",
                    "Let your partner scan the QR code on your digital business card on QRnet to share you info.",
                    img8Eng,
                ],
                [
                    "Share your link",
                    "Share the direct link to your digital business card to people on Facebook or other social networks.",
                    img9Eng,
                ],
                ["QRnet NFC accessories", "Order now →", img10],
            ],
        },
        {
            img: img11,
            name: ["FOR TEAM"],
            title: "For Organizations & Teams",
            des: [
                "QRnet provides employee card management solutions for your organization and team.",
                "Customize your NFC card with a distinct look that is right for your team and your brand. Integrate your employee cards with digital business cards, timekeeping systems, and Access control systems for buildings, offices, elevators...",
            ],
            button: ["REQUEST FOR CONSULTATION"],
        },
        {
            img: img12Eng,
            name: ["WHY QRNET"],
            title: "Why QRnet is the right choice",
            des: [
                "QRnet is one of the pioneering platforms providing digital business cards integrated with NFC accessories in Vietnam.",
                "With the QRnet APP, you can also manage information and business cards shared from partners in your Network, search for potential business partners and expand your business network through Explore, and continuously update information from friends and partners through the article feature.",
            ],
        },
        {
            name: "REVIEW",
            title: "Our Happy Clients",
            des: [
                [
                    "5",
                    "“Very suitable for Enterprises. Digital business cards design can be customized. My business card has become unique and professional, and can be applied to all employees in the company.”",
                    avatar1,
                    "Mr. Tung Linh",
                    "CTO at VNTRIP Technology Ltd.",
                ],
                [
                    "5",
                    "“Digital business cards can add  many types of useful information. The APP has the ability to customize personal information walls, including organizational information, social network links and stores on e-commerce platforms.”",
                    avatar2,
                    "Mr. Thanh Hai",
                    "Product Manager at MYTECH Joint Stock Company",
                ],
                [
                    "5",
                    "“Very easy and convenient to use. Sharing business cards by simply touching the NFC accessory to the back of smart phones.”",
                    avatar3,
                    "Mrs. Kim Anh",
                    "CEO at Huyen Anh Services-Trading and Investment Ltd.",
                ],
            ],
        },
    ],
    ctaContent: {
        title: "Create your digital business card today",
        des: "Get started for free with QRnet and grow your network.",
        img: [cta, qrCta],
        ThirdPartyBtn: ThirdPartyEngBtn,
    },
    footerContent: {
        introduce: {
            logo: "white-logo",
            info: [
                "QRNET PTE. LTD.",
                "Hotline: 037 455 6688",
                "Email: support@qrnet.me",
                "Address: #02-01 68 CIRCULAR ROAD SINGAPORE (049422)",
                "Tax number: 202224661M",
            ],
            ThirdPartyBtn: ThirdPartyEngBtn,
        },
        more: [
            {
                title: "NFC Accessories",
                des: [
                    {
                        name: "QRNet card for individual",
                        link: "#",
                    },
                    {
                        name: "Custom NFC card",
                        link: "#",
                    },
                    {
                        name: "NFC ring",
                        link: "#",
                    },
                    {
                        name: "NFC keychain",
                        link: "#",
                    },
                    {
                        name: "NFC phone card",
                        link: "#",
                    },
                    {
                        name: "NFC card for organization",
                        link: "#",
                    },
                ],
            },
            {
                title: "Policy",
                des: [
                    { name: "Terms and service", link: "#" },
                    { name: "Security and privacy", link: "#" },
                    { name: "Proffesional community policy", link: "#" },
                    { name: "QRNet page terms", link: "3" },
                ],
            },
            {
                title: "Learn more",
                des: [
                    { name: "NFC tutorial", link: "#" },
                    {
                        name: "How to activate your NFC Accessories?",
                        link: "3",
                    },
                    {
                        name: "How to share your info via NFC Accessories?",
                        link: "#",
                    },
                    { name: "List of NFC-compatible devices", link: "#" },
                    { name: "About QRNet APP", link: "#" },
                    { name: "QRNet vertified badge", link: "#" },
                ],
            },
        ],
    },
    formRequestContent: {
        title: "Request for consultation",
        group: [
            {
                title: "Organization Information",
                fields: [
                    {
                        name: ["organization", "name"],
                        label: "Organization name",
                        required: true,
                        requiredMessage: "Please enter your organization name!",
                    },
                    {
                        name: ["organization", "size"],
                        label: "Size",
                        required: false,
                        dropdown: [
                            { value: "below100", label: "Below 100" },
                            { value: "100-300", label: "100-300" },
                            { value: "301-700", label: "301-700" },
                            { value: "701-1000", label: "701-1000" },
                            { value: "over1000", label: "Over 1000" },
                        ],
                    },
                ],
            },
            {
                title: "Personal Information",
                fields: [
                    {
                        name: ["personal", "name"],
                        label: "Full name",
                        required: true,
                        requiredMessage: "Please enter your full name!",
                    },
                    {
                        name: ["personal", "phone"],
                        label: "Your phone number",
                        required: true,
                        pattern: /^[0-9]{10}$/,
                        errorMessage: "Please enter a valid phone number!",
                        requiredMessage: "Please enter your phone number!",
                    },
                    {
                        name: ["personal", "email"],
                        label: "Your email address",
                        required: true,
                        type: "email",
                        errorMessage: "Please enter a valid email!",
                        requiredMessage: "Please enter your email!",
                    },
                ],
            },
        ],
        button: "Send request",
    },
    formSuccessContent: {
        img: imgSuccess,
        successTitle: "Request received",
        successDes:
            "We have received your Request for consultation, QRnet will contact you via hotline 037 455 6688 to confirm the request within 7-10 working days.",
        successButton: "OK, I got it",
    },
};

const dataReducer = (state = vieDataState, action: action) => {
    switch (action.type) {
        case actionType.changeVieToEng:
            return { ...engDataState };
        case actionType.changeEngToVie:
            return { ...vieDataState };
        default:
            return state;
    }
};

export default dataReducer;
