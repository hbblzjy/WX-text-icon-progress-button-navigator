//初始化一个文字参数
var initText = '这是第一个文字\n这是第二个文字'
Page({
  data: {
    text: initText
  },
  //初始化一个空的文字串
  extraLine: [],
  //添加按钮点击事件
  add: function(e) {
    //在文字串中添加文字，push
    this.extraLine.push('添加的其他文字')
    //设置数据
    this.setData({
      text: initText + '\n' + this.extraLine.join('\n')
    })
  },
  //减少按钮点击事件
  remove: function(e) {
    //判断文字串是否大于0，如果大于0，减少，反之，不操作
    if (this.extraLine.length > 0) {
      //在文字串中减少文字，pop
      this.extraLine.pop()
      //设置数据
      this.setData({
        text: initText + '\n' + this.extraLine.join('\n')
      })
    }
  }
})