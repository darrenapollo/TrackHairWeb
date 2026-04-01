import './index.scss';

import { default as Tobi } from '@midzer/tobii';

window.addEventListener('load', () => {
  new Tobi('.lightbox');
});
