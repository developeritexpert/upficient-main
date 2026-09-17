"use client";

import EditOutline from "@/components/Icons/EditOutline";
import Trash2Outline from "@/components/Icons/Trash2Outline";
import LoaderComponent from "@/components/miscellaneous/LoaderComponent/LoaderComponent";
import InputText from "@/components/ui/input-text";
import { getImagePath } from "@/services/common.service";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import {
  addUser,
  getUserById,
  updateUser,
} from "../../../services/user.service";
import "./UserForm.scss";

export const AddUserFormValidator = z.object({
  firstName: z
    .string({ required_error: "First Name is required." })
    .min(1, "First Name is required."),
  lastName: z
    .string({ required_error: "Last Name is required." })
    .min(1, "Last Name is required."),
  email: z
    .string({ required_error: "Email is required." })
    .min(1, { message: "Email is required." })
    .email("This is not a valid email."),
  phone: z
    .string()
    .optional()
    .refine((value) => !value || /^\d{10}$/.test(value), {
      message: "Phone number must be exactly 10 digits and contain only digits",
    }),
  role: z
    .string({ required_error: "Role is required" })
    .min(1, "Role is required"),
  password: z
    .string({ required_error: "Password is required." })
    .min(6, "Password must be at least 6 characters long.")
    .max(20, "Password cannot exceed 20 characters."),
});

export const UpdateUserFormValidator = z.object({
  firstName: z
    .string({ required_error: "First Name is required." })
    .min(1, "First Name is required."),
  lastName: z
    .string({ required_error: "Last Name is required." })
    .min(1, "Last Name is required."),
  email: z
    .string({ required_error: "Email is required." })
    .min(1, { message: "Email is required." })
    .email("This is not a valid email."),
  phone: z
    .string()
    .optional()
    .refine((value) => !value || /^\d{10}$/.test(value), {
      message: "Phone number must be exactly 10 digits and contain only digits",
    }),
  role: z
    .string({ required_error: "Role is required" })
    .min(1, "Role is required"),
});

type UserFormInputs = z.infer<
  typeof AddUserFormValidator | typeof UpdateUserFormValidator
>;

interface UserFormProps {
  userId: string | null;
}

const UserForm = ({ userId }: UserFormProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<UserFormInputs>({
    resolver: zodResolver(
      userId ? UpdateUserFormValidator : AddUserFormValidator,
    ),
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;

      setLoading(true);
      try {
        const user: any = await getUserById(userId);
        Object.keys(user).forEach((key) => {
          setValue(key as keyof UserFormInputs, user[key]);
        });

        if (user.image) {
          setImagePreview(user.image);
        }
      } catch (err) {
        toast.error("Error fetching user details.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId, setValue]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImagePreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleEditImage = () => {
    document.getElementById("imageUpload")?.click();
  };

  const onSubmitForm = async (data: UserFormInputs) => {
    try {
      if (userId) {
        await updateUser(userId, data, imageFile, !!imagePreview);
        toast.success("User data updated successfully!");
      } else {
        await addUser(data, imageFile);
        toast.success("User data submitted successfully!");
      }

      reset();
      setImageFile(null);
      setImagePreview(null);

      const link = document.createElement("a");
      link.href = "/dashboard/users";
      document.body.appendChild(link);
      link.click();
    } catch (err: any) {
      reset();
      setImageFile(null);
      setImagePreview(null);
      toast.error(err?.message || "Error occurred while saving user data.");
    }
  };

  if (loading) {
    return <LoaderComponent />;
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmitForm)}>
      <div className="container">
        <div className="row mx-0">
          <div className="col-lg-4">
            <label
              style={{
                marginBottom: "20px",
                display: "block",
                textAlign: "center",
              }}
            >
              User Image
            </label>
            <div
              className="image-preview-container"
              style={{ marginTop: "10px" }}
            >
              <input
                type="file"
                id="imageUpload"
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImageUpload}
              />
              {imagePreview ? (
                <div style={{ width: "fit-content", margin: "0 auto" }}>
                  <Image
                    src={imagePreview}
                    alt="Uploaded Preview"
                    width={100}
                    height={100}
                    style={{
                      objectFit: "cover",
                      cursor: "pointer",
                      borderRadius: "50%",
                    }}
                    loading="lazy"
                    unoptimized
                  />
                  <div className="prevbtn">
                    <button
                      type="button"
                      className="imgprev"
                      onClick={handleEditImage}
                    >
                      <EditOutline />
                    </button>
                    <button
                      type="button"
                      className="imgprev"
                      onClick={handleRemoveImage}
                    >
                      <Trash2Outline />
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ width: "fit-content", margin: "0 auto" }}>
                  <Image
                    src={getImagePath("dashimg/avtar.jpg")}
                    alt="Dummy Preview"
                    width={100}
                    height={100}
                    unoptimized
                    style={{
                      objectFit: "cover",
                      cursor: "pointer",
                      borderRadius: "50%",
                    }}
                    loading="lazy"
                    onClick={() =>
                      document.getElementById("imageUpload")?.click()
                    }
                  />
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row mx-0">
              <div className="col-lg-6 form-col">
                <InputText
                  register={register}
                  errors={errors}
                  fieldName="firstName"
                  label="First Name"
                  placeholder=""
                  isRequired
                />
              </div>
              <div className="col-lg-6 form-col">
                <InputText
                  register={register}
                  errors={errors}
                  fieldName="lastName"
                  label="Last Name"
                  placeholder=""
                  isRequired
                />
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-lg-6 form-col">
                <InputText
                  register={register}
                  errors={errors}
                  fieldName="email"
                  label="Email"
                  placeholder=""
                  isRequired
                />
              </div>
              {userId === null && (
                <div className="col-lg-6 form-col">
                  <InputText
                    register={register}
                    errors={errors}
                    fieldName="password"
                    label="Password"
                    placeholder=""
                    type="password"
                    isRequired
                  />
                </div>
              )}
            </div>
            <div className="row mx-0">
              <div className="col-lg-6 form-col">
                <InputText
                  register={register}
                  errors={errors}
                  fieldName="phone"
                  label="Phone Number"
                  placeholder=""
                  isRequired
                />
              </div>
              <div className="col-lg-6 form-col">
                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  {...register("role")}
                  className={`form-control ${errors.role ? "is-invalid" : ""}`}
                >
                  <option value="">Select a role</option>
                  <option value="customer">Customer</option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                </select>
                {errors.role && (
                  <span className="invalid-feedback">
                    {errors.role.message}
                  </span>
                )}
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
  );
};

export default UserForm;
