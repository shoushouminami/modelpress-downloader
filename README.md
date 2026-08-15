# Modelpress Image Downloader [![shoushouminami](https://circleci.com/gh/shoushouminami/modelpress-downloader.svg?style=svg)](https://app.circleci.com/pipelines/github/shoushouminami/modelpress-downloader)

One click to batch download the best resolution images from the current news article. A [list of websites](https://github.com/shoushouminami/modelpress-downloader/wiki) are supported including [ModelPress](https://mdpr.jp), [Oricon](https://www.oricon.co.jp/), [Mantan Web](https://mantan-web.jp/),
and more, and is still growing! 

This extension is different from other image downloaders as it is custom made for the supported websites and it can search on the current  page for images
only related to the news article, and ignores the other irrelevant images such as ads and logos. Further more, it downloads images that are the best possible resolution.

How to: 
https://github.com/shoushouminami/modelpress-downloader/wiki

Chrome Webstore: https://chrome.google.com/webstore/detail/modelpress-image-download/nepeemhbchedjbebdekhpkhknljppmif

### Add More Websites
If you have additional websites that you want this extension to support, please [post on the issues page](https://github.com/shoushouminami/modelpress-downloader/issues).

### Report Issues
You can report bugs and issues by [posting on issues page](https://github.com/shoushouminami/modelpress-downloader/issues).

### Change Logs

###### 5.2 (2026/08/15)
* Add audo collect mode on x.com
* Add beeeem.com, luckyfes.com, fashiontechnews.zozo.com, jmagazine.myjcom.jp, hochi.news, www.dolce-gravure.jp, news.ameba.jp, www.wwdjapan.com, www.nylon.jp, and voisjp.me
* Remove more.hpplus.jp and www.musicvoice.jp - domain retired
* Varies fixes

###### 5.1 (2025/12/26)
* Minimize filename conflict
* x.com: Add video download

###### 5.0 (2025/12/26)
* Add image picker
* Save HTML for sakamichi blogs
* Add support for message.sakamichi groups
* Move 'downloadPrependJobId' to each download page for each site
* Persisted site options
* Fix download folder path by listening to onDeterminingFilename
* Add support to a few sites.
    * www.music-culture.info
    * news.ntv.co.jp
    * www.tokyo-sports.co.jp
    * barks.jp
    * nbpress.online
    * trendnewscaster.jp
    * universal-press.jp* 
    * www.moviecollection.jp
* Remove 25jigen.jp (domain is gone)
* Remove legacy Google UA analytics
* Move type 'tab' download to bg service worker and in 1 tab

