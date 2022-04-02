/* 因為部署到 github 上時，我們的網址並不是直接在路由的根目錄，而是在 repository 的資料夾內，https://<username>.github.io/<repository-name>，因此需要告訴 Vue 我們真正檔案所在的路徑。 */
module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/restaurant_forum_vue_version/'
      : '/'
}
