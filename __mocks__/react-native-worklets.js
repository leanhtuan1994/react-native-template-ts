module.exports = {
  __esModule: true,
  scheduleOnRN: jest.fn((fn) => fn),
  scheduleOnJS: jest.fn((fn) => fn),
  createWorklet: jest.fn((fn) => fn),
  runOnUI: jest.fn((fn) => fn()),
  runOnJS: jest.fn((fn) => fn()),
  useSharedValue: jest.fn((value) => ({ value })),
};
