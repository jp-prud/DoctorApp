export class routes {
  constructor() {
    this.namespace = 'api';

    /*
     * A resource comprises all operations for a CRUD
     * operation. .get(), .post(), .put() and delete().
     * Mirage JS guide on Resource: https://miragejs.com/docs/route-handlers/shorthands#resource-helper
     */
    this.resource('doctors');
    this.resource('products');

    /*
     * From your component use fetch('api/messages?userId=<a user id>')
     * replacing <a user id> with a real ID
     */
    this.get('messages', (schema, request) => {
      const {
        queryParams: { userId },
      } = request;

      return schema.messages.where({ userId });
    });
  }
}
