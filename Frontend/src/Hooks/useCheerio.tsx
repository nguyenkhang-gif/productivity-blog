import { UniqueIdentifier } from "@dnd-kit/core";
import cheerio from "cheerio";
import { useState } from "react";
import useStoreChaters from "../zustand/useStoreChapters";

export interface ChapterData {
  id: UniqueIdentifier;
  title: string;
  data: string | null;
}

const useCheerio = () => {
  const [loading, setLoading] = useState(false);
  const { chapters } = useStoreChaters();
  const [error, setError] = useState<string | null>(null);

  const toChapter = (html: string): ChapterData => {
    try {
      setLoading(true);
      setError(null);

      const $ = cheerio.load(html);
      const chapterContent = $(".reading-content");
      const titleText = chapterContent.find("h4").text();
      chapterContent.find("#chapter-content div").remove();
      chapterContent.find("#chapter-content a").remove();
      const contentText = chapterContent.find("#chapter-content").html();

      setLoading(false);

      return {
        id: chapters.length + 1,
        title: titleText.trim(),
        data: contentText?.trim() || null,
      };
    } catch (err) {
      setLoading(true);
      setError("Failed to parse HTML");
      console.error(err);
      return { id: 0, title: "not found", data: "string | null;" };
    } finally {
      setLoading(true);
    }
  };

  return { loading, error, toChapter };
};

export default useCheerio;
