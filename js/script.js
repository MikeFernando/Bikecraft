// ativar links do menu
const links = document.querySelectorAll('.header-menu a')

function activeLinks(link) {
  const url = location.href
  const href = link.href

  if (url.includes(href)) {
    link.classList.add('ativo')
  }
}

links.forEach(activeLinks)

// item do orçamento
const url = location.href
const getParams = new URLSearchParams(url)

function budgetParams(params) {
  const inputRadio = document.getElementById(params)
  
  if (inputRadio) {
    inputRadio.checked = true
  }
}

getParams.forEach(budgetParams)
