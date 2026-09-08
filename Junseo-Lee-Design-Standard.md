# Junseo Lee Design Standard

**Version:** 1.0

**Effective date:** September 6, 2026

**Status:** Approved

**Owner:** Junseo Lee

## 1. Scope and governing principles

This standard governs the presentation of Junseo Lee’s personally branded websites, documents, and presentations. Its purpose is to make work clear, precise, readable, and recognizably consistent.

Research figures and diagrams are outside the scope of version 1.0.

Shared principles define typography, color, hierarchy, spacing, and editorial presentation. Each medium has its own numerical implementation rules. Scientific accuracy, accessibility, and required institutional or publication formats take precedence over aesthetic preferences. Required venue conventions govern the relevant deliverable; this personal standard governs the choices they leave open.

### Visual character

Junseo Lee’s visual identity is clear, precise, and understated. Typography, spacing, and alignment establish hierarchy. Color provides deliberate emphasis, and decorative elements serve an identifiable communicative purpose.

Consistency comes from shared design choices that remain recognizable across formats. Layout, scale, and density adapt to the medium, audience, and reading conditions while preserving that identity.

Website favicon and touch icons are intentionally unset pending selection of an icon.

This document is the governing specification. Implementation files must follow the approved rules below.

## 2. Typeface roles and units

| Role | Typeface | Treatment |
|---|---|---|
| Headings and titles | Source Sans 3 | Primarily semibold; hierarchy established through size, weight, and spacing |
| Body text and interface labels | Source Sans 3 | Regular for sustained reading; medium or semibold for selective emphasis |
| Code and literal technical identifiers | JetBrains Mono | Preserve meaningful indentation and distinguish code from surrounding prose |
| Mathematical notation | A suitable mathematical typeface supported by the medium | Use proper mathematical typesetting and maintain legibility alongside surrounding text |

Weight 400 is regular, 500 is medium, and 600 is semibold.

Website pixel equivalents assume a 16 px browser default. Respect the reader’s font settings and implement text sizes using relative units. Document and presentation sizes use points (pt).

Line height is a multiplier of font size unless the rule explicitly says to inherit the surrounding line spacing. For example, 12 pt body text at 1.50 uses 18 pt line spacing. Paragraph spacing is specified separately.

## 3. Typography

### 3.1 Websites

All non-code roles use Source Sans 3. Code uses JetBrains Mono.

| Role | Size | Weight | Line height |
|---|---:|---:|---:|
| Display | 52–80 px, fluid | 600 | 1.02 |
| Page heading | 40–56 px, fluid | 600 | 1.16 |
| Section heading | 32 px | 600 | 1.16 |
| Subheading | 24 px | 600 | 1.30 |
| Lead paragraph | 22 px | 400 | 1.50 |
| Profile item title | 18 px | 600 | 1.60 |
| About, Projects, and Writings item description | 16 px | 400 | 1.60 |
| Profile date and location label | 14 px | 400 | 1.50 |
| General website copy | 18 px | 400 | 1.60 |
| Sustained reading | 18 px | 400 | 1.70 |
| Navigation and ordinary interface labels | 16 px | 400 | 1.60 |
| Button labels | 16 px | 500 | 1.20 |
| Metadata, captions, and tags | 14 px | 400 | 1.50 |
| Design-system reference annotations | 14 px | 400 | 1.50 |
| Table body | 16 px | 400 | 1.50 |
| Table headers | 14 px | 600 | 1.50 |
| Code blocks | 14 px | 400 | 1.80 |
| Inline code | 14 px | 400 | Inherit surrounding text |

Apply the body-text rule to the individual text block:

- General website copy includes introductions and standalone summaries. Descriptions in About, Projects, and Writings lists use the shared item-description treatment below.
- Sustained reading includes articles, essays, and long explanatory passages.

Profile entries use a 32 px section heading, an 18 px semibold item title in charcoal, and a 16 px regular description in secondary gray. Keep an 8 px gap between the item title and description. This applies across education, experience, leadership, invited talks, honors and awards, and certificates and licenses. Dates and location labels share the 14 px regular metadata treatment with 1.50 line height. Place each location or venue label above its item title with an 8 px gap. Location labels use the palette's teal; dates use secondary gray and place names within titles remain charcoal.

Descriptions in About, Projects, and Writings lists share one typography rule: 16 px, weight 400, 1.60 line height, and secondary gray (`#595959`). The same rule applies to archive entries, related-writing cards, and the design-reference examples. Site layouts must not override this description typography; dates, locations, and recognition labels retain their metadata treatments.

Separate consecutive profile entries with a 1 px light-gray rule (`#DEDEDE`) spanning the entry column, with 16 px of space on each side. Add rules only between entries; the section retains its own full-width divider.

Keep Honors & Awards separate from Certificate & Licenses. List repeated honors' terms one per line in the date field, without repeating them in the description. Use the shared profile list component for both sections.

Project recognition labels appear above the item title with an 8 px gap; recognition links use the palette's blue. Tags stay below the description. Dates, location labels, recognition labels, and tags share a single typography rule: 14 px, weight 400, and 1.50 line height. Tags remain neutral and compact, with white background, secondary-gray text, a 1 px light-gray border, 4 px corner radius, and 0 px vertical / 8 px horizontal padding. Separate tags by 8 px and place their group 16 px below the description.

Use semantic heading levels to represent document structure. Use the display treatment selectively where the composition calls for additional prominence. A lead paragraph is an introduction given additional prominence.

#### Responsive heading sizes

At the default browser font size:

| Role | Minimum size | Scaling interval: viewport width | Maximum size |
|---|---:|---|---:|
| Display | 52 px | 500–1,200 px | 80 px |
| Page heading | 40 px | 560–1,360 px | 56 px |

Sizes scale continuously within these intervals and stay at their respective minimum or maximum outside them. These rules correspond to the existing relative-unit expressions:

~~~css
--text-display: clamp(3.25rem, 2rem + 4vw, 5rem);
--text-h1: clamp(2.5rem, 1.8rem + 2vw, 3.5rem);
~~~

The pixel equivalents and viewport boundaries change when the browser’s default font size changes.

Use 14 px for metadata, location labels, captions, tags, and design-system reference annotations. About, Projects, and Writings item descriptions use 16 px as specified above.

Inline code preserves the surrounding paragraph’s line spacing. Code blocks use their own line spacing and preserve meaningful indentation.

### 3.2 Documents

Document typography uses Source Sans 3 throughout, with JetBrains Mono for code.

| Role | Size | Weight | Line height |
|---|---:|---:|---:|
| Document title | 28 pt | 600 | 1.20 |
| Major section heading | 20 pt | 600 | 1.20 |
| Subsection heading | 16 pt | 600 | 1.20 |
| Lower-level heading | 13 pt | 600 | 1.20 |
| Lead paragraph | 14 pt | 400 | 1.40 |
| Body text | 12 pt | 400 | 1.50 |
| Captions, metadata, and footnotes | 10 pt | 400 | 1.40 |
| Table body | 11 pt | 400 | 1.40 |
| Table headers | 11 pt | 600 | 1.40 |
| Code blocks | 10 pt | 400 | 1.40 |

Inline code uses JetBrains Mono at 11 pt within ordinary body text and inherits the surrounding line spacing.

### 3.3 Presentations

The presentation baseline is a 16:9 slide measuring 13⅓ × 7½ inches, equivalent to 960 × 540 pt.

Presentation typography uses Source Sans 3 throughout, with JetBrains Mono for code.

| Role | Size | Weight | Line height |
|---|---:|---:|---:|
| Opening title or section-divider title | 48 pt | 600 | 1.10 |
| Ordinary slide title | 36 pt | 600 | 1.15 |
| Subheading within a slide | 28 pt | 600 | 1.20 |
| Main body text and bullets | 24 pt | 400 | 1.25 |
| Supporting text | 20 pt | 400 | 1.25 |
| Captions, source credits, and metadata | 18 pt | 400 | 1.25 |
| Table body | 20 pt | 400 | 1.25 |
| Table headers | 20 pt | 600 | 1.25 |
| Code blocks | 18 pt | 400 | 1.40 |

Use weight 600 for selective emphasis within body text.

Preserve the specified text sizes by shortening content, distributing it across additional slides, or placing supplementary detail in speaker notes. Code examples should contain only the lines needed to support the explanation.

Inline code matches the surrounding text size and inherits its line spacing.

## 4. Color

### 4.1 Neutral foundation

| Role | Color | Use |
|---|---|---|
| Main background | White `#FFFFFF` | Page and slide backgrounds |
| Subtle surface | Light gray `#F5F5F5` | Code blocks, table headers, and selected supporting areas |
| Hover surface | Gray `#EDEDED` | Website interaction feedback |
| Primary text | Charcoal `#191919` | Headings, body text, and primary controls |
| Secondary text | Dark gray `#595959` | Captions, metadata, and supporting text |
| Decorative divider | Light gray `#DEDEDE` | Rules and separators |
| Control border | Medium gray `#858585` | Website control boundaries that need to be identifiable |
| Inverse text | White `#FFFFFF` | Text on charcoal backgrounds |
| Primary-button hover | Dark gray `#363636` | Website primary-button interaction feedback |

White and charcoal establish the dominant visual identity. Gray surfaces group related content where useful. Typography, spacing, and alignment remain the primary means of organizing information.

Use secondary text color according to the text’s supporting role. Keep essential instructions and main content in the primary text color.

### 4.2 Accent roles

| Accent | Foreground | Light tint | Approved role |
|---|---|---|---|
| Blue | `#2358C5` | `#EDF3FF` | Signature accent, selected references, primary emphasis, and website keyboard focus |
| Teal | `#13776C` | `#EDF7F5` | Explanatory callouts: definitions, worked examples, and supporting explanations |
| Amber | `#965B13` | `#FFF5E7` | Occasional important qualifications that materially affect interpretation or a decision |

Use accents selectively. Keep ordinary headings, body text, primary buttons, and large backgrounds neutral.

Apply the accent assigned to an individual note, label, or highlighted passage consistently within it. Website keyboard focus remains blue regardless of the surrounding accent.

Pair color with meaningful wording or another visual cue. A qualification should explicitly identify its assumption, limitation, or scope condition. An ordinary assumption or scope note does not automatically require amber.

Teal has an approved explanatory role. Apply it to a callout’s label and restrained left border; its light tint may provide a background when additional grouping is useful. Keep the explanatory body text charcoal. Labels may include “Definition,” “Worked example,” or “Implementation note.”

Keep ordinary supporting information in the main text flow with neutral styling when separate grouping would not help the reader. Apply these roles consistently across websites, documents, and presentations.

### 4.3 Contrast reference

The following contrast ratios were calculated for the stated foreground/background pairs during approval:

| Foreground | On white | On its paired light tint |
|---|---:|---:|
| Blue | 6.41:1 | 5.76:1 |
| Teal | 5.41:1 | 4.95:1 |
| Amber | 5.52:1 | 5.12:1 |

All listed pairs exceed the 4.5:1 minimum for ordinary text described in [W3C’s contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). The palette’s semantic roles are this standard’s conventions; labels and other cues carry meaning alongside color, consistent with [W3C’s use-of-color guidance](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html).

## 5. Layout and spacing

### 5.1 Websites

Website layouts use consistent alignment and spacing to make content relationships clear.

| Property | Specification |
|---|---|
| Maximum main content width | 1,152 px, centered |
| Maximum prose width | 65ch |
| Outer horizontal gutters | 4% of viewport width, with a minimum of 20 px and a maximum of 64 px |
| Spacing scale | 4, 8, 12, 16, 24, 32, 48, 64, and 96 px |
| Between prose paragraphs | 24 px |
| Before a major section heading within prose | 48 px |
| Before a subsection heading within prose | 32 px |
| Between a prose heading and its following content | 24 px |

Website pixel equivalents assume a 16 px browser default. Implement dimensions using relative units. The gutter rule corresponds to `clamp(1.25rem, 4vw, 4rem)`.

Keep continuous prose within the reading column. Wider layouts may use the main content width when their content requires it.

The `ch` unit is based on the width of the font’s “0” character. A maximum of 65ch is a font-relative reading measure, not a literal limit of 65 characters per line.

The specified spacing represents the resulting gap between elements. At the beginning of a content block, omit unnecessary space above its first heading.

### 5.2 Documents

| Property | Specification |
|---|---|
| Default page | A4 portrait, 210 × 297 mm |
| Page margins | 25.4 mm on all sides |
| Main layout | One column |
| Body alignment | Left aligned |
| First-line paragraph indent | None |
| Between body paragraphs | 8 pt |
| Major section heading spacing | 24 pt before, 12 pt after |
| Subsection heading spacing | 16 pt before, 8 pt after |
| Lower-level heading spacing | 12 pt before, 8 pt after |
| Page numbers | Bottom right, using the approved metadata typography |

Use US Letter or another page format when required by the recipient or venue.

Keep headings together with at least two lines of their following text. Avoid leaving a single line of a paragraph at the top or bottom of a page. Omit unnecessary space above headings that begin a page.

Align tables and supporting content with the main text column. Repeat table headers when a table continues onto another page.

Use paragraph styles and spacing settings to control layout.

### 5.3 Presentations

Use the slide size and typography in section 3.3.

| Property | Specification |
|---|---|
| Main content margins | 48 pt on all sides |
| Default alignment | Left aligned |
| Default layout | One column; two columns for comparisons or paired content |
| Gap between columns | 24 pt |
| Between the slide title and main content | 24 pt |
| Between distinct content groups | 24 pt |
| Between bullet items | 12 pt |
| Between an illustration or table and its caption | 8 pt |
| Footer placement, when needed | Text box bottom edge 48 pt from the slide’s bottom edge |
| Footer alignment | Source credits on the left; slide number on the right |
| Clearance above the footer | At least 24 pt |

Give each slide one primary message. Align text and other content to common edges.

Keep title and footer positions consistent across ordinary content slides. Opening and section-divider slides may use a different vertical composition while retaining the shared margins and typography.

When a bullet wraps, align its subsequent lines with the first line’s text. Keep bullet indentation consistent throughout the deck.

Preserve the approved font sizes by editing or distributing content across slides. Place supplementary detail in speaker notes when appropriate.

## 6. Callouts and tables

| Component | Treatment |
|---|---|
| Explanatory callout | Teal label and left border, optional teal tint, charcoal body text |
| Important qualification | Amber label and left border, optional amber tint, charcoal body text |
| Table | Light-gray header background, white body, restrained horizontal rules |
| Table alignment | Text aligned left; numerical values aligned right |

Callout labels use semibold text. Their body text follows the approved body typography for the medium.

Use callouts when separating supporting information helps the reader. Keep ordinary explanations within the main text flow.

Tables use the approved table typography. Omit vertical gridlines and use consistent column alignment to organize the content.

| Measurement | Websites | Documents | Presentations |
|---|---:|---:|---:|
| Callout inner padding | 16 px | 12 pt | 18 pt |
| Callout left-border thickness | 2 px | 1.5 pt | 2 pt |
| Callout corner radius | 4 px | 3 pt | 4 pt |
| Table horizontal-rule thickness | 1 px | 0.75 pt | 1 pt |
| Table cell padding, vertical / horizontal | 16 / 16 px | 6 / 8 pt | 8 / 12 pt |

Website pixel equivalents assume a 16 px browser default. Callout padding applies on all four sides.

## 7. Website interaction rules

| Element | Specification |
|---|---|
| Inline text links | Underlined; use blue for selected references and primary emphasis |
| Link hover | Increase underline thickness from 1 px to 2 px |
| Navigation labels | Sentence case; underline the current page |
| Primary button | Charcoal background, white text |
| Primary button hover | Background changes to `#363636` |
| Secondary button | White background, charcoal text, 1 px `#858585` border |
| Secondary button hover | Background changes to `#EDEDED` |
| Button dimensions | Minimum height 44 px; horizontal padding 20 px; vertically centered text |
| Button shape | Fully rounded ends |
| Keyboard focus | Blue outline, 2 px thick, offset 5 px from the element |
| Simple transitions | 160 ms with `ease` timing |

Use the approved interface typography. Allow controls to grow when text wraps or the reader enlarges it.

Make keyboard focus immediately visible. Provide essential information and actions without requiring hover.

Respect reduced-motion preferences by disabling optional transitions. Use motion to communicate interaction feedback.

Website pixel equivalents assume a 16 px browser default; use relative units for dimensions that should scale with text.

## 8. Editorial conventions

| Area | Convention |
|---|---|
| Headings and labels | Use sentence case. Preserve the established capitalization of proper names, acronyms, and cited titles. |
| Metadata | Use natural sentences, separate lines, or labeled fields. Do not use dots to separate metadata items or standalone words and phrases. |
| Emphasis | Use bold selectively for important wording. Use italics where appropriate for titles, terminology, or established notation. |
| Lists | Use lists for parallel items or sequential steps. Use connected prose for explanations that develop an argument. |
| Dates and times | Use unambiguous reader-facing dates, such as “September 6, 2026.” Include a time zone when interpreting a time depends on it. |
| Links and attribution | Use descriptive link text. Identify sources clearly and retain necessary attribution for borrowed material. Follow required citation conventions. |
| Numbers and units | State units clearly. Use consistent formatting for comparable values while preserving meaningful precision. |
| Mathematics and code | Use proper mathematical typesetting. Preserve notation, code characters, and meaningful indentation. |
| Illustrative examples | Identify examples as illustrative when readers could otherwise mistake them for actual findings or results. |

Write titles, labels, and explanatory text in clear, specific language. Preserve the author’s intended meaning and voice.

Metadata may be presented as:

Version: 1.0

Effective date: September 6, 2026

Status: Approved

## 9. Release and implementation notes

Version 1.0 consolidates the decisions approved by Junseo Lee on September 5–6, 2026. It establishes the shared identity, numerical rules for the three scoped media, color roles, component treatments, website interactions, and editorial conventions.

The shared styles and visual reference page in `design-system/` implement the approved website rules. The reference page also lists the approved document and presentation specifications. Document and presentation templates have not been created as part of this release. The main Jekyll website uses the same shared styles. Its site-specific typography overrides and visible metadata separators are also aligned with version 1.0.

### Related repository files

| File | Relationship to this standard |
|---|---|
| `Junseo-Lee-Design-Standard.md` | Governing specification |
| `design-system/tokens.css` | Approved website fonts, color tokens, type scale, line heights, spacing, and dimensions |
| `design-system/components.css` | Website components implementing version 1.0 |
| `design-system/index.html` | Visual examples and reference tables for version 1.0 |
| `design-system/specimen.css` | Layout and annotation styles for the reference page |
| `design-system/specimen.js` | Reference-page section indication and contrast labels |
| `assets/site.css` | Main website layout and typography aligned with the shared rules |
| `design-system/assets/` | Self-hosted fonts and accompanying licenses |
| `assets/images/` | Profile, advisor, and article images |

Implementation paths updated September 8, 2026. Website profile-entry typography and location-label color were refined at Junseo's request on September 8, 2026; the document and presentation rules are unchanged.
