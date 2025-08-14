import css from './SearchBox.module.css';

interface SearchBoxProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBox({ searchTerm, setSearchTerm }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
