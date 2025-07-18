import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const SORT_OPTIONS = [
  { value: "price_asc", label: "Price: Low → High" },
  { value: "price_desc", label: "Price: High → Low" },
  { value: "duration_asc", label: "Duration: Short → Long" },
  { value: "best", label: "Best Match" },
];

export default function SortControl({ value, onChange }) {
  return (
    <div className="w-64">
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="w-full border rounded-lg px-4 py-2 text-left flex justify-between items-center">
            {SORT_OPTIONS.find((o) => o.value === value)?.label}
            <ChevronUpDownIcon className="h-5 w-5 text-gray-500" />
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute mt-1 w-full bg-white dark:bg-gray-800 border rounded-lg shadow-lg z-10">
              {SORT_OPTIONS.map((opt) => (
                <Listbox.Option
                  key={opt.value}
                  value={opt.value}
                  className={({ active }) =>
                    `px-4 py-2 cursor-pointer ${active ? "bg-gray-100 dark:bg-gray-700" : ""}`
                  }
                >
                  {opt.label}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
