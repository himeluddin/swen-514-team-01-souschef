/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import BlankIphonetemplate from "./BlankIphonetemplate";
import { Button, Heading, Placeholder, View } from "@aws-amplify/ui-react";
export default function Landingpage(props) {
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
      {...getOverrideProps(overrides, "Landingpage")}
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
        {...getOverrideProps(overrides, "Landing page")}
      ></BlankIphonetemplate>
      <Heading
        width="337px"
        height="120px"
        position="absolute"
        top="25.12%"
        bottom="60.1%"
        left="4.93%"
        right="5.2%"
        level="1"
        children="Welcome &#x2028;to SousChef"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Placeholder
        width="276px"
        height="236px"
        position="absolute"
        top="42%"
        bottom="28.94%"
        left="13.33%"
        right="13.07%"
        size="Default"
        {...getOverrideProps(overrides, "Placeholder")}
      ></Placeholder>
      <Button
        width="278px"
        height="65px"
        position="absolute"
        border="1px SOLID rgba(255,255,255,1)"
        borderRadius="41px"
        top="79.68%"
        bottom="12.32%"
        left="13.07%"
        right="12.8%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        backgroundColor="rgba(199,239,207,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Get Started"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
