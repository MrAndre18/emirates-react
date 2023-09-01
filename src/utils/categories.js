export const getCategoriesArray = (categories, location) => {
  const
    result = [],
    currentCategory = location.pathname.split('/').filter(el => el !== '').slice(-1)[0]

  categories.forEach(element => {
    if (element.parent === currentCategory) {
      result.push(element)
    }
  })

  return result
}