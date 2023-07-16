import React, { useContext } from "react";
import { ColorPicker, Form, Col, Row, Modal } from "antd";
import { useTranslation } from "react-i18next";
import { ColorFactory } from "antd/es/color-picker/color";
import { ThemeContext } from "styled-components";

import { defaultColorTheme } from "../../../styles/colors";
import { ColorTheme } from "../../../styles/theme";
import { NS } from "../../../localize/i18n";

import * as S from "./styled";

export type OnModalFinishHandlerParam = ColorTheme

type ColorizeModalProps = {
  isModalOpen: boolean;
  closeModal?: () => void;
  onModalFinishHandler: (themeData: OnModalFinishHandlerParam) => void;
};

type FormValuesType = {
  primary: ColorFactory;
  secondary: ColorFactory;
  tertialy: ColorFactory;
  quaternary: ColorFactory;
};

const ColorizeModal: React.FC<ColorizeModalProps> = ({
  isModalOpen,
  closeModal,
  onModalFinishHandler
}) => {
  const [form] = Form.useForm<FormValuesType>();
  const themeData = useContext(ThemeContext);
  const { t } = useTranslation(NS.dashboard);
  const onFinish = (values: FormValuesType) => {
    const stringValues = {
      primary: values.primary.toHexString(),
      secondary: values.secondary.toHexString(),
      tertialy: values.tertialy.toHexString(),
      quaternary: values.quaternary.toHexString(),
    };
    onModalFinishHandler(stringValues)
  };

  const onModalOkhandler = () => {
    form.submit();
  };
  return (
    <Modal
      title={t("colorizeModal.title")}
      open={isModalOpen}
      onOk={onModalOkhandler}
      onCancel={closeModal}
    >
      <S.ColorizeModalWrapper>
        <Form<FormValuesType>
          name="colorizeForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 112 }}
          style={{ maxWidth: 1200 }}
          initialValues={{
            primary: new ColorFactory(themeData?.colors?.primary || defaultColorTheme.primary),
            secondary: new ColorFactory(themeData?.colors?.secondary || defaultColorTheme.secondary),
            tertialy: new ColorFactory(themeData?.colors?.tertialy || defaultColorTheme.tertialy),
            quaternary: new ColorFactory(themeData?.colors?.quaternary || defaultColorTheme.quaternary),
          }}
          onFinish={onFinish}
          autoComplete="off"
          form={form}
        >
          <Row>
            <Col md={12}>
              <Form.Item
                label={t("colorizeModal.primary")}
                name="primary"
                labelCol={{ span: 18 }}
                wrapperCol={{ span: 6 }}
              >
                <ColorPicker />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item
                label={t("colorizeModal.secondary")}
                name="secondary"
                labelCol={{ span: 18 }}
                wrapperCol={{ span: 6 }}
              >
                <ColorPicker />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Item
                label={t("colorizeModal.tertialy")}
                name="tertialy"
                labelCol={{ span: 18 }}
                wrapperCol={{ span: 6 }}
              >
                <ColorPicker />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item
                label={t("colorizeModal.quaternary")}
                name="quaternary"
                labelCol={{ span: 18 }}
                wrapperCol={{ span: 6 }}
              >
                <ColorPicker />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </S.ColorizeModalWrapper>
    </Modal>
  );
};

export default ColorizeModal;
