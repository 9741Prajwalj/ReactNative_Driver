const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
module.exports = async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  const customConfig = {
    transformer: {
      babelTransformerPath: require.resolve('react-native-tailwind-transformer'),
    },
  };

  return mergeConfig(defaultConfig, customConfig);
};
