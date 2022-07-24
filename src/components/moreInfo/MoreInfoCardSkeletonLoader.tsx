const MoreInfoCardSkeletonLoader = () => {
  return (
    <div className="bg-white p-8 rounded-lg flex-1 space-y-4">
      <div className="w-16 h-16 bg-gray-200 rounded-lg" />
      <div className="h-10 w-1/2 rounded-full bg-gray-200 animate-pulse" />
      <div className="h-5 w-full rounded-full bg-gray-200 animate-pulse" />
      <div className="h-5 w-1/2 rounded-full bg-gray-200 animate-pulse" />
    </div>
  );
};

export default MoreInfoCardSkeletonLoader;
