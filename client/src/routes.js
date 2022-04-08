import Main from './pages/Main';
import Add from './pages/Add';
import Edit from './pages/Edit';

const routes = [
    {
        path: "/add",
        element: <Add />
    },
    {
        path: "/",
        element: <Main />,
        exact: true
    },
    {
        path: "/edit/:id",
        element: <Edit />
    }
];

export default routes;