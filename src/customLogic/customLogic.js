export const includesCategories = (state, categories) => {
    let index
    let filteredObjects = []
    for (let i = 0; i<state.length; i++) {
      let isMatching = true
      let copy = [...state[i].genre_ids]
      for (let j = 0; j<categories.length; j++) {
        isMatching &= copy.includes(categories[j])
        index = copy.indexOf(categories[j])
        copy.splice(index, 1);
      }
      if (isMatching === 1) filteredObjects.push(state[i])
    }
    return filteredObjects
  }

export const modifyDates = state => {
  const r = state.results
  for (let i = 0; i < r.length; i++ ) {
    r[i].release_date = new Date(r[i].release_date)
  }
  return r
}

export const modifyCategories = state => {
  const generes = state.genres
  const r = state.results
  for (let i = 0; i < r.length; i++ ) {
    r[i].genre_ids = r[i].genre_ids.map(cate => generes.find(x => x.id === cate).name)
  }
  return r
}

export const deleteElement = (name, category) => {
  const index = category.indexOf(name);
  category.splice(index, 1);
  return category
}