import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json' assert { type: 'json' };
import { INTERFACE_IDS } from '@lukso/lsp-smart-contracts/dist/constants.cjs.js';
import Web3 from 'web3';

// Connect to the LUKSO L14 network
const web3 = new Web3('https://rpc.testnet.lukso.network');

// Create an instance of the Universal Profile
const myUPContract = new web3.eth.Contract(
  UniversalProfile.abi,
  '0x9139def55c73c12bcda9c44f12326686e3948634',
);

const LSP0_INTERFACE_ID = INTERFACE_IDS.LSP0ERC725Account;

/*
Supported interfaces from lsp-smart-contracts library:

INTERFACE_IDS.ERC165                        INTERFACE_IDS.ERC20
INTERFACE_IDS.ERC223                        INTERFACE_IDS.ERC721
INTERFACE_IDS.ERC721Metadata                INTERFACE_IDS.ERC725X
INTERFACE_IDS.ERC725Y                       INTERFACE_IDS.ERC777
INTERFACE_IDS.ERC1155         

INTERFACE_IDS.LSP0ERC725Account             INTERFACE_IDS.LSP1UniversalReceiver
INTERFACE_IDS.LSP6KeyManager                INTERFACE_IDS.LSP7DigitalAsset
INTERFACE_IDS.LSP8IdentifiableDigitalAsset  INTERFACE_IDS.LSP9Vault
INTERFACE_IDS.LSP11BasicSocialRecovery      INTERFACE_IDS.LSP14Ownable2Step
INTERFACE_IDS.LSP17Extendable               INTERFACE_IDS.LSP17Extension
INTERFACE_IDS.LSP20CallVerification         INTERFACE_IDS.LSP20CallVerifier
INTERFACE_IDS.LSP25ExecuteRelayCall 
*/

console.log(
  // true or false
  await myUPContract.methods.supportsInterface(LSP0_INTERFACE_ID).call(),
);