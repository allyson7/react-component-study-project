import { useEffect, useState } from "react";

import { MovieCard } from "./components/MovieCard";

// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from "./services/api";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";
import Header from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  useEffect(() => {
    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  const handleClickButton = (num: number) => {
    setSelectedGenreId(num);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        sidebarOnClick={handleClickButton}
        selectedId={selectedGenreId}
      />

      <div className="container">
        <Header title={selectedGenre.title} />

        <Content selectedGenreId={selectedGenreId} />
      </div>
    </div>
  );
}
