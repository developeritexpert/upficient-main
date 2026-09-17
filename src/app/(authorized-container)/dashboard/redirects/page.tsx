"use client";
import ArrowheadLeftOutline from "@/components/Icons/ArrowheadLeftOutline";
import ArrowheadRightOutline from "@/components/Icons/ArrowheadRightOutline";
import EditOutline from "@/components/Icons/EditOutline";
import Trash2Outline from "@/components/Icons/Trash2Outline";
import LoaderComponent from "@/components/miscellaneous/LoaderComponent/LoaderComponent";
import InputText from "@/components/ui/input-text";
import {
  addRedirect,
  deleteRedirect,
  getAll301Redirects,
  getRedirectById,
  updateRedirect,
} from "@/services/redirects.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import "./page.scss";

const RedirectsFormValidator = z.object({
  source: z
    .string({ required_error: "Source is required." })
    .min(1, "Source is required."),
  destination: z
    .string({ required_error: "Destination is required." })
    .min(1, "Destination is required."),
});

type RedirectFormInputs = z.infer<typeof RedirectsFormValidator>;

export default function Redirects() {
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(false);
  const [redirectId, setRedirectId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<RedirectFormInputs>({
    resolver: zodResolver(RedirectsFormValidator),
  });

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Fetch users
  const fetchRedirects = async () => {
    setLoading(true);
    try {
      const data = await getAll301Redirects();
      setData(data);
    } catch (error) {
      console.error("Error fetching redirects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRedirects();
  }, []);

  const fetch301RedirectData = async (redirectId: string) => {
    if (!redirectId) return;

    setLoading(true);
    setRedirectId(redirectId);
    try {
      const user: any = await getRedirectById(redirectId);
      Object.keys(user).forEach((key) => {
        setValue(key as keyof RedirectFormInputs, user[key]);
      });
    } catch (err) {
      toast.error("Error fetching 301 redirect details.");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const deleteItem = async (id?: string) => {
    if (id) {
      try {
        await deleteRedirect(id);
        fetchRedirects();
      } catch (error) {
        console.error("Error deleting 301 redirect:", error);
      }
    }
  };

  const onSubmitForm = async (data: RedirectFormInputs) => {
    try {
      if (redirectId) {
        await updateRedirect(redirectId, data);
        toast.success("301 redirect updated successfully!");
      } else {
        await addRedirect(data);
        toast.success("301 redirect added successfully!");
      }

      reset();
      fetchRedirects();
    } catch (err: any) {
      reset();
      toast.error(
        err?.message || "Error occurred while saving 301 redirect data."
      );
    }
  };

  // Calculate the starting and ending indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="main-user-wrapper">
      <form noValidate onSubmit={handleSubmit(onSubmitForm)}>
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-8">
              <div className="row mx-0">
                <div className="col-lg-6 form-col">
                  <InputText
                    register={register}
                    errors={errors}
                    fieldName="source"
                    label="Source"
                    placeholder=""
                    isRequired
                  />
                </div>
                <div className="col-lg-6 form-col">
                  <InputText
                    register={register}
                    errors={errors}
                    fieldName="destination"
                    label="Destination"
                    placeholder=""
                    isRequired
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="bg-white bdr-15 p15">
        <div className="pagetitle">
          <h2>All 301 Redirects</h2>
        </div>
        {loading ? (
          <LoaderComponent />
        ) : (
          <>
            <div className="listbox">
              <div className="list-head d-flex">
                <div className="page-title">
                  <h3>Source</h3>
                </div>
                <div className="slug">
                  <h3>Destination</h3>
                </div>
                <div className="created-at">
                  <h3>Created At</h3>
                </div>
                <div className="action">
                  <h3>Actions</h3>
                </div>
              </div>
              <div className="list-content">
                {currentData.map((item) => {
                  return (
                    <div key={item._id} className="list-content-inner d-flex">
                      <div className="page-title">
                        {item.source ? (
                          <a
                            href={`${item.source}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.source}
                          </a>
                        ) : (
                          <h3>--</h3>
                        )}
                      </div>
                      <div className="slug">
                        {item.destination ? (
                          <a
                            href={`${item.destination}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.destination}
                          </a>
                        ) : (
                          <h3>--</h3>
                        )}
                      </div>
                      <div className="created-at">
                        <h3>
                          {new Date(item.createdAt).toLocaleString() || "--"}
                        </h3>
                      </div>
                      <div className="action d-flex">
                        <div
                          className="delete"
                          onClick={() => fetch301RedirectData(item._id)}
                        >
                          <span className="icon">
                            <EditOutline />
                          </span>
                        </div>
                        <div
                          className="delete"
                          onClick={() => deleteItem(item._id)}
                        >
                          <span className="icon">
                            <Trash2Outline />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pagination d-flex justify-content-end">
                {totalPages > 1 && (
                  <>
                    {currentPage > 1 && (
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <ArrowheadLeftOutline />
                      </button>
                    )}
                    <span>
                      {" "}
                      Page {currentPage} of {totalPages}{" "}
                    </span>
                    {currentPage < totalPages && (
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        <ArrowheadRightOutline />
                      </button>
                    )}
                  </>
                )}
                {totalPages <= 1 && <span> Page 1 of 1 </span>}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
