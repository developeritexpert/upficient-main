"use client";

import ArrowheadRightOutline from "@/components/Icons/ArrowheadRightOutline";
import { getImagePath } from "@/services/common.service";
import { getAllPages, searchInFields } from "@/services/pages.service";
import Image from "next/image";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./page.scss";

function Page() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query");
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<any>(initialQuery);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  const performSearch = async (term: any) => {
    try {
      const results = await searchInFields(term);
      setSearchResults(results);

      console.log(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
      performSearch(searchTerm);
    }
  };

  const navigateToBlog = (url: string) => {
    redirect(`/${url}`);
  };

  const fetchPages = async () => {
    try {
      const pagesData = await getAllPages("blog");
      setData(pagesData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <>
      <section className="allBlogs searchpage">
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-8 col-md-8">
              <div className="mainBlogBoxes d-flex flexwrap">
                {searchResults.map((result) => {
                  const pageTitleField = result.fields.find(
                    (field: any) => field.key === "pageTitle",
                  );
                  const pageDescription = result.fields.find(
                    (field: any) => field.key === "metaDescription",
                  );
                  const pageSlug = result.fields.find(
                    (field: any) => field.key === "slug",
                  );
                  const pageImage = result.fields.find(
                    (field: any) => field.key === "featureImage",
                  );
                  const date = new Date(result.createdAt);
                  const day = date.getDate().toString().padStart(2, "0");
                  const month = date.toLocaleString("default", {
                    month: "short",
                  });
                  return (
                    <div key={result._id} className="blogBox relative">
                      <div className="blogDate test">
                        <h4>{day}</h4>
                        <p>{month}</p>
                      </div>
                      <div className="blogImg">
                        <Image
                          src={getImagePath(
                            "hero_front.webp",
                            pageImage?.value,
                          )}
                          alt={pageTitleField?.value || "Blog Image"}
                          width={400}
                          height={400}
                          className="img-cover"
                          unoptimized
                        />
                      </div>
                      <div className="blogName">
                        <h4 onClick={() => navigateToBlog(pageSlug?.value)}>
                          {pageTitleField?.value || "Untitled"}
                        </h4>
                        {pageDescription?.value && (
                          <p>{pageDescription?.value}</p>
                        )}
                      </div>
                      <div
                        className="blogBtns d-flex align-items-center"
                        onClick={() => navigateToBlog(pageSlug?.value)}
                      >
                        <p>
                          Read More
                          <span>
                            <ArrowheadRightOutline />
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="sidebar">
                <div className="search">
                  <div className="title">
                    <h4>Search</h4>
                  </div>
                  <div className="searchInput">
                    <form onSubmit={handleSearchSubmit}>
                      <div className="search-bar d-flex">
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Search..."
                        />
                        <button type="submit">Search</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="recentPosts">
                  <h4>Recent Posts</h4>
                  <div className="postLists">
                    {data.slice(0, 5).map((post: any) => {
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
        </div>
      </section>
    </>
  );
}

export default Page;
