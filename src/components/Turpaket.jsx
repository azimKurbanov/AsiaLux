import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const countries = [
  "O‘zbekiston",
  "Qozog‘iston",
  "Qirg‘iziston",
  "Turkiya",
  "OAE",
  "Qatar",
  "Rossiya",
  "Xitoy",
  "Hindiston",
];

const returnCountries = [
  "O‘zbekiston",
  "Rossiya",
  "Turkiya",
  "Germaniya",
  "AQSH",
];

export default function CountryDropdown() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(countries);
  const [selected, setSelected] = useState(null);

  const [openReturn, setOpenReturn] = useState(false);
  const [searchReturn, setSearchReturn] = useState("");
  const [filteredReturn, setFilteredReturn] = useState(returnCountries);
  const [selectedReturn, setSelectedReturn] = useState(null);

  const [openDate, setOpenDate] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [passengers, setPassengers] = useState("Yo‘lovchilar soni");

  useEffect(() => {
    const res = countries.filter((c) =>
      c.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(res);
  }, [search]);

  useEffect(() => {
    const res = returnCountries.filter((c) =>
      c.toLowerCase().includes(searchReturn.toLowerCase())
    );
    setFilteredReturn(res);
  }, [searchReturn]);

  const handleSearch = () => {
    alert(
      `Qidirilmoqda:\nBorish: ${selected || "Tanlanmagan"}\nQaytish: ${
        selectedReturn || "Tanlanmagan"
      }\nBoshlanish: ${
        startDate ? startDate.toLocaleDateString("uz-UZ") : "-"
      }\nTugash: ${
        endDate ? endDate.toLocaleDateString("uz-UZ") : "-"
      }\nYo‘lovchilar: ${passengers}`
    );
  };

  return (
    <nav className="flex w-[1200px] h-[80px] rounded-2xl gap-4 ml-[160px] mt-20 pt-[20px] px-4 bg-zinc-100">
      {/* Borish joyi */}
      <div className="relative w-64">
        <button
          onClick={() => setOpen(!open)}
          className="w-full bg-white  rounded-lg px-4 py-2 flex justify-between items-center shadow-sm"
        >
          <span>{selected || "Davlatni tanlang"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {open && (
          <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            <div className="p-2">
              <input
                type="text"
                placeholder="Qidirish..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <ul>
              {filtered.map((country, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    setSelected(country);
                    setOpen(false);
                    setSearch("");
                  }}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {country}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Qaytish joyi */}
      <div className="relative w-64">
        <button
          onClick={() => setOpenReturn(!openReturn)}
          className="w-full bg-white  rounded-lg px-4 py-2 flex justify-between items-center shadow-sm"
        >
          <span>{selectedReturn || "Qaytish"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform ${
              openReturn ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {openReturn && (
          <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            <div className="p-2">
              <input
                type="text"
                placeholder="Qidirish..."
                value={searchReturn}
                onChange={(e) => setSearchReturn(e.target.value)}
                className="w-full border rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <ul>
              {filteredReturn.map((country, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    setSelectedReturn(country);
                    setOpenReturn(false);
                    setSearchReturn("");
                  }}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {country}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Sana tanlash */}
      <div className="flex flex-col items-start p-3 bg-white rounded-[10px] shadow-lg w-[200px] h-[45px]">
        <button
          onClick={() => setOpenDate(!openDate)}
          className="w-full rounded-lg transition text-[14px]"
        >
          Boshlanish-Tugash sanasi
        </button>

        {openDate && (
          <div className="mt-4 w-full flex gap-4 text-[14px] ">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd.MM.yyyy"
              placeholderText="Boshlanish"
              className="w-full rounded-lg p-2 focus:outline-none bg-gray-200 focus:ring-2 focus:ring-gray-500"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat="dd.MM.yyyy"
              placeholderText="Tugash"
              className="w-full  rounded-lg p-2 focus:outline-none focus:ring-2 bg-gray-200 focus:ring-gray-500"
            />
          </div>
        )}
      </div>

      {/* Yo‘lovchilar soni */}
      <select
        value={passengers}
        onChange={(e) => setPassengers(e.target.value)}
        className="w-[200px] h-[45px] pl-[20px] bg-white rounded-[10px] shadow-lg focus:ring-blue-500"
      >
        <option>Yo‘lovchilar soni</option>
        <option>1 yo‘lovchi</option>
        <option>2 yo‘lovchi</option>
        <option>3 yo‘lovchi</option>
        <option>4 yo‘lovchi</option>
      </select>

      {/* Qidirish tugmasi */}
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-6 rounded-[10px] shadow-lg hover:bg-blue-600 transition w-[200px] h-[47px]"
      >
        Qidirish
      </button>
    </nav>
  );
}
