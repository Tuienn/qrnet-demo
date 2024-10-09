import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { ConfigProvider, ThemeConfig } from "antd";
import "./utils/base.scss";

const themeCustom: ThemeConfig = {
    token: {
        screenXSMax: 376,
        screenXSMin: 0,
        screenXS: 0,

        screenSMMax: 766,
        screenSMMin: 377,
        screenSM: 377,

        screenMDMax: 975,
        screenMDMin: 767,
        screenMD: 767,

        screenLGMax: 1199,
        screenLGMin: 976,
        screenLG: 976,

        screenXLMax: 1438,
        screenXLMin: 1200,
        screenXL: 1200,

        screenXXLMin: 1439,
        screenXXL: 1439,

        colorPrimary: "#0a66c2",
        borderRadius: 10,
    },
    components: {
        Menu: {
            horizontalItemSelectedColor: "#000",
        },
        Button: {
            defaultGhostColor: "#0a66c2",
            defaultBg: "#0a66c2",
            fontWeight: 600,
            defaultGhostBorderColor: "#0a66c2",
            paddingInline: 12,
            paddingBlock: 6,
            paddingInlineLG: 12,
            paddingBlockLG: 10,
            borderRadiusLG: 25,
            borderRadius: 25,
        },
        Layout: {
            footerBg: "#121A21",
            footerPadding: "60px",
        },
        Form: {
            labelColonMarginInlineEnd: 0,
            verticalLabelPadding: "0 0 0",
            colorInfoBorder: "#0a66c2",
            lineWidthBold: 15,
            controlOutlineWidth: 15,
        },
        Input: {
            activeBg: "rgba(255, 255, 255, 0.1)",
            colorErrorBg: "#fffff",
            colorErrorBgHover: "#fffff",
        },
        Select: {
            optionActiveBg: "rgba(255, 255, 255, 0.1)",
            colorErrorBg: "#fffff",
            colorErrorBgHover: "#fffff",
            selectorBg: "rgba(255, 255, 255, 0.1)",
        },
    },
};

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ConfigProvider theme={themeCustom}>
            <Provider store={store}>
                <App />
            </Provider>
        </ConfigProvider>
    </StrictMode>
);
