export const pages = [
  {
    path: '/about',
    name: 'О портале'
  },
  {
    path: '/info/laws',
    name: 'Законы'
  },
  {
    path: '/info/FAQ',
    name: 'FAQ / INFO о бизнесе'
  },
]

export const tabs = [
  {
    path: 'laws',
    name: 'Законы',
  },
  {
    path: 'documents',
    name: 'Формы документов'
  },
  {
    path: 'state',
    name: 'Государство'
  },
  {
    path: 'FAQ',
    name: 'FAQ'
  },
]

export const usefulLinks = [
  {
    path: '/info/FAQ',
    name: 'Виды лицензий'
  },
  {
    path: '/info/FAQ',
    name: 'Виды компаний'
  },
  {
    path: '/info/state',
    name: 'Государственное и политическое устройство'
  },
  {
    path: '/info/FAQ',
    name: 'Оншорные компании'
  },
  {
    path: '/info/FAQ',
    name: 'Оффшорные компании'
  },
  {
    path: '/info/state',
    name: 'Свободные экономические зоны'
  },
]

export const lawsCategories = [
  {
    path: 'real_estate',
    name: 'Недвижимость',
    children: [
      {
        path: 'real_estate/rent',
        name: 'Аренда',
        children: [
          {
            path: 'real_estate/rent/landlord_rights',
            name: 'Права арендодателя',
          },
          {
            path: 'real_estate/rent/tenant_rights',
            name: 'Права арендатора',
          },
        ]
      },
      {
        path: 'real_estate/purchase',
        name: 'Покупка',
      },
      {
        path: 'real_estate/sale',
        name: 'Продажа',
      },
    ]
  },
  {
    path: 'family_law',
    name: 'Семейное право'
  },
  {
    path: 'labor_law',
    name: 'Трудовое право'
  },
]