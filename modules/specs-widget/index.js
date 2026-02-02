module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'app:specsWidget'
  },
  fields: {
    add: {
      sectionTitle: {
        type: 'string',
        label: 'app:sectionTitle',
        max: 200
      },
      altBg: {
        type: 'boolean',
        label: 'Альтернативный фон',
        def: false
      },
      items: {
        type: 'array',
        label: 'Характеристики',
        titleField: 'label',
        fields: {
          add: {
            value: {
              type: 'string',
              label: 'Значение',
              required: true
            },
            label: {
              type: 'string',
              label: 'Подпись',
              required: true
            }
          }
        }
      }
    }
  }
};
