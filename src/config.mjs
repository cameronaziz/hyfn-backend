const { NODE_ENV } = process.env;
let instance;

const setEnv = (inst, env) => {
  if (env === 'production') { inst._production = true; }
  if (env === 'development') { inst._development = true; }
  if (env === 'test') { inst._test = true; }
}

class Config {
  constructor(env) {
    const environment = env || NODE_ENV;
    if (instance) {
      setEnv(instance, environment)
      return instance;
    }
    this._production = false;
    this._test = false;
    this._development = false;
    setEnv(this, environment)
    instance = this;
  }

  get production() {
    return this._production;
  }

  get test() {
    return this._test;
  }

  get development() {
    return this._development;
  }
}

export default Config;
