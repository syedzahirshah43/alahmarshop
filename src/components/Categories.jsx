function Categories({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    "All",
    "Audio",
    "Chargers",
    "Cables",
  ];

  return (
    <section className="categories">
      <h2>Shop By Category</h2>

      <div className="category-grid">
        {categories.map((category) => (
          <div
            key={category}
            className={`category-card ${
              selectedCategory === category
                ? "active-category"
                : ""
            }`}
            onClick={() =>
              setSelectedCategory(category)
            }
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;