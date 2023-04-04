import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Import Css
import './assets/css/materialdesignicons.min.css';
import './Apps.scss';
import CorporateBusiness from './pages/CorporateBusiness';
import ErrorPage from './pages/Pages/CorporateError';
import CorporateServices from './pages/Pages/CorporateServices';
import CorporateTeam from './pages/Pages/CorporateTeam';
import CorporateBlog from './pages/Pages/CorporateBlog';
import CorporateBlogDetail from './pages/Pages/CorporateBlogDetail';
import CorporateBlogDetailOne from './pages/Pages/CorporateBlogDetail1';
import CorporatePSG from './pages/Pages/CorporatePSG';
import CorporateEDG from './pages/Pages/CorporateEDG';
import CorporateJob from './pages/Pages/CorporateJob';
import JobApply from './pages/Pages/CorporateJob/JobApply';
import JobDetail from './pages/Pages/CorporateJob/JobDetail';
import JobList from './pages/Pages/CorporateJob/JobListOne/JobListOne';
import CorporateAbout from './pages/Pages/CorporateAbout';
import CorporateFaq from './pages/Pages/CorporateFaq';
import CorporateGallery from './pages/Pages/CorporateGallery';
import CorporateContact from './pages/Pages/CorporateContact';
import CorporateNewDetail from './pages/Pages/CorporateNewDetail';
import CorporateNew from './pages/Pages/CorporateNew';
import Terms from './pages/Pages/CorporateTerms';
import Privacy from './pages/Pages/CorporatePrivacy';
import PageLogin from './pages/Pages/AuthPages/Login.js';
import CorporateBlogDetailTwo from './pages/Pages/CorporateBlogDetail2';
import CorporateNewDetailOne from './pages/Pages/CorporateNewDetail1';
import CorporateBlogDetailThree from './pages/Pages/CorporateBlogDetail3';
import { Blog, New, Stats, SharedLayout } from './pages/CorporateBackend';
import ProtectRoutes from './pages/Pages/ProtectRoutes';

// import "./assets/css/colors/default.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CorporateBusiness />} />
            <Route path="/about" element={<CorporateAbout />} />
            <Route path="/services" element={<CorporateServices />} />
            <Route path="/team" element={<CorporateTeam />} />
            <Route path="/blogs" element={<CorporateBlog />} />
            <Route path="/gov-grant-psg" element={<CorporatePSG />} />
            <Route path="/gov-grant-edg" element={<CorporateEDG />} />
            <Route path="/job" element={<CorporateJob />} />
            <Route path="/job-apply" element={<JobApply />} />
            <Route path="/job-details" element={<JobDetail />} />
            <Route path="/job-list" element={<JobList />} />
            <Route path="/faq" element={<CorporateFaq />} />
            <Route path="/gallery" element={<CorporateGallery />} />
            <Route path="/contactus" element={<CorporateContact />} />
            <Route path="/news" element={<CorporateNew />} />
            <Route path="/news-details" element={<CorporateNewDetail />} />
            <Route path="/news-details-1" element={<CorporateNewDetailOne />} />
            <Route path="/blog-details" element={<CorporateBlogDetail />} />
            <Route
              path="/blog-details-1"
              element={<CorporateBlogDetailOne />}
            />
            <Route
              path="/blog-details-2"
              element={<CorporateBlogDetailTwo />}
            />
            <Route
              path="/blog-details-3"
              element={<CorporateBlogDetailThree />}
            />
            <Route path="/terms-conditions" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/admin" element={<PageLogin />} />
            <Route path="*" element={<ErrorPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectRoutes>
                  <SharedLayout />
                </ProtectRoutes>
              }
            >
              <Route index element={<Stats />} />
              <Route path="news" element={<New />} />
              <Route path="blogs" element={<Blog />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
