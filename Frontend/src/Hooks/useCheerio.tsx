import cheerio from "cheerio";
import { useState } from "react";

export interface ChapterData {
  title: string;
  data: string | null;
}

const useCheerio = () => {
  const [loading, setLoading] = useState(false);
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
      console.log(contentText?.trim());
      console.log(titleText);

      return {
        title: titleText.trim(),
        data: contentText?.trim() || null,
      };
    } catch (err) {
      setLoading(false);
      setError("Failed to parse HTML");
      console.error(err);
      return { title: "not found", data: "string | null;" };
    }
  };

  return { loading, error, toChapter };
};

export default useCheerio;
