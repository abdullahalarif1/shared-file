import React, { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import html2pdf from "html2pdf.js";

const Blog = () => {
  const handleDownloadPdf = () => {
    const element = document.getElementById("blog-page-content");
    html2pdf()
      .set({
        filename: "blog-page.pdf",
        margin: [10, 10, 10, 10],
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold py-3 ">Blog Page</h1>
      <button
        className="flex justify-center items-center flex-col mx-auto border rounded px-3 py-1 bg-stone-100 hover:bg-slate-300"
        onClick={handleDownloadPdf}
      >
        <FaDownload /> Download PDF
      </button>

      <div className="border-2 m-3 p-6 md:p-12 " id="blog-page-content">
        <div className="border-2 border-indigo-300 rounded p-3">
          <h1 className="text-2xl font-bold">
            Tell us the differences between uncontrolled and controlled
            components.
          </h1>
          <p>
            Uncontrolled components rely on the DOM to manage and store form
            data, while controlled components use React's state to store and
            manage form data. Controlled components provide better control and
            validation of data, while uncontrolled components are simpler to
            implement but lack some of the advanced features offered by
            controlled components.
          </p>
        </div>

        <div className="border-2 border-indigo-300 rounded p-3 my-4">
          <h1 className="text-2xl font-bold">
            How to validate React props using PropTypes?
          </h1>

          <p>
            {" "}
            To validate React props using PropTypes, you can define the expected
            prop types for a component using the propTypes property. Assign the
            appropriate PropTypes to each prop, such as PropTypes.string for a
            string value or PropTypes.number for a number value. Optionally, you
            can mark a prop as required using .isRequired. PropTypes helps catch
            potential issues by triggering warnings if the passed props do not
            match the specified types or are missing required props.
          </p>
        </div>
        <div className="border-2 border-indigo-300 rounded p-3">
          <h1 className="text-2xl font-bold">
            Tell us the difference between nodejs and express js?
          </h1>
          <p>
            Node.js is a runtime environment that allows you to run JavaScript
            code on the server-side. It provides a platform for executing
            JavaScript outside of the web browser. Node.js has a vast ecosystem
            of modules and libraries that enable developers to build various
            types of applications, including web servers, command-line tools,
            and more. <br /> Express.js, on the other hand, is a web application
            framework built on top of Node.js. It simplifies the process of
            handling HTTP requests, routing, middleware integration, and
            managing server-side logic. Express.js follows a minimalist
            approach, allowing developers to create scalable and modular web
            applications quickly.
          </p>
        </div>
        <div className="border-2 border-indigo-300 rounded p-3 mt-4">
          <h1 className="text-2xl font-bold">
            What is a custom hook, and why will you create a custom hook?
          </h1>
          <p>
            The useMemo Hook can be used to keep expensive, resource intensive
            functions from needlessly running. In this example, we have an
            expensive function that runs on every render. When changing the
            count or adding a todo, you will notice a delay in execution.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
