"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://content.guardianapis.com/search?api-key=cb5c8f1d-41e3-4481-b13e-7b075cf3e537&show-fields=thumbnail,headline,byline,bodyText"
        );
        const results = response.data.response.results;
        setNews(results);

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(results.map((item) => item.sectionId)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  const filteredNews =
    selectedCategory === ""
      ? news
      : news.filter((item) => item.sectionId === selectedCategory);

  return (
    <div>
      <h2>뉴스</h2>

      {/* 카테고리 필터 */}
      <div className="flex gap-2 px-5 mb-4">
        <button
          onClick={() => setSelectedCategory("")}
          className={`px-4 py-2 rounded ${
            selectedCategory === "" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          전체
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="divide-y px-5">
        {filteredNews.map((item) => (
          <li key={item.id}>
            <Link href={item.webUrl} className="py-3 flex gap-4">
              <Image
                src={item.fields.thumbnail}
                alt={item.webTitle}
                width={300}
                height={200}
                className="object-cover rounded w-1/3"
              />
              <div className="flex-1 flex flex-col justify-between">
                <strong>{item.webTitle}</strong>
                <p className="text-gray-500 text-sm mt-2">
                  {item.webPublicationDate}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsPage;
