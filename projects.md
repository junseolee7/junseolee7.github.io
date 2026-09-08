---
layout: page
title: Projects
permalink: /projects/
wide: true
---

<section class="index-section">
  <h2>Programs</h2>
  <div class="entry-list">
    {% assign program_projects = site.projects | where: 'section', 'programs' | sort: 'order' %}
    {% for project in program_projects %}{% include project-card.html project=project %}{% else %}<p>Projects will appear here as they are published.</p>{% endfor %}
  </div>
</section>
<section class="index-section">
  <h2>Computational essays</h2>
  <div class="entry-list">
    {% assign essay_projects = site.projects | where: 'section', 'essays' | sort: 'order' %}
    {% for project in essay_projects %}{% include project-card.html project=project %}{% else %}<p>Essays will appear here as they are published.</p>{% endfor %}
  </div>
</section>
