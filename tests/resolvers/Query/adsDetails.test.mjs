import '../../adapter';
import axios from 'axios';
import { adsDetailsCompiled } from '../../compiledData';
import adsDetails from '../../../src/resolvers/Query/adsDetails';

describe('ads Query', () => {
  it('should compile the data', () => {
    const list = adsDetails();
    expect(list).toMatchObject(adsDetailsCompiled);
  });

  // it('should execute the ads Query', async () => {
  //   const response = await axios.post('http://localhost:4000', {
  //     query: `
  //     query {
  //       ads {
  //         name
  //       }
  //     }
  //     `,
  //   });
  //   expect(1).toEqual(1);

  //   // expect(response.data).toMatchObject({
  //   //   data: {
  //   //     ads: [
  //   //       {
  //   //         name: '123',
  //   //       },
  //   //       {
  //   //         name: '456',
  //   //       },
  //   //       {
  //   //         name: '789',
  //   //       },
  //   //       {
  //   //         name: '901',
  //   //       },
  //   //     ],
  //   //   },
  //   // });
  // });
});
