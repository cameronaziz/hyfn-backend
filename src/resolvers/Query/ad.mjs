import data from '../../data';
import * as tools from '../../tools';

const ad = (root, args) => {
  const currentAd = data.ads.find(element => element.id.toString() === args.id);
  const details = data.adDetails.find(element => element.remote_id === currentAd.remote_id);
  return tools.dropBeforeColon(tools.camelCase(Object.assign({}, currentAd, details)));
};

export default ad;
