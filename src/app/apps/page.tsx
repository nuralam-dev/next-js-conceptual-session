import AppCard from "@/components/shared/AppCard";
import { getAllTrendingApps } from "@/lib/apps";
import { IApp } from "@/types/app.types";

const HomePage = async () => {
  const allApps = await getAllTrendingApps();
  return (
    <div className="container mx-auto">
      <div className="text-center my-[80px]">
        <h1 className="font-semibold text-2xl">All Apps</h1>
        <p>Explore All Apps on the Market developed by us</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {allApps.map((app: IApp, ind: number) => {
          return <AppCard key={ind} app={app}></AppCard>;
        })}
      </div>
    </div>
  );
};

export default HomePage;
