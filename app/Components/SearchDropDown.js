import { useState } from 'react';

const data = [
    "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"
];

const SearchDropdown = () => {
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const filteredData = search.length === 0 ? [] : data.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="relative">
            <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Search for a fruit..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            />
            {isOpen && filteredData.length > 0 && (
                <ul className="absolute border border-gray-300 rounded-md bg-white w-full z-10 max-h-60 overflow-auto">
                    {filteredData.map((item, index) => (
                        <li
                            key={index}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onMouseDown={() => setSearch(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchDropdown;