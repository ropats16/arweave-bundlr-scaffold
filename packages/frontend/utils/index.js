import Arweave from 'arweave';
import Bundlr from '@bundlr-network/client'

export const arweaveInit = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https'
});
