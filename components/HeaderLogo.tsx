import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center lg:flex">
        <Image src="/logo.svg" alt="Logo" height={24} width={24} />
        <p className="ml-2.5 text-2xl font-semibold text-white">Finance</p>
      </div>
    </Link>
  );
};
