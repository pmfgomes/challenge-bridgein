interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  const { children } = props;
  return <main className="w-full p-4">{children}</main>;
}
