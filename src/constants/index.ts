import features_1 from '/images/vector1.svg'
import features_2 from '/images/vector2.svg'
import features_3 from '/images/vector3.svg'
import features_4 from '/images/vector4.svg'
import image from '/images/Background.svg'
import sms from '/images/sms.svg'
import messege from '/images/messege.svg'
import call from '/images/call.svg'




export const featuresCardData = [
    {
        title: 'Financial Guidance',
        desc: 'Receive tailored advice that aligns with your financial goals, ensuring informed decision-making.',
        img: features_1
    },
    {
        title: 'Expense Tracking',
        desc: 'Monitor spending across departments and categories with easy-to-use expense tracking and reporting tools.',
        img: features_2
    },
    {
        title: 'Savings Goals',
        desc: 'Set savings targets and track your progress with reminders and tips from Penny to reach milestones.',
        img: features_3
    },
    {
        title: 'Educational Resources',
        desc: 'Access articles, guides, and tutorials to enhance your financial knowledge and make informed decisions.',
        img: features_4
    },
]
export const plansData = [
    {
        title: 'Basic',
        price: 'CUSTOM',
        features: [
            'Access to Budgeting Tools',
            'Basic Budgeting and Expense Tracking',
            'Access to Educational Resources',
            'Real-time Chat Support'
        ],
        highlight: false,
    },
    {
        title: 'Basic',
        price: 'FREE',
        features: [
            'Access to Budgeting Tools',
            'Basic Budgeting and Expense Tracking',
            'Access to Educational Resources',
            'Real-time Chat Support'
        ],
        highlight: false,
    },
    {
        title: 'Premium',
        price: '$12',
        period: '/month',
        features: [
            'All Basic Plan Features',
            'Personalized Financial Advice',
            'Advanced Investment Tracking',
            'Custom Savings Goals with Tracker',
            'Priority Chat Support'
        ],
        highlight: true,
    },
    {
        title: 'Basic',
        price: '$29',
        period: '/month',
        features: [
            'Access to Budgeting Tools',
            'Basic Budgeting and Expense Tracking',
            'Access to Educational Resources',
            'Real-time Chat Support',
            'Access to Educational Resources',
            'Real-time Chat Support'
        ],
        highlight: false,
    }
];
export const infoData = [
    {
        name: "Custom Savings Goals"
    },
    {
        name: "Real-Time Chat Support"
    },
    {
        name: "Educational Resources"
    },
    {
        name: "Personalized Financial Advice"
    },
    {
        name: "Webinars and Workshops"
    },
    {
        name: "Advanced Investment Tracking"
    },
    {
        name: "Budgeting Tools"
    },
    {
        name: "Expense Tracking"
    },
    {
        name: "Monthly Financial Summaries"
    },
    {
        name: "Priority Chat Support"
    },
    {
        name: "Detailed Financial Reports"
    },
    {
        name: "User-Friendly Interface"
    },
    {
        name: "Goal-Setting for Savings"
    },
]
export const infoBasic = [
    {
        name: "1 Goal"
    },
    {
        name: "24/7 Basic Support"
    },
    {
        name: "20+ Articles"
    },
    {
        name: "-"
    },
    {
        name: "-"
    },
    {
        name: "-"
    },
    {
        img: image
    },
    {
        img: image
    },
    {
        img: image
    },
    {
        name: "-"
    },
    {
        name: "-"
    },
    {
        img: image
    },
    {
        img: image
    },
]
export const infoPremium = [
    {
        name: "Up to 5 Goals"
    },
    {
        name: "24/7 Basic Support"
    },
    {
        name: "100+ Articles"
    },
    {
        name: "1 Session/Month"
    },
    {
        name: "2 Webinars/Month"
    },
    {
        name: "Up to 5 Investments"
    },
    {
        img: image
    },
    {
        img: image
    },
    {
        img: image
    },
    {
        img: image
    },
    {
        img: image
    },
    {
        img: image
    },
    {
        img: image
    },
]
export const modalData = [
    {
        id: '1',
        title: "What can Penny help me with?",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: '2',
        title: "Is Penny free to use?",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: '3',
        title: "How does Penny provide personalized financial advice?",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: '4',
        title: "Can I track multiple savings goals with Penny?",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: '5',
        title: "Is my financial data safe with Penny?",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: '6',
        title: "Does Penny offer educational resources?",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: '7',
        title: "How does Penny provide personalized financial advice?",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: '8',
        title: "Can I track multiple savings goals with Penny?",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: '9',
        title: "Is my financial data safe with Penny?",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: '10',
        title: "Does Penny offer educational resources?",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
]

export const supportCardData = [
    {
        img: sms,
        title: "LIVE CHAT",
        text: "Instant help via live chat, with faster responses for Premium members.",
        btn: "CHAT WITH US"

    },
    {
        img: messege,
        title: "Email Support",
        text: "Reach out for more detailed inquiries, nd we'll get back to you within 24 hours.",
        btn: "Write Us"
    },
    {
        img: call,
        title: "Phone Support",
        text: "For Premium users, available Mon-Fri,9AM - 6 PM(EST) for urgent assistance.",
        btn: "Call Us"
    },
]