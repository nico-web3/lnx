---
sidebar_position: 3
---

# Building with LNX


1. Run a validator node.

For example, for Sepolia:

```shell
export WSS_URL=wss://sepolia.infura.io/ws/v3/<<YOUR-KEY>>
```

Cartesi Server Manager must be built specifying the network used:

```shell
docker buildx bake server --load --set “*.args.NETWORK=sepolia”
```


2. Export the RPC URL.

For example, for Sepolia:


```shell
export RPC_URL=https://sepolia.infura.io/v3/<<YOUR-KEY>>
```

```shell
export mnemonic=””
```

3. Run the node.

For example, for Sepolia:


```shell
DAPP_NAME=echo-dlinn docker compose --env-file ../env.sepolia -f ../docker-compose-testnet.yml -f ./docker-compose.override.yml up
```

4. Send an input from the frontend console:

```shell
yarn start input send --payload "test 1946" --rpc https://sepolia.infura.io/v3/<<YOUR-KEY>> --dapp echo-dlinn
```
