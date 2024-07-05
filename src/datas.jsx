import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

let xAxisData = [
    {name : 'Jan' , sale : 112_000},
    {name : 'Feb' , sale : 99_000},
    {name : 'March' , sale : 12_090},
    {name : 'April' , sale : 180_000},
    {name : 'May' , sale : 54_000},
    {name : 'June' , sale : 112_000},
    {name : 'July' , sale : 43_000},
    {name : 'Aug' , sale : 100_000},
    {name : 'Sep' , sale : 73_060},
    {name : 'Oct' , sale : 12_900},
    {name : 'Nov' , sale : 39_100},
    {name : 'Dec' , sale : 97_000},
]

const sidebarItems = [
    {
      title: 'Dashboard',
      items: [
        { text: 'Home', icon: <LineStyleIcon /> , link: '/' },
        { text: 'Analytics', icon: <TimelineIcon /> , link: '/analytics' },
        { text: 'Sales', icon: <TrendingUpIcon /> , link: '/sales' },
      ],
    },
    {
      title: 'Quick Menu',
      items: [
        { text: 'Users', icon: <PermIdentityIcon />, link: '/users' },
        { text: 'New User', icon: <PermIdentityIcon />, link: '/newUser' },
        { text: 'Products', icon: <StorefrontIcon />, link: '/products' },
        { text: 'Transaction', icon: <AttachMoneyIcon />, link: '/transaction' },
        { text: 'Reports', icon: <BarChartIcon />, link: '/reports' },
      ],
    },
    {
      title: 'Notifications',
      items: [
        { text: 'Mail', icon: <MailOutlineIcon />, link: '/mail' },
        { text: 'Feedback', icon: <DynamicFeedIcon />, link: '/feedback' },
        { text: 'Messages', icon: <ChatBubbleOutlineIcon />, link: '/messages' },
      ],
    },
    {
      title: 'Staff',
      items: [
        { text: 'Manage', icon: <WorkOutlineIcon />, link: '/manage' },
      ],
    },
  ];

  const featureData = [
    {
      title: "Revenue",
      money: "$2,132",
      rate: "-11.4",
      icon: <ArrowDownwardIcon className='text-[14px] ml-[5px] negative' />,
      sub: "Compared to last month"
    },
    {
      title: "Sales",
      money: "$2,415",
      rate: "-1.4",
      icon: <ArrowDownwardIcon className='text-[14px] ml-[5px] negative' />,
      sub: "Compared to last month"
    },
    {
      title: "Cost",
      money: "$3,112",
      rate: "+2.4",
      icon: <ArrowUpwardIcon className='text-[14px] ml-[5px] text-green-500' />,
      sub: "Compared to last month"
    }
  ];

const newMembers = [
    {id : 1 , userName : 'Emilie' , title : 'web developer' , img : '/images/pic4.jpg'},
    {id : 2 , userName : 'Ivy' , title : '.Net developer' , img : '/images/pic5.jpg'},
    {id : 3 , userName : 'Oscar' , title : 'React developer' , img : '/images/pic3.jpg'},
    {id : 4 , userName : 'Ted' , title : 'Seo' , img : '/images/pic4.jpg'},
    {id : 5 , userName : 'Marian' , title : 'Author' , img : '/images/pic5.jpg'},
] 

const transactions = [
    {id : 1 , customer : 'Jan' , date : '12 Sep 2023' , amount : 123 , status : 'Declined' , img : '/images/pic4.jpg'},
    {id : 2 , customer : 'Oliver' , date : '27 May 2023' , amount : 102 , status : 'Pending' , img : '/images/shayea.jpg'},
    {id : 3 , customer : 'Harry' , date : '10 Aug 2023' , amount : 153 , status : 'Approved' , img : '/images/pic3.jpg'},
    {id : 4 , customer : 'Oscar' , date : '16 Oct 2023' , amount : 92 , status : 'Pending' , img : '/images/pic5.jpg'},
]

const userRows = [
    {id : 1 , username : 'Emilie' , avatar : '/images/pic3.jpg' , status : 'active' , transaction : '$102.05' , email : 'Emilie@gmail.com'},
    {id : 2 , username : 'Ivy' , avatar : '/images/pic5.jpg' , status : 'non-active' , transaction : '$222.22' , email : 'ivy@gmail.com'},
    {id : 3 , username : 'Oscar' , avatar : '/images/pic3.jpg' , status : 'active' , transaction : '$147.05' , email : 'oscar@gmail.com'},
    {id : 4 , username : 'Charlie' , avatar : '/images/pic4.jpg' , status : 'non-active' , transaction : '$132.05' , email : 'charlie@gmail.com'},
    {id : 5 , username : 'Harry' , avatar : '/images/pic5.jpg' , status : 'active' , transaction : '$200.05' , email : 'harry@gmail.com'},
]

let products = [
  {id : 1 , 
  title : 'product1',
  avatar : '/images/product2.jpg',
  price : "$809"
},
  {id : 2 , 
  title : 'product2',
  avatar : '/images/product1.jpg',
  price : "$890"
},
  {id : 3 , 
  title : 'product3',
  avatar : '/images/product2.jpg',
  price : "$760"
},
  {id : 4 , 
  title : 'product4',
  avatar : '/images/product1.jpg',
  price : "$540"
},
  {id : 5 , 
  title : 'product5',
  avatar : '/images/product2.jpg',
  price : "$710"
},
]

let productsSaleData = [
  {name : 'Jan' , sales : 2000},
  {name : 'Feb' , sales : 5000},
  {name : 'March' , sales : 3000},
]

export { xAxisData , newMembers , transactions , userRows , sidebarItems
  , featureData , products , productsSaleData }