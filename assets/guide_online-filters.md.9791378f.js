import{_ as e,c as s,o as a,a as l}from"./app.ce41d20b.js";const y=JSON.parse('{"title":"Online Filters","description":"","frontmatter":{"title":"Online Filters"},"headers":[{"level":2,"title":"Creating Online Filter","slug":"creating-online-filter","link":"#creating-online-filter","children":[{"level":3,"title":"filter.json","slug":"filter-json","link":"#filter-json","children":[]}]},{"level":2,"title":"Data Folder","slug":"data-folder","link":"#data-folder","children":[]},{"level":2,"title":"Test Folder","slug":"test-folder","link":"#test-folder","children":[]}],"relativePath":"guide/online-filters.md","lastUpdated":1668393841000}'),n={name:"guide/online-filters.md"},o=l(`<h1 id="online-filters" tabindex="-1">Online Filters <a class="header-anchor" href="#online-filters" aria-hidden="true">#</a></h1><p>Regolith allows custom filters to be placed on GitHub. This is perfect for a filter that you want to make public, or potentially share internally in a team.</p><p>The standard <a href="/standard-library">filters library</a> is a good reference for how to structure an online filter, but we will also explain here.</p><h2 id="creating-online-filter" tabindex="-1">Creating Online Filter <a class="header-anchor" href="#creating-online-filter" aria-hidden="true">#</a></h2><p>To create an online filter, your github project needs to be structured in a certain way. For starters, every filter needs its own folder, at the top of the github project. This folder name is very important, as it will be the name of the filter.</p><p>You should move your programs and scripts into this folder. When your filter is installed, everything in this folder will be downloaded.</p><h3 id="filter-json" tabindex="-1">filter.json <a class="header-anchor" href="#filter-json" aria-hidden="true">#</a></h3><p><code>filter.json</code> is a special file, which you should place at the top level of your filters folder. Once again, check out the standard-library for examples of a property structured regolith filter.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A Hello World Filter - this will be displayed as a description on website pages.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">filters</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">runWith</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">python</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">script</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./hello_world.py</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="data-folder" tabindex="-1">Data Folder <a class="header-anchor" href="#data-folder" aria-hidden="true">#</a></h2><p>If you need some default configuration files for your remote filter, you can create a folder called <code>data</code> in your filter folder. Here, you can store your default configuration files. When a user runs <code>regolith install</code>, this data folder will be moved into their data folder, namespaced under the name of the filter.</p><p>You can learn more about this flow <a href="/guide/data-folder">here</a>.</p><h2 id="test-folder" tabindex="-1">Test Folder <a class="header-anchor" href="#test-folder" aria-hidden="true">#</a></h2><p>It may be useful to you to include a test project, or test files, which are useful for development, but don&#39;t need to be downloaded by the end user. Anything placed in the <code>test</code> folder will not be installed by Regolith, and you can use this space for your own development.</p>`,14),t=[o];function r(i,p,c,d,f,h){return a(),s("div",null,t)}const D=e(n,[["render",r]]);export{y as __pageData,D as default};
