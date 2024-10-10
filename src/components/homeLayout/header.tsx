import { Button, Flex, Layout, Grid } from "antd";
import { useSelector } from "react-redux";
import { useState } from "react";

import type { RootReducer } from "../../redux/types";
import LanguageButton from "../../assets/svg/languageButton";
import Icon from "../../assets/svg/commonIcon";
import "../../assets/styles/homeLayout/header.scss";
import "../../utils/responsive.scss";

const { Header } = Layout;
const { useBreakpoint } = Grid;

function NavHidden({ listItem }: { listItem: string[] }) {
    return (
        <div className="header__nav-hidden">
            <nav className="content-nav-hidden">
                {listItem.map((item, index) => (
                    <li key={index}>
                        <p>{item}</p>
                    </li>
                ))}
            </nav>
        </div>
    );
}

const HeaderCustom: React.FC = () => {
    const { lg, xs, sm } = useBreakpoint();
    const [open, setOpen] = useState(false);
    const navbarContent = useSelector(
        (state: RootReducer) => state.dataReducer.navbarContent
    );
    const { listItem, loginBtn, logo, menuIcon, closeIcon, smallLogo } =
        navbarContent;

    return (
        <Header className="header">
            <div className="wrapper-header">
                <div className="content-header">
                    {sm && lg && (
                        <div className="content-header--type-1">
                            <Flex justify="space-between" align="center">
                                <Icon type={logo} />
                                <nav className="header__nav">
                                    {listItem.map((item, index) => (
                                        <li key={index}>
                                            <p>{item}</p>
                                        </li>
                                    ))}
                                </nav>
                                <Flex
                                    gap={15}
                                    justify="space-between"
                                    align="center"
                                >
                                    <LanguageButton type="vietnamese" />
                                    <LanguageButton type="english" />
                                    <Button type="primary">{loginBtn}</Button>
                                </Flex>
                            </Flex>
                        </div>
                    )}
                    {sm && !lg && !open && (
                        <div className="content-header--type-2">
                            <Flex justify="space-between" align="center">
                                <div
                                    style={{ display: "inline-flex" }}
                                    onClick={() => setOpen(!open)}
                                >
                                    <Icon type={menuIcon} />
                                </div>
                                <Icon type={logo} />
                                <Button type="primary">{loginBtn}</Button>
                            </Flex>
                        </div>
                    )}
                    {xs && !open && (
                        <div className="content-header--type-3">
                            <Flex justify="space-between" align="center">
                                <div
                                    style={{ display: "inline-flex" }}
                                    onClick={() => setOpen(!open)}
                                >
                                    <Icon type={menuIcon} />
                                </div>
                                <Icon type={smallLogo} />
                                <Button type="primary">{loginBtn}</Button>
                            </Flex>
                        </div>
                    )}
                    {((sm && !lg) || xs) && open && (
                        <div className="content-header--type-4">
                            <Flex justify="space-between" align="center">
                                <div
                                    style={{ display: "inline-flex" }}
                                    onClick={() => setOpen(!open)}
                                >
                                    <Icon type={closeIcon} />
                                </div>
                                <Flex
                                    gap={15}
                                    justify="space-between"
                                    align="center"
                                >
                                    <LanguageButton type="vietnamese" />
                                    <LanguageButton type="english" />
                                </Flex>
                            </Flex>
                            <NavHidden listItem={listItem} />
                        </div>
                    )}
                </div>
            </div>
        </Header>
    );
};

export default HeaderCustom;
