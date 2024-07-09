import { Image as EImage, ImageProps } from 'expo-image';
import React from 'react';
import { DimensionValue } from 'react-native';

//* Need to replace blurhash default
const blurhash =
	'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

type Props = ImageProps & {
	width?: DimensionValue | undefined;
	height?: DimensionValue | undefined;
};

const Image: React.FC<Props> = ({ source, placeholder, width, height, style, ...props }) => {
	return (
		<EImage
			source={source}
			placeholder={placeholder ?? { blurhash }}
			style={[width ? { width } : {}, height ? { height } : {}, style]}
			{...props}
		/>
	);
};

export default Image;
