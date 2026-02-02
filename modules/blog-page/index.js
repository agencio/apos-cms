module.exports = {
  extend: '@apostrophecms/piece-page-type',
  options: {
    label: 'app:blogPageLabel',
    piecesFilters: [
      { name: 'category' }
    ],
    perPage: 10
  },
  fields: {
    add: {
      heading: {
        type: 'area',
        options: {
          widgets: {
            'hero-full': {}
          },
          max: 1
        }
      }
    },
    group: {
      basics: {
        label: 'app:groupBasics',
        fields: ['title', 'heading']
      }
    }
  }
};
