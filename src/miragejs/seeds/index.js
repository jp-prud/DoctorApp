/*
 * Mirage JS guide on Seeds: https://miragejs.com/docs/data-layer/factories#in-development
 */

export const medicsSeeder = (server) => {
  server.createList('medic', 10);
};

export default function seeds(server) {
  medicsSeeder(server);
}
