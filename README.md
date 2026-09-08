# Junseo Lee’s website

Jekyll source for the profile, writings, and projects at the domain in `_config.yml` and `CNAME`.

## Build

Use Ruby and the Bundler version in `Gemfile.lock`:

```sh
bundle install
bundle exec jekyll build
bundle exec jekyll serve
```

## Edit

- Profile: `index.md`
- Writings: `_posts/YYYY-MM-DD-title.md`
- Projects: `_projects/`
- Archived services, enrollment links, and policies: `archived/services/` (excluded from the website build)
- Page structure: `_layouts/` and `_includes/`

Collection metadata uses YAML lists. Set `math: true` in a page’s front matter to load MathJax.

## Design

[Junseo Lee Design Standard](Junseo-Lee-Design-Standard.md) governs the site. The [reference page](design-system/index.html) uses the same tokens and components.

- `design-system/tokens.css`: fonts and approved values.
- `design-system/components.css`: shared typography and components.
- `assets/site.css`: site layouts and article styling.
- `assets/site.js`: keyboard access to overflowing tables.
- `design-system/specimen.css` and `specimen.js`: reference page only.

Fonts and their licenses are in `design-system/assets/`; content images are in `assets/images/`. Templates are local; no Jekyll theme is enabled.

Before publishing, build and review desktop and mobile pages, navigation, tables, images, and links.
