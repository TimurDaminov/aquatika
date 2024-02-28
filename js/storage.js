export const icons = {
    'card-diving': `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9 2.21667C16.0667 2.03333 15.45 1.04167 14.6417 0.866666C13.8334 0.691666 12.8334 1.325 12.0167 1.14167C11.5871 0.990528 11.129 0.937528 10.6762 0.986557C10.2234 1.03559 9.78737 1.1854 9.40004 1.425L9.34171 13.3333L9.16671 14.1667C8.86671 15.5167 9.72504 16.85 11.075 17.15C12.4167 17.4417 13.75 16.5917 14.05 15.2417L14.225 14.4083L19.1667 3.56667C18.9154 3.18506 18.5809 2.86535 18.1883 2.63154C17.7957 2.39773 17.3553 2.25589 16.9 2.21667ZM12.425 14.8833C12.325 15.3417 11.875 15.6333 11.4167 15.5417C10.95 15.4417 10.6584 15 10.7584 14.525L11.475 11.25C11.5182 11.0376 11.6424 10.8504 11.8214 10.728C12.0003 10.6057 12.2198 10.5579 12.4334 10.5948C12.647 10.6316 12.8378 10.7503 12.9654 10.9255C13.093 11.1007 13.1472 11.3187 13.1167 11.5333C13.1167 11.5667 13.1084 11.5917 13.1 11.625L12.425 14.8833ZM8.10004 16.95C7.77504 16.4417 7.56671 15.875 7.50004 15.2833L6.86671 12.5C6.75004 12.0583 7.00837 11.6 7.50004 11.4667C7.56087 11.4583 7.62255 11.4583 7.68337 11.4667V2.025C6.92504 2.025 6.01671 1.55 5.31671 1.71667C4.61671 1.88333 3.90837 2.86667 3.10004 3.05C2.17504 3.13333 1.34171 3.625 0.833374 4.4L5.77504 15.2333L5.95004 16.0667C6.09228 16.7138 6.48534 17.2781 7.04304 17.6358C7.60074 17.9936 8.27754 18.1155 8.92504 17.975H9.00837C8.65004 17.6833 8.33337 17.3417 8.10004 16.95Z" fill="white"/>
    </svg>`,
    'card-message': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3C17.5 3 22 6.58 22 11C22 15.42 17.5 19 12 19C10.76 19 9.57 18.82 8.47 18.5C5.55 21 2 21 2 21C4.33 18.67 4.7 17.1 4.75 16.5C3.05 15.07 2 13.13 2 11C2 6.58 6.5 3 12 3Z" fill="white"/>
    </svg>`,
    'card-sertif': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H7C6.46957 2 5.96086 2.21071 5.58579 2.58579C5.21071 2.96086 5 3.46957 5 4V18C5 18.5304 5.21071 19.0391 5.58579 19.4142C5.96086 19.7893 6.46957 20 7 20H10V23L12 22L14 23V20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V7L14 2ZM14 15V17L12 16L10 17V15L8 14L10 13V11L12 12L14 11V13L16 14L14 15ZM13 8V3.5L17.5 8H13Z" fill="white"/>
    </svg>`,
}

export const navigation = [
    {
        text: 'О клубе',
        link: '#about',
    },
    {
        text: 'Акции',
        link: '#sales',
    },
    {
        text: 'Галлерея',
        link: '#galery',
    },
    {
        text: 'Отзывы',
        link: '#review',
    },
    {
        text: 'Контакты',
        link: '#invite',
    },
]

export const navClasses = {
    header: {
        id: 'header-nav-ul',
        li: 'header__list-item',
        a: 'header__list-item-link'
    },
    footer: {
        id: 'footer-nav',
        li: 'footer__nav-item',
        a: 'footer__nav-link'
    }
}

export let heroArray = [
    {
        icon: icons['card-diving'], 
        title: 'Доступный дайвинг',
        descr: 'Акции и горячие предложения на курсы обучения.',
        btnText: 'Узнать больше',
        btnLink: ``
    },
    {
        icon: icons['card-message'], 
        title: 'Онлайн запись',
        descr: 'Оставьте свой вопрос, мы перезвоним и проконсультируем вас.',
        btnText: 'Оставить вопрос',
        btnLink: ``
    },
    {
        icon: icons['card-sertif'], 
        title: 'Сертификаты',
        descr: 'Дайвинг в подарок для ваших друзей и знакомых.',
        btnText: 'Приобрести',
        btnLink: ``
    }
]

export let hotSales = [
    {
        name: '1',
        title: 'Peak Perfomance Buoyancy',
        descr: `Курс мастерской плавучести Peak Perfomance Buoyancy.`,
        link: 'Перейти',
        linkHref: '', 
        photo: '../img/hot.webp',
    },
    {
        name: '2',
        title: 'Peak Perfomance Buoyancy',
        descr: `Курс мастерской плавучести Peak Perfomance Buoyancy.`,
        link: 'Перейти',
        linkHref: '', 
        photo: '../img/hot.webp',
    },
    {
        name: '3',
        title: 'Peak Perfomance Buoyancy',
        descr: `Курс мастерской плавучести Peak Perfomance Buoyancy.`,
        link: 'Перейти',
        linkHref: '', 
        photo: '../img/hot.webp',
    },
    {
        name: '4',
        title: 'Peak Perfomance Buoyancy',
        descr: `Курс мастерской плавучести Peak Perfomance Buoyancy.`,
        link: 'Перейти',
        linkHref: '', 
        photo: '../img/hot.webp',
    },
]

export let reviews = [
    {
        title: 'Валентин М.',
        descr: `Курс мастерской плавучести Peak Perfomance Buoyancy.`,
        photo: '../img/review.png',
    },
    {
        title: 'Валентин М.',
        descr: `Курс мастерской плавучести Peak Perfomance Buoyancy.`,
        photo: '../img/review.png',
    },
    {
        title: 'Валентин М.',
        descr: `Курс мастерской плавучести Peak Perfomance Buoyancy.`,
        photo: '../img/review.png',
    },
    {
        title: 'Валентин М.',
        descr: `Курс мастерской плавучести Peak Perfomance Buoyancy.`,
        photo: '../img/review.png',
    },
    {
        title: 'Валентин М.',
        descr: `Курс мастерской плавучести Peak Perfomance Buoyancy.`,
        photo: '../img/review.png',
    },
    {
        title: 'Валентин М.',
        descr: `Курс мастерской плавучести Peak Perfomance Buoyancy.`,
        photo: '../img/review.png',
    },
    {
        title: 'Валентин М.',
        descr: `Курс мастерской плавучести Peak Perfomance Buoyancy.`,
        photo: '../img/review.png',
    },
    {
        title: 'Валентин М.',
        descr: `Курс мастерской плавучести Peak Perfomance Buoyancy.`,
        photo: '../img/review.png',
    },
]

export let blogCards = [
    {
        name: '1',
        title: 'Aquatica Speed Diving',
        descr: `Рекорд по скоростному глубоководному погружению`,
        link: 'Перейти',
        linkHref: '', 
        photo: '../img/hot.webp',
    },
    {
        name: '2',
        title: 'Aquatica Speed Diving',
        descr: `Рекорд по скоростному глубоководному погружению`,
        link: 'Перейти',
        linkHref: '', 
        photo: '../img/hot.webp',
    },
    {
        name: '3',
        title: 'Aquatica Speed Diving',
        descr: `Рекорд по скоростному глубоководному погружению`,
        link: 'Перейти',
        linkHref: '', 
        photo: '../img/hot.webp',
    },
    {
        name: '4',
        title: 'Aquatica Speed Diving',
        descr: `Рекорд по скоростному глубоководному погружению`,
        link: 'Перейти',
        linkHref: '', 
        photo: '../img/hot.webp',
    }
]