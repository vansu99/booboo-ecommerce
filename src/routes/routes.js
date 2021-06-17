import React, { Fragment, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { pathNames, userRole } from 'constants/index';
import RoleRoutes from './roleRoutes';
import { AuthGuard, GuestGuard } from 'guards';
import HomeLayout from 'layout/HomeLayout';
import MainLayout from 'layout/MainLayout';
import Loading from 'components/Loading';

const Error404View = lazy(() => import('pages/Error'));
const HomePage = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const ProductFeature = lazy(() => import('features/Shop/Product'));
const CartFeature = lazy(() => import('features/Shop/Cart'));

const routesConfig = [
  {
    exact: true,
    path: pathNames.ROOT,
    layout: HomeLayout,
    component: HomePage,
    requireRoles: [userRole.USER, userRole.GUEST],
  },
  {
    path: pathNames.PRODUCT,
    layout: HomeLayout,
    component: ProductFeature,
    requireRoles: [userRole.USER, userRole.GUEST],
  },
  {
    exact: true,
    guard: GuestGuard,
    path: pathNames.LOGIN,
    layout: HomeLayout,
    component: Login,
    requireRoles: [userRole.USER, userRole.GUEST],
  },
  {
    exact: true,
    guard: GuestGuard,
    path: pathNames.REGISTER,
    layout: HomeLayout,
    component: Register,
    requireRoles: [userRole.USER, userRole.GUEST],
  },
  {
    exact: true,
    path: pathNames.ERROR_404,
    component: Error404View,
  },
  {
    path: '/',
    guard: AuthGuard,
    layout: HomeLayout,
    routes: [
      {
        exact: true,
        path: pathNames.CART,
        component: CartFeature,
        requireRoles: [userRole.USER],
      },
      {
        exact: true,
        path: pathNames.ERROR_404,
        component: Error404View,
      },
      {
        component: () => <Redirect to={pathNames.ERROR_404} />,
      },
    ],
  },
  {
    path: '/admin',
    guard: AuthGuard,
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: pathNames.ADMIN,
        component: HomePage,
        requireRoles: [userRole.ADMIN],
      },
      {
        exact: true,
        path: pathNames.ERROR_404,
        component: Error404View,
      },
      {
        component: () => <Redirect to={pathNames.ERROR_404} />,
      },
    ],
  },
  {
    path: '*',
    routes: [
      {
        component: () => <Redirect to={pathNames.ERROR_404} />,
      },
    ],
  },
];

const renderRoutes = (routes) => {
  return (
    <>
      {routes ? (
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map((route, idx) => {
              const Guard = route.guard || Fragment;
              const Component = route.component;
              const Layout = route.layout || Fragment;
              const requireRoles = route.requireRoles || [];

              return (
                <Route
                  key={`routes-${idx}`}
                  path={route.path}
                  exact={route.exact}
                  render={(props) => (
                    <Guard>
                      <Layout>
                        {route.routes ? (
                          renderRoutes(route.routes)
                        ) : (
                          <RoleRoutes requireRoles={requireRoles}>
                            <Component {...props} />
                          </RoleRoutes>
                        )}
                      </Layout>
                    </Guard>
                  )}
                />
              );
            })}
          </Switch>
        </Suspense>
      ) : null}
    </>
  );
};

function routes() {
  return renderRoutes(routesConfig);
}

export default routes;
