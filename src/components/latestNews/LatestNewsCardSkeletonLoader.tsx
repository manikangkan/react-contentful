const LatestNewsCardSkeletonLoader = () => {
  return (
    <div className="space-y-4">
      <div className="w-full h-48 rounded-lg bg-gray-200 animate-pulse" />
      <div className="h-10 w-1/2 rounded-full bg-gray-200 animate-pulse" />
      <div className="h-5 w-full rounded-full bg-gray-200 animate-pulse" />
      <div className="h-5 w-1/2 rounded-full bg-gray-200 animate-pulse" />
    </div>
  );
};

export default LatestNewsCardSkeletonLoader;
