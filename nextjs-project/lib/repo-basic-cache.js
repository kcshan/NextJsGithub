import LRU from 'lru-cache'

const REPO_CACHE = new LRU({
  maxAge: 1000 * 60 * 60
})

// facebook/react
export const get = full_name => {
    return REPO_CACHE.get(full_name)
}

export const cache = repo => {
  const full_name = repo.full_name
  return REPO_CACHE.set(full_name, repo)
}

export const cacheArray = repos => {
  // debugger
  repos.forEach(repo => cache(repo))
}