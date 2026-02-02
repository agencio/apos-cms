module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Контакты'
  },
  fields: {
    add: {
      tagline: {
        type: 'string',
        label: 'app:tagline',
        textarea: true,
        max: 300
      },
      email: {
        type: 'string',
        label: 'Email',
        def: 'info@antiddos.su'
      },
      phone: {
        type: 'string',
        label: 'Телефон',
        def: '' // TODO: заменить на реальный номер
      },
      telegram: {
        type: 'string',
        label: 'Telegram',
        def: 'https://t.me/antiddos_su'
      },
      address: {
        type: 'string',
        label: 'Адрес',
        textarea: true,
        def: '' // TODO: заменить на реальный адрес
      },
      workingHours: {
        type: 'string',
        label: 'Часы работы',
        def: 'Пн-Пт: 09:00–18:00, поддержка 24/7'
      },
      main: {
        type: 'area',
        options: {
          widgets: {
            content: {},
            'hero-full': {},
            'hero-split': {},
            cta: {},
            promo: {},
            blockquote: {},
            features: {},
            specs: {},
            steps: {},
            faq: {},
            services: {},
            pricing: {},
            'related-services': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'app:groupBasics',
        fields: ['title', 'tagline', 'email', 'phone', 'telegram', 'address', 'workingHours', 'main']
      }
    }
  }
};
