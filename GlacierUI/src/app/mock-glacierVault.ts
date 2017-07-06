import { GlacierVault } from './glacierVault';
import { Vault } from './vault';

export const GLACIERVAULT: GlacierVault = 
{
    marker: '',
    listVaults: Vault[] = [
        {
            creationDate: '',
            lastInventoryDate: '',
            numberOfArchives: 1,
            sizeInBytes: 0,
            vaultARN: 'test arn',
            vaultName: 'TestVault'
        }]
};


import { Hero } from './hero';

export const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];