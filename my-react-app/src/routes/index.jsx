import React, { lazy } from 'react'
import Loadable from '../components/lodable/Loadable'
import { useRoutes } from 'react-router-dom'
const Theme = Loadable(lazy(() => import("../theme/Theme")))
const HomePage = Loadable(lazy(() => import('../pages/home')))
const PageNotFound = Loadable(lazy(() => import('../pages/404')))
const AboutUsPage = Loadable(lazy(() => import('../pages/about-us')))
const ContactUsPage = Loadable(lazy(() => import('../pages/contact-us')))
const ParentingPage = Loadable(lazy(() => import('../pages/parenting-stages')))
const SpecialChildrenPage = Loadable(lazy(() => import('../pages/special-children')))
const ServicePage = Loadable(lazy(() => import('../pages/services')))
const AppointMentPage = Loadable(lazy(() => import("../pages/appointment")))

const routes = [
    {path:'*',element:<PageNotFound/>},
    {path:"/",element:<Theme/>,children:[
        {path:'/',element:<HomePage/>},
        {path:'/about-us',element:<AboutUsPage/>},
        {path:'/contact-us',element:<ContactUsPage/>},
        {path:'/parenting-stages/:path',element:<ParentingPage/>},
        {path:'/special-children',element:<SpecialChildrenPage/>},
        {path:'/services',element:<ServicePage/>},
        {path:'/appointment',element:<AppointMentPage/>},
    ]}
]


const AppRoutes = () => {
  return useRoutes(routes)
}

export default AppRoutes