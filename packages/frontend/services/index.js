import Arweave from 'arweave';
import TestWeave from 'testweave-sdk';
import Bundlr from '@bundlr-network/client';

export const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
});

export const testweaveInit = async () => {
  const arweaveLocal = Arweave.init({
    host: 'localhost',
    port: 1984,
    protocol: 'http',
    timeout: 20000,
    logging: false,
  });

  return await TestWeave.init(arweaveLocal).then(res => res)
}
