enum FontSize {
  StartTitle = 38,
  BigTitle = 32,
  Header = 24,
  Title = 20,
  Regular = 16,
  Button = 17,
  Small = 15,
  Smaller = 14,
  Smallest = 12,
}

enum FontWeight {
  ExtraBold = '800',
  SemiBold = '600',
  Bold = 'bold',
  Medium = '500',
  Regular = 'normal',
  Light = '300',
}

export function getSuperScriptFontSize(fontSize: number) {
  return Math.floor(fontSize * 0.6);
}

export function getSuperScriptLineHeight(fontSize: number) {
  return fontSize * 1.1;
}

const AndroidFontFamily: {
  [key in FontWeight]?: {
    fontFamily?: string;
    fontWeight?:
      | 'normal'
      | 'bold'
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900';
  };
} = {
  [FontWeight.Light]: {
    fontFamily: 'GoogleSans-Light',
  },
  [FontWeight.Regular]: {
    fontFamily: 'GoogleSans-Regular',
  },
  [FontWeight.Medium]: {
    fontFamily: 'GoogleSans-Medium',
  },
  [FontWeight.Bold]: {
    fontFamily: 'GoogleSans-Bold',
  },
};

enum FontFamily {
  normal = 'GoogleSans-Regular',
}

export { FontSize, FontWeight, AndroidFontFamily, FontFamily };
