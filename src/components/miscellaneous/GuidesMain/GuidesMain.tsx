"use client";
import ArrowheadRightOutline from "@/components/Icons/ArrowheadRightOutline";
import LoaderComponent from "@/components/miscellaneous/LoaderComponent/LoaderComponent";
import { getImagePath } from "@/services/common.service";
import { getAllPages } from "@/services/pages.service";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function GuidesMain(type: any) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { itemsPerPage = 6 } = type;
  const { excludeSlug = "" } = type;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

useEffect(() => {
  let isMounted = true;

  const fetchPages = async () => {
    setLoading(true);
    try {
      const pagesData = await getAllPages(type.type, true);
      if (!isMounted) return; // Prevent state update if unmounted
      
      const filteredData = excludeSlug
        ? pagesData.filter(
            (page: any) =>
              page.fields.find((f: any) => f.key === "slug")?.value !==
              excludeSlug,
          )
        : pagesData;

      setData(filteredData);
    } catch (error) {
      if (isMounted) console.error("Error fetching blogs:", error);
    } finally {
      if (isMounted) setLoading(false);
    }
  };

  fetchPages();

  return () => {
    isMounted = false; // Cleanup function
  };
}, [type.type, excludeSlug]);

  const navigateToBlog = (url: string) => {
    router.push(`/${url}`);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <>
       {loading && data.length === 0 ? (
        <LoaderComponent />
      ) : ( 
        <section className="allBlogs">
          <div className="container">
            <div className="row mx-0">
              <div className="col-lg-8 col-md-8">
                <div className="mainBlogBoxes d-flex flexwrap">
                  {paginatedData.map((item: any) => {
                    const pageTitle =
                      item.fields.find(
                        (field: any) => field.key === "pageTitle",
                      )?.value || "Untitled";
                    const slug =
                      item.fields.find((field: any) => field.key === "slug")
                        ?.value || "#";
                    const featureImage = item.fields.find(
                      (field: any) => field.key === "featureImage",
                    )?.value;
                    const metaDescription =
                      item.fields.find(
                        (field: any) => field.key === "metaDescription",
                      )?.value || "";

                    return (
                      <div className="blogBox relative" key={item._id}>
                        <Link href={`/${slug}`}>
                          <div className="blogDate">
                            {item.createdAt ? (
                              <>
                                <h4>{new Date(item.createdAt).getDate()}</h4>
                                <p>
                                  {new Date(item.createdAt).toLocaleString(
                                    "en-US",
                                    { month: "short" },
                                  )}
                                </p>
                              </>
                            ) : (
                              <>
                                <h4>--</h4>
                                <p>---</p>
                              </>
                            )}
                          </div>

                          <div className="blogImg">
                            <Image
                              src={getImagePath(
                                "hero_front.webp",
                                featureImage,
                              )}
                              alt={pageTitle}
                              width={400}
                              height={400}
                              className="img-cover"
                              loading="lazy"
                              unoptimized
                            />
                          </div>
                          <div className="blogName">
                            <h4>{pageTitle}</h4>
                          </div>
                          <div className="blogBtns d-flex align-items-center">
                            <p>
                              Read More{" "}
                              <span>
                                <ArrowheadRightOutline />
                              </span>
                            </p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="sidebar">
                  <div className="search">
                    <div className="searchInput">
                      <div className="search-bar d-flex">
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Search..."
                        />
                        <button onClick={handleSearch}>Search</button>
                      </div>
                    </div>
                  </div>
                  <div className="recentPosts">
                    <h4>Recent Posts</h4>
                    <div className="postLists">
                      {data.slice(0, 3).map((post: any) => {
                        const recentTitle =
                          post.fields.find(
                            (field: any) => field.key === "pageTitle",
                          )?.value || "Untitled";
                        const recentSlug =
                          post.fields.find((field: any) => field.key === "slug")
                            ?.value || "#";
                        return (
                          <p
                            key={recentSlug}
                            onClick={() => navigateToBlog(recentSlug)}
                          >
                            {recentTitle}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            {/* <div className="pagination d-flex justify-content-end">
              {totalPages > 1 && (
                <>
                  {currentPage > 1 && (
                    <button onClick={() => handlePageChange(currentPage - 1)}>
                      Prev
                    </button>
                  )}
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  {currentPage < totalPages && (
                    <button onClick={() => handlePageChange(currentPage + 1)}>
                      Next
                    </button>
                  )}
                </>
              )}

            </div> */}
            <div className="paginationWrapper">
              {totalPages > 1 && (
                <div className="pagination">
                  {/* Previous Arrow */}
                  {currentPage > 1 && (
                    <button
                      className="pageCircle arrow"
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      ←
                    </button>
                  )}

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;

                    // Show first, last, current, and neighbors
                    if (
                      page === 1 ||
                      page === totalPages ||
                      page === currentPage ||
                      page === currentPage - 1 ||
                      page === currentPage + 1
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`pageCircle ${
                            currentPage === page ? "active" : ""
                          }`}
                        >
                          {page}
                        </button>
                      );
                    }

                    // Show dots
                    if (page === currentPage - 2 || page === currentPage + 2) {
                      return (
                        <span key={page} className="dots">
                          ...
                        </span>
                      );
                    }

                    return null;
                  })}

                  {/* Next Arrow */}
                  {currentPage < totalPages && (
                    <button
                      className="pageCircle arrow"
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      <svg
                        width="24"
                        height="15"
                        viewBox="0 0 24 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.7071 8.07112C24.0976 7.6806 24.0976 7.04743 23.7071 6.65691L17.3431 0.292947C16.9526 -0.097577 16.3195 -0.0975771 15.9289 0.292947C15.5384 0.683472 15.5384 1.31664 15.9289 1.70716L21.5858 7.36402L15.9289 13.0209C15.5384 13.4114 15.5384 14.0446 15.9289 14.4351C16.3195 14.8256 16.9526 14.8256 17.3431 14.4351L23.7071 8.07112ZM0 7.36401L-8.74228e-08 8.36401L23 8.36402L23 7.36402L23 6.36402L8.74228e-08 6.36401L0 7.36401Z"
                          fill="#A064FF"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )} 
    </>
  );
}

export default GuidesMain;
