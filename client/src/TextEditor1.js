import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useCallback, useEffect, useState } from "react";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

const TextEditor1 = () => {
  const [quill, setQuill] = useState(null);

  useEffect(() => {
    const editor = new Quill("#editor", {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });
    setQuill(editor);
  }, []);
  console.log(quill)

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editorDiv = document.createElement("div");
    editorDiv.id = "editor";
    wrapper.appendChild(editorDiv);
  }, []);

  return (
    <div className="container" ref={wrapperRef}>
      <div id="editor" />
    </div>
  );
};

export default TextEditor1;
