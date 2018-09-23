import '../adapter';
import dropBeforeColon from '../../src/tools/dropBeforeColon';

describe('camelCase tool', () => {
  it('should response the GET method', () => {
    const originalObj = {
      'test:prop': 'test_value',
      'test:nested': {
        'nested:prop': 'test_value',
      },
      testNest: {
        'nested:prop': 'test_value',
      },
    };

    const changedObj = {
      prop: 'test_value',
      nested: {
        prop: 'test_value',
      },
      testNest: {
        prop: 'test_value',
      },
    };
    expect(dropBeforeColon(originalObj)).toMatchObject(changedObj);
  });
});
