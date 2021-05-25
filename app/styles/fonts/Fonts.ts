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
    fontFamily: 'iCielGalanoGrotesque-Light',
  },
  [FontWeight.Regular]: {
    fontFamily: 'iCielGalanoGrotesque-Regular',
  },
  [FontWeight.Medium]: {
    fontFamily: 'iCielGalanoGrotesque-Medium',
  },
  [FontWeight.SemiBold]: {
    fontFamily: 'iCielGalanoGrotesque-SemiBold',
  },
  [FontWeight.Bold]: {
    fontFamily: 'iCielGalanoGrotesque-Bold',
  },
};

enum FontFamily {
  normal = 'iCiel Galano Grotesque',
}

export { FontSize, FontWeight, AndroidFontFamily, FontFamily };
