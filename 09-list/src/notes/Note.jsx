export default function Note({ title, message }) {
  return (
    <div className="notes">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
