/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import BlankIphonetemplate from "./BlankIphonetemplate";
import {
  Button,
  Divider,
  Flex,
  Placeholder,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function IngredientUpload(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="812px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "IngredientUpload")}
      {...rest}
    >
      <BlankIphonetemplate
        width="375px"
        height="812px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ingredientUpload1")}
      ></BlankIphonetemplate>
      <Button
        width="21.33%"
        height="9.73%"
        position="absolute"
        border="1px SOLID rgba(255,255,255,1)"
        top="74.14%"
        bottom="16.13%"
        left="39.47%"
        right="39.2%"
        size="large"
        isDisabled={false}
        variation="default"
        children=""
        {...getOverrideProps(overrides, "Button3849332")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="600"
        color="rgba(172,159,159,1)"
        lineHeight="16.799999237060547px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.09px"
        width="161px"
        height="40px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="23.52%"
        bottom="71.55%"
        left="28.53%"
        right="28.53%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Images should be non-blurry and display one ingredient"
        {...getOverrideProps(
          overrides,
          "Images should be non-blurry and display one ingredient"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="17px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="23.799999237060547px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.19px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="9.85%"
        bottom="87.19%"
        left="31.2%"
        right="30.93%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Ingredient Upload"
        {...getOverrideProps(overrides, "Ingredient Upload")}
      ></Text>
      <Divider
        width="248px"
        height="8px"
        position="absolute"
        top="14.66%"
        bottom="84.36%"
        left="17.07%"
        right="16.8%"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Placeholder
        width="297px"
        height="302px"
        position="absolute"
        top="31.4%"
        bottom="31.4%"
        left="10.4%"
        right="10.4%"
        size="Default"
        {...getOverrideProps(overrides, "Placeholder")}
      ></Placeholder>
      <Flex
        gap="0"
        direction="row"
        width="10.67%"
        height="4.93%"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="8.87%"
        bottom="86.21%"
        left="5.07%"
        right="84.27%"
        borderRadius="4px"
        padding="8px 16px 8px 16px"
        {...getOverrideProps(overrides, "Button3895341")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children=""
          {...getOverrideProps(overrides, "label3895342")}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="10.67%"
        height="4.93%"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="8.87%"
        bottom="86.21%"
        left="93.07%"
        right="-3.73%"
        transformOrigin="top left"
        transform="rotate(180deg)"
        borderRadius="4px"
        padding="8px 16px 8px 16px"
        {...getOverrideProps(overrides, "Button3895343")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children=""
          {...getOverrideProps(overrides, "label3895344")}
        ></Text>
      </Flex>
    </View>
  );
}
