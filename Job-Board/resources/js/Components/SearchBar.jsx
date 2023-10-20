export default function SearchBar({ search, setSearch }) {
    
    return (
        <div className="w-2/3 bg-border-gray-300 rounded-lg p-2 text-black">
            <input
                type="text"
                placeholder="Rechercher un emploi par titre"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
        </div>
    );
}    