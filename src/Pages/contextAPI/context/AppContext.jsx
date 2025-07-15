import { createContext, useState } from "react";
import { baseUrl } from "../../../../baseUrl";

/*******************************************step-1 Craeting the context**********************************************/
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  /*******************************************data filling*********************************************************/
  async function fetchBlogPosts(page = 1) {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}?page=${page}`);
      const data = await response.json();
      setPage(data?.page);
      setPosts(data?.posts || []);
      setTotalPages(data?.totalPages || null);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    } finally {
      setIsLoading(false);
    }
  }

  function handlePageChange(newPage) {
    setPage(newPage);
    fetchBlogPosts(newPage);
  }

  const value = {
    posts,
    setPosts,
    loading,
    setIsLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };
  /****************************************************step-2 providing thr context******************************************/
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
