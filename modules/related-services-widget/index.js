module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Связанные услуги'
  },
  fields: {
    add: {
      sectionTitle: {
        type: 'string',
        label: 'app:sectionTitle',
        max: 200,
        def: 'Связанные услуги'
      },
      sectionSubtitle: {
        type: 'string',
        label: 'app:subtitle',
        max: 300,
        def: 'Комплексная защита для максимальной безопасности'
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
            title: {
              type: 'string',
              label: 'Название',
              required: true
            },
            description: {
              type: 'string',
              label: 'Описание',
              textarea: true
            },
            linkUrl: {
              type: 'string',
              label: 'URL ссылки',
              required: true
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
