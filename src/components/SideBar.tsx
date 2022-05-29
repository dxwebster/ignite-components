import { Button } from "./Button"

interface Genre {
  id: number
  title: string
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family"
}
export interface SideBar {
  genres: Array<Genre>
  selectedGenreId: number
  setSelectedGenreId: (selectedGenreId: number) => void
}

export function SideBar({ genres, selectedGenreId, setSelectedGenreId }: SideBar) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id)
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
