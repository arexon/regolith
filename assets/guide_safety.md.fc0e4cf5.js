import{_ as e,c as t,o as i,a}from"./app.ce41d20b.js";const p=JSON.parse(`{"title":"Safety","description":"","frontmatter":{"title":"Safety"},"headers":[{"level":2,"title":"Why is Regolith Unsafe?","slug":"why-is-regolith-unsafe","link":"#why-is-regolith-unsafe","children":[]},{"level":2,"title":"Why isn't Regolith Sandboxed?","slug":"why-isn-t-regolith-sandboxed","link":"#why-isn-t-regolith-sandboxed","children":[]}],"relativePath":"guide/safety.md","lastUpdated":1668393841000}`),o={name:"guide/safety.md"},s=a('<h1 id="safety" tabindex="-1">Safety <a class="header-anchor" href="#safety" aria-hidden="true">#</a></h1><p>Please be aware that Regolith is only intended to be used by users experienced with working inside command prompt. Due to the extreme power and flexibility that Regolith offers, there is an increased chance of harm to your system, if used improperly. We cannot accept any liability. You are fully responsible for the safety of your system.</p><h2 id="why-is-regolith-unsafe" tabindex="-1">Why is Regolith Unsafe? <a class="header-anchor" href="#why-is-regolith-unsafe" aria-hidden="true">#</a></h2><p>Regolith has the ability to run arbitrary code. This code is not sandboxed, and could damage your system. When writing your own filters, you are responsible to write safe code!</p><p>Regolith also comes with the ability to download third-party filters from the internet. Regolith does not check these filters for safety. Only download and run internet filters if you are absolutely positive the author is trustworthy.</p><p>A compromised filter is able to completely destroy your system.</p><h2 id="why-isn-t-regolith-sandboxed" tabindex="-1">Why isn&#39;t Regolith Sandboxed? <a class="header-anchor" href="#why-isn-t-regolith-sandboxed" aria-hidden="true">#</a></h2><p>Software sandboxing is extremely difficult, especially since Regolith offers run targets in multiple languages, as well as a native shell integration.</p><p>Sandboxing would also limit the things our users can do. Currently, anything possible with programming can be integrated with Regolith! Sandboxing would limit this.</p><p>Additionally, we believe sandboxing may give our users a false sense of security. Since no sandbox is foolproof, we prefer our users to operate with full caution, rather than trust an imperfect solution to guard them.</p>',10),r=[s];function n(l,h,d,y,f,u){return i(),t("div",null,r)}const g=e(o,[["render",n]]);export{p as __pageData,g as default};
