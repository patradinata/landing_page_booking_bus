import React from "react";

const Search = () => {
  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-5">
      <div className="w-full bg-neutral-100 rounded-lg dark:bg-neutral-800">
        <div className="grid grid-cols-3 gap-x-10 gap-y-12 items-end">
          <div className="px-4">
            <label htmlFor="" className="block mb-2 font-medium">
              From
            </label>
            <select
              name="from"
              id="from"
              className="w-full appearance-none text-neutral-600 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200 px-3 h-12 border border-neutral-200 dark:border-neutral-500 rounded-lg focus:outline-none focus:bg-neutral-400 dark:bg-neutral-800"
            >
              <option value="">Select Location</option>
              <option value="location1">Location1</option>
              <option value="location1">Location2</option>
              <option value="location1">Location3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
