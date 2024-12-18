const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);


// const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
// const { withNativeWind } = require("nativewind/metro");

// const config = mergeConfig(getDefaultConfig(__dirname), {
//   /* your config */
// });

// module.exports = withNativeWind(config, { input: "./global.css" });



// Learn more https://docs.expo.io/guides/customizing-metro
// const { getDefaultConfig } = require('expo/metro-config');
// const { withNativeWind } = require('nativewind/metro');

// /** @type {import('expo/metro-config').MetroConfig} */
// // eslint-disable-next-line no-undef
// const config = getDefaultConfig(__dirname);

// module.exports = withNativeWind(config, { input: './global.css' });
