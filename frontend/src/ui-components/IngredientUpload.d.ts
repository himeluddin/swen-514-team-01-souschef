/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BlankIphonetemplateProps } from "./BlankIphonetemplate";
import { ButtonProps, DividerProps, FlexProps, PlaceholderProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type IngredientUploadOverridesProps = {
    IngredientUpload?: PrimitiveOverrideProps<ViewProps>;
    ingredientUpload1?: BlankIphonetemplateProps;
    Button3849332?: PrimitiveOverrideProps<ButtonProps>;
    "Images should be non-blurry and display one ingredient"?: PrimitiveOverrideProps<TextProps>;
    "Ingredient Upload"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Placeholder?: PrimitiveOverrideProps<PlaceholderProps>;
    Button3895341?: PrimitiveOverrideProps<FlexProps>;
    label3895342?: PrimitiveOverrideProps<TextProps>;
    Button3895343?: PrimitiveOverrideProps<FlexProps>;
    label3895344?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type IngredientUploadProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IngredientUploadOverridesProps | undefined | null;
}>;
export default function IngredientUpload(props: IngredientUploadProps): React.ReactElement;
