"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddItemPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // form data collection
    const formData = {
      name: e.target.name.value,
      category: e.target.category.value,
      rating: parseFloat(e.target.rating.value) || 5.0,
      img: e.target.img.value || "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400",
      description: e.target.description.value,
    };

    try {
      const res = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Tool added successfully to DevStack Database!");
        router.push("/items"); // success, redirect to items list page
      } else {
        alert("Failed to add tool. Please check your connection.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-10 mt-10 bg-base-100 shadow-2xl rounded-3xl border border-base-300">
      <h2 className="text-3xl font-black mb-8 text-center text-primary uppercase tracking-tighter">Submit New Tool</h2>
      <form onSubmit={handleSubmit} className="form-control gap-5">
        <div className="grid grid-cols-1 gap-4">
          <input name="name" type="text" placeholder="Tool Name (e.g. Cursor)" className="input input-bordered focus:input-primary" required />

          <div className="flex gap-4">
            <select name="category" className="select select-bordered flex-1" defaultValue="Category" required>
              <option disabled value="Category">Category</option>
              <option value="AI Tool">AI Tool</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Deployment">Deployment</option>
            </select>
            <input name="rating" type="number" step="0.1" placeholder="Rating (4.9)" className="input input-bordered w-28" />
          </div>

          <input name="img" type="text" placeholder="Image URL (Unsplash Link)" className="input input-bordered" />

          <textarea name="description" className="textarea textarea-bordered h-32" placeholder="Why is this tool useful for developers?" required></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-lg shadow-lg" disabled={loading}>
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Add to DevStack"
          )}
        </button>
      </form>
    </div>
  );
}