import { Factory, Model, Server } from 'miragejs';

// import factories from './factories';
// import { routes } from './routes';
// import models from './models';
// import seeds from './seeds';
import { faker } from '@faker-js/faker';

export function makeServer({ environment = 'development' } = {}) {
  let server = new Server({
    environment,

    models: {
      medic: Model,
    },

    factories: {
      medic: Factory.extend({
        name() {
          return faker.name.fullName();
        },
        description() {
          return faker.lorem.sentence(5);
        },
        specification() {
          return faker.random.word();
        },
        avatarUrl(i) {
          let c = i % 2 ? 'men' : 'women';
          return `https://randomuser.me/api/portraits/${c}/${i}.jpg`;
        },
      }),
    },

    seeds(server) {
      server.createList('medic', 10);
    },

    routes() {
      this.get('/api/medics', (schema) => {
        return schema.medics.all();
      });
    },
  });

  return server;
}
