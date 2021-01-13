# Modelpress Image Downloader [![shoushouminami](https://circleci.com/gh/shoushouminami/modelpress-downloader.svg?style=svg)](https://app.circleci.com/pipelines/github/shoushouminami/modelpress-downloader)

One click to batch download the best resolution images from the current news article. A [list of websites](https://github.com/shoushouminami/modelpress-downloader/wiki) are supported including ModelPress (mdpr.jp), Abema Times (times.abema.tv),
Dwango News (news.dwango.jp), and more, and is still growing! 

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

###### 3.1 (2021/01/11)
* Bug fix on nikkansports.com

###### 3.0 (2021/01/11)
* Support Japanese language
* Support yanmaga.jp
* UI changes

###### 2.35 (2020/11/27)
* Fix on realsound.jp

###### 2.34 (2020/11/27)
* Support www.nikkansports.com

###### 2.33 (2020/11/21)
* Support www.astage-ent.com

###### 2.32 (2020/11/18)
* Fix download retries
* Support www.tokyoheadline.com
* Support girlsnews.tv

###### 2.31 (2020/11/16)
* Fix on movie.walkerplus.com

###### 2.30 (2020/11/06)
* Support sakurazaka46.com
* Support movie.walkerplus.com
* Fix download on e-talentbank.co.jp

###### 2.29 (2020/10/04)
* Support seigura.com
* Support new layout on mikan-incomplete.com
* Support www.fujitv-view.jp
* Support tokyo.whatsin.jp
* Support www.fashion-press.net
* Support lp.p.pia.jp

###### 2.28 (2020/09/30)
* Fix mantan-web.jp web change
* Fix ray-web.jp web change
 
###### 2.27 (2020/09/13)
* Add
   * www.m-on-music.jp
   * www.tvlife.jp
   * www.musicvoice.jp
   * actresspress.com
   
###### 2.26 (2020/09/08)
* Bug fix for www.edgeline-tokyo.com

###### 2.25 (2020/09/07)
* Add support for
   * www.rbbtoday.com
   * mainichikirei.jp
   * www.crank-in.net
   * realsound.jp
   * www.edgeline-tokyo.com
   * hominis.media

###### 2.24 (2020/09/04)
* Add support for 
   * teens.mynavi.jp
   * www.keyakizaka46.com
   * bisweb.jp
   * ananweb.jp
   * www.walkerplus.com
   * www.wws-channel.com 
   * fineboys-online.jp
   * www.news-postseven.com
   * diet.news-postseven.com

###### 2.23 (2020/08/09)
* Add support for Nonno magazine trial

###### 2.22 (2020/08/08)
* Bug fix for blog.nogizaka46.com

###### 2.21 (2020/08/08)
* Integrate with Google Analytics

###### 2.20 (2020/08/03)
* Add nonno.hpplus.jp
* Fix download on news.mynavi.jp

###### 2.19 (2020/07/18)
* Support www.hinatazaka46.com

###### 2.18 (2020/06/28)
* Add Google form for support request

###### 2.17 (2020/06/01)
* Fix mdpr remote image url

###### 2.16 (2020/05/31)
* Fix mdpr remote image url

###### 2.15 (2020/05/15)
* Adapt to new page layout on natalie.mu.js
* Minor popup.html and permission.html text tweak.

###### 2.14 (2020/04/20)
* Add Chinese name

###### 2.13 (2020/04/20)
* Support 7gogo.jp
* Support www.cinematoday.jp

###### 2.12 (2020/04/05)
* Add missing case on news.dwango.jp
* Support ray-web.jp
* Support e-talentbank.co.jp

###### 2.11 (2020/03/11)
* Bug fix for popwave.jp

###### 2.10 (2020/03/07)
* Add entamenext.com in popup UI
* Refactoring and speed improvement

###### 2.9 (2020/03/07)
* Support entamenext.com

###### 2.8 (2020/03/02)
* Download jpg instead of webp from natalie.mu

###### 2.7 (2020/02/24)
* Modularize times.abema.tv.js
* Fall back to webp if jpg is not found on times.abema.tv

###### 2.6 (2020/02/20)
* Modularize `inject.js` code
* Support spice.eplus.jp

###### 2.5 (2020/02/03)
* URI decode file names
* Support more cases on times.abema.tv

###### 2.4 (2020/02/02)
* Support thetv.jp
* Support apress.jp
* Support news.mynavi.jp
* Support times.abema.tv

###### 2.3 (2020/01/26)
* Support dogatch.jp
* Support this.kiji.is
* Automated tests (inject.js) on Travis.ci

###### 2.2 (2020/01/20)
* Support natalie.mu
* Support girlswalker.com
* Bug fix on blog.nogizaka46.com

###### 2.1 (2020/01/11)
* Supports mantan-web.jp
* Downloads from S3 bucket for news.dwango.jp

###### 2.0 (2020/01/04)
* Re-organize supported website list with bigger icons
* Add support to fetch App only images on mdpr.jp
  * Help message about additional permission needed
  * Help message about fetch failures
* Optimize download code on www.instagram.com
  * Remove legacy code 
* Add support for bltweb.jp
* Add experimental background download with concurrency control (turned off)

###### 1.22 (2019/12/14)
* Support new image store on blog.nogizaka46.com

###### 1.21 (2019/09/27)
* Bug fix for instagram.com single image

###### 1.20 (2019/09/27)
* Add traditional Chinese; remove instagram.com

###### 1.19 (2019/09/21)
* Support cancam.jp; bug fix on blog.nogizaka46.com; simplified codebase

###### 1.18 (2019/09/17)
* Bug fix for blog.nogizaka46.com; Exclude invalid urls

###### 1.17 (2019/09/15)
* Support popwave.jp and mikan-incomplete.com
* Exclude .gif on blog.nogizaka46.com
 
###### 1.16 (2019/08/16)
* Support www.facebook.com Home page
* Support www.twitter.com new UI (react.js)
 
###### 1.15 (2019/08/12)
* Support news.dwango.jp

###### 1.12 (2019/07/11)
* Bug fix. Download only 1 image if gallery is shown on twitter.com

###### 1.11 (2019/07/11)
* Support twitter.com

###### 1.10 (2019/06/26)
* Support www.bilibili.com/read/

###### 1.9 (2019/06/19)
* Support instagram.com

###### 1.8 (2019/06/19)
* Fix the bug that failed to discover deep img tags
Make recursive loop deeper and add exclude parameter

###### 1.6 (2019/06/18)
* Further reduce permissions by switching to iframe instead of tabs
on blog.nogizaka46.com

###### 1.5 (2019/06/18)
* Reduce permissions down to activeTab and download

###### 1.4 (2019/06/17)
* Reduce the permissions required on installation
* Show supported websites in popup

###### 1.3 (2019/06/15)
* Add support for blog.nogizaka46.com 

###### 1.2 (2019/06/13)
* Add support for most of mdpr.jp pages
