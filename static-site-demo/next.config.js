module.exports = {
  exportPathMap: async (defaultMap) => {
    return {
      ...defaultMap,
      '/repos/2': { page: '/repos', query: { page: 2 } },
      '/repos/3': { page: '/repos', query: { page: 3 } },
    }
  }
}