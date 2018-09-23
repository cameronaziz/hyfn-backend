import '../adapter';
import camelCase from '../../src/tools/camelCase';

describe('camelCase tool', () => {
  const originalObj = {
    test_prop: 'test_value',
    test_nested: {
      nested_prop: 'test_value',
    },
    testNest: {
      nested_prop: 'test_value',
    },
  };

  const changedObj = {
    testProp: 'test_value',
    testNested: {
      nestedProp: 'test_value',
    },
    testNest: {
      nestedProp: 'test_value',
    },
  };

  it('should should convert to camelcase', () => {
    expect(camelCase(originalObj)).toMatchObject(changedObj);
  });

  it('should return parameter if not an object', () => {
    const originalArr = [1, 2, { nestedProp: 'value' }];
    const changedArr = [1, 2, { nestedProp: 'value' }];
    expect(camelCase(originalArr)).toMatchObject(changedArr);
  });
});
