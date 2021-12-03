import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="mt-10 text-center text-2xl font-semibold">
        <h1>
          Welcome to <span className="text-yellow-500">Contact</span> Page
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="mt-5 space-y-5">
        <input
          type="text"
          className="border-b w-full"
          placeholder="Message title"
        />
        <textarea
          placeholder="Your message"
          className="w-full resize-none border-b"
        ></textarea>
        <input
          className="px-5 py-2 cursor-pointer"
          type="submit"
          value="Send"
        />
      </form>
    </>
  );
}
