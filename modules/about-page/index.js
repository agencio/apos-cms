module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'О компании'
  },
  fields: {
    add: {
      tagline: {
        type: 'string',
        label: 'app:tagline',
        textarea: true,
        max: 300
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
            services: {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'app:groupBasics',
        fields: ['title', 'tagline', 'main']
      }
    }
  }
};
