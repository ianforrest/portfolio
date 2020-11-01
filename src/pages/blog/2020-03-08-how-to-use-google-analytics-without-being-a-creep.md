---
templateKey: blog-post
title: >-
  Tracking website visits with Google Analytics — and respecting your visitors'
  data privacy
date: 2020-03-09T00:35:56.709Z
description: >-
  If you’re collecting data on the people who interact with your business via
  Google Analytics, you owe it to them to understand what’s happening, and to
  ensure you’re collecting the absolute minimum needed to accomplish your
  business goals.
featuredpost: false
featuredimage: /img/ga-search.jpg
tags:
  - posts
---
![google-analytics-on-phone](/img/ga-search.jpg)

When you put a Google tracking code on your website, information about the people who visit your website gets shared with Google. 

Your website visitor’s device model, their browser, their IP address, their city, the website they came from prior to visiting your website, the buttons they click, the things they type while on your website: all of it can be saved to Google Analytics’ servers.

Just like you care for your customers’ personal information if they visit your brick-and-mortar business, you should take equal care in how you handle their personal information when they visit your website.

Here’s a few examples of how using Google Analytics could unintentionally go awry:

* **Event tracking:** If you track form submission values, like a person’s name, address or purchasing data, you’re now storing this information in Google Analytics. 
* **URL and page title tracking:** All page visit URLs and titles are stored, so you should make sure your website doesn’t insert personal information into a dynamically-generated URL.
* **Site search tracking:** A website user might insert personal information into an on-site search bar in order to discover content on your website.

If you’re collecting data on the people who interact with your business, you owe it to them to understand what’s happening, and to ensure you’re collecting the absolute minimum needed to accomplish your business goals.

The risk of Google’s servers being compromised or bad actors intercepting the data in transit is low, but beyond this slight risk, your customers deserve to know what data you’re collecting about them.

The California Consumer Privacy Act is the first domino to fall to force website operators in the United States to disclose this information. It doesn’t apply to your business unless you’re dealing with the personal information of more than 50,000 Californians or Californians’ devices.

If you run a website that doesn’t meet that criteria, you don’t have to comply with the CCPA, but you should ask yourself whether your own values align with the data you’re collecting about your website visitors and storing on a server of which you have no visibility.

In short, don’t wait for state or provincial legislation to make you stop acting like a creep. You can not be a creep whenever you’d like to start.

Most of the risk in accidentally collecting personal information comes in how you build your website and the features within it, not how you set up your Google Analytics property.

If you’re just getting started using Google Analytics, you can feel confident about placing the tracking code inside your head tag. But here are two quick things you can do to feel a little bit better about how you track your website visitors.

### Anonymize the IP addresses of your website visitors

This ensures you aren’t storing your website visitors’ IP addresses on Google’s servers, and that you’re anonymizing it as soon as possible.

Add this line to your tracking tag:

```
ga('set', 'anonymizeIp', true);
```

### Turn off Advertising Features & Demographic Reporting

Unless you’re using it, there’s no business incentive for you to help Google collect and build demographic profiles of its users. If gender and age profiles aren't needed to help you make decisions about your website content, then there's no need for you to collect it.

Turn it off in Admin > Property Settings.

### Related reading

* [Using Google Analytics Anonymize IP – An Impact Study](https://brianclifton.com/blog/2018/06/19/impact-of-anonymizeip/)
* [Google: Best practices to avoid sending personally identifiable info](https://support.google.com/analytics/answer/6366371?hl=en)
