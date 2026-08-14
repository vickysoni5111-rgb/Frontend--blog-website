"use client";
import { useEffect, useState } from "react";
import { getComments, postComment } from "@/lib/api";

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    try {
      setLoading(true);
      const data = await getComments(postId);
      setComments(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.message.trim()) return;

    setSubmitting(true);
    setError("");

    try {
      await postComment({
        post: postId,
        ...form,
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });

      await load();
    } catch (e) {
      setError(e.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="comments-section mt-12 border-t border-gray-200 pt-8">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="comments-heading mb-6">
        <div className="flex items-center justify-between gap-4">

          <div>
            <h3 className="font-display text-2xl font-bold">
              Comments
              <span className="comments-count ml-2">
                ({comments.length})
              </span>
            </h3>

            <p className="comments-subtitle text-sm mt-1">
              Join the conversation and share your thoughts.
            </p>
          </div>

        </div>
      </div>


      {/* =====================================================
          COMMENTS LIST
      ===================================================== */}

      {loading ? (
        <div className="comments-loading">
          <div className="loading-dot"></div>
          <span>Loading comments...</span>
        </div>
      ) : comments.length === 0 ? (
        <div className="empty-comments mb-8">
          <div className="empty-comment-icon">
            💬
          </div>

          <h4 className="font-semibold text-base">
            No comments yet
          </h4>

          <p className="text-sm mt-1">
            Is post par abhi koi comment nahi hai.
            Pehla comment karein.
          </p>
        </div>
      ) : (
        <ul className="comments-list space-y-4 mb-8">

          {comments.map((c) => (
            <li
              key={c._id}
              className="comment-card rounded-xl p-5"
            >

              <div className="flex items-start gap-3">

                {/* Avatar */}

                <div className="comment-avatar flex-shrink-0">
                  {c.name?.charAt(0)?.toUpperCase() || "U"}
                </div>


                {/* Comment Content */}

                <div className="min-w-0 flex-1">

                  <div className="flex flex-wrap justify-between items-center gap-2 mb-2">

                    <span className="comment-name font-semibold text-sm">
                      {c.name}
                    </span>

                    <span className="comment-date text-xs">
                      {new Date(
                        c.createdAt
                      ).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>

                  </div>

                  <p className="comment-message text-sm leading-6">
                    {c.message}
                  </p>

                </div>

              </div>

            </li>
          ))}

        </ul>
      )}


      {/* =====================================================
          COMMENT FORM
      ===================================================== */}

      <form
        onSubmit={handleSubmit}
        className="comment-form rounded-xl p-6"
      >

        <div className="mb-5">

          <h4 className="font-display text-lg font-bold">
            Leave a Comment
          </h4>

          <p className="comment-form-subtitle text-sm mt-1">
            Share your thoughts about this article.
          </p>

        </div>


        {/* Name */}

        <div className="comment-field">

          <label>
            Your Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

        </div>


        {/* Email */}

        <div className="comment-field">

          <label>
            Email
            <span className="optional">
              Optional
            </span>
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

        </div>


        {/* Message */}

        <div className="comment-field">

          <label>
            Your Comment
          </label>

          <textarea
            placeholder="Write your comment here..."
            required
            rows={5}
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
          />

        </div>


        {/* Error */}

        {error && (
          <div className="comment-error">
            {error}
          </div>
        )}


        {/* Submit */}

        <button
          type="submit"
          disabled={submitting}
          className="comment-submit"
        >
          {submitting ? (
            <>
              <span className="submit-spinner"></span>
              Posting...
            </>
          ) : (
            <>
              Post Comment
              <span>→</span>
            </>
          )}
        </button>

      </form>

    </section>
  );
}