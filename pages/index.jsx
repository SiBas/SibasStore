import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-center">
        <h1 className="text-3xl font-bold">TOPUP GAME FAVORITMU</h1>
        <p className="mt-2 text-gray-200">Mudah, cepat, dan aman 🔥</p>
      </section>

      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Pilih Game</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/16/Roblox_Logo_2022.png"
              alt="Roblox"
              className="h-20 mx-auto"
            />
            <p className="text-center mt-2 font-semibold">Roblox</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/0/02/Free_Fire_logo.png"
              alt="Free Fire"
              className="h-20 mx-auto"
            />
            <p className="text-center mt-2 font-semibold">Free Fire</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 cursor-pointer">
            <img
              src="https://seeklogo.com/images/M/mobile-legends-bang-bang-logo-3B0F7E953A-seeklogo.com.png"
              alt="MLBB"
              className="h-20 mx-auto"
            />
            <p className="text-center mt-2 font-semibold">Mobile Legends</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 cursor-pointer">
            <img
              src="https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png"
              alt="Valorant"
              className="h-20 mx-auto"
            />
            <p className="text-center mt-2 font-semibold">Valorant</p>
          </div>
        </div>
      </section>

      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Pilih Paket</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800 p-4 rounded-xl hover:shadow-lg hover:bg-gray-700"
              >
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-300">{product.game}</p>
                <p className="text-yellow-400 font-bold mt-2">
                  Rp {product.price.toLocaleString()}
                </p>
                <button className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg">
                  Beli Sekarang
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-400">Belum ada paket yang tersedia.</p>
          )}
        </div>
      </section>
    </main>
  );
}
