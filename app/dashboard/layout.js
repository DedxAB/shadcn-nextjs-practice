export default function DashboardLayout({
  children,
  notification,
  settings,
  user,
}) {
  return (
    <div className="text-xl text-center">
      {children}
      <br />
      <div>{notification}</div>
      <div>{settings}</div>
      <div>{user}</div>
    </div>
  );
}
