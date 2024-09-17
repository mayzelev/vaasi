import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../pages/MainPage/index.jsx';
import NaturalPersonPage from '../pages/NaturalPersonPage/index.jsx';
import DefaultLayout from '../components/Layout/DefaultLayout.jsx';
import LegalEntitiesPage from '../pages/LegalEntitiesPage/index.jsx';
import PrivateRoute from './PrivateRoutes.jsx';
import ProfilePage from '../pages/ProfilePage/index.jsx';
import useAuthStore from '../store/useAuthStore.js';
import AboutUsPage from '../pages/AboutUsPage/index.jsx';
import BasicAssetsPage from '../pages/BasicAssets/index.jsx';

const AppRoutes = () => {
    const { isAuthorized } = useAuthStore();
    return (
        <Routes>
            <Route
                path="/"
                element={
                    isAuthorized ? (
                        <Navigate to="/profile" replace />
                    ) : (
                        <DefaultLayout>
                            <MainPage />
                        </DefaultLayout>
                    )
                }
            />
            <Route
                path="/natural-persons"
                element={
                    <DefaultLayout>
                        <NaturalPersonPage />
                    </DefaultLayout>
                }
            />
            <Route
                path="/legal-entities"
                element={
                    <DefaultLayout>
                        <LegalEntitiesPage />
                    </DefaultLayout>
                }
            />
            <Route
                path="/about-us"
                element={
                    <DefaultLayout>
                        <AboutUsPage />
                    </DefaultLayout>
                }
            />
            <Route
                path="/profile"
                element={
                    <PrivateRoute>
                        <DefaultLayout>
                            <ProfilePage />
                        </DefaultLayout>
                    </PrivateRoute>
                }
            />
            <Route
                path="/basic-assets"
                element={
                    <PrivateRoute>
                        <DefaultLayout>
                            <BasicAssetsPage />
                        </DefaultLayout>
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<div>Page not found</div>} />
        </Routes>
    );
};

export default AppRoutes;
