from google_play.items import GooglePlayItem
import scrapy

class googleplay_spider(scrapy.Spider):
    name = 'google_play'
    allowed_urls = ['https://play.google.com/store?hl=pt_BR']
    start_urls = ['https://play.google.com/store/apps/category/BUSINESS?hl=pt_BR']

    def parse(self, response):
        url_list = response.xpath('//div[@class="cluster-heading"]/h2/a/@href').extract()
        pageurl = ['https://play.google.com/' + l for l in url_list]

        for url in pageurl:
            yield scrapy.Request(url, callback=self.parse_top)

# response.xpath('//div[@class="card-content id-track-click id-track-impression"]/a/@href').extract()

    def parse_top(self, response):
        # pageurl = response.meta['url']
        top_list = response.xpath('//div[@class="cluster-heading"]/h2/text()').extract_first()
        app_id = response.xpath('//div[@class="card no-rationale square-cover apps small"]/@data-docid').extract()

        app_links = ['https://play.google.com/store/apps/details?id='+ id_ for id_ in app_id]

        for link in app_links:
            # yield link
            yield scrapy.Request(link, callback=self.parse_each, meta={'link':link})

    def parse_each(self, response):
        # top_list = response.meta['url_list']
        pageurl = response.meta['link']
        name = response.xpath('//h1[@class="AHFaub"]/span/text()').extract_first()
        rating = response.xpath('//div[@class="pf5lIe"]/div/@aria-label').extract_first()
        evaluators = response.xpath('//span[@class="AYi5wd TBRnV"]/span/@aria-label').extract_first()
        image = response.xpath('//div[@class="dQrBL"]/img/@src').extract_first()
        updated = response.xpath('//span[@class="htlgb"]/text()').extract_first()
        category = response.xpath('//a[@itemprop="genre"]/text()').extract_first()



        # reviews = response.xpath('//div[@class="single-review"]')


        # for review in reviews:
        #     content = review.xpath('./div[@class="review-body with-review-wrapper"]/text()').extract()
        #     content = ''.join(content).strip()
        #     rating = review.xpath('.//div[@class="tiny-star star-rating-non-editable-container"]/@aria-label').extract_first()

        item = GooglePlayItem()
        # item['top_list'] = top_list
        item['name'] = name
        item['pageurl'] = pageurl
        item['rating'] = rating
        item['evaluators'] = evaluators
        item['image'] = image
        item['updated'] = updated
        item['category'] = category

        yield item
