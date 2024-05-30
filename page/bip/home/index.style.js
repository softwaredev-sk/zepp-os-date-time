import { align, text_style } from '@zos/ui';
import { getText } from '@zos/i18n';
import { getDeviceInfo } from '@zos/device';

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const TEXT_STYLE = {
  text: getText('appName'),
  x: 42,
  y: 100,
  w: DEVICE_WIDTH - 42 * 2,
  h: 100,
  color: 0xffffff,
  text_size: 28,
  align_h: align.CENTER_H,
  text_style: text_style.WRAP,
};

export const BUTTON_STYLE = {
  x: 10,
  y: 200,
  w: DEVICE_WIDTH - 20,
  h: 50,
  radius: 12,
  normal_color: 0xfc6950,
  press_color: 0xfeb4a8,
};
export const BUTTON_STYLE_2 = {
  x: 10,
  y: 260,
  w: DEVICE_WIDTH - 20,
  h: 50,
  radius: 12,
  normal_color: 0xfc6950,
  press_color: 0xfeb4a8,
};
