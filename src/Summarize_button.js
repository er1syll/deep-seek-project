export function SummarizeButton({ handleResult, loading }) {
  return (
    <div className="last">
      <button className={"button"} onClick={handleResult} disabled={loading}>
        {loading ? "Loading..." : "Process Text"}
      </button>
    </div>
  );
}
