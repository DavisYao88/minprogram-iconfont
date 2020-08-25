### 1.安装字体加载插件
```
    npm install minprogram-iconfont -g
```
### 2.初始化配置文件
```
    iconfont init
```
### 3.修改配置文件（iconfont.json）
```
    {
        "cssPath": "请输入iconfont项目中的font class地址，文件后缀为.css",
        "saveDir": "请输入生成后的文件存放目录",
        "cssModules": "请输入要转换的CSS预处理器格式",
        "fileName": "自定义生成CSS文件名称，默认为iconfont"
    }
```
    saveDir：为生成字体文件CSS后存放的目录，例如：src/assets/style
    cssModules：为目标文件类型，需为数组。例如：["less","scss"],默认只生成CSS文件

### 4.生成字体CSS文件
```
    iconfont generate
```