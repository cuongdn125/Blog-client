import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";
import "./EditorMarkdown.scss";
import axios from "axios";

import CreatableSelect from "react-select/creatable";

Quill.register("modules/imageUploader", ImageUploader);
Quill.register("modules/imageResize", ImageResize);
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
  imageUploader: {
    upload: (file) => {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.set("key", "31dfff40169c7c8fcab08389f686ba61");
        formData.append("image", file);

        axios({
          method: "post",
          url: "https://api.imgbb.com/1/upload",
          data: formData,
        })
          .then((response) => {
            console.log(response);
            resolve(response.data.data.url);
          })
          .catch((error) => {
            console.log(error);
            reject("Upload failed");
          });
      });
    },
  },
  imageResize: {
    parchment: Quill.import("parchment"),
    modules: ["Resize", "DisplaySize"],
  },
};
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "align",
  "link",
  "image",
  "video",
  "code-block",
];

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function EditorMarkdown() {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleBody = (content) => {
    setBody(content);
    // console.log(content);
  };

  const handleSelect = (newValue, actionMeta) => {
    console.log(newValue);
    console.log(actionMeta.action);
  };

  const handleSubmit = () => {};
  return (
    <div className="markdown">
      <div className="post-top">
        <div className="post-title">
          <input
            type="text"
            value={title}
            onChange={handleTitle}
            placeholder="Title"
          />
        </div>
        <div className="post-label">
          <CreatableSelect
            isMulti
            onChange={handleSelect}
            options={options}
            placeholder="Label"
          />
        </div>
      </div>

      <ReactQuill
        placeholder="Write somwthing amazing..."
        modules={modules}
        formats={formats}
        onChange={handleBody}
        value={body}
      />
      <div className="button-submit">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
