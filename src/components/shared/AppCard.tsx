import { IApp } from "@/types/app.types";
import Image from "next/image";

interface AppType {
  app: IApp;
}

const AppCard = ({ app }: AppType) => {
  // Calculate max count safely to prevent division by zero or NaN issues
  const maxCount = Math.max(...app.ratings.map((r) => r.count), 0);

  return (
    <div className="w-full max-w-3xl mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-6 md:p-8">
      {/* App Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between md:items-center md:gap-6">
        {/* App Image and Info */}
        <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4 md:items-center">
          <Image
            src={app.image}
            alt={app.title}
            width={300}
            height={300}
            className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow-sm xs:h-20 xs:w-20 sm:h-24 sm:w-24"
          />

          <div className="min-w-0 flex-1">
            <h2 className="truncate text-base font-bold text-gray-900 xs:text-lg sm:text-xl">
              {app.title}
            </h2>

            <p className="mt-0.5 truncate text-xs font-semibold text-green-700 sm:mt-1 sm:text-sm">
              {app.companyName}
            </p>

            {/* Quick Stats Grid */}
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-gray-600 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2 sm:text-left sm:text-sm">
              <div className="rounded-lg bg-gray-50 p-1.5 sm:bg-transparent sm:p-0">
                <p className="font-semibold text-gray-900">{app.ratingAvg} ★</p>
                <p className="text-[10px] text-gray-500 sm:text-xs">{app.reviews} reviews</p>
              </div>

              <div className="rounded-lg bg-gray-50 p-1.5 sm:bg-transparent sm:p-0">
                <p className="font-semibold text-gray-900">{app.downloads}+</p>
                <p className="text-[10px] text-gray-500 sm:text-xs">Downloads</p>
              </div>

              <div className="rounded-lg bg-gray-50 p-1.5 sm:bg-transparent sm:p-0">
                <p className="font-semibold text-gray-900">{app.size} MB</p>
                <p className="text-[10px] text-gray-500 sm:text-xs">Size</p>
              </div>
            </div>
          </div>
        </div>

        {/* Install Button */}
        <button className="w-full shrink-0 rounded-full bg-green-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800 active:scale-95 sm:w-auto sm:px-8 sm:py-3">
          Install
        </button>
      </div>

      {/* App Description */}
      <div className="mt-6">
        <h3 className="mb-2 text-base font-semibold text-gray-900 sm:text-lg">
          About this app
        </h3>

        <p className="line-clamp-3 text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6">
          {app.description}
        </p>
      </div>

      {/* Ratings Section */}
      <div className="mt-6 border-t border-gray-100 pt-5 sm:pt-6">
        <h3 className="mb-4 text-base font-semibold text-gray-900 sm:text-lg">
          Ratings and reviews
        </h3>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
          {/* Average Rating Block */}
          <div className="flex items-center gap-4 sm:w-28 sm:flex-col sm:items-center sm:justify-center sm:gap-1 sm:text-center">
            <p className="text-4xl font-bold text-gray-900 sm:text-5xl">
              {app.ratingAvg}
            </p>

            <div>
              <p className="text-sm tracking-wide text-yellow-500 sm:text-base">★★★★★</p>
              <p className="text-xs text-gray-500">{app.reviews} reviews</p>
            </div>
          </div>

          {/* Rating Bars */}
          <div className="w-full flex-1 space-y-2.5">
            {[...app.ratings].reverse().map((rating) => {
              const percentage = maxCount > 0 ? (rating.count / maxCount) * 100 : 0;

              return (
                <div
                  key={rating.name}
                  className="flex items-center gap-2 text-xs sm:gap-3 sm:text-sm"
                >
                  <span className="w-8 shrink-0 font-medium text-gray-600 sm:w-10">
                    {rating.name}
                  </span>

                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100 sm:h-2.5">
                    <div
                      className="h-full rounded-full bg-green-700 transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  <span className="w-10 shrink-0 text-right text-xs text-gray-500 sm:w-14 sm:text-sm">
                    {rating.count.toLocaleString()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;