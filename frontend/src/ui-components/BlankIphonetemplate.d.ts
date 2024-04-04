/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlankIphonetemplateOverridesProps = {
    BlankIphonetemplate?: PrimitiveOverrideProps<ViewProps>;
    "Home Indicator38701590"?: PrimitiveOverrideProps<ViewProps>;
    "Home Indicator38701591"?: PrimitiveOverrideProps<ViewProps>;
    "Status Bar - iPhone X (or newer)"?: PrimitiveOverrideProps<ViewProps>;
    "Right Side"?: PrimitiveOverrideProps<ViewProps>;
    Battery?: PrimitiveOverrideProps<ViewProps>;
    Rectangle38701623?: PrimitiveOverrideProps<IconProps>;
    "Combined Shape"?: PrimitiveOverrideProps<IconProps>;
    Rectangle38701625?: PrimitiveOverrideProps<IconProps>;
    Wifi?: PrimitiveOverrideProps<IconProps>;
    "Wifi-path38701627"?: PrimitiveOverrideProps<IconProps>;
    "Wifi-path38701628"?: PrimitiveOverrideProps<IconProps>;
    "Wifi-path38701629"?: PrimitiveOverrideProps<IconProps>;
    "Mobile Signal"?: PrimitiveOverrideProps<IconProps>;
    "Cellular_Connection-path38701631"?: PrimitiveOverrideProps<IconProps>;
    "Cellular_Connection-path38701632"?: PrimitiveOverrideProps<IconProps>;
    "Cellular_Connection-path38701633"?: PrimitiveOverrideProps<IconProps>;
    "Cellular_Connection-path38701634"?: PrimitiveOverrideProps<IconProps>;
    "Left Side"?: PrimitiveOverrideProps<ViewProps>;
    Time?: PrimitiveOverrideProps<ViewProps>;
    "9:41"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type BlankIphonetemplateProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BlankIphonetemplateOverridesProps | undefined | null;
}>;
export default function BlankIphonetemplate(props: BlankIphonetemplateProps): React.ReactElement;
