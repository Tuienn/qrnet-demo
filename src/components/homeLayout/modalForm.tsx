import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import { useState } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootReducer } from "../../redux/types";
import { ModalFormRequestProps } from "../../redux/types";
import "../../assets/styles/homeLayout/modalForm.scss";
import "../../utils/responsive.scss";

const ModalForm: React.FC<ModalFormRequestProps> = ({ open, setOpen }) => {
    const [form] = Form.useForm();
    const [success, setSuccess] = useState<boolean>(false);

    const formRequestContent = useSelector(
        (state: RootReducer) => state.dataReducer.formRequestContent
    );
    const { title, group, button } = formRequestContent;
    const [organization, personal] = group;
    const formSuccessContent = useSelector(
        (state: RootReducer) => state.dataReducer.formSuccessContent
    );
    const { img, successTitle, successDes, successButton } = formSuccessContent;

    type groupFocusInputType = {
        nameOrganization: boolean;
        sizeOrganization: boolean;
        namePersonal: boolean;
        phonePersonal: boolean;
        emailPersonal: boolean;
    };
    const initialFocusInput: groupFocusInputType = {
        nameOrganization: false,
        sizeOrganization: false,
        namePersonal: false,
        phonePersonal: false,
        emailPersonal: false,
    };
    // State để theo dõi input nào đang được focus
    const [groupFocusInput, setGroupFocusInput] =
        useState<groupFocusInputType>(initialFocusInput);

    const resetForm = () => {
        form.resetFields();
        setGroupFocusInput(initialFocusInput);
        setSuccess(false);
        setOpen(false);
    };

    return (
        <Modal
            centered
            open={open}
            footer={null}
            onCancel={resetForm}
            closeIcon={<CloseCircleOutlined style={{ fontSize: "30px" }} />}
            style={{ paddingBottom: "0" }}
        >
            <Form
                form={form}
                size="large"
                colon={false}
                layout="vertical"
                variant="filled"
                preserve={false}
                clearOnDestroy={true}
                onFinish={() => setSuccess(true)}
            >
                {!success && (
                    <div className="group-input">
                        <h2>{title}</h2>
                        <h3>{organization.title}</h3>
                        <Form.Item
                            className={`form-field ${
                                groupFocusInput.nameOrganization === true
                                    ? "active"
                                    : ""
                            }`}
                            name={organization.fields[0].name}
                            label={organization.fields[0].label}
                            rules={[
                                {
                                    required: organization.fields[0].required,
                                    message:
                                        organization.fields[0].requiredMessage,
                                },
                            ]}
                        >
                            <Input
                                onFocus={() =>
                                    setGroupFocusInput({
                                        ...groupFocusInput,
                                        nameOrganization: true,
                                    })
                                }
                                onBlur={(e) => {
                                    if (e.target.value.trim() === "") {
                                        setGroupFocusInput({
                                            ...groupFocusInput,
                                            nameOrganization: false,
                                        });
                                    }
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            className={`form-field ${
                                groupFocusInput.sizeOrganization === true
                                    ? "active"
                                    : ""
                            }`}
                            name={organization.fields[1].name}
                            label={organization.fields[1].label}
                        >
                            <Select
                                onFocus={() =>
                                    setGroupFocusInput({
                                        ...groupFocusInput,
                                        sizeOrganization: true,
                                    })
                                }
                            >
                                {organization.fields[1].dropdown?.map(
                                    (item) => (
                                        <Select.Option
                                            key={item.value}
                                            value={item.value}
                                        >
                                            {item.label}
                                        </Select.Option>
                                    )
                                )}
                            </Select>
                        </Form.Item>
                        <h3>{personal.title}</h3>
                        <Form.Item
                            className={`form-field ${
                                groupFocusInput.namePersonal === true
                                    ? "active"
                                    : ""
                            }`}
                            name={personal.fields[0].name}
                            label={personal.fields[0].label}
                            rules={[
                                {
                                    required: personal.fields[0].required,
                                    message: personal.fields[0].requiredMessage,
                                },
                            ]}
                        >
                            <Input
                                onFocus={() =>
                                    setGroupFocusInput({
                                        ...groupFocusInput,
                                        namePersonal: true,
                                    })
                                }
                                onBlur={(e) => {
                                    if (e.target.value.trim() === "") {
                                        setGroupFocusInput({
                                            ...groupFocusInput,
                                            namePersonal: false,
                                        });
                                    }
                                }}
                            />
                        </Form.Item>
                        <Row gutter={[12, 0]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    className={`form-field ${
                                        groupFocusInput.phonePersonal === true
                                            ? "active"
                                            : ""
                                    }`}
                                    name={personal.fields[1].name}
                                    label={personal.fields[1].label}
                                    rules={[
                                        {
                                            required:
                                                personal.fields[1].required,
                                            message:
                                                personal.fields[1]
                                                    .requiredMessage,
                                        },

                                        {
                                            pattern: personal.fields[1].pattern,
                                            message:
                                                personal.fields[1].errorMessage,
                                        },
                                    ]}
                                >
                                    <Input
                                        onFocus={() =>
                                            setGroupFocusInput({
                                                ...groupFocusInput,
                                                phonePersonal: true,
                                            })
                                        }
                                        onBlur={(e) => {
                                            if (e.target.value.trim() === "") {
                                                setGroupFocusInput({
                                                    ...groupFocusInput,
                                                    phonePersonal: false,
                                                });
                                            }
                                        }}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    className={`form-field ${
                                        groupFocusInput.emailPersonal === true
                                            ? "active"
                                            : ""
                                    }`}
                                    name={personal.fields[2].name}
                                    label={personal.fields[2].label}
                                    rules={[
                                        {
                                            required:
                                                personal.fields[2].required,
                                            message:
                                                personal.fields[2]
                                                    .requiredMessage,
                                        },
                                        {
                                            type: personal.fields[2].type,
                                            message:
                                                personal.fields[2].errorMessage,
                                        },
                                    ]}
                                >
                                    <Input
                                        onFocus={() =>
                                            setGroupFocusInput({
                                                ...groupFocusInput,
                                                emailPersonal: true,
                                            })
                                        }
                                        onBlur={(e) => {
                                            if (e.target.value.trim() === "") {
                                                setGroupFocusInput({
                                                    ...groupFocusInput,
                                                    emailPersonal: false,
                                                });
                                            }
                                        }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item style={{ marginBottom: 0 }}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                size="large"
                            >
                                {button}
                            </Button>
                        </Form.Item>
                    </div>
                )}
                {success && (
                    <div className="wrapper-form--sucess">
                        <div className="wrapper-img">
                            <img src={img} alt="" />
                        </div>
                        <h2>{successTitle}</h2>
                        <p>{successDes}</p>
                        <Button
                            type="primary"
                            block
                            size="large"
                            onClick={resetForm}
                        >
                            {successButton}
                        </Button>
                    </div>
                )}
            </Form>
        </Modal>
    );
};

export default ModalForm;
