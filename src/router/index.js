import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from "../views/Article";


import Page from "../views/Page";
import AboutMe from "../views/AboutMe";
import GuessNumber from "../views/GuessNumber";
import AllNews from "../views/int-management-homework/AllNews";
import BackGround from "../views/int-management-homework/BackGround";
import FrontGround from "../views/int-management-homework/FrontGround";
import EditNews from "../views/int-management-homework/EditNews";
import CreateNews from "../views/int-management-homework/CreateNews";
import Idea from "../views/Idea";
import playground from "../views/playground";
import toHoneyIndex from "../views/to-honey/toHoneyIndex";
import AcademyModel from "../components/academy/AcademyModel";
import AcademyList from "../components/academy/AcademyList";
import Bridge from "../views/Bridge";
import PrintOut from "../views/homework/PrintOut";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/article/:hash',
        name: 'articles',
        component: Article
    },
    {
        path: '/pages',
        name: 'pages',
        component: Page
    },
    {
        path: '/idea',
        name: 'idea',
        component: Idea
    },
    {
        path: '/me',
        name: 'me',
        component: AboutMe
    },
    {
        name: 'guess-number',
        path: '/guess-number',
        component: GuessNumber
    },
    {
        name: 'mis-homework-front-ground',
        path: '/mis-homework/front-ground',
        component: FrontGround
    },
    {
        name: 'mis-homework-back-ground',
        path: '/mis-homework/back-ground',
        component: BackGround,
        redirect: {
            name: 'mis-homework-back-ground-all'
        },
        children:[
            {
                name: 'mis-homework-back-ground-all',
                path: '/mis-homework/back-ground/all',
                component: AllNews
            },
            {
                name: 'mis-homework-back-ground-edit',
                path: '/mis-homework/back-ground/edit',
                component: EditNews
            },
            {
                name: 'mis-homework-back-ground-create',
                path: '/mis-homework/back-ground/create',
                component: CreateNews
            }
        ]
    },
    {
        name: 'Ali-Business-School-Website',
        path: '/ali-business-school',
        component: playground
    },
    {
        name: 'ali-read',
        path: '/ali-business-school/:par/:item',
        component: AcademyModel
    },
    {
        name: 'ali-check',
        path: '/ali-business-school/:par/:item',
        component: AcademyList
    },
    {
        name: 'to-honey',
        path: '/to-honey',
        component: toHoneyIndex
    },
    {
        name: 'bridge',
        path: '/bridge/:par/:item',
        component: Bridge
    },
    {
        name: 'PrintOut',
        path: '/printout',
        component: PrintOut
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
