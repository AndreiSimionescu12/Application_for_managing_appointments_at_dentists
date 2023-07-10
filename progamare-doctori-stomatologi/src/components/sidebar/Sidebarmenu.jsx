import DashboardIcon from '../../icons/dashboard.svg';
import ShippingIcon from '../../icons/shipping.svg';
import ProductIcon from '../../icons/product.svg';
import UserIcon from '../../icons/user.svg';


const sidebar_menu = [
    {
        id: 1,
        icon: UserIcon,
        path: '/profile',
        title: 'Adaugare medic',
    },
    {
        id: 2,
        icon: UserIcon,
        path: '/deletemedic',
        title: 'Editare/Stergere medic',
    },
    {
        id: 3,
        icon: UserIcon,
        path: '/dashboardservicii',
        title: 'Adaugare serviciu',
    },
    {
        id: 4,
        icon: UserIcon,
        path: '/deleteserviciu',
        title: 'Editare/Stergere serviciu',
    },
    {
        id: 5,
        icon: UserIcon,
        path: '/dashboardutilizatori',
        title: 'Conturi utilizatori',
    },
    {
        id: 6,
        icon: UserIcon,
        path: '/dashboardadministratori',
        title: 'Editare administrator',
    },
    {
        id: 7,
        icon: UserIcon,
        path: '/dashboardprogramari',
        title: 'Programari medic',
    },
    
    
]

export default sidebar_menu;