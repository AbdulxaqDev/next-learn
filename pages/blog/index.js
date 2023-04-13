import Link from "next/link";

export default function BlogList({ blogs }) {
  return (
    <>
      <h1>List of Blog</h1>
      {blogs.map((blog) => (
        <Link key={blog.id} href={`/blog/${blog.id}`}>
          <h3>
            {`Blog: ${blog.id} | Title: ${blog.title}`} <hr />
          </h3>
        </Link>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      blogs: data.slice(0,3)
    },
  };
}
