module.exports = {
  options: {
    types: [
      {
        name: 'default-page',
        label: 'app:default'
      },
      {
        name: 'antiddos-page',
        label: 'Anti-DDoS защита'
      },
      {
        name: 'waf-page',
        label: 'WAF'
      },
      {
        name: 'cdn-page',
        label: 'CDN'
      },
      {
        name: 'about-page',
        label: 'О компании'
      },
      {
        name: 'contact-page',
        label: 'Контакты'
      },
      {
        name: 'blog-page',
        label: 'Блог'
      },
      {
        name: 'product-page',
        label: 'app:productLabel'
      },
      {
        name: 'product-category-page',
        label: 'app:productCategoryLabel'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'app:home'
      }
    ],
    park: [
      {
        parkedId: 'core-search',
        type: '@apostrophecms/search',
        slug: '/search',
        _defaults: {
          title: 'Поиск'
        }
      }
    ]
  }
};
