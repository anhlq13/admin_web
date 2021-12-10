export const imgs = [
    '/assets/images/landing/paris.jpg',
    '/assets/images/landing/night-NY.jpg',
    '/assets/images/landing/london.jpg',
    '/assets/images/landing/NY.jpg',
    '/assets/images/landing/PhuQuoc.jpg',
    '/assets/images/landing/HongKong.jpg',
    '/assets/images/landing/content1.png',
    '/assets/images/landing/content2.jpg',
    '/assets/images/landing/content3.jpg',
    '/assets/images/landing/content4.jpg',
    '/assets/images/landing/content5.jpg',
    '/assets/images/landing/CanTho.jpg',
    '/assets/images/landing/CaoBang.jpg',
    '/assets/images/landing/Thailand.jpg',
    '/assets/images/landing/ThaiNguyen.jpg',
    '/assets/images/landing/paris2.jpg',
    '/assets/images/landing/Moscow.jpg',
    '/assets/images/landing/HongKong2.jpg',
    '/assets/images/landing/Hue.jpg',
    '/assets/images/landing/DaNang.jpg',
    '/assets/images/landing/Hanoi.jpg',
]

export const imgsLanding = [
    '/assets/images/landing/Hue.jpg',
    '/assets/images/landing/DaNang.jpg',
    '/assets/images/landing/HaNoi.jpg',
    '/assets/images/landing/ThaiNguyen.jpg',
    '/assets/images/landing/CanTho.jpg',
    '/assets/images/landing/PhuQuoc.jpg',
    '/assets/images/landing/CaoBang.jpg',

]

export const randomImg = () => {
    return imgs[Number(Math.floor(Math.random() * 22))]
}