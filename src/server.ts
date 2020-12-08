import { ActiveModelSerializer, createServer, Factory, Model, Server } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  return createServer({
    environment,
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      movie: Model,
    },

    seeds(server: Server) {
      server.createList("movie", 3)
    },

    factories: {
      movie: Factory.extend({
        id(i: number) { return i + 1 },
        name(i: number) { return `movie ${i + 1}` },
      }),
    },

    routes() {
      this.namespace = "api"

      this.get("/movies")
      this.get("/movies/:id")
      this.put("/movies/:id", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        let records = schema.db.movies.where({ id: attrs.id });
        if (records.length > 0) {
          return schema.db.movies.update(attrs.id, attrs);
        }
      })
      this.post("/movies", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        attrs.id = Math.floor(Math.random() * 10000)
        this.create("movie", attrs)
        return { movie: attrs }
      })
      this.del("/movies/:id")
    },
  })
}
