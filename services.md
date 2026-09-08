---
layout: page
title: Services
permalink: /services/
wide: true
---

<section class="index-section">
  <h2>Tutoring</h2>
  <div class="entry-list">
    {% assign tutoring_services = site.services | where: 'section', 'tutoring' | sort: 'order' %}
    {% for service in tutoring_services %}{% include service-card.html service=service %}{% else %}<p>Details coming soon.</p>{% endfor %}
  </div>
</section>
<section class="index-section">
  <h2>Consulting</h2>
  <div class="entry-list">
    {% assign consulting_services = site.services | where: 'section', 'consulting' | sort: 'order' %}
    {% for service in consulting_services %}{% include service-card.html service=service %}{% else %}<p>Available by inquiry.</p>{% endfor %}
  </div>
</section>
