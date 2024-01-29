export default function DashboardLayout({
  children,
  notification,
  settings,
  user,
  login,
}) {
  const isLoggedin = false;
  return isLoggedin ? (
    <div className="text-xl text-center">
      {children}
      <br />
      <div>{notification}</div>
      <div>{settings}</div>
      <div>{user}</div>
    </div>
  ) : (
    <>{login}</>
  );
}
