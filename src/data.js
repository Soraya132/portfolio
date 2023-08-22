
import { FaMobile, FaLinkedin, } from "react-icons/fa"
import { RiRedPacketLine } from "react-icons/ri"
import { IoMdLocate } from "react-icons/io"
import image from "../src/asset/computer.jpg"
import image1 from "../src/asset/room-9.jpg"
import image2 from "../src/asset/room-8.jpg"
import image3 from "../src/asset/room-7.jpg"
import image4 from "../src/asset/room-10.jpg"
import image5 from "../src/asset/room-11.jpg"
//  Navbar data
export const links = [
    { path: "/", name: "home" },
    { path: "/about", name: "about" },
    { path: "/portfolio", name: "portfolio" },
    { path: "/news", name: "news" },
    { path: "/contact", name: "contact" },
]

//  contact information
export const ContactInfo = [
    {
        icon: <IoMdLocate />,
        info: "kabul, Afghanistan",
        page: "#"
    },
    {
        icon: <FaMobile />,
        info: "+93782615615",
        page: "tel:0093782615615"
    },
    {
        icon: <RiRedPacketLine />,
        info: "sorayanoor132@gmail.com",
        page: "mailto:sorayanoor132@gmail.com"
    },
    {
        icon: <FaLinkedin />,
        info: "soraya haidary",
        page: "https://af.linkedin.com/in/soraya-haidary-316984271"
    },
]

export const newses = [
    {
        image: image,
        name: "building brand throught customer service",
        detail: "media",
        explanation: `Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.
    In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.

    That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.`,
    },
    {
        image: image1,
        name: `Electron framework adds encryption API`,
        detail: "branding",
        explanation: `Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.
    In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.
    That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique`,
    },
    {
        image: image2,

        name: `Unstoppable Jamstack and Gatsby opportunity`,
        detail: "Media",
        explanation: `Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.
    In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.
    That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique`,
    },
    {
        image: image3,

        name: "building brand throught customer service",
        detail: "media",
        explanation: `Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.
    In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.

    That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.`,
    },
    {
        image: image4,

        name: "building brand throught customer service",
        detail: "trend",
        explanation: `Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.
    In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.

    That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.`,
    },
    {
        image: image5,

        name: "building brand throught customer service",
        detail: "brand",
        explanation: `Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.
    In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.

    That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.`,
    },
];
//  about page services
export const skills = [
    "Website Development",
    "Frontend Deveopment",
    "Clean Coding",
    "Beautiful Design",
    "Web Hosting",
];
//  about page programming skills
export const programmingSkills = [
    { name: "JavaScript", percentage: "90%" },
    { name: "React", percentage: "90%" },
    { name: "Python", percentage: "80%" },
    { name: "HTML", percentage: "100%" },
    { name: "CSS", percentage: "90%" },
]
// about page language skills
export const languageSkills = [
    { name: "English", percentage: "90" },
    { name: "Pashto", percentage: "100" },
    { name: "Persian", percentage: "100" },
]
// about page education timeline
export const education = [
    { name: "Kabul University", position: "Bachelor", date: "2019-2023" },
    { name: "Wahdat High School", position: "Graduate", date: "2013-2018" },

]

//  portfolio  page
export const images = [
    { image: image, name: "apple", detail: "image", link: "link", background: "computer.jpg" },
    {
        image: image1, name: "orange", detail: "detail", background: "room-9.jpg",
        explanation: `Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.
    In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.
    That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique`,
    },
    { image: image2, name: "cream", detail: "image", background: "room-8.jpg", },
    { image: image3, name: "shop", detail: "image", background: "room-7.jpg", },
    {
        image: image4, name: "room", detail: "detail", background: "room-10.jpg",
        explanation: `Oki is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.
In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.
That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique`,
    },
    { image: image5, name: "cream", detail: "image", link: "link", background: "room-11.jpg", },
]
//  about page feedback 
export const feedBacks = [
    {
        name: "Anna Clinton",
        job: "Teacher",
        feedBack: `These people really know what they do,great customer support availability and kindness`,
        img: image2,
    },
    {
        name: "john Clinton",
        job: "Designer",
        feedBack: `These people really know what they do,great customer support availability and kindness`,
        img: image,
    },
    {
        name: "Eren Clinton",
        job: "Developer",
        feedBack: `These people really know what they do,great customer support availability and kindness`,
        img: image1,
    },
];
export const downloadableLink = "https://drive.google.com/uc?export=download&id=15m3ZjPjR1p8J123g0Tnc7eo_dVHjJH8D"
