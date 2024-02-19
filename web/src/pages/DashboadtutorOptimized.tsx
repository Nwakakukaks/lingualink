import { FunctionComponent } from "react";
import { Header } from "../components/Header";
import { ProfileCard } from "../components/ProfileCard";
import { UserInfoCard } from "../components/UserInfoCard";
import { UserSessionInfo } from "../components/UserSessionInfo";
import { NoActiveSession } from "../empty/NoSession";

const DashboadtutorOptimized: FunctionComponent = () => {
  return (
    <div className="h-screen bg-white font-body-2-body-2">
      <Header />
      <section className="py-6 px-4 md:px-16 lg:px-24">
        <div className="md:flex md:space-x-12">
          <div className="md:w-2/3 flex flex-col md:space-y-8">
            <ProfileCard />
            <UserInfoCard />
          </div>
          <div className="md:w-1/3">
            <UserSessionInfo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboadtutorOptimized;
