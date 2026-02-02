module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'WAF'
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
