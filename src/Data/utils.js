/** @format */


import {
    Building2,
    BriefcaseBusiness,
} from "lucide-react";

export const Menus = [{
        name: "About Us",
        path: "/about",
        gridCols: 3,
        subMenuHeading: [
            { title: "Company", icon: Building2 },
            { title: "Careers", icon: BriefcaseBusiness },
            { title: "Find us on:", icon: null },
        ],
        subMenu: [
            [
                { label: "About Us", href: "/about" },
                { label: "Success Stories", href: "/success" },
                { label: "Who we work with", href: "/work" },
                { label: "Blog", href: "/blog" },
            ],
            [
                { label: "Life at softtech company", href: "/softtech" },
                { label: "Fresh Grads", href: "/fresh" },
                { label: "Open Positions", href: "/position" },
            ],
            [
                { label: "Linkedin", href: "#", icon: "https://i.ibb.co/kgFX3pDc/linkedin.png" },
                { label: "Twitter", href: "#", icon: "https://i.ibb.co/Wvv2K3cs/twitter.png" },
                { label: "Youtube", href: "#", icon: "https://i.ibb.co/2YLRqVTC/youtube.png" },
                { label: "GitHub", href: "#", icon: "https://i.ibb.co/zW3BtpDV/github.png" },
            ],
        ],
    },

    {
        name: "Services",
        path: "/service",
        gridCols: 3,
        subMenuHeading: [
            { title: "Development & QA", icon: null },
            { title: "Mobility & Apps", icon: null },
            { title: "IT Operations", icon: null },
        ],
        subMenu: [
            [
                { label: "UX/UI Design", href: "/ui", icon: "https://i.ibb.co/W46VH6qm/ux-design.png" },
                { label: "Backend Development", href: "/backend", icon: "https://i.ibb.co/JFz7Wm91/backend.png" },
                { label: "Custom Software Development", href: "/customersoftware", icon: "https://i.ibb.co/5XFdD2x6/web-programming.png" },
                { label: "Software Testing", href: "/softwaretest", icon: "https://i.ibb.co/YFvGKfJq/testing.png" },
                { label: "Software Consulting", href: "/softwareconsulting", icon: "https://i.ibb.co/cXM2GpRG/discussion.png" },
                { label: "Frontend Development", href: "/frontend", icon: "https://i.ibb.co/XZdpxy6c/ux-design-1.png" },
                {
                    label: "Enterprise Software Development",
                    href: "/enterprise",
                    icon: "https://i.ibb.co/d09rNwXR/software.png",
                },
            ],
            [
                { label: "Android App Development", href: "/androidapp", icon: "https://i.ibb.co/NgDwv9C8/developer.png" },
                { label: "Mobile App Development", href: "/mobileapp", icon: "https://i.ibb.co/9HLDZ2Cj/code.png" },
                { label: "iOS App Development", href: "/iosapp", icon: "https://i.ibb.co/5W24mpYC/app.png" },
                { label: "Web App Development", href: "/webapp", icon: "https://i.ibb.co/tpBmTMSg/app-development.png" },
            ],
            [
                { label: "Odoo ERP Solutions", href: "/odoo", icon: "https://i.ibb.co/d0nB7b9H/erp.png" },
                { label: "DevOps Services", href: "/devops", icon: "https://i.ibb.co/m55LRt6J/google-cloudprint.png" },
                { label: "Cyber Security", href: "/cyber", icon: "https://i.ibb.co/RkDrMgnp/cyber-security.png" },
                { label: "Cloud Services", href: "/cloud", icon: "https://i.ibb.co/F423Rttz/cloud-service.png" },
            ],
        ],
    },

    {
        name: "Solutions",
        path: "#",
        gridCols: 3,
        subMenuHeading: [
            { title: "Data, ML & AI", icon: null },
            { title: "E-Commerce", icon: null },
        ],
        subMenu: [
            [
                { label: "Business Intelligence", href: "#", icon: "https://i.ibb.co/Z1tNBKtt/online-analytical.png" },
                { label: "Deep Learning", href: "#", icon: "https://i.ibb.co/TS2821L/communication.png" },
                { label: "Machine Learning", href: "#", icon: "https://i.ibb.co/Jjt5t4wX/coding.png" },
                { label: "Predictive Analysis", href: "#", icon: "https://i.ibb.co/pBjJBP2Q/prediction.png" },
                { label: "Data Scraping", href: "#", icon: "https://i.ibb.co/WNLTt33s/data-analytics.png" },
                { label: "Data Science", href: "#", icon: "https://i.ibb.co/1fMDfsSW/data.png" },
                { label: "Data Warehousing", href: "#", icon: "https://i.ibb.co/qLK5nXQf/data-warehouse.png" },
                { label: "Generative AI", href: "#", icon: "https://i.ibb.co/bDjhWJT/generative.png" },
                { label: "Data Visualization", href: "#", icon: "https://i.ibb.co/4Ry5kd29/visual-data.png" },
                { label: "Data Analytics", href: "#", icon: "https://i.ibb.co/pB5S48Xc/analysis.png" },
            ],
            [
                { label: "AI Chatbots & Customer Support", href: "#", icon: "https://i.ibb.co/60CtLgs1/chat-app.png" },
                { label: "eCommerce Development", href: "#", icon: "https://i.ibb.co/DgzL5jsP/shopping.png" },
                { label: "Voice Commerce", href: "#", icon: "https://i.ibb.co/xtyW36bq/voice.png" },
                { label: "Customer Segmentation", href: "#", icon: "https://i.ibb.co/zVvv4tNT/segment.png" },
            ],
        ],
    },

    {
        name: "Industries",
        path: "/industrie",
    },

    {
        name: "Our Products",
        path: "/product",
    },
];