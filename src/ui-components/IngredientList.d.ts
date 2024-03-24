/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BlankIphonetemplateProps } from "./BlankIphonetemplate";
import { ButtonProps, CardProps, DividerProps, FlexProps, PlaceholderProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type IngredientListOverridesProps = {
    IngredientList?: PrimitiveOverrideProps<ViewProps>;
    "Blank Iphone template"?: BlankIphonetemplateProps;
    "Ingredient List"?: PrimitiveOverrideProps<TextProps>;
    Button3853456?: PrimitiveOverrideProps<ButtonProps>;
    "Group 15706"?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Placeholder?: PrimitiveOverrideProps<PlaceholderProps>;
    Button3852381?: PrimitiveOverrideProps<ButtonProps>;
    Button3853429?: PrimitiveOverrideProps<ButtonProps>;
    Button38752431?: PrimitiveOverrideProps<ButtonProps>;
    Button3895302?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    Button3924254?: PrimitiveOverrideProps<ButtonProps>;
    TextField?: PrimitiveOverrideProps<FlexProps>;
    InputGroup?: PrimitiveOverrideProps<FlexProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type IngredientListProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IngredientListOverridesProps | undefined | null;
}>;
export default function IngredientList(props: IngredientListProps): React.ReactElement;
