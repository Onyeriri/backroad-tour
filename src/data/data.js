import tourOne from '../Images/tour-1.jpeg';
import tourTwo from '../Images/tour-2.jpeg';
import tourThree from '../Images/tour-3.jpeg';
import tourFour from '../Images/tour-4.jpeg';


export const pageLinks = [
    { id: 1, href: '#home', name: 'home', className: 'nav-link' },
    { id: 2, href: '#about', name: 'about', className: 'nav-link' },
    { id: 3, href: '#services', name: 'service', className: 'nav-link' },
    { id: 4, href: '#tours', name: 'tours', className: 'nav-link' },
];

export const socialLinks = [
    { id: 1, href: 'https://www.twitter.com', iconName: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', iconName: 'fab fa-twitter' },
    { id: 3, href: 'https://www.twitter.com', iconName: 'fab fa-squarespace' },
];

export const activities = [
    { id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' },
    { id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.' },
    { id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.' },
];

export const availableTour = [
    { id: 1, image: tourOne, date: 'august 26th, 2020', title: 'Tibet Adventure', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location: 'china', duration: '6 days', cost: 'from $2100' },
    { id: 2, image: tourTwo, date: 'october 1th, 2020', title: 'best of java', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location: 'indonesia', duration: '6 days', cost: 'from $2100' },
    { id: 3, image: tourThree, date: 'september 15th, 2020', title: 'explore hong kong', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location: 'hong kong', duration: '8 days', cost: 'from $5000' },
    { id: 4, image: tourFour, date: 'december 5th, 2019', title: 'kenya highlights', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', location: 'kenya', duration: '20 days', cost: 'from $3300' },
];

export const footerLinks = [
    { id: 1, href: '#home', className: 'footer-link', text: 'home' },
    { id: 2, href: '#about', className: 'footer-link', text: 'about' },
    { id: 3, href: '#services', className: 'footer-link', text: 'services' },
    { id: 4, href: '#featured', className: 'footer-link', text: 'featured' },

];