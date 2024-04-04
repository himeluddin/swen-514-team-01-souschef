/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BlankIphonetemplateProps } from "./BlankIphonetemplate";
import { ButtonProps, CardProps, DividerProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type GeneratedRecipiesOverridesProps = {
    GeneratedRecipies?: PrimitiveOverrideProps<ViewProps>;
    "Blank Iphone template"?: BlankIphonetemplateProps;
    Divider38751348?: PrimitiveOverrideProps<DividerProps>;
    "Generated Recipes"?: PrimitiveOverrideProps<TextProps>;
    "Group 15707"?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    "Apple Cobbler"?: PrimitiveOverrideProps<TextProps>;
    Divider38543995?: PrimitiveOverrideProps<DividerProps>;
    "90%"?: PrimitiveOverrideProps<TextProps>;
    "ingredients missing"?: PrimitiveOverrideProps<TextProps>;
    Button38544044?: PrimitiveOverrideProps<ButtonProps>;
    Button38752105?: PrimitiveOverrideProps<ButtonProps>;
    Button38752266?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type GeneratedRecipiesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: GeneratedRecipiesOverridesProps | undefined | null;
}>;
export default function GeneratedRecipies(props: GeneratedRecipiesProps): React.ReactElement;
