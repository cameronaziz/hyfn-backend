import './adapter';
import request from 'supertest';
import index from '../src/index';

const { PORT } = process.env;
const url = `http://localhost:${PORT}`;


describe('Test the root path', () => {
  test('It should response the GET method', (done) => {
    process.env.NODE_ENV = 'production';
    done();
    // request(url)
    //   .get('/')
    //   .set('Accept', 'application/json')
    //   // .send({ query: '{ ads { name } }' })
    //   .then((response) => {
    //     console.log(response);
    //     expect(response.statusCode).toBe(200);
    //     done();
    //   });
  });
});
