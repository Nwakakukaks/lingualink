import { FunctionComponent } from "react";
import { Header } from "../components/Header";
import { ProfileCard } from "../components/ProfileCard";
import { UserInfoCard } from "../components/UserInfoCard";
import { UserSessionInfo } from "../components/UserSessionInfo";
import { NoActiveSession } from "../empty/NoSession";
import { AssessmentCard } from "../components/Assessment";
import { ActiveSessionStudent } from "../empty/Sessions";

const DashboadStudent: FunctionComponent = () => {
  return (
    <div className=" bg-white font-body-2-body-2">
      <Header />
      <section className="py-6 px-4 md:px-16 lg:px-24">
        <div className="md:flex md:space-x-12">
          <div className="md:w-2/3 flex flex-col md:space-y-8">
            <ProfileCard />
            <UserInfoCard />
            <AssessmentCard />
          </div>
          <div className="md:w-1/3">
            <UserSessionInfo />
            {/* <ActiveSessionStudent/> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboadStudent;
