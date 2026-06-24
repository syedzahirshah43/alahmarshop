import products from "../data/products";
import ProductCard from "./ProductCard";

function Products({
  searchTerm = "",
  selectedCategory = "All",
}) {
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-container">
  {filteredProducts.length === 0 ? (
    <p>No products found.</p>
  ) : (
    filteredProducts.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))
  )}
</div>
    </section>
  );
}

export default Products;