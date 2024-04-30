"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import addPost from "@/app/action/action";

const Page = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: [],
    publishingYear: 0,
    image: "",
    score: 0,
    length: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addPost(formData);
      console.log("Post added successfully!");
      setFormData({
        title: "",
        description: "",
        genre: [],
        publishingYear: 0,
        image: "",
        score: 0,
        length: "",
      });
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <div className="flex w-full justify-center">
      <form
        onSubmit={handleSubmit}
        className="text-white flex flex-col gap-y-2 w-9/12 md:w-4/12"
      >
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          className="text-black"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          className="text-black"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          className="text-black"
          id="genre"
          value={formData.genre}
          onChange={handleChange}
        />

        <label htmlFor="publishingYear">Publishing Year:</label>
        <input
          type="number"
          className="text-black"
          id="publishingYear"
          value={formData.publishingYear}
          onChange={handleChange}
        />

        <label htmlFor="image">Image:</label>
        <input
          type="text"
          className="text-black"
          id="image"
          value={formData.image}
          onChange={handleChange}
        />

        <label htmlFor="score">Score:</label>
        <input
          type="number"
          className="text-black"
          id="score"
          value={formData.score}
          onChange={handleChange}
        />

        <label htmlFor="length">Length:</label>
        <input
          type="text"
          className="text-black"
          id="length"
          value={formData.length}
          onChange={handleChange}
        />

        <div>
          <button
            type="submit"
            className="bg-white text-black mt-4 w-32 h-8 rounded-sm hover:pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
