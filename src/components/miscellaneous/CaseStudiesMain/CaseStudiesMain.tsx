"use client";
import LoaderComponent from "@/components/miscellaneous/LoaderComponent/LoaderComponent";
import { getImagePath } from "@/services/common.service";
import { getAllPages } from "@/services/pages.service";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import "./CaseStudiesMain.scss";

function CaseStudiesMain() {
  const [allCaseStudies, setAllCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showFeatured, setShowFeatured] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const pages = await getAllPages("caseStudy", true);
        setAllCaseStudies(pages);
      } catch (err) {
        console.error("Error fetching case studies:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getField = (fields: any[], key: string) =>
    fields?.find((f: any) => f.key === key)?.value || "";

  const categories = useMemo(() => {
    const map: Record<string, number> = {};
    allCaseStudies.forEach((item) => {
      const cat = getField(item.fields, "category");
      if (cat) {
        map[cat] = (map[cat] || 0) + 1;
      }
    });
    return Object.entries(map).sort((a, b) => a[0].localeCompare(b[0]));
  }, [allCaseStudies]);

  const filtered = useMemo(() => {
    let list = allCaseStudies;

    if (showFeatured) {
      list = list.filter((item) => {
        const featured = getField(item.fields, "featured");
        return featured === true || featured === "true";
      });
    }

    if (activeCategory !== "all") {
      list = list.filter(
        (item) => getField(item.fields, "category") === activeCategory,
      );
    }

    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      list = list.filter((item) => {
        const title = getField(item.fields, "pageTitle").toLowerCase();
        const desc = getField(item.fields, "metaDescription").toLowerCase();
        return title.includes(lower) || desc.includes(lower);
      });
    }

    return list;
  }, [allCaseStudies, showFeatured, activeCategory, searchTerm]);

  return (
    <section className="caseStudiesSection">
      <div className="container">
        <div className="row mx-0">
          {/* Left Sidebar — Categories */}
          <div className="col-lg-3 col-md-3">
            <div className="cs-sidebar">
              <h3 className="cs-sidebar__title">Organizations</h3>
              <ul className="cs-sidebar__list">
                {categories.map(([cat, count]) => (
                  <li
                    key={cat}
                    className={`cs-sidebar__item ${activeCategory === cat ? "active" : ""}`}
                    onClick={() => {
                      setActiveCategory(cat);
                      setShowFeatured(false);
                    }}
                  >
                    {cat} <span className="cs-sidebar__count">({count})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-9 col-md-9">
            {/* Filter Bar */}
            <div className="cs-filterbar d-flex align-items-center">
              <button
                className={`cs-filterbar__featured ${showFeatured ? "active" : ""}`}
                onClick={() => {
                  setShowFeatured(true);
                  setActiveCategory("all");
                }}
              >
                Featured Case Studies
              </button>
              <button
                className={`cs-filterbar__all ${!showFeatured && activeCategory === "all" ? "active" : ""}`}
                onClick={() => {
                  setShowFeatured(false);
                  setActiveCategory("all");
                }}
              >
                All
              </button>
              <div className="cs-filterbar__search d-flex align-items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search Case Studies"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Cards */}
            {loading ? (
              <LoaderComponent />
            ) : (
              <div className="cs-grid row">
                {filtered.length === 0 ? (
                  <div className="cs-empty">
                    <p>No case studies found.</p>
                  </div>
                ) : (
                  filtered.map((item) => {
                    const title =
                      getField(item.fields, "pageTitle") || "Untitled";
                    const slug = getField(item.fields, "slug") || "#";
                    const featureImage = getField(item.fields, "featureImage");
                    const excerpt = getField(item.fields, "excerpt");
                    const publishDate =
                      getField(item.fields, "publishDate") || item.createdAt;

                    return (
                      <div className="col-lg-6 col-md-6 col-12" key={item._id}>
                        <Link href={`/${slug}`} className="cs-card">
                          <div className="cs-card__img">
                            <Image
                              src={getImagePath(
                                "default_img.png",
                                featureImage,
                              )}
                              alt={title}
                              width={600}
                              height={340}
                              className="img-cover"
                              loading="lazy"
                              unoptimized
                            />
                          </div>
                          <div className="cs-card__body">
                            {publishDate && (
                              <p className="cs-card__date">
                                {new Date(publishDate).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                  },
                                )}
                              </p>
                            )}
                            <h4 className="cs-card__title">{title}</h4>
                            {excerpt && (
                              <p className="cs-card__desc">{excerpt}</p>
                            )}
                          </div>
                        </Link>
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesMain;
