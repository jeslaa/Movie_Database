"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: [],
    publishingYear: "",
    image: "",
    score: "",
    length: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  //Submit function
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitData: Movie = {
      title: formData.title,
      description: formData.description,
      genre: formData.genre,
      publishingYear: formData.publishingYear,
      score: formData.score,
      image: formData.image,
      length: formData.length,
    };
    try {
      const res = await fetch("/api/movies", {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "content-type": "application/json",
        },
      });
      const responseData = await res.json();
      console.log(responseData);
      if (res.ok) {
        console.log("Everything is good");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex w-full justify-center pt-24">
      <form
        onSubmit={handleSubmit}
        className="text-white flex flex-col gap-y-2 w-9/12 md:w-4/12"
      >
        <h1 className="text-white md:text-5xl text-4xl mb-5 flex justify-center">
          Add a Movie
        </h1>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          className="text-black"
          placeholder="Spiderman"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          className="text-black"
          placeholder="A man who can shoot spider web"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          className="text-black"
          placeholder="Action"
          id="genre"
          value={formData.genre}
          onChange={handleChange}
        />

        <label htmlFor="publishingYear">Publishing Year:</label>
        <input
          type="number"
          className="text-black"
          id="publishingYear"
          placeholder="1992"
          value={formData.publishingYear}
          onChange={handleChange}
        />

        <label htmlFor="image">Image:</label>
        <input
          type="text"
          className="text-black"
          placeholder="http://localhost:3000/postMovie"
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
          placeholder="8.7"
          onChange={handleChange}
        />

        <label htmlFor="length">Length:</label>
        <input
          type="text"
          className="text-black"
          id="length"
          placeholder="1h 32m"
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
