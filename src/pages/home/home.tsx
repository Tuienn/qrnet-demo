import { Flex, Layout } from "antd";

import "../../assets/styles/homeLayout/home.scss";
import HeaderCustom from "../../components/homeLayout/header";
import Introduce from "../../components/homeLayout/introduce";
import Affiliate from "../../components/homeLayout/affiliate";
import ListInfoContent from "../../components/homeLayout/listInfoContent";
import Cta from "../../components/homeLayout/cta.tsx";
import FooterCustom from "../../components/homeLayout/footer.tsx";

const { Content } = Layout;
const HomeLayout: React.FC = () => {
    return (
        <Layout>
            <HeaderCustom />
            <Content>
                <Flex vertical gap={60} align="center">
                    <Introduce />
                    <Affiliate />
                    <ListInfoContent />
                </Flex>
                <Cta />
            </Content>
            <FooterCustom />
        </Layout>
    );
};
export default HomeLayout;
