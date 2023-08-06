const defaultTextTemplates = [
  {
    text: '大标题',
    fontSize: '30px',
    fontWeight: 'bold',
    tag: 'h2',
    width: '100px',
    left: '100px',
  },
  {
    text: '正文内容',
    tag: 'p',
    width: '100px',
    left: '100px',
    top: '100px',
  },
  {
    text: '链接内容',
    color: '#1890ff',
    textDecoration: 'underline',
    tag: 'p',
    width: '100px',
    top: '200px',
    left: '30px'
  },
  {
    text: '按钮内容',
    color: '#ffffff',
    backgroundColor: '#1890ff',
    borderWidth: '1px',
    borderColor: '#1890ff',
    borderStyle: 'solid',
    borderRadius: '2px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
    width: '100px',
    tag: 'button',
    textAlign: 'center',
    position: 'absolute',
    top: '200px',
    left: '80px'
  }
]

const defaultImageTemplates = [
  'http://static.imooc-lego.com/upload-files/logo-white-735536.png',
  'http://static.imooc-lego.com/upload-files/logo-black-049885.png',
  'http://static.imooc-lego.com/upload-files/528w-0ilmEQMomZ8-108048.png',
  'http://static.imooc-lego.com/upload-files/frame-096161.png',
  'http://static.imooc-lego.com/upload-files/text-449964.png',
  'http://static.imooc-lego.com/upload-files/text2-288504.png',
  'http://static.imooc-lego.com/upload-files/money-664239.png',
  'http://static.imooc-lego.com/upload-files/bag-904186.png',
  'http://static.imooc-lego.com/upload-files/text3-086652.png',
  'http://static.imooc-lego.com/upload-files/text4-145592.png'
]

export const defaultShapeTemplates = [
  'http://static.imooc-lego.com/upload-files/logo-white-735536.png',
  'http://static.imooc-lego.com/upload-files/logo-black-049885.png',
  'http://static.imooc-lego.com/upload-files/528w-0ilmEQMomZ8-108048.png',
  'http://static.imooc-lego.com/upload-files/frame-096161.png',
  'http://static.imooc-lego.com/upload-files/text-449964.png',
  'http://static.imooc-lego.com/upload-files/text2-288504.png',
  'http://static.imooc-lego.com/upload-files/money-664239.png',
  'http://static.imooc-lego.com/upload-files/bag-904186.png',
  'http://static.imooc-lego.com/upload-files/text3-086652.png',
  'http://static.imooc-lego.com/upload-files/text4-145592.png'
]

export const componentsList = {
  text: defaultTextTemplates,
  image: defaultImageTemplates
  // shape: []
}
