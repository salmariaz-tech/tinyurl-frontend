import React, { useState } from "react";
import axios from "axios";

export default function ShortenerForm() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!longUrl.trim()) {
      setError("⚠️ Please enter a valid URL");
      return;
    }

    setLoading(true);
    setError("");
    setShortUrl("");

   try {
  const response = await axios.post("http://localhost:5050/url/save", {
    longUrl,
  });

  console.log("📩 RAW RESPONSE FROM SERVER:", response);

  // Check what's inside response.data
  console.log("📩 RESPONSE.DATA:", response.data);

  if (response.data && response.data.ok) {
    console.log("✅ Short URL from server:", response.data.shortUrl);
    setShortUrl(response.data.shortUrl);
    setError("");
  } else {
    console.log("⚠️ Server returned unexpected response:", response.data);
    setError(response.data?.message || "Failed to generate short URL!");
  }
} catch (err) {
  console.error("❌ AXIOS ERROR OBJECT:", err);
  console.log("❌ ERROR RESPONSE:", err.response);
  setError(err.response?.data?.message || "Something went wrong!");
}
 finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("✅ Short URL copied to clipboard!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4">Shorten a Long URL</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter long URL here"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {loading ? "Shortening..." : "Shorten URL"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      {shortUrl && (
        <div className="mt-4">
          <p className="text-green-600">
            Shortened URL:{" "}
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </p>
          <button
            onClick={handleCopy}
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            📋 Copy Link
          </button>
        </div>
      )}
    </div>
  );
}
