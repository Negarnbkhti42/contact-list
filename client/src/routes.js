import Main from './pages/Main';
import Add from './pages/Add';
import Edit from './pages/Edit';
import View from './pages/View';

const routes = [
    {
        path: "/add",
        element: <Add />
    },
    {
        path: "/edit/:id",
        element: <Edit />
    },
    {
        path: "/contact/:id",
        element: <View />
    },
    {
        path: "/:group",
        element: <Main />,
    },
    {
        path: "/",
        element: <Main />,
        exact: true
    },
];

export default routes;