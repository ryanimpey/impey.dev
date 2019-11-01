export interface navigation_links_interface {
    name: string,
    link: string,
    external?: string
}

export const nav_links: Array<navigation_links_interface> = [
    {
        name: "Projects",
        link: "/projects",
    },
    /*  {
        name: "About",
        link: "/about",
    },
    {
        name: "Contact",
        link: "/contact",
    },
    {
        name: "Blog",
        link: "/blog",
    }, */
]
