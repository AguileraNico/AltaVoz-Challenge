
export const userTypes = {
    commonUser: 'Common-User',
    brand: 'Brand'
}

export const commonUserBottomNavigation = [{
    text: 'Inicio',
    link: '/home/feed',
    icon: 'home'
}, {
    text: 'Tienda',
    icon: 'shopping_bag'
}, {
    text: 'Publicar',
    icon: 'add_circle'
}, {
    text: 'Carrito',
    icon: 'shopping_cart'
}, {
    text: 'Perfil',
    icon: 'person'
}, ]

export const brandUserBottomNavigation = [{
    text: 'Inicio',
    link: '/home/feed',
    icon: 'home'
}, {
    text: 'Publicar',
    icon: 'add_circle'
}, {
    text: 'Envios',
    icon: 'local_shipping'
}, {
    text: 'Perfil',
    icon: 'person',
    link: '/profile/0/comissions'
}, ]

export const brandUserProfileNavigation = [{
    text: 'Neta',

}, {
    text: 'Bruta',

}, {
    text: 'Comisiones',
}]

export const commonUserProfileNavigation = [{
    text: 'Videos',

}, {
    text: 'Productos',

}, {
    text: 'Marcas',

}]