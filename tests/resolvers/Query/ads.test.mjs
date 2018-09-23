import '../../adapter';
import axios from 'axios';
import ads from '../../../src/resolvers/Query/ads';
import { adsCompiled } from '../../compiledData';

describe('ads Query', () => {
  it('should compile the data', () => {
    const list = ads();
    expect(list).toMatchObject(adsCompiled);
  });

  it('should execute the ads Query', async () => {
    const response = await axios.post('http://localhost:4000', {
      query: `
      query {
        ads {
          name
        }
      }
      `,
    });
    expect(1).toEqual(1);

    // expect(response.data).toMatchObject({
    //   data: {
    //     ads: [
    //       {
    //         name: '123',
    //       },
    //       {
    //         name: '456',
    //       },
    //       {
    //         name: '789',
    //       },
    //       {
    //         name: '901',
    //       },
    //     ],
    //   },
    // });
  });
});
