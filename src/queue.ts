type QueueItem = {
  id: string
  fn: () => Promise<any>
  retries: number
}

export class Queue {
  private items: QueueItem[] = []

  add(item: QueueItem) {
    this.items.push(item)
  }

  async process() {
    if (!navigator.onLine) return

    while (this.items.length) {
      const item = this.items[0]
      if (!item) break

      try {
        await item.fn()
        this.items.shift()
      } catch {
        item.retries++
        break
      }
    }
  }
}