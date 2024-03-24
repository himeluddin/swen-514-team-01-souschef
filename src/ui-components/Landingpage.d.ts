/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BlankIphonetemplateProps } from "./BlankIphonetemplate";
import { ButtonProps, HeadingProps, PlaceholderProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type LandingpageOverridesProps = {
    Landingpage?: PrimitiveOverrideProps<ViewProps>;
    "Landing page"?: BlankIphonetemplateProps;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    Placeholder?: PrimitiveOverrideProps<PlaceholderProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LandingpageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LandingpageOverridesProps | undefined | null;
}>;
export default function Landingpage(props: LandingpageProps): React.ReactElement;
