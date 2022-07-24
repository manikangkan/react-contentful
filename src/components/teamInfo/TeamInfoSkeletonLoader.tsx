const TeamInfoSkeletonLoader = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
      <div className="w-full h-96 rounded-lg bg-orange-100 dark:bg-blue-100 animate-pulse" />
      <div className="space-y-2 w-full">
        <div className="h-10 w-1/2 rounded-full bg-orange-100 dark:bg-blue-100 animate-pulse" />
        <div className="h-5 w-full rounded-full bg-orange-100 dark:bg-blue-100 animate-pulse" />
        <div className="h-5 w-1/2 rounded-full bg-orange-100 dark:bg-blue-100 animate-pulse" />
      </div>
    </div>
  );
};

export default TeamInfoSkeletonLoader;
