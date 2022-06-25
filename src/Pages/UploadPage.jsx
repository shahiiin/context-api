import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiArrowBack, BiPencil, BiPlus } from "react-icons/bi";
import * as Yup from "yup";

import Input from "../Components/Input/Input";
import Layout from "../Layout/Layout";
import { useDispatch } from "react-redux";
import { usePosts } from "../Hooks/usePosts";
import {
  addPostRequest,
  deletePostRequest,
  editPostRequest,
} from "../Redux/modules/posts/postsActions";
import { getSinglePost } from "../Services/getSinglePost";

const defaultValues = {
  title: "",
  details: "",
  userId: "",
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Post title is required"),
  details: Yup.string().required("Post details is required"),
});

function UploadPage() {
  const { control, formState, handleSubmit, reset } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
    mode: "all",
    reValidateMode: "onChange",
  });
  const { loading, error } = usePosts();
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    if (state) {
      reset({
        title: state.post.title,
        details: state.post.body,
        userId: state.post.userId,
      });
    } else {
      (async function () {
        try {
          const { data } = await getSinglePost(id);
          reset({
            title: data.title,
            details: data.body,
            userId: data.userId,
          });
        } catch (e) {
          navigate("/", { replace: true });
        }
      })();
    }
  }, [state, id]);

  const onSubmit = (values) => {
    if (isNew) {
      dispatch(
        addPostRequest({
          post: {
            title: values.title,
            body: values.details,
            userId: Math.floor(Math.random() * 10),
          },
          navigate,
        })
      );
    } else {
      dispatch(
        editPostRequest({
          post: {
            id,
            title: values.title,
            body: values.details,
            userId: values.userId,
          },
          navigate,
        })
      );
    }
  };

  const handleDeletePost = useCallback(() => {
    dispatch(deletePostRequest({ id, navigate }));
  }, []);

  const handleNewPost = useCallback(() => {
    reset(defaultValues);
    setIsNew(true);
  }, []);

  const renderIcon = useCallback((newPost = false) => {
    if (newPost) {
      return <BiPlus className="mr-2" />;
    } else {
      return <BiPencil className="mr-2" />;
    }
  }, []);

  return (
    <Layout>
      <main className="flex flex-col items-start bg-white min-h-[80vh] p-5">
        <div className="flex-center mb-2">
          <Link
            to="/"
            className="rounded-full bg-slate-100 p-2 inline-block mr-2"
          >
            <BiArrowBack />
          </Link>
          Posts
        </div>
        <form
          className="w-full md:w-2/3 md:ml-10 relative"
          onSubmit={handleSubmit(onSubmit)}
        >
          <button
            className="absolute right-0 -top-8 px-2 py-1 bg-blue-600 text-white rounded-md flex-center text-sm"
            type="button"
            onClick={handleNewPost}
          >
            {renderIcon(!isNew)}
            {isNew ? "reset" : "Add new post"}
          </button>
          <Input
            control={control}
            formState={formState}
            name="title"
            lbl="Title"
            type="type"
            placeholder="post title"
          />
          <Input
            control={control}
            formState={formState}
            name="details"
            lbl="Details"
            type="textarea"
            placeholder="post details"
          />
          <div className="flex justify-end gap-2 mt-20">
            {!isNew && (
              <button
                type="button"
                className="px-2 py-1 bg-red-600 text-white rounded-md"
                onClick={handleDeletePost}
              >
                {loading && !formState.isSubmitted ? "pending..." : "Delete"}
              </button>
            )}
            <button
              type="submit"
              disabled={!formState.isValid}
              className={`${
                !formState.isValid && "opacity-60"
              } px-2 py-1 bg-blue-600 text-white rounded-md flex-center`}
            >
              {renderIcon(isNew)}
              {loading && formState.isSubmitted
                ? "pending..."
                : isNew
                ? "Add"
                : "Upload"}
            </button>
          </div>
          {error && <p className="text-red-600 text-center text-xs">{error}</p>}
        </form>
      </main>
    </Layout>
  );
}

export default UploadPage;
