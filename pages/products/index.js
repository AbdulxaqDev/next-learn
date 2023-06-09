export default function PoducstList({ products }) {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  console.log("Generating | Regenerating ProductList");
  const response = await fetch("http:localhost:4000/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
