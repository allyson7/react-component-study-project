import { useEffect, useState } from "react";

import { api } from "../services/api";
import { Button } from "./Button";
import { GenreResponseProps } from "../App";

type SidebarProps = {
  sidebarOnClick: (id: number) => void;
  selectedId: number;
};

export function SideBar({ sidebarOnClick, selectedId }: SidebarProps) {
  // Complete aqui
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => sidebarOnClick(genre.id)}
            selected={selectedId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
