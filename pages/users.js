import User from "@/components/user";

export default function UserList({ users }) {
  return users.map((user) => <User key={user.id} user={user} />);
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data.slice(0, 3),
    },
  };
}
