interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  const { children } = props;
  return <main className="flex-1 overflow-y-auto w-full p-4 bg-[#3d3d3c]/5">{children}</main>;
}
