import 'boxicons';

export const SidebarDataTop = [
    {
        title: 'Home',
        path: '/',
        icon: <box-icon name='home-alt'  class="item-icon icon"></box-icon>,
        cName: 'nav-text',
    },
    {
        title: 'Content',
        path: '/',
        icon: <box-icon name='book-content'   class="item-icon icon"></box-icon>,
        icon_down: <box-icon name='chevron-down'   class="icon-chevron" ></box-icon>,
        icon_up: <box-icon name='chevron-up'   class="icon-chevron"></box-icon>,
        cName: 'nav-text',
        subMenus: [
            { name: "Courses", path: "/" },
            { name: "Videos", path: "/" },
          ],
    },
    {
        title: 'About',
        path: '/',
        icon: <box-icon name='user'   class="item-icon icon"></box-icon>,
        cName: 'nav-text',
    },
    {
        title: 'Contact',
        path: '/',
        icon: <box-icon name='mail-send'  class="item-icon icon"></box-icon>,
        cName: 'nav-text',
    },
    {
        title: 'Chat',
        path: '/',
        icon: <box-icon name='chat'   class="item-icon icon"></box-icon>,
        cName: 'nav-text',
    },
]

export const SidebarDataBottom = [
    {
        title: 'Settings',
        path: '/',
        icon: <box-icon name='cog'  class="item-icon icon"></box-icon>,
        cName: 'nav-text',
    },
    {
        title: 'Notifications',
        path: '/',
        icon: <box-icon name='bell'   class="item-icon icon"></box-icon>,
        cName: 'nav-text',
    },
]
