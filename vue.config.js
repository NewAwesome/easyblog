module.exports = {
  pages: {
    index: {
      // 页面的入口
      entry: './src/main.js',

      // 页面的模板
      template: './public/index.html',

      // build时输出的文件名
      filename: 'index.html',

      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '网站首页',

      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // detail: {
    //   entry: './src/pages/detail/detail.js',
    //   template: './public/detail.html',
    //   filename: 'detail.html',
    //   title: '详情页',
    //   chunks: ['chunk-vendors', 'chunk-common', 'detail']
    // }
  }
}
