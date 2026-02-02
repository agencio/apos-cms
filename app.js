require('apostrophe')({
  shortName: 'antiddos-su',
  modules: {
    // SEO & Open Graph
    '@apostrophecms/open-graph': {},
    '@apostrophecms/seo': {},

    // i18n
    i18n: {},
    tag: {},

    // Product/Service pieces (from apos-cms engine — adapted for services)
    'product-category': {},
    'product-category-page': {},
    product: {},
    'product-page': {},

    // Blog pieces
    blog: {},
    'blog-page': {},

    // Page types
    'default-page': {},
    'antiddos-page': {},
    'waf-page': {},
    'cdn-page': {},
    'about-page': {},
    'contact-page': {},

    // Widgets (from apos-cms engine)
    'content-widget': {},
    'hero-full-widget': {},
    'hero-split-widget': {},
    'cta-widget': {},
    'promo-widget': {},
    'blockquote-widget': {},
    'product-widget': {},
    'product-featured-widget': {},
    'product-category-widget': {},

    // AntiDDoS custom widgets
    'features-widget': {},
    'specs-widget': {},
    'steps-widget': {},
    'faq-widget': {},
    'services-widget': {},

    // Theme — all assets/client JS and server side templates
    theme: {}
  }
});
