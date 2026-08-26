import { addBadge } from 'app-icon-badge';

const mockWriteAsync = jest.fn();

jest.mock('jimp', () => ({
  __esModule: true,
  default: {
    read: jest.fn(async () => ({ writeAsync: mockWriteAsync })),
  },
}));

describe('app-icon-badge write completion', () => {
  it('does not resolve until the generated icon has finished writing', async () => {
    let markWriteStarted = () => {};
    let finishWrite = () => {};
    const writeStarted = new Promise<void>((resolve) => {
      markWriteStarted = resolve;
    });
    const writeFinished = new Promise<void>((resolve) => {
      finishWrite = resolve;
    });

    mockWriteAsync.mockImplementation(async () => {
      markWriteStarted();
      await writeFinished;
    });

    let badgeResolved = false;
    const badgePromise = addBadge({
      icon: 'assets/icon.png',
      dstPath: '.expo/app-icon-badge/test-icon.png',
      badges: [],
    }).then((result) => {
      badgeResolved = true;
      return result;
    });

    await writeStarted;
    await Promise.resolve();
    expect(badgeResolved).toBe(false);

    finishWrite();
    await expect(badgePromise).resolves.toBe(
      '.expo/app-icon-badge/test-icon.png'
    );
    mockWriteAsync.mockReset();
  });
});
