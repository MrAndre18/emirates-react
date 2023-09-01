export const getCategoriesArray = (categories, currentCategory) => {
  const result = []

  categories.forEach(element => {
    if (element.parent === currentCategory) {
      result.push(element)
    }
  })

  return result
}