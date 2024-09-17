import{c as t,r as a,m as n}from"./render-template.DNaz_h5O.js";import{u as s}from"./hoisted.CztoV7NY.js";import"./astro/assets-service.3IbH0_Ak.js";const o=`<h2 id="adding-your-own-social-image-to-a-post">Adding your own social image to a post</h2>
<p>This post is an example of how to add a custom <a href="https://ogp.me/" rel="nofollow, noopener, noreferrer" target="_blank">open graph</a> social image, also known as an OG image, to a blog post.
By adding the optional ogImage property to the frontmatter of a post, you opt out of <a href="https://github.com/vercel/satori" rel="nofollow, noopener, noreferrer" target="_blank">satori</a> automatically generating an image for this page.</p>
<p>If you open this markdown file <code>src/content/post/social-image.md</code> you’ll see the ogImage property set to an image which lives in the public folder<sup><a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup>.</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.500gk.css"><script type="module" src="/_astro/ec.sgewm.js"><\/script><figure class="frame"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><span style="--0:#8BE9FD;--1:#1E7734">ogImage</span><span style="--1:#24292E"><span style="--0:#FF79C6">:</span><span style="--0:#F8F8F2"> </span></span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">/social-card.png</span><span style="--0:#E9F284">"</span></span></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ogImage: &#x22;/social-card.png&#x22;"><div></div></button></div></figure></div>
<p>You can view the one set for this template page <a href="https://astro-cactus.chriswilliams.dev/social-card.png" rel="nofollow, noopener, noreferrer" target="_blank">here</a>.</p>
<section data-footnotes="" class="footnotes"><h2 class="" id="footnote-label">Footnotes</h2>
<ol>
<li id="user-content-fn-1">
<p>The image itself can be located anywhere you like. <a href="#user-content-fnref-1" data-footnote-backref="" aria-label="Back to reference 1" class="data-footnote-backref">↩</a></p>
</li>
</ol>
</section>`,i={title:"Example OG Social Image",publishDate:"27 January 2023",description:"An example post for Astro Cactus, detailing how to add a custom social image card in the frontmatter",tags:["example","blog","image"],ogImage:"/social-card.png",minutesRead:"1 min read"},r="/Users/ryanimpey/Documents/github/impey.dev/src/content/post/social-image.md",l=void 0;function h(){return`
## Adding your own social image to a post

This post is an example of how to add a custom [open graph](https://ogp.me/) social image, also known as an OG image, to a blog post.
By adding the optional ogImage property to the frontmatter of a post, you opt out of [satori](https://github.com/vercel/satori) automatically generating an image for this page.

If you open this markdown file \`src/content/post/social-image.md\` you'll see the ogImage property set to an image which lives in the public folder[^1].

\`\`\`yaml
ogImage: "/social-card.png"
\`\`\`

You can view the one set for this template page [here](https://astro-cactus.chriswilliams.dev/social-card.png).

[^1]: The image itself can be located anywhere you like.
`}function y(){return o}function b(){return[{depth:2,slug:"adding-your-own-social-image-to-a-post",text:"Adding your own social image to a post"},{depth:2,slug:"footnote-label",text:"Footnotes"}]}const w=t((p,c,d)=>{const{layout:g,...e}=i;return e.file=r,e.url=l,a`${n()}${s(o)}`});export{w as Content,y as compiledContent,w as default,r as file,i as frontmatter,b as getHeadings,h as rawContent,l as url};
