module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'app:stepsWidget'
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
        label: 'Шаги',
        titleField: 'title',
        fields: {
          add: {
            title: {
              type: 'string',
              label: 'app:title',
              required: true
            },
            description: {
              type: 'string',
              label: 'Описание',
              textarea: true,
              required: true
            }
          }
        }
      }
    }
  }
};
