module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'app:featuresWidget'
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
      columns: {
        type: 'select',
        label: 'Колонки',
        choices: [
          { label: '2 колонки', value: '2' },
          { label: '3 колонки', value: '3' },
          { label: '4 колонки', value: '4' }
        ],
        def: '3'
      },
      altBg: {
        type: 'boolean',
        label: 'Альтернативный фон',
        def: false
      },
      items: {
        type: 'array',
        label: 'Элементы',
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
              label: 'Список',
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
              label: 'Текст ссылки'
            }
          }
        }
      }
    }
  }
};
