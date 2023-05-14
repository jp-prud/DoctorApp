/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */

import medic from './medic';
import message from './message';

/*
 * factories are contained in a single object, that's why we
 * destructure what's coming from users and the same should
 * be done for all future factories
 */
export default {
  ...medic,
  ...message,
};
