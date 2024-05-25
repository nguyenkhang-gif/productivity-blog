import Epub from "epub-gen";
import path from "path";
import fs from "fs";
import bucket from "../firebase/bucket.js";
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
    const epub = new Epub(options, outputPath); // Pass the output path to the Epub constructor
    await epub.promise;

    // Upload the EPUB file to Firebase Storage
    await bucket.upload(outputPath, {
      destination: `ebooks/${req.body.lightnovelInfo.title}.epub`,
      metadata: {
        contentType: "application/epub+zip",
      },
    });

    // Get the public URL of the uploaded file
    const file = bucket.file(`ebooks/${req.body.lightnovelInfo.title}.epub`);
    const [url] = await file.getSignedUrl({
      action: "read",
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // Set the expiration date for the URL
    });

    console.log(`File uploaded to Firebase Storage and available at ${url}`);

    // Delete the local EPUB file after uploading
    fs.unlink(outputPath, (unlinkErr) => {
      if (unlinkErr) {
        console.error("Error deleting EPUB file:", unlinkErr);
      } else {
        console.log("Local EPUB file deleted successfully");
      }
    });

    // Send the download URL to the client
    res.status(200).json({ downloadUrl: url });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating or uploading EPUB");
  }
};


// old code
// export const genEpub = async (req, res) => {
//   const chapters = req.body.chapters.map((chapter) => ({
//     title: chapter.title,
//     data: chapter.data,
//   }));

//   const options = {
//     title: req.body.lightnovelInfo.title,
//     author: req.body.lightnovelInfo.author,
//     content: chapters,
//   };

//   const outputPath = path.join(process.cwd(), "my-ebook.epub"); /// Specify the output path

//   try {
//     // const epub = new Epub(options, outputPath); // Pass the output path to the Epub constructor
//     // const epubBuffer = await epub.promise;
//     // console.log(epubBuffer);
//     // res.set("Content-Type", "application/epub+zip");
//     // res.set("Content-Disposition", 'attachment; filename="my-ebook.epub"');
//     // res.status(200).send(epubBuffer);
//     const epub = new Epub(options, outputPath); // Pass the output path to the Epub constructor
//     const epubBuffer = await epub.promise;

//     // Gửi file EPUB đến máy khách
//     fs.stat(outputPath, (err, stats) => {
//       if (err) {
//         console.error("Error getting file stats:", err);
//         res.status(500).send("Error generating EPUB");
//         return;
//       }

//       console.log(`EPUB file size: ${stats.size} bytes`);

//       // Send the EPUB file to the client
//       res.download(outputPath, "my-ebook.epub", (downloadErr) => {
//         if (downloadErr) {
//           console.error("Error sending EPUB file:", downloadErr);
//           res.status(500).send("Error sending EPUB file");
//         } else {
//           // Delete the EPUB file after sending it successfully
//           fs.unlink(outputPath, (unlinkErr) => {
//             if (unlinkErr) {
//               console.error("Error deleting EPUB file:", unlinkErr);
//             } else {
//               console.log("EPUB file deleted successfully");
//             }
//           });
//         }
//       });
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error generating EPUB");
//   }
// };
