import Main from './pages/Main';
import Add from './pages/Add';

const routes = [
    {
        path: "/add",
        element: <Add />
    },
    {
        path: "/",
        element: <Main />,
        exact: true
    }
];

export default routes;