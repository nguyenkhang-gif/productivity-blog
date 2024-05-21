import Epub from "epub-gen";
import path from "path";
import fs from "fs";
export const getHtml = async (req, res) => {
  // console.log(req.body.item);
  try {
    const response = await fetch(`${req.body.item.url}`);
    if (!response.ok) {
      throw new Error("Network response was not ok" + response.statusText);
    }
    const data = await response.text(); // or use .json() if the response is JSON

    res.send(data);
  } catch (err) {
    // console.log(err);
    res.status(500).json({ Error: "worng url or server error" });
  }
};

export const genEpub = async (req, res) => {
  const chapters = req.body.chapters.map((chapter) => ({
    title: chapter.title,
    data: chapter.data,
  }));

  const options = {
    title: req.body.lightnovelInfo.title,
    author: req.body.lightnovelInfo.author,
    content: chapters,
  };

  const outputPath = path.join(process.cwd(), "my-ebook.epub"); /// Specify the output path

  try {
    // const epub = new Epub(options, outputPath); // Pass the output path to the Epub constructor
    // const epubBuffer = await epub.promise;
    // console.log(epubBuffer);
    // res.set("Content-Type", "application/epub+zip");
    // res.set("Content-Disposition", 'attachment; filename="my-ebook.epub"');
    // res.status(200).send(epubBuffer);
    const epub = new Epub(options, outputPath); // Pass the output path to the Epub constructor
    const epubBuffer = await epub.promise;

    // Gửi file EPUB đến máy khách
    res.download(outputPath, "my-ebook.epub", (err) => {
      if (err) {
        console.error("Error sending epub file:", err);
        res.status(500).send("Error sending epub file");
      } else {
        // Xóa file EPUB sau khi gửi thành công
        fs.unlink(outputPath, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Error deleting epub file:", unlinkErr);
          } else {
            console.log("Epub file deleted successfully");
          }
        });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating EPUB");
  }
};
