import React, { useState } from "react";
import axios from "axios";

export default function ShortenerForm() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Use Railway deployed backend URL
  const API_BASE_URL = "https://tinyurl-server-production-fec5.up.railway.app";

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
      // ✅ Updated API URL for deployed backend
      const response = await axios.post(`${API_BASE_URL}/url/save`, {
        longUrl,
      });

      console.log("📩 Response from server:", response);

      if (response.data && response.data.ok) {
        setShortUrl(response.data.shortUrl);
        setError("");
      } else {
        setError(response.data?.message || "Failed to generate short URL!");
      }
    } catch (err) {
      console.error("❌ AXIOS ERROR:", err);
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Copy short URL to clipboard
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

      {/* Show error message */}
      {error && <p className="text-red-500 mt-3">{error}</p>}

      {/* Show shortened URL */}
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
