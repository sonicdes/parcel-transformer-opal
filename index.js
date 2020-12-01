import {Transformer} from '@parcel/plugin';
import {relativeUrl} from '@parcel/utils';

export default (new Transformer({
  async transform({asset, options}) {
    asset.type = 'js';
    const Builder = require('opal-compiler').Builder
    builder = Builder.create()
    output = builder.build(asset.getCode()).toString()

    asset.setCode(output);
    return [asset];
  },
}): Transformer);

