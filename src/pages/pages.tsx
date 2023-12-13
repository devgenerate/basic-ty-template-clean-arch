import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './home.page';

import { Paths } from '@/constants/paths.constants';

const router = createBrowserRouter([
    {
        path: Paths.Home,
        Component: HomePage
    }
])

function Pages() {
    return (
        <RouterProvider router={router} />
    );
}

export default Pages;
