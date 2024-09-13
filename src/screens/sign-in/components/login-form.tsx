import { Box } from '@/components';
import { ControlledInput } from '@/components/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, makeStyles, Text } from '@rneui/themed';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as z from 'zod';

const schema = z.object({
	name: z.string().optional(),
	email: z
		.string({
			required_error: 'Email is required',
		})
		.email('Invalid email format'),
	password: z
		.string({
			required_error: 'Password is required',
		})
		.min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
	onSubmit?: SubmitHandler<FormType>;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit = () => {} }) => {
	const { handleSubmit, control } = useForm<FormType>({
		resolver: zodResolver(schema),
	});

	const styles = useStyles();

	return (
		<KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={16}>
			<View style={styles.content}>
				<Text testID="form-title" style={styles.title}>
					Sign In
				</Text>
				<ControlledInput testID="name" control={control} name="name" label="Name" />
				<ControlledInput testID="email-input" control={control} name="email" label="Email" />
				<ControlledInput
					testID="password-input"
					control={control}
					name="password"
					label="Password"
					placeholder="***"
					secureTextEntry={true}
				/>
				<Box height={24} />
				<Button testID="login-button" title="Login" onPress={handleSubmit(onSubmit)} />
			</View>
		</KeyboardAvoidingView>
	);
};

const useStyles = makeStyles(theme => ({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		padding: 16,
	},
	title: {
		paddingBottom: 24,
		textAlign: 'center',
	},
}));
