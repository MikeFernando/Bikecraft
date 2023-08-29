const links = document.querySelectorAll('.header-menu a')

function activeLinks(link) {
  const url = location.href
  const href = link.href

  if (url.includes(href)) {
    link.classList.add('ativo')
  }
}

links.forEach(activeLinks)