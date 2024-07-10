/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	BottomSheetBackdropProps,
	BottomSheetModal,
	BottomSheetModalProps,
	useBottomSheet,
} from '@gorhom/bottom-sheet';
import { Text, useTheme } from '@rneui/themed';
import React from 'react';
import { Pressable } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import { Box } from '../box';

type ModalProps = BottomSheetModalProps & {
	title?: string;
};

type ModalRef = React.ForwardedRef<BottomSheetModal>;

type ModalHeaderProps = {
	title?: string;
	dismiss: () => void;
};

export const useModal = () => {
	const ref = React.useRef<BottomSheetModal>(null);

	const present = React.useCallback((data?: any) => {
		ref.current?.present(data);
	}, []);

	const dismiss = React.useCallback(() => {
		ref.current?.dismiss();
	}, []);

	return { ref, present, dismiss };
};

export const Modal = React.forwardRef(
	(
		{ snapPoints: _snapPoints = ['60%'], title, detached = false, ...props }: ModalProps,
		ref: ModalRef,
	) => {
		const detachedProps = React.useMemo(() => getDetachedProps(detached), [detached]);
		const modal = useModal();
		const snapPoints = React.useMemo(() => _snapPoints, [_snapPoints]);

		React.useImperativeHandle(ref, () => (modal.ref.current as BottomSheetModal) || null);

		const {
			theme: { colors, spacing },
		} = useTheme();

		const renderHandleComponent = React.useCallback(
			() => (
				<>
					<Box
						mb={spacing.lg}
						mt={spacing.md}
						height={4}
						width={48}
						alignSelf="center"
						backgroundColor={colors.neutral60}
						borderRadius={spacing.xs}
					/>
					<ModalHeader title={title} dismiss={modal.dismiss} />
				</>
			),
			[title, modal.dismiss],
		);

		return (
			<BottomSheetModal
				{...props}
				{...detachedProps}
				ref={modal.ref}
				index={0}
				snapPoints={snapPoints}
				backdropComponent={props.backdropComponent || renderBackdrop}
				handleComponent={renderHandleComponent}
			/>
		);
	},
);

/**
 * Custom Backdrop
 */

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const CustomBackdrop = ({ style }: BottomSheetBackdropProps) => {
	const { close } = useBottomSheet();
	return (
		<AnimatedPressable
			onPress={() => close()}
			entering={FadeIn.duration(50)}
			exiting={FadeOut.duration(20)}
			style={[style, { backgroundColor: 'rgba(0, 0, 0, 0.4)' }]}
		/>
	);
};

export const renderBackdrop = (props: BottomSheetBackdropProps) => <CustomBackdrop {...props} />;

/**
 *
 * @param detached
 * @returns
 *
 * @description
 * In case the modal is detached, we need to add some extra props to the modal to make it look like a detached modal.
 */

const getDetachedProps = (detached: boolean) => {
	if (detached) {
		return {
			detached: true,
			bottomInset: 46,
			style: { marginHorizontal: 16, overflow: 'hidden' },
		} as Partial<BottomSheetModalProps>;
	}
	return {} as Partial<BottomSheetModalProps>;
};

/**
 * ModalHeader
 */
const ModalHeader = React.memo(({ title, dismiss }: ModalHeaderProps) => {
	return (
		<>
			{title && (
				<Box flexDirection="row" px={16} py={12}>
					<Box flex={1}>
						<Text h4>{title}</Text>
					</Box>
					<CloseButton close={dismiss} />
				</Box>
			)}
		</>
	);
});

const CloseButton = ({ close }: { close: () => void }) => {
	const {
		theme: { colors },
	} = useTheme();

	return (
		<Pressable
			onPress={close}
			hitSlop={16}
			style={{
				height: 24,
				width: 24,
				justifyContent: 'center',
				alignItems: 'center',
			}}
			accessibilityLabel="close modal"
			accessibilityRole="button"
			accessibilityHint="closes the modal"
		>
			<Svg width={24} height={24} fill="none" viewBox="0 0 24 24">
				<Path
					d="M18.707 6.707a1 1 0 0 0-1.414-1.414L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293Z"
					fill={colors.neutral80}
				/>
			</Svg>
		</Pressable>
	);
};
