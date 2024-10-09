import { RuleType } from "rc-field-form/lib/interface";

type RootType = {
    navbarContent: navbarType;
    introduceContent: introduceType;
    infoAffiliateContent: infoAffiliateType;
    listInfoContent: infoContentType[];
    ctaContent: ctaType;
    footerContent: footerType;
    formRequestContent: formRequestType;
    formSuccessContent: formSuccessType;
};

type action = {
    type: string;
    payload?: number | string;
};

type navbarType = {
    logo: string;
    listItem: string[];
    loginBtn: string;
    menuIcon: string;
    closeIcon: string;
    smallLogo: string;
};
type thirdPartyBtnType = {
    GooglePlay: React.FC;
    AppStore: React.FC;
    GooglePlayWhite: React.FC;
    AppStoreWhite: React.FC;
};

type introduceType = {
    title: string;
    img: string;
    des: string[];
    ThirdPartyBtn: thirdPartyBtnType;
    watchVideoBtn: string;
    embedId: string;
};

type infoAffiliateType = {
    title: string;
    logo: string[];
};

type infoContentType = {
    img?: string;
    name: string[] | string;
    title: string;
    des: string[] | string[][];
    button?: string[];
    embedId?: string;
};

type ctaType = {
    title: string;
    des: string;
    img: string[];
    ThirdPartyBtn: thirdPartyBtnType;
};

type introduceFooterType = {
    logo: string;
    info: string[];
    ThirdPartyBtn: thirdPartyBtnType;
};
type moreFooterType = {
    title: string;
    des: { name: string; link: string }[];
};
type footerType = {
    introduce: introduceFooterType;
    more: moreFooterType[];
};

type VideoPlayerProps = {
    embedId: string;
};
type VideoPlayerRef = {
    playVideo: () => void;
};

type formRequestType = {
    title: string;
    group: groupFormType[];
    button: string;
};
type groupFormType = {
    title: string;
    fields: FieldDataType[];
};
type FieldDataType = {
    name: string | number | (string | number)[];
    label: string;
    required: boolean;
    errorRequired?: string;
    dropdown?: { value: string; label: string }[];
    type?: RuleType;
    pattern?: RegExp;
    errorMessage?: string;
    requiredMessage?: string;
};

type formSuccessType = {
    img: string;
    successTitle: string;
    successDes: string;
    successButton: string;
};

type RootReducer = {
    dataReducer: RootType;
};

type ChildComponentProps = {
    customElement: React.ReactNode; // hoặc JSX.Element
};
type InfoContentElementProps = {
    mainContent: infoContentType;
    purple?: boolean;
    order?: boolean;
};
type ModalFormRequestProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
type ModalVideoProps = {
    embedId: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type {
    RootType,
    action,
    ChildComponentProps,
    RootReducer,
    infoContentType,
    VideoPlayerProps,
    VideoPlayerRef,
    InfoContentElementProps,
    ModalFormRequestProps,
    ModalVideoProps,
};
