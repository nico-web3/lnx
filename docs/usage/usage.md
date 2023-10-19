---
sidebar_position: 1
---

# Get started


1. Run a validator node

```shell
export WSS_URL=wss://sepolia.infura.io/ws/v3/417f9a026f74429d99b34ab38a96b676
```

Cartesi Server Manager must be built specifying the network used:

```shell
docker buildx bake server --load --set “*.args.NETWORK=sepolia”
```


2. Export the RPC URL

```shell
export RPC_URL=https://sepolia.infura.io/v3/417f9a026f74429d99b34ab38a96b676
```

```shell
export mnemonic=””
```

3. Run the node

```shell
DAPP_NAME=echo-dlinn docker compose --env-file ../env.sepolia -f ../docker-compose-testnet.yml -f ./docker-compose.override.yml up
```

4. Send an input from the frontend console

```shell
yarn start input send --payload "test 1946" --rpc https://sepolia.infura.io/v3/417f9a026f74429d99b34ab38a96b676 --dapp echo-dlinn
```

5. Call Inputbox

Add input from Remix IDE

6. Deploy a new relayer with the same call

7. Send cross chain messages to the new relayer
