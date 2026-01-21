---
layout: default
title: 首页
permalink: /
---

<section class="hero">
  <div class="container hero-grid">
    <div class="hero-text">
      <h1>你好，我是 <span>DZW0703</span></h1>
      <p class="lead">前端工程师 · 开源爱好者 · 喜欢把复杂的问题变简单</p>
      <p class="cta">
        <a class="btn primary" href="#projects">查看我的项目</a>
        <a class="btn" href="/files/简历.pdf" download>下载简历</a>
      </p>
      <p class="socials">
        <a href="https://github.com/DZW0703" target="_blank" rel="noopener">GitHub</a> ·
        <a href="#" target="_blank" rel="noopener">Twitter</a> ·
        <a href="#" target="_blank" rel="noopener">LinkedIn</a>
      </p>
    </div>
    <div class="hero-card">
      <img src="https://avatars.githubusercontent.com/u/0?v=4" alt="头像示例" class="avatar" />
      <ul class="meta-list">
        <li><strong>位置</strong><span>城市, 国家</span></li>
        <li><strong>职位</strong><span>前端 / 全栈</span></li>
        <li><strong>邮箱</strong><span><a href="mailto:you@example.com">you@example.com</a></span></li>
      </ul>
    </div>
  </div>
</section>

<section id="about" class="section">
<div class="container">
<h2>关于我</h2>
<p>这里写一段短简介：技术栈、兴趣、目前在做的事情、想要寻找的机会等。</p>
<div class="skills">
  <span class="skill">HTML</span>
  <span class="skill">CSS</span>
  <span class="skill">JavaScript</span>
  <span class="skill">React</span>
  <span class="skill">Node.js</span>
</div>
</div>
</section>

<section id="projects" class="section alt">
<div class="container">
<h2>项目</h2>
<div class="projects-grid">
  <article class="project-card">
    <h3><a href="#">项目名称 A</a></h3>
    <p>项目简述。使用技术、目标与你的贡献。</p>
    <p class="meta"><a href="#">源码</a> · <a href="#">演示</a></p>
  </article>
</div>
</div>
</section>

<section id="blog" class="section">
<div class="container">
<h2>博客</h2>
<ul class="post-list">
  {% for post in site.posts limit:5 %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> <small>· {{ post.date | date: "%Y-%m-%d" }}</small></li>
  {% endfor %}
</ul>
</div>
</section>

<section id="contact" class="section alt">
<div class="container">
<h2>联系我</h2>
<form id="contact-form" class="contact-form" action="https://formspree.io/f/你的表单ID" method="POST">
  <label>
    <span>姓名</span>
    <input name="name" required />
  </label>
  <label>
    <span>邮箱</span>
    <input name="email" type="email" required />
  </label>
  <label>
    <span>信息</span>
    <textarea name="message" rows="5" required></textarea>
  </label>
  <button class="btn primary" type="submit">发送</button>
</form>
</div>
</section>
