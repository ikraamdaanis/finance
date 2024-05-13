import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { HeaderLogo } from "components/HeaderLogo";
import { Navigation } from "components/Navigation";
import { WelcomeMessage } from "components/WelcomeMessage";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 pb-36 lg:px-14">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-14 flex w-full items-center justify-between">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <div className="size-7 animate-pulse rounded-full bg-slate-400" />
          </ClerkLoading>
        </div>
        <WelcomeMessage />
      </div>
    </header>
  );
};
