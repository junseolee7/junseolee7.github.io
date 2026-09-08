const links = [...document.querySelectorAll('.rail a')];
const sections = links.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
let scheduled = false;
function updateNavigation() {
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 48) current = section;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    current = sections.at(-1);
  }
  if (current) {
    for (const link of links) {
      if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }
  scheduled = false;
}
function scheduleNavigation() {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(updateNavigation);
  }
}
window.addEventListener('scroll', scheduleNavigation, { passive: true });
window.addEventListener('resize', scheduleNavigation);
window.addEventListener('load', scheduleNavigation);
updateNavigation();

function luminance(hex) {
  if (!/^#[a-f0-9]{6}$/i.test(hex)) return null;
  const channels = hex.match(/[a-f0-9]{2}/gi).map(c => parseInt(c, 16) / 255)
    .map(c => c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4);
  return .2126 * channels[0] + .7152 * channels[1] + .0722 * channels[2];
}
const styles = getComputedStyle(document.documentElement);
for (const element of document.querySelectorAll('[data-contrast]')) {
  const foreground = luminance(styles.getPropertyValue(`--color-${element.dataset.contrast}`).trim());
  const background = luminance(styles.getPropertyValue(`--color-${element.dataset.background || 'canvas'}`).trim());
  // Preserve the static ratio for unsupported colors.
  if (foreground === null || background === null) continue;
  element.textContent = `${((Math.max(background, foreground) + .05) / (Math.min(background, foreground) + .05)).toFixed(2)}:1`;
}
