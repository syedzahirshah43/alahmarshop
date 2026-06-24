import Products from "../components/Products";
import Categories from "../components/Categories";

function Home({
  searchTerm,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <>
      <section className="hero">
        <h1>Welcome To AlahmarShop</h1>

        <p>
          Premium Mobile Accessories Delivered Across Pakistan
        </p>

        <button>Shop Now</button>
      </section>

      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Products
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />
    </>
  );
}

export default Home;