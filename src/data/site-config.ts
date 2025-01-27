export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Maximiliano V',
    subtitle: 'Desarrollador Front End',
    description: '',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'About me',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/maximiliano-vidal-hernandez-ba28581aa/'
        },
        {
            text: 'WhatsApp',
            href: 'https://wa.me/+56944482915'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/maximiliano121'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to my Corner of the Web',
        text: "I'm **Maximiliano Vidal**, a front-end developer with a passion for creating intuitive user experiences. My skills include HTML5, CSS3, JavaScript, and React, along with experience in building responsive websites using frameworks like Bootstrap. Let's talk and discuss how I can contribute to your projects. Feel free to explore some of my coding endeavors on <a href='https://github.com/maximiliano121'>GitHub</a>",
        image: {
            src: '',
            alt: ''
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
