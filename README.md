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

###### 5.1 (2025/12/26)
* Add image picker

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

###### 4.27 (2025/07/12)
* Add mainichi.jp, bokuao.com, bezzy.jp, and websunday.net
* Update sakamichi sites to include news article & member profile
* Varies fixes

###### 4.26 (2025/04/11)
* Varies fixes

###### 4.25 (2024/12/02)
* Fix on ananweb.jp, seventeen-web.jp and kstyle.com
* Remove taishu.jp (retired)

###### 4.24 (2024/10/17)
* Add wpb.shueisha.co.jp
* Add dot.asahi.com
* Other fixes

###### 4.23 (2024/10/06)
* Add www.entax.news and maquia.hpplus.jp
* Move 8760.news-postseven.com -> j7p.jp
* Move www.bubkaweb.com -> www.idol-culture.jp
* Remove plus.tver.jp
* Fixes on sweetweb.jp, ray-web.jp, and eiga.com

###### 4.22 (2024/07/23)
* Add www.sponichi.co.jp
* Add glassgirl.info
* Fixes on lp.p.pia.jp and nonno.hpplus.jp

###### 4.21 (2024/05/23)
* Add add www.sanspo.com and prtimes.jp
* Fixes on classy-online.jp, plus.tver.jp, nonno.hpplus.jp and mezamashi.media
* Remove okmusic.jp (site discontinued)

###### 4.20 (2024/03/29)
* Fixes on mainichikirei.jp, i-voce.jp and mezamashi.media
* Remove www.fujitv-view.jp
* Remove tabs from optional permission

###### 4.19 (2024/03/27)
* Fix on younganimal.com
* Remove old GA code

###### 4.18 (2024/03/18)
* Add mezamashi.media and bunshun.jp
* Fixes on mantan-web.jp, entameclip.com, hanako.tokyo, sweetweb.jp, www.oricon.com, mainichikirei.jp, 
entameclip.com and www.vogue.co.jp

###### 4.17 (2024/03/02)
* Fix mdpr.jp
