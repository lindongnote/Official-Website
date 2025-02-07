import zhCN from './locales/zh-CN.json';
import zhHK from './locales/zh-HK.json';
import zhMO from './locales/zh-MO.json';
import zhTW from './locales/zh-TW.json';

export default defineI18nConfig(() => ({
    legacy: false,
    messages: {
      'zh-CN': zhCN,
      'zh-HK': zhHK,
      'zh-MO': zhMO,
      'zh-TW': zhTW
    }
}));