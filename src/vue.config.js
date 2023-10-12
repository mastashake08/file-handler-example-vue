module.exports = {
    publicPath: '/file-handler-example-vue/',
    pwa: {
        name: 'Shake File Viewer',
        themeColor: '#000',
        msTileColor: '#fff',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
    
        // configure the workbox plugin
        workboxPluginMode: 'GenerateSW'
      }
}