import RemoveNote from "./RemoveNote";

export default function Note({ title, message, id }) {
  return (
    <div className="notes">
      <h2>{title}</h2>
      <p>{message}</p>
      <RemoveNote id={id} />
    </div>
  );
}
