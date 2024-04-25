import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Faq from '@/views/Faq.vue'
import TermsConditions from '@/views/TermsConditions.vue'
import SpecificBlog from '@/views/SpecificBlog.vue'
import Blog from '@/views/Blog.vue'
import GroundFreight from '@/views/GroundFreight.vue'
import RailFreight from '@/views/RailFreight.vue'
import AirFreight from '@/views/AirFreight.vue'
import SeaFreight from '@/views/SeaFreight.vue'
import Services from '@/views/Services.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/faq',
        name: 'Faq',
        component: Faq
    },
    {
        path: '/termsConditions',
        name: 'TermsConditions',
        component: TermsConditions
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/groundFreight',
        name: 'GroundFreight',
        component: GroundFreight
    },
    {
        path: '/railFreight',
        name: 'RailFreight',
        component: RailFreight
    },
    {
        path: '/airFreight',
        name: 'AirFreight',
        component: AirFreight
    },
    {
        path: '/seaFreight',
        name: 'SeaFreight',
        component: SeaFreight
    },
    {
        path: '/services',
        name: 'Services',
        component: Services
    },
    {
        path: '/specificBlog/:id',
        name: 'SpecificBlog',
        component: SpecificBlog
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
