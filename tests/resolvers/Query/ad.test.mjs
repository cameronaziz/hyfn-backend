import '../../adapter';
import axios from 'axios';
import ad from '../../../src/resolvers/Query/ad';

describe('ads Query', () => {
  it('should compile the data', () => {
    const foundAd = ad(null, { id: '1' });
    const dummyAd = {
      id: 1, name: '123', status: 'INACTIVE', remoteId: '123',
    };
    expect(foundAd).toMatchObject(dummyAd);
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
