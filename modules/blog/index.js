module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    alias: 'blog',
    label: 'app:blogLabel',
    pluralLabel: 'app:blogPluralLabel',
    sort: {
      publishDate: -1,
      createdAt: -1
    }
  },
  fields: {
    add: {
      subtitle: {
        type: 'string',
        label: 'app:subtitle',
        textarea: true,
        max: 300
      },
      category: {
        type: 'select',
        label: 'app:category',
        choices: [
          { label: 'Кибербезопасность', value: 'cybersecurity' },
          { label: 'Технологии', value: 'technology' },
          { label: 'Бизнес', value: 'business' }
        ],
        def: 'technology'
      },
      _tags: {
        type: 'relationship',
        label: 'Теги',
        withType: 'tag',
        builders: {
          project: {
            title: 1,
            slug: 1,
            type: 1,
            _url: 1
          }
        }
      },
      publishDate: {
        type: 'date',
        label: 'app:publishDate',
        def: null
      },
      body: {
        type: 'area',
        label: 'app:content',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              className: 't-richtext my-5 md:my-8',
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'bulletList',
                'orderedList'
              ],
              styles: [
                { tag: 'p', label: 'Paragraph (P)' },
                { tag: 'h2', label: 'Heading 2 (H2)' },
                { tag: 'h3', label: 'Heading 3 (H3)' },
                { tag: 'h4', label: 'Heading 4 (H4)' }
              ]
            },
            '@apostrophecms/image': {
              className: 'my-5 md:my-8'
            },
            '@apostrophecms/video': {
              className: 'my-5 md:my-8'
            },
            cta: {},
            content: {}
          }
        }
      },
      seoDescription: {
        type: 'string',
        label: 'SEO Description',
        textarea: true,
        max: 300
      },
      seoKeywords: {
        type: 'string',
        label: 'SEO Keywords'
      }
    },
    group: {
      basics: {
        label: 'app:groupBasics',
        fields: [
          'title',
          'subtitle',
          'category',
          '_tags',
          'publishDate',
          'body'
        ]
      },
      seo: {
        label: 'SEO',
        fields: [
          'seoDescription',
          'seoKeywords'
        ]
      }
    }
  },
  handlers(self) {
    return {
      beforeSave: {
        addPublishedDate(req, piece) {
          if (!piece.publishDate) {
            piece.publishDate = new Date().toJSON().slice(0, 10);
          }
        }
      }
    };
  }
};
