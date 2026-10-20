import React, { useState } from "react";

export default function CommunityPage({
  posts = [],
  form,
  setForm,
  onSubmit,
  imageFile,
  setImageFile,
  filter,
  setFilter,
  onDelete,
  userId,
  comments = [],
  onComment,
  currentUserId
}) 
  {
    const [commentDrafts, setCommentDrafts] = useState({});
    const visiblePosts = posts.filter((post) => {
    const branchMatch =
      !filter?.branch ||
      filter.branch === "All branches" ||
      post.branch === filter.branch;

    const yearMatch =
      !filter?.year ||
      filter.year === "All years" ||
      post.year === filter.year;

    return branchMatch && yearMatch;
  });

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1>Student Community</h1>
      <p>Share ideas, ask questions and connect with students.</p>

      <form onSubmit={onSubmit}>
        <label htmlFor="community-body">Write your post</label>
        <textarea
          id="community-body"
          required
          rows={4}
          value={form?.body || ""}
          onChange={(e) =>
            setForm({ ...form, body: e.target.value })
          }
          placeholder="What would you like to discuss?"
          style={{
            display: "block",
            width: "100%",
            padding: 12,
            margin: "10px 0"
          }}
        />
        <input
  type="file"
  accept="image/jpeg,image/png,image/webp,image/gif"
  onChange={(e) => {
    setImageFile(e.target.files?.[0] || null);
  }}
  style={{
    display: "block",
    margin: "10px 0",
    padding: 8
  }}
/>

{imageFile && (
  <p style={{ fontSize: 14 }}>
    Selected image: {imageFile.name}
    <button
      type="button"
      onClick={() => setImageFile(null)}
      style={{ marginLeft: 8 }}
    >
      Remove
    </button>
  </p>
)}
        

        <label htmlFor="community-branch">Branch</label>
        <select
          id="community-branch"
          value={form?.branch || "All branches"}
          onChange={(e) =>
            setForm({ ...form, branch: e.target.value })
          }
        >
          {[
            "All branches",
            "CSE",
            "IT",
            "ECE",
            "Electrical",
            "Mechanical",
            "Civil"
          ].map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>

        {" "}

        <label htmlFor="community-year">Year</label>
        <select
          id="community-year"
          value={form?.year || "All years"}
          onChange={(e) =>
            setForm({ ...form, year: e.target.value })
          }
        >
          {[
            "All years",
            "1st Year",
            "2nd Year",
            "3rd Year",
            "4th Year"
          ].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <p>
          <button type="submit">Publish Post</button>
        </p>
      </form>

      <hr />

      <h2>Community Discussions</h2>

      <label htmlFor="filter-branch">Filter by branch</label>{" "}
      <select
        id="filter-branch"
        value={filter?.branch || "All branches"}
        onChange={(e) =>
          setFilter({ ...filter, branch: e.target.value })
        }
      >
        {[
          "All branches",
          "CSE",
          "IT",
          "ECE",
          "Electrical",
          "Mechanical",
          "Civil"
        ].map((branch) => (
          <option key={branch} value={branch}>
            {branch}
          </option>
        ))}
      </select>

      {" "}

      <label htmlFor="filter-year">Filter by year</label>{" "}
      <select
        id="filter-year"
        value={filter?.year || "All years"}
        onChange={(e) =>
          setFilter({ ...filter, year: e.target.value })
        }
      >
        {[
          "All years",
          "1st Year",
          "2nd Year",
          "3rd Year",
          "4th Year"
        ].map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      {visiblePosts.length === 0 ? (
        <p>No community posts yet. Be the first to share!</p>
      ) : (
        visiblePosts.map((post) => (
          <article
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 16,
              marginTop: 16,
              overflowWrap: "anywhere"
            }}
          >
            <p style={{ whiteSpace: "pre-wrap" }}>
              {post.body}
            </p>
            {post.imageUrl && (
  <img
    src={post.imageUrl}
    alt="Community post image"
    style={{
      display: "block",
      maxWidth: "100%",
      maxHeight: 420,
      objectFit: "contain",
      borderRadius: 10,
      marginTop: 12,
      marginBottom: 12
    }}
  />
)}

            <small>
              {post.branch || "Branch not specified"}
              {" · "}
              {post.year || "Year not specified"}
            </small>

            {post.created_at && (
              <p>
                <small>
                  {new Date(post.created_at).toLocaleString()}
                </small>
              </p>
            )}

            {userId && post.user_id === userId && (
              <button
                type="button"
                onClick={() => {
                  if (window.confirm("Delete this post?")) {
                    onDelete?.(post);
                  }
                }}
              >
                Delete Post
              </button>
            )}
            <div style={{ marginTop: 18, borderTop: "1px solid #ddd", paddingTop: 12 }}>
  <h3>Comments</h3>

  {(comments || [])
    .filter((comment) => String(comment.post_id) === String(post.id))
    .map((comment) => (
      <div
        key={comment.id}
        style={{
          background: "#f5f5f5",
          borderRadius: 8,
          padding: 10,
          marginTop: 8
        }}
      >
        <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>
          {comment.body}
        </p>
        {comment.created_at && (
          <small>{new Date(comment.created_at).toLocaleString()}</small>
        )}
      </div>
    ))}

  <form
    onSubmit={(e) => {
      e.preventDefault();
      const body = commentDrafts[post.id] || "";
      if (!body.trim()) return;
     alert("Comment button click ho gaya!");
     Promise.resolve(onComment?.(post.id, body))
  .catch((error) => {
    alert("Comment error: " + error.message);
  });

      setCommentDrafts((old) => ({ ...old, [post.id]: "" }));
    }}
    style={{ marginTop: 12 }}
  >
    <textarea
      rows={2}
      value={commentDrafts[post.id] || ""}
      onChange={(e) =>
        setCommentDrafts((old) => ({
          ...old,
          [post.id]: e.target.value
        }))
      }
      placeholder="Write a comment or reply..."
      required
      style={{ width: "100%", padding: 10, boxSizing: "border-box" }}
    />
    <input
  type="file"
  accept="image/png,image/jpeg,image/webp,image/gif"
  onChange={(e) => {
    setImageFile(e.target.files?.[0] || null);
  }}
  style={{
    display: "block",
    margin: "10px 0",
    padding: 8
  }}
/>
    <button type="submit" style={{ marginTop: 8 }}>
      Add Comment
    </button>
  </form>
</div>
          </article>
        ))
      )}
    </div>
  );
}