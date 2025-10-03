import { refs } from './refs.js';
import { IS_OPEN } from './constants.js';

export function openModal() {
  refs.body.style.overflow = 'hidden';
  refs.modal.classList.add(IS_OPEN);
  document.addEventListener("keydown", handleEscape);
}

export function closeModal() {
  refs.body.style.overflow = '';
  refs.modal.classList.remove(IS_OPEN);
  document.removeEventListener("keydown", handleEscape);
}

function handleEscape(e) {
  if (e.key === "Escape") {
    closeModal();
  }
}