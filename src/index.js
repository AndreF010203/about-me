import { ieFiller } from './scripts/ieFiller';
import 'jquery-read-more';
import 'simplebar';

global.jQuery = require('jquery');
import 'bootstrap';
import { Page } from './scripts/page';

if (/MSIE|Trident/.test(navigator.userAgent)) {
  ieFiller.init();
}

Page.init();

$(".timeline-description").readMore({
  lines: 3
});