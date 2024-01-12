import Header from "./HeaderLayout";
import Main from "./MainLayout";
import Navbar from "./NavbarLayout";

interface AppLayourProps {
  children: React.ReactNode;
}

export default function AppLayout(props: AppLayourProps) {
  const { children } = props;

  return (
    <div className="flex flex-col min-h-screen">
      <Header>Header</Header>
      <section className="flex flex-row flex-grow">
        <Navbar>Navbar</Navbar>
        <Main>{children}</Main>
      </section>
    </div>
  );
}
