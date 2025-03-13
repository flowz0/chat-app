import { FaUsers } from "react-icons/fa6";

const SidebarSkeleton = () => {
  // Create 8 skeleton items
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside
      className="w-20 lg:w-72 bg-zinc-800 border-r border-zinc-700 
    flex flex-col transition-all duration-200"
    >
      {/* Header */}
      <div className="border-b border-zinc-700 w-full p-4">
        <div className="flex justify-center gap-2">
          <FaUsers className="size-6" />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
      </div>

      {/* Skeleton Contacts */}
      <div className="overflow-y-auto w-full">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="w-full p-3 flex items-center gap-3">
            {/* Avatar skeleton */}
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton size-8 lg:size-12 rounded-full bg-zinc-900" />
            </div>

            {/* User info skeleton - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="skeleton h-4 w-32 mb-2 bg-zinc-900" />
              <div className="skeleton h-3 w-16 bg-zinc-900" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default SidebarSkeleton