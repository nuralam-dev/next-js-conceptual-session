
const PlayerCardSkeleton = () => {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm animate-pulse">
      {/* Cover Image Skeleton */}
      <div className="h-64 w-full rounded-xl bg-gray-200" />

      {/* Profile Section */}
      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
        {/* Avatar */}
        <div className="h-36 w-36 shrink-0 rounded-full bg-gray-200" />

        {/* Name and Details */}
        <div className="flex-1 space-y-4">
          <div className="h-10 w-3/4 max-w-sm rounded-lg bg-gray-200" />
          <div className="h-8 w-1/2 max-w-xs rounded-lg bg-gray-200" />
        </div>

        {/* Button */}
        <div className="h-16 w-48 rounded-xl bg-gray-300" />
      </div>

      {/* Divider */}
      <div className="my-8 h-0.5 w-full bg-gray-200" />

      {/* Information Section */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gray-300" />
            <div className="h-8 w-3/4 rounded-lg bg-gray-200" />
          </div>

          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gray-300" />
            <div className="h-8 w-3/4 rounded-lg bg-gray-200" />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gray-300" />
            <div className="h-8 w-3/4 rounded-lg bg-gray-200" />
          </div>

          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gray-300" />
            <div className="h-8 w-3/4 rounded-lg bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCardSkeleton;

