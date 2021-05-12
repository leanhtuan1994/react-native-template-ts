import { registerScreen } from 'navigation/utils';
import React from 'react';
import { View } from 'react-native';
import { GlobalStyles } from 'styles';

const PortfolioName = 'Portfolio';

export type PortfolioParam = {
  [PortfolioName]: Record<string, unknown>;
};

const Portfolio = () => {
  return <View style={GlobalStyles.container()} />;
};

export default registerScreen<PortfolioParam, 'Portfolio'>(
  'Portfolio',
  Portfolio,
);
