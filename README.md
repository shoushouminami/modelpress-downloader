# Modelpress Image Downloader [![Build Status](https://travis-ci.org/shoushouminami/modelpress-downloader.svg?branch=master)](https://travis-ci.org/shoushouminami/modelpress-downloader)

This extension is custom made to download full size images from [a list of websites](https://github.com/shoushouminami/modelpress-downloader/wiki) including modelpress (mdpr.jp) and more.


Chrome Webstore: https://chrome.google.com/webstore/detail/modelpress-image-download/nepeemhbchedjbebdekhpkhknljppmif

### Add More Websites
If you have additional websites that you want this extension to support, please [post on the issues page](https://github.com/shoushouminami/modelpress-downloader/issues).

### Report Issues
You can report bugs and issues by [posting on issues page](https://github.com/shoushouminami/modelpress-downloader/issues).

### Change Logs

###### 2.3 (2020/01/26)
* Support dogatch.jp
* Support this.kiji.is

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
