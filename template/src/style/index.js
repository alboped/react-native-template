import { create } from 'twrnc';
import Style from '@alboped/react-native-style';
const twconf = require('../../tailwind.config');

/**
 * 转换单位: rpx -> px
 * @param {*} conf 配置信息
 */
function parseUnit(conf) {
  const {
    theme: { extend, ...otherTheme },
    plugins,
    ...otherConf
  } = conf;

  const newTheme = parseTheme(otherTheme);
  const newExtend = parseTheme(extend);

  return {
    theme: { extend: newExtend, ...newTheme },
    plugins,
    ...otherConf,
  };
}

function parseTheme(theme) {
  return Object.entries(theme).reduce((acc, [themeKey, items]) => {
    acc[themeKey] = parseItem(items);
    return acc;
  }, {});
}

function parseItem(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] =
      typeof value === 'string' && value.endsWith('rpx')
        ? `${Style.unitFmt(value)}px`
        : value;
    return acc;
  }, {});
}

const newConf = parseUnit(twconf);

const tw = create(newConf);

export { tw };
