module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Хлебные крошки (Breadcrumbs)'
  },
  fields: {
    add: {
      showHome: {
        type: 'boolean',
        label: 'Показать «Главная»',
        def: true
      },
      customItems: {
        type: 'array',
        label: 'Дополнительные пункты (если нужны вручную)',
        titleField: 'label',
        fields: {
          add: {
            label: {
              type: 'string',
              label: 'Название'
            },
            url: {
              type: 'string',
              label: 'URL'
            }
          }
        }
      }
    }
  }
};
