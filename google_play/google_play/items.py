# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class GooglePlayItem(scrapy.Item):
    # define the fields for your item here like:
    name = scrapy.Field()
    # top_list=scrapy.Field()
    pageurl = scrapy.Field()
    rating = scrapy.Field()
    evaluators = scrapy.Field()
    image = scrapy.Field()
    updated = scrapy.Field()
    category = scrapy.Field()