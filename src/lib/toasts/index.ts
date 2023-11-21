import "./styles.css";

export type ToastData = {
  type: "success" | "warning";
  text: string;
};

export function notify({ type, text }: ToastData) {
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.innerText = text;
  document.getElementById("toasts")?.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
