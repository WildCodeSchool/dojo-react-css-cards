import "./Card.css";

interface UserInterface {
  name: string;
  description: string;
  image: string;
}

function Card({ user }: { user: UserInterface }) {
  return (
    <article>
      <img src={user.image} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.description}</p>
      <a href="/">Read more</a>
    </article>
  );
}
export default Card;
