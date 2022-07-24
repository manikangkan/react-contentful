const HeroSkeletonLoader = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="h-10 w-1/2 rounded-full bg-gray-400 animate-pulse" />
      </div>
      <div className="absolute -z-50 h-full w-full object-cover top-0 bottom-0 left-0 right-0 bg-gray-400 animate-pulse" />
    </div>
  );
};

export default HeroSkeletonLoader;
