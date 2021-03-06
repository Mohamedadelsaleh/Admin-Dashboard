// Icons of Side-Bar

import { 
    UilEstate, 
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal,

} from '@iconscout/react-unicons'

//Images

import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg'

export const SidebarData = [
    {
        icon: UilEstate,
        heading: 'Dashboard',
    },
    {
        icon: UilClipboardAlt,
        heading: 'Orders',
    },
    {
        icon: UilUsersAlt,
        heading: 'Customers',
    },
    {
        icon: UilPackage,
        heading: 'Products',
    },
    {
        icon: UilChart,
        heading: 'Analytics',
    },
    {
        icon: UilSignOutAlt,
        heading: 'Sign Out',
    },
];


export const CardData = [
    {
        title: 'Sales',
        color:{
            backGround:'linear-gradient(180deg, #4057ff 0%, #ff2ce9 100%)',
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        },
        barValue: 70,
        value: '25,970',
        png: UilUsdSquare,
        series:[
            {
            name: 'Sales',
            data:[31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },

    {
        title: 'Revenue',
        color:{
            backGround:'linear-gradient(180deg, #4057ff 0%, #21c306 100%)',
            boxShadow: '0px 10px 20px 0px #FDC0C7',
        },
        barValue: 80,
        value: '14,270',
        png: UilMoneyWithdrawal,
        series:[
            {
            name: 'Revenue',
            data:[10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },


    {
        title: 'Expenses',
        color:{
            backGround:'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
            boxShadow: '0px 10px 20px 0px #F9D59B',
        },
        barValue: 61,
        value: '4,270',
        png: UilClipboardAlt,
        series:[
            {
            name: 'Expenses',
            data:[10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
]


export const UpdatesData = [
    {
        img: img1,
        name: "Mina Kamel",
        noti: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
    },
    {
        img: img3,
        name: "Ahmed ElSayed",
        noti: "has received Samsung gadget for charging battery.",
        time: "30 minutes ago",
    },
    {
        img: img2,
        name: "Abanoub Kamel",
        noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
        time: "2 hours ago",
    },
];