import { createWidget, widget } from '@zos/ui';
import { log as Logger } from '@zos/utils';
import { BUTTON_STYLE, BUTTON_STYLE_2, TEXT_STYLE } from './index.style';
import { Time } from '@zos/sensor';

const logger = Logger.getLogger('helloworld');

const timeString = new Time();
const date =
  'Today is: ' +
  timeString.getDate() +
  '/' +
  timeString.getMonth() +
  '/' +
  timeString.getFullYear();
const time =
  'Time: ' +
  (timeString.getHours() < 10
    ? '0' + timeString.getHours()
    : timeString.getHours()) +
  ':' +
  (timeString.getMinutes() < 10
    ? '0' + timeString.getMinutes()
    : timeString.getMinutes());

Page({
  data: {
    reminders: [],
  },

  // upToDateTime: setInterval(() => doIt(), 1000),

  build() {
    logger.debug('page build invoked');
    createWidget(widget.TEXT, {
      ...TEXT_STYLE,
    });

    createWidget(widget.BUTTON, {
      ...BUTTON_STYLE,
      text: date,
    });
    createWidget(widget.BUTTON, {
      ...BUTTON_STYLE_2,
      text: time,
    });
  },
  onInit() {
    logger.debug('page onInit invoked');
  },

  onDestroy() {
    logger.debug('page onDestroy invoked');
  },
});
