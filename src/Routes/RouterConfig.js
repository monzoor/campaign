// Layouts
import PublicLayout from '../Components/Layout/PublicLayout';

// Generale component
import NotFound from '../Components/404';

// Compoenent
import Home from '../Components/Home/Home';

export default [
    {
        path: '/',
        type: 'public',
        exact: true,
        component: Home,
        layout: PublicLayout
    },
    {
        path: '*',
        type: 'public',
        exact: true,
        component: NotFound,
        layout: PublicLayout,
        status: 404
    }
];
