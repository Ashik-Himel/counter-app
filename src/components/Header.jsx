export default function Header() {
  return (
    <header className="text-white py-6 border-b border-gray-700">
      <div className="container">
        <nav className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-8">
          <a href="#" className="text-3xl">Counter App</a>
          <ul className="flex justify-center items-center gap-8">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}