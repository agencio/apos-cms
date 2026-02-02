module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Тарифы (Pricing)'
  },
  fields: {
    add: {
      sectionTitle: {
        type: 'string',
        label: 'app:sectionTitle',
        max: 200,
        def: 'Тарифные планы'
      },
      sectionSubtitle: {
        type: 'string',
        label: 'app:subtitle',
        max: 300,
        def: 'Выберите оптимальный план защиты для вашего проекта'
      },
      currency: {
        type: 'string',
        label: 'Валюта',
        max: 10,
        def: '₽'
      },
      period: {
        type: 'string',
        label: 'Период (напр. /мес)',
        max: 20,
        def: '/мес'
      },
      items: {
        type: 'array',
        label: 'Тарифные планы',
        titleField: 'title',
        fields: {
          add: {
            title: {
              type: 'string',
              label: 'Название тарифа',
              required: true
            },
            price: {
              type: 'string',
              label: 'Цена (текст, напр. "9 900" или "По запросу")',
              required: true
            },
            priceNumeric: {
              type: 'integer',
              label: 'Цена (число для JSON-LD, 0 если по запросу)',
              def: 0
            },
            description: {
              type: 'string',
              label: 'Краткое описание тарифа',
              max: 200
            },
            highlighted: {
              type: 'boolean',
              label: 'Выделенный план (рекомендуемый)',
              def: false
            },
            features: {
              type: 'array',
              label: 'Список возможностей',
              fields: {
                add: {
                  text: {
                    type: 'string',
                    label: 'Пункт'
                  }
                }
              }
            },
            ctaLabel: {
              type: 'string',
              label: 'Текст кнопки',
              def: 'Подключить'
            },
            ctaUrl: {
              type: 'string',
              label: 'URL кнопки',
              def: '/contacts'
            }
          }
        }
      }
    }
  }
};
