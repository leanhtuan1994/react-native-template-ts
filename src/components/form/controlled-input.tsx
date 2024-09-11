import {
	Input as RNEInput,
	InputProps as RNEInputProps,
	makeStyles,
	useTheme,
} from '@rneui/themed';
import { isNotEmpty, isNotNil } from 'ramda';
import { Control, FieldValues, Path, RegisterOptions, useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type TRule = Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;

export type RuleType<T> = { [name in keyof T]: TRule };

export type InputControllerType<T extends FieldValues> = {
	name: Path<T>;
	control: Control<T>;
	rules?: TRule;
};

interface ControlledInputProps<T extends FieldValues>
	extends RNEInputProps,
		InputControllerType<T> {}

function ControlledInput<T extends FieldValues>(props: ControlledInputProps<T>) {
	const {
		name,
		control,
		rules,
		inputContainerStyle,
		style,
		containerStyle,
		labelStyle,
		...inputProps
	} = props;

	const {
		theme: { colors },
	} = useTheme();

	const {
		field: { value, ref, onBlur, onChange },
		fieldState: { error },
	} = useController({ control, name, rules: rules as any });

	const styles = useStyles({ isError: isNotNil(error?.message) && isNotEmpty(error.message) });

	const { t } = useTranslation();

	return (
		<RNEInput
			ref={ref}
			onBlur={onBlur}
			onChangeText={onChange}
			value={(value as string) || ''}
			inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
			style={[styles.input, style]}
			containerStyle={[styles.containerStyle, containerStyle]}
			labelStyle={[styles.labelStyle, labelStyle]}
			placeholderTextColor={colors.neutral400}
			errorStyle={styles.error}
			{...inputProps}
			errorMessage={t(`${error?.message}`, { defaultValue: error?.message || '' })}
		/>
	);
}

const useStyles = makeStyles(({ colors }, { isError = false }: { isError: boolean }) => ({
	inputContainer: {
		borderWidth: 1,
		borderColor: colors.neutral200,
		borderRadius: 8,
		paddingHorizontal: 16,
		paddingVertical: 2,
		padding: 0,
	},
	containerStyle: {
		paddingHorizontal: 0,
	},
	input: {
		color: colors.neutral800,
		fontSize: 16,
	},
	labelStyle: {
		fontSize: 16,
		color: colors.neutral800,
		marginBottom: 6,
		fontWeight: 'normal',
		marginTop: isError ? 6 : 12,
	},
	error: {
		display: isError ? 'flex' : 'none',
	},
}));

export { ControlledInput, RNEInput as Input };
