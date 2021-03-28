export const includesCategories = (state, categories) => {
    let index
    let filteredObjects = []
    for (let i = 0; i<state.length; i++) {
      let isMatching = true
      let copy = [...state[i].id]
      for (let j = 0; j<categories.length; j++) {
        isMatching &= copy.includes(categories[j])
        index = copy.indexOf(categories[j])
        copy.splice(index, 1);
      }
      if (isMatching === 1) filteredObjects.push(state[i])
    }
    return filteredObjects
  }