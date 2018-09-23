import data from '../../data';
import * as tools from '../../tools';

const ads = () => {
  const adsList = [];
  for (const ad of data.ads) {
    adsList.push(tools.dropBeforeColon(tools.camelCase(ad)));
  }
  return adsList;
};

export default ads;
