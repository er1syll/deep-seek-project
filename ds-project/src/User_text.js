export function User_text({ text, setText }) {
  return (
    <div className="panel">
      <div className="user-text">
        <p>Your text</p>
        <textarea
          className="input-area"
          placeholder="Enter text here......"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}
