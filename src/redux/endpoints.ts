const prefix = 'http://localhost:5000/v1'

export default {
  prefix,
  global: {
    get: () => prefix + '/',
  },
  tasks: {
    getAll: prefix + '/task/',
    create: prefix + '/task/',
    editById: (id: string) => `${prefix}/task/${id}`,
    deleteById: (id: string) => `${prefix}/task/${id}`,
  },
}
