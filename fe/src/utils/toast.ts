import { ToastProps } from "../components/Toast/ToastMessage/ToastMessage";
import { EventManager } from "../lib/EventManager";

export const toastEventManager = new EventManager();

export default function toast({
  message: { type = "default", text, duration },
}: ToastProps) {
  toastEventManager.emit("addtoast", { message: { type, text, duration } });
}
