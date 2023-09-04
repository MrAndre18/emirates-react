import { tabs } from "./navigation";

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

export const getPreviousCategory = (categories, location) => {
  const
    result = {
      name: '',
      path: ''
    },
    previousCategory = location.pathname.split('/').filter(el => el !== '').slice(-2)[0]

  categories.forEach(element => {
    const prevCategoryPath = element.path.split('/').filter(el => el !== '').slice(-1)[0]

    if (previousCategory === prevCategoryPath) {
      result.name = element.name
      result.path = element.path
    }
  })

  tabs.forEach(element => {
    const prevCategoryPath = element.path.split('/').filter(el => el !== '').slice(-1)[0]

    if (previousCategory === prevCategoryPath) {
      result.name = 'Назад'
      result.path = '/info/' + element.path
    }
  })

  return result
}