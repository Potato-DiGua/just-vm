export class EventBus {
  private listeners: { [key: string]: Function[] } = {};

  // 监听事件
  on(event: string, listener: Function): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(listener);
  }

  // 触发事件
  emit(event: string, ...args: any[]): void {
    if (this.listeners[event]) {
      this.listeners[event].forEach((listener) => {
        listener(...args);
      });
    }
  }

  // 移除事件监听
  off(event: string, listener: Function): void {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(
        (l) => l !== listener
      );
    }
  }
}
