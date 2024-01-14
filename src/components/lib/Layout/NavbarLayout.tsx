
interface NavbarLayoutProps {
  children: React.ReactNode;
}

export default function NavbarLayout(props: NavbarLayoutProps) {
  const { children } = props;

  return <nav className="flex flex-col p-4 min-w-[300px] border-r shadow">{children}</nav>;
}
