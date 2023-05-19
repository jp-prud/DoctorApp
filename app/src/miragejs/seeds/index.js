/*
 * Mirage JS guide on Seeds: https://miragejs.com/docs/data-layer/factories#in-development
 */

export const doctorsSeeder = (server) => {
  server.createList('doctor', 10);
};

export default function seeds(server) {
  doctorsSeeder(server);
}
