module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'app:servicesWidget'
  },
  fields: {
    add: {
      sectionTitle: {
        type: 'string',
        label: 'app:sectionTitle',
        max: 200
      },
      sectionSubtitle: {
        type: 'string',
        label: 'app:subtitle',
        max: 300
      },
      items: {
        type: 'array',
        label: 'Услуги',
        titleField: 'title',
        fields: {
          add: {
            icon: {
              type: 'string',
              label: 'Иконка (emoji)',
              max: 10
            },
            badge: {
              type: 'string',
              label: 'Бейдж',
              max: 20
            },
            title: {
              type: 'string',
              label: 'app:title',
              required: true
            },
            description: {
              type: 'string',
              label: 'Описание',
              textarea: true
            },
            features: {
              type: 'array',
              label: 'Возможности',
              fields: {
                add: {
                  text: {
                    type: 'string',
                    label: 'Текст'
                  }
                }
              }
            },
            linkUrl: {
              type: 'string',
              label: 'URL ссылки'
            },
            linkLabel: {
              type: 'string',
              label: 'Текст ссылки',
              def: 'Подробнее →'
            }
          }
        }
      }
    }
  }
};
