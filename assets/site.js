// Wrap Markdown tables so wide content can scroll within the reading column.
for (const table of document.querySelectorAll('.prose table')) {
  if (table.parentElement.classList.contains('table-wrap')) continue;

  const wrapper = document.createElement('div');
  const caption = table.querySelector('caption');
  let heading = table.previousElementSibling;
  while (heading && !/^H[2-6]$/.test(heading.tagName)) {
    heading = heading.previousElementSibling;
  }

  wrapper.className = 'table-wrap';
  wrapper.setAttribute('role', 'region');
  wrapper.setAttribute(
    'aria-label',
    caption ? caption.textContent.trim() : `${heading ? heading.textContent.trim() : 'Data'} table`
  );
  table.before(wrapper);
  wrapper.append(table);
}

// Add keyboard stops only to content that overflows horizontally.
const scrollRegions = document.querySelectorAll('.table-wrap, pre');
function updateTabStop(element) {
  if (element.scrollWidth > element.clientWidth) element.tabIndex = 0;
  else element.removeAttribute('tabindex');
}

scrollRegions.forEach(updateTabStop);
if ('ResizeObserver' in window) {
  const observer = new ResizeObserver(entries => {
    entries.forEach(entry => updateTabStop(entry.target));
  });
  scrollRegions.forEach(element => observer.observe(element));
} else {
  window.addEventListener('resize', () => scrollRegions.forEach(updateTabStop));
}
