require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remind purity hunt sleep frame table'; 
let testAccounts = [
"0xc34022b29a2e584e99eaf6a439aa54546e86cff0160965a142a591858b9927a7",
"0xf545f24b91a14d4146991156170a01196aa1a7ed1a287368f7c38c29691dc111",
"0x9af413a32fc705270b05acd2372be5263fc75c0d7d74f23361d1e2692c1d72ba",
"0x4a1aa65792e9dace1c746201df651aece7e9c8c4003211ce5a39fed761322da9",
"0xb448a2c3da6eb6cd7f5bd0f09f56c63461692786a4d6ce855fa71435d62ad570",
"0x291643c1ce8bbb908ce3cf8cde220a637aa097926688fad037f4bbf50262431d",
"0x6f120c0945f9db424b93575263776a48a98f921600287757fdd344f279747466",
"0x18a9a7863927b6cc3f0bb00b527d9d283ec972fc2aca34d7fc2f7585c967b170",
"0x194d4676b195e77e1633cd84b3650702fc8a87be2056a4cfef9c41084e84e829",
"0xb1a6641bd858968802c6eb5a4bd6eea01fff36e40ac74e25ed3d5076f044c208"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

