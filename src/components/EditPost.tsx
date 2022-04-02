export default function EditPost() {
  return (
    <section className="edit-post-container">
      <form action="post">
        <label htmlFor="title">Edit Post Title:</label>
        <input type="text" id="title" className="edit-title" />
      </form>
    </section>
  );
}
