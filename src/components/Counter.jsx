import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <div className="container">
        <div className="text-center mt-12 border border-gray-300 max-w-[400px] mx-auto p-6 rounded-lg shadow-lg bg-white text-black">
          <h1 className="text-4xl font-semibold mb-4">Counter</h1>
          <span className="text-xl font-medium">Count: {count}</span>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
            <a onClick={() => setCount(count + 1)} href="#" className="btn btn-primary text-white text-base normal-case">Add</a>
            <a onClick={() => setCount(count - 1)} href="#" className="btn btn-secondary text-white text-base normal-case">Reduce</a>
            <a onClick={() => setCount(count - count)} href="#" className="btn btn-primary text-white text-base normal-case">Reset</a>
          </div>
        </div>
      </div>
    </section>
  );
}