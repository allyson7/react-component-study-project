type headerProps = {
  title: string;
};

export default function Header(props: headerProps) {
  return (
    <header>
      <span className="category">
        Categoria: <span>{props.title}</span>
      </span>
    </header>
  );
}
