module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'app:faqWidget'
  },
  fields: {
    add: {
      sectionTitle: {
        type: 'string',
        label: 'app:sectionTitle',
        max: 200,
        def: 'Часто задаваемые вопросы'
      },
      items: {
        type: 'array',
        label: 'Вопросы',
        titleField: 'question',
        fields: {
          add: {
            question: {
              type: 'string',
              label: 'Вопрос',
              required: true
            },
            answer: {
              type: 'string',
              label: 'Ответ',
              textarea: true,
              required: true
            }
          }
        }
      }
    }
  }
};
