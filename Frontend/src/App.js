import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Import Css
import './assets/css/materialdesignicons.min.css';
import './Apps.scss';
import './index.css';
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
import CorporateNewDetailTwo from './pages/Pages/CorporateNewDetail2';
import Profile from './pages/CorporateBackend/Profile';
import CorporateBlogDetailFour from './pages/Pages/CorporateBlogDetail4';
import CorporateNewDetailThree from './pages/Pages/CorporateNewDetail3';
import CorporateBlogDetailFive from './pages/Pages/CorporateBlogDetail5';
import CorporateBlogDetailSix from './pages/Pages/CorporateBlogDetail6';
import CorporateNewDetailFour from './pages/Pages/CorporateNewDetail4';
import JobPosition from './pages/CorporateBackend/JobPosition';
import Gallery from './pages/CorporateBackend/Gallery';
import CorporateNewDetailFive from './pages/Pages/CorporateNewDetail5';
import CorporateNewDetailSix from './pages/Pages/CorporateNewDetail6';
import AllJobs from './pages/CorporateBackend/AllJobs';
import CorporateBlogDetail7 from './pages/Pages/CorporateBlogDetail7';
import CorporateBlogDetail8 from './pages/Pages/CorporateBlogDetail8';
import CorporateNewDetail7 from './pages/Pages/CorporateNewDetail7';

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
            <Route path="/news-details-2" element={<CorporateNewDetailTwo />} />
            <Route
              path="/news-details-3"
              element={<CorporateNewDetailThree />}
            />
            <Route
              path="/news-details-4"
              element={<CorporateNewDetailFour />}
            />
            <Route
              path="/news-details-5"
              element={<CorporateNewDetailFive />}
            />
            <Route path="/news-details-6" element={<CorporateNewDetailSix />} />
            <Route path="/news-details-7" element={<CorporateNewDetail7 />} />
            {/* Blogs */}
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
            <Route
              path="/blog-details-4"
              element={<CorporateBlogDetailFour />}
            />
            <Route
              path="/blog-details-5"
              element={<CorporateBlogDetailFive />}
            />
            <Route
              path="/blog-details-6"
              element={<CorporateBlogDetailSix />}
            />
            <Route path="/blog-details-7" element={<CorporateBlogDetail7 />} />
            <Route path="/blog-details-8" element={<CorporateBlogDetail8 />} />
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
              <Route path="gallery" element={<Gallery />} />
              <Route path="job-position" element={<JobPosition />} />
              <Route path="profile" element={<Profile />} />
              <Route path="all-jobs" element={<AllJobs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
