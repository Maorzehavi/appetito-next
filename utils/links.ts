type NavLink = {
    title: string;
    href: string;
    };

export const links: NavLink[] = [
        {
        title: 'אודות',
        href: '/about',
    },
    {
        title: 'מנות',
        href: '/dishes',
    },
    {
        title: 'צור קשר',
        href: '/contact',
    },
];

export const dishesLinks: NavLink[] = [
    {
        title: 'פיצות',
        href: '/dishes/pizza',
    },
    {
        title: 'פסטות',
        href: '/dishes/pasta',
    },
    {
        title: 'סלטים',
        href: '/dishes/salad',
    }
];