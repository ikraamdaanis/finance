import { Header } from "components/Header";
import { Children } from "types";

export default function DashboardLayout({ children }: Children) {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>;
    </>
  );
}
