import { isAdmin } from '@/helpers/character';

export const adminDirective = (app) => {
  app.directive('only-admin', {
    mounted(el, { value = true }) {
      const res = isAdmin();

      if (!res && value) {
        el.style.display = 'none';
      }
    },
  });
};
