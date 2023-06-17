export class EventManager {
  listeners;

  constructor() {
    this.listeners = new Map();
  }

  on(event: string, listener: (payload?: any) => void) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(listener);
  }

  emit(event: string, payload?: any) {
    if (!this.listeners.has(event)) return;

    this.listeners.get(event).forEach((listener: (payload?: any) => void) => {
      listener(payload);
    });
  }

  removeListener(event: string, listenerToRemove: (payload?: any) => void) {
    const listeners = this.listeners.get(event);

    if (!listeners) return;

    const filteredListeners = listeners.filter(
      (listener?: () => void) => listener !== listenerToRemove
    );

    this.listeners.set(event, filteredListeners);
  }
}
