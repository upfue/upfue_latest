//Corporate Buisness
import CorporateAbout from '../pages/Pages/CorporateAbout';
import CorporateServices from '../pages/Pages/CorporateServices';
import CorporateTeam from '../pages/Pages/CorporateTeam';
import CorporateBlog from '../pages/Pages/CorporateBlog';
import CorporateBlogDetail from '../pages/Pages/CorporateBlogDetail';
import CorporateBusiness from '../pages/CorporateBusiness';
import CorporateEDG from '../pages/Pages/CorporateEDG';
import CorporatePSG from '../pages/Pages/CorporatePSG';
import CorporateJob from '../pages/Pages/CorporateJob';
import JobApply from '../pages/Pages/CorporateJob/JobApply';
import JobDetail from '../pages/Pages/CorporateJob/JobDetail';
import JobList from '../pages/Pages/CorporateJob/JobListOne/JobListOne';
import CorporateFaq from '../pages/Pages/CorporateFaq';
import CorporateGallery from '../pages/Pages/CorporateGallery';
import CorporateContact from '../pages/Pages/CorporateContact';
import CorporateNew from '../pages/Pages/CorporateNew';
import CorporateNewDetail from '../pages/Pages/CorporateNewDetail';
import Terms from '../pages/Pages/CorporateTerms';
import Privacy from '../pages/Pages/CorporatePrivacy';
import ErrorPage from '../pages/Pages/CorporateError';
import PageLogin from '../pages/Pages/AuthPages/Login';
import CorporateNewDetailOne from '../pages/Pages/CorporateBlogDetail';

const routes = [
  {
    path: '/',
    component: CorporateBusiness,
    isTopbarDark: true,
    isWithoutLayout: false,
  },
  { path: '/about', component: CorporateAbout, isWithoutLayout: true },
  { path: '/services', component: CorporateServices, isWithoutLayout: true },
  { path: '/team', component: CorporateTeam, isWithoutLayout: true },
  { path: '/gov-grant-psg', component: CorporatePSG, isWithoutLayout: true },
  { path: '/gov-grant-edg', component: CorporateEDG, isWithoutLayout: true },
  { path: '/job', component: CorporateJob, isWithoutLayout: true },
  { path: '/job-apply', component: JobApply, isWithoutLayout: true },
  { path: '/job-details', component: JobDetail, isWithoutLayout: true },
  { path: '/job-list', component: JobList, isWithoutLayout: true },
  { path: '/faq', component: CorporateFaq, isWithoutLayout: true },
  { path: '/gallery', component: CorporateGallery, isWithoutLayout: true },
  { path: '/contactus', component: CorporateContact, isWithoutLayout: true },
  { path: '/blogs', component: CorporateBlog, isWithoutLayout: true },
  {
    path: '/blog-details',
    component: CorporateBlogDetail,
    isWithoutLayout: true,
  },
  { path: '/news', component: CorporateNew, isWithoutLayout: true },
  {
    path: '/news-details',
    component: CorporateNewDetail,
    isWithoutLayout: true,
  },
  {
    path: '/news-details-1',
    component: CorporateNewDetailOne,
    isWithoutLayout: true,
  },
  { path: '/terms-conditions', component: Terms, isWithoutLayout: true },
  { path: '/privacy-policy', component: Privacy, isWithoutLayout: true },
  { path: '/admin', component: PageLogin, isWithoutLayout: true },
  { path: '*', component: ErrorPage, isWithoutLayout: true },
];

export default routes;
