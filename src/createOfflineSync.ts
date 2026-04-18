import { Queue } from './queue.js'

const queue = new Queue()
let initialized = false

export function createOfflineSync() {
  if (!initialized) {
    initialized = true
    window.addEventListener('online', () => {
      queue.process()
    })
  }

  return {
    queue,
  }
}