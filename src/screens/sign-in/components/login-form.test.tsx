import React from 'react';

import { cleanup, fireEvent, render, screen, waitFor } from '@/core/test-utils';

import type { LoginFormProps } from './login-form';
import { LoginForm } from './login-form';

afterEach(cleanup);

const onSubmitMock: jest.Mock<LoginFormProps['onSubmit']> = jest.fn();

describe('LoginForm Form', () => {
	it('should render correctly', async () => {
		render(<LoginForm />);

		expect(await screen.findByText(/Sign In/i)).toBeOnTheScreen();
	});

	it('should display required error when values are empty', async () => {
		render(<LoginForm />);

		const button = await screen.findByTestId('login-button');
		expect(screen.queryByText(/Email us required/i)).not.toBeOnTheScreen();
		fireEvent.press(button);

		expect(await screen.findByText(/Email is required/i)).toBeOnTheScreen();
		expect(screen.getByText(/Password is required/i)).toBeOnTheScreen();
	});

	it('should display matching error when email is invalid', async () => {
		render(<LoginForm />);

		const button = screen.getByTestId('login-button');
		const emailInput = screen.getByTestId('email-input');
		const passwordInput = screen.getByTestId('password-input');

		fireEvent.changeText(emailInput, 'yyyyy');
		fireEvent.changeText(passwordInput, 'test');
		fireEvent.press(button);

		expect(screen.queryByText(/Email is required/i)).not.toBeOnTheScreen();
		expect(await screen.findByText(/Invalid Email Format/i)).toBeOnTheScreen();
	});

	it('should call LoginForm with correct values when values are valid', async () => {
		render(<LoginForm onSubmit={onSubmitMock} />);

		const button = screen.getByTestId('login-button');
		const emailInput = screen.getByTestId('email-input');
		const passwordInput = screen.getByTestId('password-input');

		fireEvent.changeText(emailInput, 'youseft@gmail.com');
		fireEvent.changeText(passwordInput, 'password');
		fireEvent.press(button);

		await waitFor(() => {
			expect(onSubmitMock).toHaveBeenCalledTimes(1);
		});

		expect(onSubmitMock).toHaveBeenCalledWith(
			{
				email: 'youseft@gmail.com',
				password: 'password',
			},
			undefined,
		);
	});
});
