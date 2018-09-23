import './adapter';
import Config from '../src/config';

describe('the config class', () => {
  // it('should only create singleton', () => {
  //   const first = new Config();
  //   const second = new Config();
  //   expect(first).toEqual(second);
  // });

  it('should set this.test to true', () => {
    const config = new Config('test');
    expect(config.test).toEqual(true);
  });

  it('should set this.development to true', () => {
    const config = new Config('development');
    expect(config.development).toEqual(true);
  });

  it('should set this.production to true', () => {
    const config = new Config('production');
    expect(config.production).toEqual(true);
  });
});
