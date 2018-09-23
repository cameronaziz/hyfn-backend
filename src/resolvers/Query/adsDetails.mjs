import data from '../../data';
import * as tools from '../../tools';

const adsDetails = () => {
  const ads = [];
  for (const ad of data.ads) {
    const details = data.adDetails.find(element => element.remote_id === ad.remote_id);
    ads.push(tools.dropBeforeColon(tools.camelCase(Object.assign({}, ad, details))));
  }
  console.log(ads);
  return ads;
};

export default adsDetails;
