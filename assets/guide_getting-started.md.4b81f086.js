import{_ as e}from"./chunks/project_folder.25b3b156.js";import{_ as s,c as o,o as a,a as n}from"./app.ce41d20b.js";const l="/assets/project_folder2.432362cb.png",f=JSON.parse('{"title":"Getting Started","description":"Learn how to use Regolith.","frontmatter":{"title":"Getting Started","description":"Learn how to use Regolith."},"headers":[{"level":2,"title":"Creating a new Project","slug":"creating-a-new-project","link":"#creating-a-new-project","children":[]},{"level":2,"title":"Config file","slug":"config-file","link":"#config-file","children":[]},{"level":2,"title":"Creating your Addon","slug":"creating-your-addon","link":"#creating-your-addon","children":[]},{"level":2,"title":"Running Regolith","slug":"running-regolith","link":"#running-regolith","children":[]},{"level":2,"title":"Adding your first Filter","slug":"adding-your-first-filter","link":"#adding-your-first-filter","children":[{"level":3,"title":"Installing","slug":"installing","link":"#installing","children":[]},{"level":3,"title":"Running","slug":"running","link":"#running","children":[]}]},{"level":2,"title":"Whats Next","slug":"whats-next","link":"#whats-next","children":[]}],"relativePath":"guide/getting-started.md","lastUpdated":1668393841000}'),t={name:"guide/getting-started.md"},r=n('<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>To get started with Regolith, you should first read our <a href="/guide/what-is-regolith">introduction</a> page, and the <a href="/guide/installing">installation</a> page.</p></div><p>You can test for installation by running <code>regolith</code> inside of a terminal. This guide will assume you have installed regolith directly, but you can follow along with a stand-alone build. Just ensure that the executable is placed inside of your project folder.</p><p>If you run into issues installing, you can check our <a href="/guide/troubleshooting">troubleshooting guide</a> for tips.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Regolith is a command line application. It assumes some familiarity with how to navigate and use the command line. You can get a refresher <a href="https://tutorial.djangogirls.org/en/intro_to_command_line/" target="_blank" rel="noreferrer">here</a>.</p></div><h2 id="creating-a-new-project" tabindex="-1">Creating a new Project <a class="header-anchor" href="#creating-a-new-project" aria-hidden="true">#</a></h2><p>To create a new project, navigate to a blank folder, and run <code>regolith init</code>. This will create a few files:</p><p><img src="'+e+`" alt=""></p><p>In short:</p><ul><li><code>.regolith</code> is a special folder that regolith uses to store data. You don&#39;t need to look here.</li><li><code>packs/BP</code> stores your behavior pack.</li><li><code>packs/RP</code> stores your resource pack.</li><li><code>packs/data</code> is a special folder that filters can use to store data.</li><li><code>config.json</code> is the configuration file for Regolith.</li><li><code>.gitignore</code> is a file which tells <a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git source control</a> to ignore certain files. It&#39;s not a partof of Regolith but we highly recommend using Git to manage your projects.</li></ul><h2 id="config-file" tabindex="-1">Config file <a class="header-anchor" href="#config-file" aria-hidden="true">#</a></h2><p>Next, open up <code>config.json</code>. We will be configuring a few fields here, for your addon.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Project name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Enter your pack name here. (Example: spooky_gravestones)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Your name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// Enter your author name here. (example: SirLich)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">packs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">behaviorPack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./packs/BP</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">resourcePack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./packs/RP</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">regolith</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">profiles</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">filters</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">export</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">readOnly</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">filterDefinitions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">dataPath</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./packs/data</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Later on you can play with the additional configuration options, but for now, just set a project name, and author name.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>We suggest using a name like <code>dragons</code> or <code>cars</code> for the project name, as opposed to <code>My Dragon Adventure Map</code>, since the project name will be used as the folder name for the final export if you&#39;re using the <a href="/guide/export-targets">&quot;development&quot; export target</a>.</p></div><h2 id="creating-your-addon" tabindex="-1">Creating your Addon <a class="header-anchor" href="#creating-your-addon" aria-hidden="true">#</a></h2><p>At this point, you will want to add some files into your regolith project. If you have an existing project, you can copy/paste the files into the <code>RP</code> (resource pack) and <code>BP</code> (behavior pack) folders.</p><p>If you don&#39;t have an addon prepared, you may also create a fresh one directly in your project folder, following the normal rules. Add a <code>manifest.json</code>, a <code>pack_icon.png</code>, and any other files you want. The files should go directly into the <code>RP</code> and <code>BP</code> folders, like this:</p><p><img src="`+l+`" alt=""></p><h2 id="running-regolith" tabindex="-1">Running Regolith <a class="header-anchor" href="#running-regolith" aria-hidden="true">#</a></h2><p>There are two ways of running Regolith profiles <code>regolith run</code> and <code>regolith watch</code>. They both run a profile defined in <code>config.json</code> file.</p><p>The <code>regolith run [profile-name]</code> command runs provided profile once. If you don&#39;t specify a profile, it will run the profile named &quot;default&quot;.</p><p>The <code>regolith watch [profile-name]</code> command works the same as <code>regolith run</code>, but it will watch your source files and rerun the profile when they change. If you&#39;re using <code>regolith run</code> you have to do it manually every time.</p><p>By default the export is set to &quot;development&quot;, which means that the files will be copied to the <code>development_behavior_packs</code> and <code>development_resource_packs</code> folders of <code>com.mojang</code>. The names of folders created in this export mode are based on the name of the project like <code>project_name_bp</code> and <code>project_name_rp</code>.</p><h2 id="adding-your-first-filter" tabindex="-1">Adding your first Filter <a class="header-anchor" href="#adding-your-first-filter" aria-hidden="true">#</a></h2><p>Regolith contains a very powerful filter system, that allows you to write filters in many languages, as well as running existing filters from the internet. For now, we will simply use the <a href="/standard-library">standard library</a>, which is a set of approved filters that we maintain.</p><p>As an example, we will use the <code>texture_list</code> filter, which automatically creates the <code>texture_list.json</code> file for you. To learn more about this file, and why automating it is helpful, read <a href="https://wiki.bedrock.dev/concepts/texture-list.html" target="_blank" rel="noreferrer">here</a>.</p><h3 id="installing" tabindex="-1">Installing <a class="header-anchor" href="#installing" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The <code>install</code> command relies on <code>git</code>. You may download git <a href="https://git-scm.com/download/win" target="_blank" rel="noreferrer">here</a>.</p></div><p>You can install this filter by running <code>regolith install texture_list</code>, which will make the filter available for use.</p><p>The last step is selecting where/when the filter will run. In our case, we want to run the filter every time we export using the default <code>default</code> profile.</p><p>You should adjust the default profile in <code>config.json</code> to look like this:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">export</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">readOnly</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">filters</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">filter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">texture_list</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="running" tabindex="-1">Running <a class="header-anchor" href="#running" aria-hidden="true">#</a></h3><p>Now, you can re-run <code>regolith run</code>.</p><p>Check <code>com.mojang</code>, and open the new <code>texture_list.json</code> file in <code>RP/textures/texture_list.json</code>. Every time you run regolith, this file will be re-created, based on your current textures. No need to manually edit it ever again!</p><p>{: .notice--warning} <code>Warning:</code> If your resource pack already contains <code>texture_list.json</code>, you should delete it. You don&#39;t need to manually worry about it anymore - Regolith will handle it!</p><p>{: .notice--warning} <code>Warning:</code> If your project doesn&#39;t have any textures, than <code>texture_list.json</code> will simply create a blank file <code>[]</code>. Consider adding some textures to see the filter at work!</p><h2 id="whats-next" tabindex="-1">Whats Next <a class="header-anchor" href="#whats-next" aria-hidden="true">#</a></h2><p>Now that you&#39;ve created your first Regolith project, and installed your first filters, you are well on your way to being a Regolith expert! You should check out the <a href="/standard-library">standard library</a>, to see if additional filters might be useful for you.</p><p>Otherwise, you can learn about writing <a href="/guide/custom-filters">custom filters</a> or dive deeper into Regolith commands by reading about <a href="/guide/filter-run-modes">Filter Run Modes</a> and <a href="/guide/installing-filters">Installing and Updating Filters</a>.</p>`,41),p=[r];function i(c,d,u,y,D,h){return a(),o("div",null,p)}const C=s(t,[["render",i]]);export{f as __pageData,C as default};
