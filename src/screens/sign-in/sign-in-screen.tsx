import React from 'react';

import { ContentWrapper, ScreenWrapper } from '@/components';
import { LoginForm } from './components/login-form';

const Startup: React.FC = () => {
	return (
		<ScreenWrapper>
			<ContentWrapper>
				<LoginForm />
			</ContentWrapper>
		</ScreenWrapper>
	);
};

export default Startup;
