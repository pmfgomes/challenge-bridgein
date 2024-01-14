import HeaderSection from "@/components/lib/Layout/HeaderLayout";
import MainSection from "@/components/lib/Layout/MainLayout";
import NavbarSection from "@/components/lib/Layout/NavbarLayout";
import Navbar from "@/components/Navbar/Navbar";

import { Dribbble } from "lucide-react";

interface AppLayourProps {
  children: React.ReactNode;
}

export default function AppLayout(props: AppLayourProps) {
  const { children } = props;

  return (
    <div className="flex flex-col h-screen">
      <HeaderSection>
        <div className="flex flex-row items-center gap-2">
          <Dribbble size={32} strokeWidth={2.25} />
          <h3 className="font-bold text-black text-xl">NBA Stats</h3>
        </div>
      </HeaderSection>
      <aside className="flex flex-row flex-1 overflow-hidden">
        <NavbarSection>
          <Navbar />
        </NavbarSection>
        <MainSection>{children}</MainSection>
      </aside>
    </div>
  );
}
