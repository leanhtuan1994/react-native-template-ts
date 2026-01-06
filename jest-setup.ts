import '@testing-library/react-native/extend-expect';

// react-hook form setup for testing
// @ts-ignore
global.window = {};
// @ts-ignore
global.window = global;

// Mock @gorhom/bottom-sheet
jest.mock('@gorhom/bottom-sheet', () => {
  const React = require('react');
  const RN = require('react-native');

  class BottomSheetModalMock extends React.Component {
    present = jest.fn();
    dismiss = jest.fn();
    close = jest.fn();
    snapToIndex = jest.fn();
    snapToPosition = jest.fn();
    expand = jest.fn();
    collapse = jest.fn();

    render() {
      return React.createElement(
        RN.View,
        {
          testID: this.props.testID,
          style: { flex: 1 },
        },
        this.props.children
      );
    }
  }

  return {
    __esModule: true,
    BottomSheetModal: BottomSheetModalMock,
    BottomSheetModalProvider: ({ children }: any) => children,
    BottomSheetScrollView: RN.ScrollView,
    BottomSheetFlatList: RN.FlatList,
    BottomSheetView: RN.View,
    useBottomSheet: jest.fn(() => ({
      close: jest.fn(),
      expand: jest.fn(),
      collapse: jest.fn(),
      snapToIndex: jest.fn(),
    })),
    useBottomSheetScrollableCreator: jest.fn(() => RN.ScrollView),
  };
});
