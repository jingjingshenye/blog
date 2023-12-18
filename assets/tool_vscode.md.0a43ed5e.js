import{_ as t,o as e,c as l,Q as a}from"./chunks/framework.d7a29f29.js";const u=JSON.parse('{"title":"vscode 相关","description":"","frontmatter":{},"headers":[],"relativePath":"tool/vscode.md","filePath":"tool/vscode.md"}'),s={name:"tool/vscode.md"},n=a(`<h1 id="vscode-相关" tabindex="-1">vscode 相关 <a class="header-anchor" href="#vscode-相关" aria-label="Permalink to &quot;vscode 相关&quot;">​</a></h1><h2 id="快捷键" tabindex="-1">快捷键 <a class="header-anchor" href="#快捷键" aria-label="Permalink to &quot;快捷键&quot;">​</a></h2><h3 id="打开窗口" tabindex="-1">打开窗口 <a class="header-anchor" href="#打开窗口" aria-label="Permalink to &quot;打开窗口&quot;">​</a></h3><ul><li>打开命令面板：<code>ctrl + shift + p</code></li><li>打开设置：<code>ctrl +,</code></li><li>打开终端：<code>ctrl + 、</code></li></ul><h3 id="代码操作" tabindex="-1">代码操作 <a class="header-anchor" href="#代码操作" aria-label="Permalink to &quot;代码操作&quot;">​</a></h3><ul><li>代码向左缩进：<code>ctrl + [</code></li><li>代码向右缩进：<code>ctrl + ]</code></li><li>复制或剪切当前行/当前选中内容: <code>Ctrl+C 、 Ctrl+V</code></li><li>代码格式化: <code>Shift+Alt+F</code></li><li>向上或向下移动一行: <code>Alt+Up</code> 或 <code>Alt+Down</code></li><li>向上或向下复制一行: <code>Shift+Alt+Up</code> 或 <code>Shift+Alt+Down</code></li><li>在当前行下方插入一行: <code>Ctrl+Enter</code></li><li>在当前行上方插入一行: <code>Ctrl+Shift+Enter</code></li><li>多行编辑(列编辑): <code>Alt+Shift+鼠标左键</code> 或 <code>Ctrl+Alt+Down/Up</code></li><li>注释选中内容: <code>Ctrl+/</code></li></ul><h3 id="光标移动" tabindex="-1">光标移动 <a class="header-anchor" href="#光标移动" aria-label="Permalink to &quot;光标移动&quot;">​</a></h3><ul><li>定位到某一行: <code>ctrl+G</code>,Ctrl+g 输入行数可快速的调到指定的行数上。</li><li>光标移动到上一行: <code>Up</code></li><li>光标移动到下一行: <code>Down</code></li><li>光标移动到上一个单词: <code>Ctrl+Left</code></li><li>光标移动到下一个单词: <code>Ctrl+Right</code></li><li>扩展/缩小选取范围： <code>Shift+Alt+Right</code> 和 <code>Shift+Alt+Left</code></li><li>光标移动到行首: <code>Home</code></li><li>光标移动到行尾: <code>End</code></li><li>选择从光标到行尾的内容: <code>Shift+End</code></li><li>选择从光标到行首的内容： <code>Shift+Home</code></li><li>下一个匹配的也被选中: <code>Ctrl+D</code></li><li>撤销上一步操作: <code>Ctrl+Z</code></li><li>手动保存: <code>Ctrl+S</code></li></ul><h3 id="显示" tabindex="-1">显示 <a class="header-anchor" href="#显示" aria-label="Permalink to &quot;显示&quot;">​</a></h3><ul><li>全屏显示(再次按则恢复): <code>F11</code></li><li>放大或缩小(以编辑器左上角为基准): <code>Ctrl +/-</code></li><li>侧边栏显示或隐藏： <code>Ctrl+B</code></li></ul><h2 id="vite-项目别名-项目里要可以识别" tabindex="-1">vite 项目别名，项目里要可以识别 <a class="header-anchor" href="#vite-项目别名-项目里要可以识别" aria-label="Permalink to &quot;vite 项目别名，项目里要可以识别&quot;">​</a></h2><p>jsconfig 里添加如下配置：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;baseUrl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;paths&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;@/*&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;src/*&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;baseUrl&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;paths&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;@/*&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;src/*&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="设置里自带远程同步" tabindex="-1">设置里自带远程同步 <a class="header-anchor" href="#设置里自带远程同步" aria-label="Permalink to &quot;设置里自带远程同步&quot;">​</a></h2><p>登录同一个账号，可以同步插件，设置等</p><h2 id="本地导入配置文件" tabindex="-1">本地导入配置文件 <a class="header-anchor" href="#本地导入配置文件" aria-label="Permalink to &quot;本地导入配置文件&quot;">​</a></h2><p>设置-&gt;配置文件-&gt;导入设置-&gt;选择配置文件</p><h2 id="常用插件" tabindex="-1">常用插件 <a class="header-anchor" href="#常用插件" aria-label="Permalink to &quot;常用插件&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">插件名</th><th style="text-align:center;">插件作用</th></tr></thead><tbody><tr><td style="text-align:center;">auto-rename-tag</td><td style="text-align:center;">自动命名改名标签</td></tr><tr><td style="text-align:center;">auto-close-tag</td><td style="text-align:center;">自动关闭标签</td></tr><tr><td style="text-align:center;">code-runner</td><td style="text-align:center;">代码运行器</td></tr><tr><td style="text-align:center;">css-peek</td><td style="text-align:center;">快速预览 css 属性</td></tr><tr><td style="text-align:center;">bookmark</td><td style="text-align:center;">快速书签</td></tr><tr><td style="text-align:center;">chinese</td><td style="text-align:center;">中文输入法</td></tr><tr><td style="text-align:center;">gitlens</td><td style="text-align:center;">git 增强插件</td></tr><tr><td style="text-align:center;">glsl-canvas</td><td style="text-align:center;">快速预览 glsl</td></tr><tr><td style="text-align:center;">highlight-matching-tag</td><td style="text-align:center;">高亮匹配标签</td></tr><tr><td style="text-align:center;">indent-rainbow</td><td style="text-align:center;">缩进颜色</td></tr><tr><td style="text-align:center;">path-intellisense</td><td style="text-align:center;">路径补全</td></tr><tr><td style="text-align:center;">prettier-vscode</td><td style="text-align:center;">格式化代码</td></tr><tr><td style="text-align:center;">project-manager</td><td style="text-align:center;">项目管理</td></tr><tr><td style="text-align:center;">image preview</td><td style="text-align:center;">图片预览</td></tr><tr><td style="text-align:center;">live server</td><td style="text-align:center;">本地服务器</td></tr><tr><td style="text-align:center;">vetur</td><td style="text-align:center;">vue 开发插件</td></tr><tr><td style="text-align:center;">vscode-icons</td><td style="text-align:center;">图标插件</td></tr><tr><td style="text-align:center;">vscode-svgviewer</td><td style="text-align:center;">svg 预览</td></tr><tr><td style="text-align:center;">vscode-zipfs</td><td style="text-align:center;">解压插件</td></tr><tr><td style="text-align:center;">notes</td><td style="text-align:center;">本地笔记</td></tr><tr><td style="text-align:center;">path intellisense</td><td style="text-align:center;">路径补全</td></tr><tr><td style="text-align:center;">prettier</td><td style="text-align:center;">格式化代码</td></tr><tr><td style="text-align:center;">volar</td><td style="text-align:center;">vue 开发工具</td></tr><tr><td style="text-align:center;">tongyi lingma</td><td style="text-align:center;">通义灵码</td></tr><tr><td style="text-align:center;">vue3 snippets</td><td style="text-align:center;">vue3 代码片段</td></tr><tr><td style="text-align:center;">draw.io</td><td style="text-align:center;">流程图绘制</td></tr></tbody></table>`,19),o=[n];function r(c,d,i,p,y,h){return e(),l("div",null,o)}const x=t(s,[["render",r]]);export{u as __pageData,x as default};
