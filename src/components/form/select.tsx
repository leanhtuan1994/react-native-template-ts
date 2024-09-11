/* eslint-disable react-native/no-inline-styles */
import { BottomSheetFlatList, BottomSheetModal } from '@gorhom/bottom-sheet';
import { Text, useTheme } from '@rneui/themed';
import React, { forwardRef, useCallback, useMemo } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { Pressable, PressableProps, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path, SvgProps } from 'react-native-svg';

import { Box } from '../box';
import { Modal, useModal } from '../modal';
import { InputControllerType } from './controlled-input';

const List = BottomSheetFlatList;

export type Option = { label: string; value: string | number };

type OptionsProps = {
	options: Option[];
	onSelect: (option: Option) => void;
	value?: string | number;
	testID?: string;
};

function keyExtractor(item: Option) {
	return `select-item-${item.value}`;
}

export const Options = forwardRef<BottomSheetModal, OptionsProps>(
	({ options, onSelect, value, testID }, ref) => {
		const { bottom: bottomSafe } = useSafeAreaInsets();

		const height = options.length * 70 + 100 + bottomSafe;

		const snapPoints = useMemo(() => [height], [height]);

		const {
			theme: { colors },
		} = useTheme();

		const renderSelectItem = useCallback(
			({ item }: { item: Option }) => (
				<OptionItem
					key={`select-item-${item.value}`}
					label={item.label}
					selected={value === item.value}
					onPress={() => onSelect(item)}
					testID={testID ? `${testID}-item-${item.value}` : undefined}
				/>
			),
			[onSelect, value, testID],
		);

		return (
			<Modal
				ref={ref}
				index={0}
				snapPoints={snapPoints}
				backgroundStyle={{
					backgroundColor: colors.background,
				}}
			>
				<List
					data={options}
					keyExtractor={keyExtractor}
					renderItem={renderSelectItem}
					testID={testID ? `${testID}-modal` : undefined}
				/>
			</Modal>
		);
	},
);

const OptionItem = React.memo(
	({
		label,
		selected = false,
		...props
	}: PressableProps & {
		selected?: boolean;
		label: string;
	}) => {
		const {
			theme: { colors },
		} = useTheme();

		return (
			<Pressable
				{...props}
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					borderBottomWidth: 1,
					borderColor: colors.neutral300,
					backgroundColor: colors.white,
					paddingHorizontal: 16,
					paddingVertical: 10,
				}}
			>
				<Text style={{ flex: 1, fontWeight: selected ? 'bold' : '400' }}>{label}</Text>
				{selected && <Check />}
			</Pressable>
		);
	},
);

export interface SelectProps {
	value?: string | number;
	label?: string;
	disabled?: boolean;
	error?: string;
	options?: Option[];
	onSelect?: (value: string | number) => void;
	placeholder?: string;
	testID?: string;
}

interface ControlledSelectProps<T extends FieldValues>
	extends SelectProps,
		InputControllerType<T> {}

export const Select = (props: SelectProps) => {
	const {
		label,
		value,
		error,
		options = [],
		placeholder = 'Select...',
		disabled = false,
		onSelect,
		testID,
	} = props;

	const {
		theme: { colors },
	} = useTheme();

	const modal = useModal();

	const onSelectOption = React.useCallback(
		(option: Option) => {
			onSelect?.(option.value);
			modal.dismiss();
		},
		[modal, onSelect],
	);

	const textValue = React.useMemo(
		() =>
			value !== undefined
				? options?.filter(t => t.value === value)?.[0]?.label ?? placeholder
				: placeholder,
		[value, options, placeholder],
	);

	return (
		<>
			<Box mb={4}>
				{label && (
					<Text body2 testID={testID ? `${testID}-label` : undefined}>
						{label}
					</Text>
				)}
				<TouchableOpacity
					disabled={disabled}
					onPress={modal.present}
					testID={testID ? `${testID}-trigger` : undefined}
					style={{
						borderColor: colors.neutral200,
						borderWidth: 1,
						borderRadius: 8,
						paddingHorizontal: 12,
						paddingVertical: 12,
						flexDirection: 'row',
						marginTop: 6,
					}}
				>
					<Box flex={1}>
						<Text body2>{textValue}</Text>
					</Box>
					<CaretDown />
				</TouchableOpacity>
				{error && (
					<Text
						body2
						style={{
							color: colors.error,
						}}
						testID={`${testID}-error`}
					>
						{error}
					</Text>
				)}
			</Box>
			<Options
				testID={testID}
				ref={modal.ref}
				options={options}
				onSelect={onSelectOption}
				value={value}
			/>
		</>
	);
};

export function ControlledSelect<T extends FieldValues>(props: ControlledSelectProps<T>) {
	const { name, control, rules, onSelect: onNSelect, ...selectProps } = props;

	const { field, fieldState } = useController({ control, name, rules: rules as any });

	const onSelect = React.useCallback(
		(value: string | number) => {
			field.onChange(value);
			onNSelect?.(value);
		},
		[field, onNSelect],
	);

	return (
		<Select
			onSelect={onSelect}
			value={field.value}
			error={fieldState.error?.message}
			{...selectProps}
		/>
	);
}

const Check = ({ ...props }: SvgProps) => {
	const {
		theme: { colors },
	} = useTheme();

	return (
		<Svg width={25} height={24} fill="none" viewBox="0 0 25 24" {...props}>
			<Path
				d="m20.256 6.75-10.5 10.5L4.506 12"
				stroke={colors.primary}
				strokeWidth={2.438}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};

const CaretDown = ({ ...props }: SvgProps) => {
	const {
		theme: { colors },
	} = useTheme();

	return (
		<Svg width={12} height={13} fill="none" {...props}>
			<Path
				stroke={colors.neutral800}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="M9.75 4.744 6 8.494l-3.75-3.75"
			/>
		</Svg>
	);
};
