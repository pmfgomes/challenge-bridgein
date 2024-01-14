import { TableProperties } from "lucide-react";
import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const browserLocation = useLocation();

  const MENU_ITEMS = [
    {
      link: "teams",
      label: "Teams",
      icon: <TableProperties size={28} strokeWidth={2} />,
    },
  ];

  const menuItems = useMemo(
    () =>
      MENU_ITEMS.map((item) => {
        let classes =
          "h-12 px-2 py-3 flex flex-row items-center gap-2  border-2 rounded border-gray-100 text-black hover:bg-gray-100 font-bold";
        if (item.link === browserLocation.pathname.substring(1)) {
          classes += " bg-gray-100";
        } else {
          classes += " bg-white";
        }

        return (
          <NavLink key={item.link} to={item.link} className={classes}>
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        );
      }),
    [browserLocation.pathname],
  );

  return <div className="flex flex-col gap-3">{menuItems}</div>;
}

