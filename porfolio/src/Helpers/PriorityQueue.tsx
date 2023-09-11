export class PriorityQueue<T> {
  private _items: { value: T; priority: number }[] = [];

  enqueue(value: T, priority: number) {
    this._items.push({ value, priority });
    this._items.sort((a, b) => a.priority - b.priority);
  }

  dequeue(): T | undefined {
    const item = this._items.shift();
    return item?.value;
  }

  isEmpty(): boolean {
    return !this._items.length;
  }
}
