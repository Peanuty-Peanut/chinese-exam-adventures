# 中文期中复习：两个独立应用

为三年级母语中文期中复习制作。两个应用有独立入口、界面、离线缓存和学习记录；不会互相混合进度。

- **背诵森林**：`oral/`。五首古诗、P44和P56日积月累、《秋天的雨》第二自然段；全文/提示/独立背、中文朗读、设备本地录音回听、随机抽背、孩子或家长核对、学习备份。
- **语文探险岛**：`written/`。七篇指定课文、163道练习、笔试前八类题型与独立写作工坊；键盘与纸笔/触屏手写模式、即时讲解、错题隔日复测、三种作文提纲与草稿保存。

## 两个独立访问地址

- 口试「背诵森林」：https://peanuty-peanut.github.io/chinese-exam-adventures/oral/
- 笔试「语文探险岛」：https://peanuty-peanut.github.io/chinese-exam-adventures/written/

## 使用说明

口试先试背，再对照原文查缺漏。录音仅保留在本页，离开后清除；不上传，也不自动评分。中文朗读需要设备提供中文语音；多音字应参考注音及教师指导。

笔试客观题自动核对；阅读简答、换部首的自由答案、手写和作文由孩子或家长按清单核对，不冒充AI评分。错题在两个不同日期核对通过后，退出待复练列表。

进度保存在浏览器本地。两个应用分别导出/导入备份，可转移到另一设备；不进行账号云同步。清除浏览器数据会清除本机记录。第一次完整联网打开后，主要内容可离线访问。首次麦克风使用由浏览器请求许可；拒绝后仍可正常使用其他功能。

## 范围与资料依据

2026年11月6日口试、11月10日笔试。按用户提供的学校考纲、五四学制人教版三年级上册课本目录和相关页照片，以及既往练习中出现的题型整理。公开仓库不含学校原始文件、练习照片、私人作答或学习记录。

课文范围：大青树下的小学、花的学校、铺满金色巴掌的水泥道、秋天的雨、总也倒不了的老屋、在牛肚子里旅行、搭船的鸟。以综练后所学篇目为主。

《舟夜书所见》的“见”按 jiàn 标注；若教师有明确课堂读法，需先核实并统一。古诗接句属于辅助巩固，不扩充学校默写要求。考试限时、扣分、作文题目/字数/段数均未擅自设定。新编题目是家庭练习，不是真题预测，不能代替老师的最新复习资料。

三篇课外阅读为本应用原创。古诗原文和课文引文的权利归各自权利人。

## 本地运行与验证

无需安装依赖、无需构建。根目录运行：

```sh
python3 -m http.server 4173
```

分别打开 `http://localhost:4173/oral/` 和 `http://localhost:4173/written/`。

逻辑和范围测试：`node --test tests/core.test.mjs`。

内容在 `oral/content.json`、`written/content.json`。两套界面分别在各自的 `app.js`，仅共享 `core.js` 和 `style.css`。

## GitHub Pages

从仓库 `main` 分支根目录发布；`.nojekyll` 禁用 Jekyll。公开地址分别以 `/oral/` 和 `/written/` 结尾，没有合并的主应用。相对资源路径支持 GitHub 仓库子路径。

技术参考：[GitHub Pages 发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)、[浏览器中文语音列表](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices)。
