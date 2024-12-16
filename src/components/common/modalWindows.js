import { toast } from 'react-toastify'

export function commonWindowsTrue(text) {
  toast.success(`${text}!`, {
    autoClose: 2000,
    position: 'top-center',
    closeButton: true,
  })
}
export function commonWindowsFalse(text) {
  toast.error(`${text}!`, {
    autoClose: 3000,
    position: 'top-center',
    closeButton: true,
  })
}

export function reload() {
  document.location.reload()
}
