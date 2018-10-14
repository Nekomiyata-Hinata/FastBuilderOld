FastBuilder是一个MinecraftPE的速建程序.
![](https://github.com/CAIMEOX/FastBuilder/blob/master/FastBuilder.jpg)
## 快速安装
<code>npm i fastbuilder -g</code>
## 什么是"Fast Builder"?
　　它是一个Websocket服务器脚本，任何人都可以在你在游戏中连接它!当然，你需要按照步骤运行脚本.
## "Fast Builder"能做什么?
　　用一半的时间，完成复杂的建筑!
## "FastBuilder"如何工作?
　　使用Websocket，先捕捉客户端聊天数据，再对客户端提供的数据进行分析，选择对应的算法，在服务器完成计算，改由命令输出.
## 为什么要使用WebsocketServer，而不是客户端Mod或js脚本?
### WebsocketServer
　　1.可以在任何设备上使用.(Linux,Windows,Android,ios等等)

　　2.支持0.16+的任意MinecraftBE版本.

　　3.算法在不断更新!

　　4.不存在任何形式的广告.

　　5.在服务器和领域都可以使用,只要内核允许!

### 客户端Mod
　　1.仅能在Android设备中运行，需要额外的第三方应用程序，如BlockLauncher,Toolbox.

　　2.很多函数如今已失去效果.

　　3.通常免费但是广告很多!

　　4.受到MinecraftBE的版本限制.

　　5.无法在服务器和领域服使用.

## 如何使用"FastBuilder"?

* 如果你不想进行繁琐的操作,请执行 <code>npm i fastbuilder -g</code>,
之后您就可以直接使用<code>fastbuilder</code>命令来运行FastBuilder了.

　　这个脚本完全由NodeJS编写，你只需要一台私人PC(VPS)或者Android手机即可.

　　开始之前，你需要安装NodeJS并配置环境变量.

　　接下来安装必要的模块，使用npm安装非常方便:

　`$ npm install`

　　运行脚本:

　`$ node FastBuilder.js`
 
#### 如果你想在该电脑的MinecraftUWP使用它:

　　1.进入游戏.

　　2.进入世界,启用作弊.

　　3.打开"聊天和命令",输入:

　`/connect 127.0.0.1:[port]`

　　4.连接它并开始使用建筑命令!

#### 如果你想在同局域网的其他设备使用:

　　1.在cmd输入:

　　`$ ipconfig /all`

　　查看内网IPV4.

　　2.进入游戏.

　　3.进入世界,启用作弊.

　　4.打开"聊天和命令",输入:

　    `/connect [ipv4]:[port]`

　　5.连接它并开始使用建筑命令!

### 如果你没有电脑:

　　你可以购买一台VPS，在上面部署代码.

　　或者在Android使用Termux:

　　1.下载并安装Termux.

　　官网: https://termux.com

　　2.打开Termux,先检测更新:

　　`$ apt update && apt upgrade`

　　接下来安装NodeJS和VIM文本编辑器，还有git:

　　`$ apt install nodejs vim git`

　　克隆FastBuilder项目:

　　`$ git clone https://github.com/CAIMEOX/FastBuilder.git`

　　转移到FastBuilder文件夹:

　　`$ cd FastBuilder`

　　运行脚本:

　　`$ node main.js`

　　将Termux挂在后台.

　　3.打开游戏,连接服务器(127.0.0.1),可参考上面方法，这里不在赘述.
## 游戏内命令:
　注意:FastBuilder命令不需要在前面添加'/'.

　使用之前，你需要先获取生成器坐标:

　　`get pos`

　　或者手动设置:

　　`set pos [x] [y] [z]`

　　程序允许你使用: "let"+变量名修改变量:

　　`let x = 100`
## FastBuilder提供了多种结构生成算法.

　　圈: `circle [方向<xyz>] [半径] [高度]`

　　圆: `round [方向<xyz>] [半径] [高度]`

　　球: `circle [方法] [半径]`

　　方法包括:

　　　　hollow: 空心

　　　　solid: 实心

　　　　framework: 框架

　　线: `line [方向<+-xyz>] [长度]`

　　圆锥: `tapered [半径] [高度]`

　　十字架: `cross [方向<xyz>] [半径]`

　　太极图: `taichi [方向] [半径]`

(由于算法不完美所以被移除)

　　正多边形: `polygon [边数<≥3>] [半径] [高度]`

(正多边形算法过于复杂没做出来,欢迎算法大佬补充)
## Fast Builder也内置了Agent功能!

　　还记得0.16+就出现的隐藏实体Agent吗?现在你可以通过Fast Builder召唤它了!

　　创建Agent:

　　`agent create`

　　将Agent移动到主人身边:

　　`agent tp`

　　移动Agent:

　　`agent move [up;down;forward;back;left;right]`

　　当然还有更多命令，可以查阅Wiki的Agent部分.

## 还没弄懂?

　　没关系，你可以加入我们的交流群讨论它.

　　QQ 群: `590352162`

　　作者 QQ: `1853884864`

　　也欢迎大家对算法进行优化和补充（ '▿ ' ）

## 算法的格式和规则.
　　接下来将对此脚本的一些算法进行解析.

　　需要具备的知识:

　　要参与算法研究，需要具备基本的代数知识.具体的说，给定函数f(x) = 2x，f(5)的值是多少呢?如果你的答案是10，那就足够了.

　　你还需要熟悉三维坐标系和平面直角坐标系.

　　当然还有NodeJS基础，如果你不懂任何编程语言，那学习NodeJS是不错的选择.如果你熟悉其他语言，如Python，再学习NodeJS对你来说非常轻松.

　　
