import { useMutation } from '@tanstack/react-query'
import { v4 as uuid } from 'uuid'
import { createOfflineSync } from './createOfflineSync.js'

const { queue } = createOfflineSync()

export function useOfflineMutation(options: any) {
  return useMutation({
    ...options,
    mutationFn: async (variables: any) => {
      if (!navigator.onLine) {
        queue.add({
          id: uuid(),
          fn: () => options.mutationFn(variables),
          retries: 0,
        })
        return
      }

      return options.mutationFn(variables)
    },
  })
}