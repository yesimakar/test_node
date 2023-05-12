module.exports = {
  plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-nullish-coalescing-operator'],
  presets: [process.env.VUE_PLATFORM === 'web' ? '@vue/cli-plugin-babel/preset' : {}, ['@babel/env', { targets: { esmodules: true } }]],
};
