
export default function Blog({ blog }) {
  return (
    <>
      <h2>
        {blog.id} {blog.title}
      </h2>
      <p>{blog.body}</p>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  //   const paths = data.map((blog) => {
  //     return {
  //       params: { blogId: `${blog.id}` },
  //     };
  //   });
  const paths = [
    {
      params: { blogId: "1" },
    },
    {
      params: { blogId: "2" },
    },
    {
      params: { blogId: "3" },
    },
  ];

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog: data,
    },
  };
}
