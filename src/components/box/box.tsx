import React from 'react';
import {
	AnimatableNumericValue,
	ColorValue,
	DimensionValue,
	FlexStyle,
	View,
	ViewProps,
} from 'react-native';

export type BoxProps = ViewProps &
	Omit<
		FlexStyle,
		| 'margin'
		| 'marginBottom'
		| 'marginTop'
		| 'marginHorizontal'
		| 'marginVertical'
		| 'marginLeft'
		| 'marginRight'
		| 'marginStart'
		| 'marginEnd'
		| 'padding'
		| 'paddingBottom'
		| 'paddingTop'
		| 'paddingHorizontal'
		| 'paddingVertical'
		| 'paddingRight'
		| 'paddingLeft'
		| 'paddingEnd'
		| 'paddingStart'
	> & {
		m?: DimensionValue | undefined;
		mb?: DimensionValue | undefined;
		mt?: DimensionValue | undefined;
		mx?: DimensionValue | undefined;
		my?: DimensionValue | undefined;
		ml?: DimensionValue | undefined;
		mr?: DimensionValue | undefined;
		p?: DimensionValue | undefined;
		pt?: DimensionValue | undefined;
		pb?: DimensionValue | undefined;
		px?: DimensionValue | undefined;
		py?: DimensionValue | undefined;
		pl?: DimensionValue | undefined;
		pr?: DimensionValue | undefined;
	} & {
		backgroundColor?: ColorValue | undefined;
		borderRadius?: AnimatableNumericValue | undefined;
	};

const Box: React.FC<BoxProps> = ({
	alignContent,
	alignItems,
	alignSelf,
	aspectRatio,
	borderBottomWidth,
	borderEndWidth,
	borderLeftWidth,
	borderRightWidth,
	borderStartWidth,
	borderTopWidth,
	borderWidth,
	display,
	bottom,
	end,
	flex,
	flexBasis,
	flexDirection,
	rowGap,
	height,
	justifyContent,
	left,
	m,
	mt,
	mb,
	mx,
	my,
	ml,
	mr,
	p,
	pt,
	pb,
	pl,
	pr,
	px,
	py,
	maxHeight,
	maxWidth,
	minHeight,
	minWidth,
	overflow,
	position,
	right,
	start,
	top,
	width,
	zIndex,
	direction,
	children,
	style,
	backgroundColor,
	borderRadius,
	...props
}) => {
	return (
		<View
			style={[
				{
					alignContent,
					alignItems,
					alignSelf,
					aspectRatio,
					borderBottomWidth,
					borderEndWidth,
					borderLeftWidth,
					borderRightWidth,
					borderStartWidth,
					borderTopWidth,
					borderWidth,
					display,
					bottom,
					end,
					flex,
					flexBasis,
					flexDirection,
					rowGap,
					height,
					justifyContent,
					left,
					maxHeight,
					maxWidth,
					minHeight,
					minWidth,
					overflow,
					position,
					right,
					start,
					top,
					width,
					zIndex,
					direction,

					//*
					backgroundColor,
					borderRadius,
				},
				m ? { margin: m } : {},
				mt ? { marginTop: mt } : {},
				mb ? { marginBottom: mb } : {},
				ml ? { marginLeft: ml } : {},
				mr ? { marginRight: mr } : {},
				mx ? { marginHorizontal: mx } : {},
				my ? { marginVertical: my } : {},
				p ? { padding: p } : {},
				pt ? { paddingTop: pt } : {},
				pb ? { paddingBottom: pb } : {},
				pl ? { paddingLeft: pl } : {},
				pr ? { paddingRight: pr } : {},
				px ? { paddingHorizontal: px } : {},
				py ? { paddingVertical: py } : {},
				style,
			]}
			{...props}
		>
			{children}
		</View>
	);
};

export default Box;
