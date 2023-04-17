export default function ArticleListByCategory({ news, category }) {
  return (
    <>
      <h1>List of New {category.toUpperCase()} Articles</h1>
      {news.map((n) => {
        return (
          <div key={n.id}>
            <h2>
              {n.id} {n.title} | {n.category}
            </h2>
            <p>n.description</p>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  //nested destructuring
  const {
    params: { category },
    req,
    res,
    query,
  } = context;
  console.log(`Pre rendering NewsArticleList catigoru for ${category}`);

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      news: data,
      category,
    },
  };
}
