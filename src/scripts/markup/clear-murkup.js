import { refs } from '../refs';

export function clearMurkup() {
  refs.container.innerHTML = '';
  refs.container.dataset.ids = '';
}
