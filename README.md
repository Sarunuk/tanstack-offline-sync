# tanstack-offline-sync

Offline mutation queue + retry for TanStack Query.

## Install

```bash
npm install tanstack-offline-sync
```

## Usage

```ts
createOfflineSync()

const mutation = useOfflineMutation({
  mutationFn: sendMessage,
})
```
