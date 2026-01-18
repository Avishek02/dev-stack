export default function AddItemPage() {
  return (
    <div className="max-w-xl mx-auto p-10 mt-10 bg-base-100 shadow-2xl rounded-3xl border border-base-300">
      <h2 className="text-3xl font-black mb-8 text-center text-primary">Submit New Tool</h2>
      <div className="form-control gap-5">
        <input type="text" placeholder="Tool Name (e.g. Docker)" className="input input-bordered focus:input-primary" />
        <select className="select select-bordered">
          <option disabled selected>Select Category</option>
          <option>AI Tool</option>
          <option>Framework</option>
          <option>Deployment</option>
        </select>
        <textarea className="textarea textarea-bordered h-28" placeholder="Why should developers use this?"></textarea>
        <button className="btn btn-primary btn-lg">Add to Stack</button>
      </div>
    </div>
  );
}