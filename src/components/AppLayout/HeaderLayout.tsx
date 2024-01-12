interface HeaderLayoutProps {
  children: React.ReactNode;
}

export default function HeaderLayout(props: HeaderLayoutProps) {
  const { children } = props;

  return <header className="flex flex-row flex-nowrap w-full h-16 p-4 items-center border-b">{children}</header>;
}
