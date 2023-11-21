export type RouteComponent<T> = React.FC<T>;

export type RouteConfig<T> = {
  path: RegExp;
  component: RouteComponent<T>;
};

export function Router<T>({
  routes,
  NotFound,
}: {
  routes: RouteConfig<T>[];
  NotFound: React.FC;
}) {
  const path = window.location.pathname;
  const route = routes.find((route) => route.path.test(path));
  const params = path.match(route?.path || /$/)?.groups;
  if (!route) {
    return <NotFound />;
  }
  const Component = route.component;
  // @ts-expect-error params is always defined
  return <Component params={params || {}} />;
}
