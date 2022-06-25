import React, { useMemo } from "react";
import { IoNotifications, IoMenu, IoPlayCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { usePosts } from "../../Hooks/usePosts";

function NavBar() {
  const { loading, posts } = usePosts();

  const postsCount = useMemo(() => (posts ? posts.length : null), [posts]);

  return (
    <header className="flex justify-center md:justify-between p-5 bg-white mb-5">
      <Link to="/" className="text-2xl flex-center hidden md:flex font-bold">
        <IoPlayCircleSharp className="mr-3" />
        Arbit Blog
      </Link>
      <nav className="flex gap-3 items-center text-lg">
        <Link to="/" className="relative">
       
          {!loading && postsCount && (
            <span className="absolute -top-4 -right-3 w-6 h-6 text-xs rounded-full flex-center bg-violet-400 text-white">
              {postsCount}
            </span>
          )}
        </Link>
        <IoNotifications />
        <IoMenu />
        <div className="h-8 w-8 rounded-full bg-blue-400 text-white flex-center">
          A
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
