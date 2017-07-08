import { GlacierVault } from './glacierVault';
import { Vault } from './vault';

const VAULTS: Vault[] = [
    {
        creationDate: '',
        lastInventoryDate: '',
        numberOfArchives: 1,
        sizeInBytes: 5,
        vaultARN: 'testarn',
        vaultName: 'TestVault'
    },
    {
        creationDate: '',
        lastInventoryDate: '',
        numberOfArchives: 2,
        sizeInBytes: 6,
        vaultARN: 'testarn2',
        vaultName: 'TestVault2'
    }
]

export const GLACIERVAULT: GlacierVault = 
{
    marker: '',
    vaultList: VAULTS
};
