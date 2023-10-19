---
sidebar_position: 4
---

#  Deploy a Ethereum Smart Contract that implements CCIPReceiver.sol interface and forwards information to cartesi Echo dApp

Pre-requisites:

* Sepolia InputBox = 0x59b22D57D4f067708AB0c00552767405926dc768
* Sepolia Relayer = 0xCB20b0Ea108e53777dcc52F1C79aaF268eEeA9Af
* Avax Sender = 0xCcB0F7F1DCdcD69d9D48094E3114cb3155F67eb8
* Wss for validator=wss://sepolia.infura.io/ws/v3/417f9a026f74429d99b34ab38a96b676
* Rpc = https://sepolia.infura.io/v3/417f9a026f74429d99b34ab38a96b676



We get an error that might appaer because we don’t have enough balance in Avax sender, or in Sepolia relayer. To solve this, we add funds with avax sender (.1 avax) and send the transaction paid with the native coin, not LINK.
