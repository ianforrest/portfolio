---
templateKey: blog-post
title: "Shopify: Adding product data (like product brand) to SEO Page Titles"
date: 2021-03-13T16:34:43.986Z
description: If you sell products from multiple brands, a subtle tweak might
  make a big difference in organic search traffic.
featuredpost: false
featuredimage: /img/lucrezia-carnelos-wq9vup_njr4-unsplash.jpg
tags:
  - posts
---
*Note: Starting a Shopify or SquareSpace site = easy. Getting people to actually visit it = kind of hard.* 

*This is one in a series of 10 posts to help small business owners make technical tweaks to better compete against ecommerce behemoths.*

If you make literally no attempt to improve the placement of your Shopify products on search engines, you’re … actually probably fine? 

Out of the box, Shopify and its most common themes are built in a way to position you well in Google search results. Page speed, search schema, best practices in HTML structure: they’re all on the radars of Shopify and most theme developers, so you’re already sitting pretty the second you launch your site. It’s in Shopify’s best interest for your website to succeed, so they help you get part of the way there by helping Google and Bing crawl your website. 

In some cases, though, a subtle tweak might make a big difference. If you’re a shop selling products from multiple brands, you may want to add a product’s brand to your product page SEO titles. These page titles are what appear in your browser tabs, and what frequently appear on Google search result pages. If your product title flips from Zip-up Windbreaker to Nike Zip-Up Windbreaker, you may hone in on more relevant customers searching for a specific product.

Here’s how to pull it off by adding a product's vendor attribute to the code that generates each page title.

1. Log in to your Shopify admin area and navigate to the Themes page of your Online Store. Click the Action dropdown next to your theme and click Edit code.
2. Your next step depends on how your theme is built. Themes like Impulse and Supply have an seo-title.liquid file in the Snippets folder. In those cases, open up the seo-title.liquid file and add {{ product.vendor }} to the front of {{ page_title }} and hit Save.

```ruby
{%- capture seo_title -%}
  {{ product.vendor }} {{ page_title }}
  {%- if current_tags -%}
    {%- assign meta_tags = current_tags | join: ', ' %} &ndash; {{ 'general.meta.tags' | t: tags: meta_tags -}}
  {%- endif -%}
  {%- if current_page != 1 -%}
    &ndash; {{ 'general.meta.page' | t: page: current_page }}
  {%- endif -%}
  {%- if template == 'password' -%}
    {{ shop.name }}
  {%- else -%}
    {%- unless page_title contains shop.name -%}
      &ndash; {{ shop.name }}
    {%- endunless -%}
  {%- endif -%}
{%- endcapture -%}
```

3. For themes like Debut and Brooklyn, you'll open up the theme.liquid file in the layout folder. Hone in on the capture seo_title portion of the theme file and add {{ product.vendor }} to the front of {{ page_title }}.

```ruby
{%- capture seo_title -%}
    {%- if request.page_type == 'search' and search.performed == true -%}
      {{ 'general.search.heading' | t: count: search.results_count }}: {{ 'general.search.results_with_count' | t: terms: search.terms, count: search.results_count }}
    {%- else -%}
      {{ product.vendor }} {{ page_title }}
    {%- endif -%}
    {%- if current_tags -%}
      {%- assign meta_tags = current_tags | join: ', ' -%} &ndash; {{ 'general.meta.tags' | t: tags: meta_tags -}}
    {%- endif -%}
    {%- if current_page != 1 -%}
      &ndash; {{ 'general.meta.page' | t: page: current_page }}
    {%- endif -%}
    {%- assign escaped_page_title = page_title | escape -%}
    {%- unless escaped_page_title contains shop.name -%}
      &ndash; {{ shop.name }}
    {%- endunless -%}
  {%- endcapture -%}
```

You're done! Visit your product page. You'll see the page title in your browser now include the product's brand. All that's left for you to do is monitor your Google search traffic to measure the impact of this change.