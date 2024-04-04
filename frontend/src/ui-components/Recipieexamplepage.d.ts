/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BlankIphonetemplateProps } from "./BlankIphonetemplate";
import { ButtonProps, CardProps, DividerProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type RecipieexamplepageOverridesProps = {
    Recipieexamplepage?: PrimitiveOverrideProps<ViewProps>;
    "Blank Iphone template"?: BlankIphonetemplateProps;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Apple Sauce"?: PrimitiveOverrideProps<TextProps>;
    "Group 15709"?: PrimitiveOverrideProps<ViewProps>;
    Card38762481?: PrimitiveOverrideProps<CardProps>;
    "Group 15710"?: PrimitiveOverrideProps<ViewProps>;
    Card38762485?: PrimitiveOverrideProps<CardProps>;
    Button38762473?: PrimitiveOverrideProps<ButtonProps>;
    "Ingredients 12 Apples 2 Cinnamon Sticks"?: PrimitiveOverrideProps<TextProps>;
    "Instructions Blend up apples in a blender. Eat it."?: PrimitiveOverrideProps<TextProps>;
    Button38762488?: PrimitiveOverrideProps<ButtonProps>;
    Button3895345?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RecipieexamplepageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: RecipieexamplepageOverridesProps | undefined | null;
}>;
export default function Recipieexamplepage(props: RecipieexamplepageProps): React.ReactElement;
