import {navigation, navClasses, heroArray, hotSales, reviews, blogCards} from './storage.js';

function createElement(tag = 'div', text = '', classList = [], attrs = {}) {
    let element = document.createElement(tag)
    element.classList.add(...classList)
    element.textContent = text
    for (const prop in attrs) {
        element[prop] = attrs[prop]
    }
    return element
}

function createNav(navArray, navItems) {
  for (const nav in navArray) {
    let inform = navArray[nav]
    let menuList = document.getElementById(inform.id)
    for (const navItem of navItems) {
      menuList.append(createNavItem(inform, navItem))
    }
  }
}

function createNavItem(info, type) {
  const liItem = createElement('li', '', [info.li])
  const linkItem = createElement('a', type.text, ['type-1', info.a], {'href': type.link})
  liItem.append(linkItem)
  return liItem
}

function burgerClick(nav, func) {
  if (nav.classList.contains('open')) {
    func.reverse()
    nav.classList.remove('open')
  } else {
    nav.classList.add('open')
    func.play()
  }
}

function createHeroCard(card) {
  const cardCont = createElement('li', '', ['hero__card'])
  const cardTextCont = createElement('div', '', ['hero__card-text'])
  const cardTextTitle = createElement('div', '', ['hero__card-tl'])
  const cardTitleIcon = createElement('span', '', ['hero__card-icon'])
  cardTitleIcon.innerHTML = card.icon
  const cardTitle = createElement('h3', card.title, ['hero__card-title'])
  const cardDescr = createElement('p', card.descr, ['hero__card-descr'])
  const cardLink = createElement('a', card.btnText, ['hero__card-btn'], {'href': '#'})
  cardTextTitle.append(cardTitleIcon, cardTitle)
  cardTextCont.append(cardTextTitle, cardDescr)
  cardCont.append(cardTextCont, cardLink)
  return cardCont
}

function renderHeroCard(array) {
  const list = document.getElementById('hero-card-list')
  for (const card of array) {
    list.append(createHeroCard(card))
  }
}

function createCard(card) {
  const cardCont = createElement('li', '', ['card'])
  const cardImg = createElement('img', '', ['card__img'], {'src': card.photo})

  const cardTextCont = createElement('div', '', ['card__text'])
  const cardTextTitle = createElement('h3', card.title, ['card__title'])
  const cardDescr = createElement('p', card.descr, ['card__descr'])
  cardTextCont.append(cardTextTitle, cardDescr)

  const cardLink = createElement('button', card.link, ['btn-reset' ,'card__btn'], {'href': '#'})
  cardCont.append(cardImg, cardTextCont, cardLink)
  return cardCont
}

function renderCard(array, arrayId) {
  const list = document.getElementById(arrayId)
  for (const cards of array) {
    list.append(createCard(cards))
  }
}

function createReviewCard(card) {
  const cardCont = createElement('li', '', ['review__card'])
  const cardImg = createElement('img', '', ['review__card-photo'], {'src': card.photo})

  const cardTextTitle = createElement('h3', card.title, ['review__card-title'])
  const cardDescr = createElement('p', card.descr, ['review__card-descr'])

  cardCont.append(cardImg, cardTextTitle, cardDescr)
  return cardCont
}

function createReviewsList(array) {
  let count = 0
  let listCount = 0
  let swiper = document.getElementById('review-list')
  let slide = createElement('div', '', ['swiper-slide'])
  let list = createElement('ul', '', ['ul-reset', 'review__card-list', listCount++])
  slide.append(list)
  swiper.append(slide)
  for (const item of array) {
    if (count == 2) {
      count = 0
      slide = createElement('div', '', ['swiper-slide'])
      list = createElement('ul', '', ['ul-reset', 'review__card-list'])
      slide.append(list)
      swiper.append(slide)
    }
    list.append(createReviewCard(item))
    count++
  }
}

createNav(navClasses, navigation)
renderHeroCard(heroArray)

document.addEventListener('DOMContentLoaded', () => {
  // Animation
  gsap.fromTo('.hero', {opacity: 1, translateY: -50},{opacity: 1, translateY: 0, duration: 1})
  
  // Reviews
  createReviewsList(reviews)
  const swiper = new Swiper('.swiper-container', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

  // HeroCards
  renderCard(hotSales, 'sales-card')
  renderCard(blogCards, 'blog-card')

  // Burger
  const burger = document.getElementById('burger-btn')
  burger.addEventListener('click', () => {
    const navBurger = document.getElementById('header-nav')
    const burgerOpen = gsap.timeline()
      .pause()
      .fromTo('.header__list', {translateY: -680 , opacity: 0.2}, {duration: 1, translateY: 680, opacity: 1})

    burgerClick(navBurger, burgerOpen)
  })

  // Fancy
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
})