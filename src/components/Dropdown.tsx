import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  Menu,
  MenuItem,
} from "solid-headless";
import type { JSX } from "solid-js";

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function App(): JSX.Element {
  return (
    <div class="w-full flex items-center">
      <Popover defaultOpen={false} class="relative">
        {({ isOpen }) => (
          <>
            <PopoverButton
              class={classNames(
                isOpen() && "text-opacity-90",
                "inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              )}
            >
              Change Status
              <svg
                class="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </PopoverButton>
            <Transition
              show={isOpen()}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <PopoverPanel
                unmount={false}
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <Menu class="py-0 text-left">
                  <MenuItem
                    as="button"
                    class="bg-red-100 text-red-800 block px-4 py-2 text-sm hover:bg-red-200 hover:text-red-900 w-full text-left"
                  >
                    1. Not Contacted
                  </MenuItem>
                  <MenuItem
                    as="button"
                    class="bg-orange-100 text-orange-800 block px-4 py-2 text-sm hover:bg-orange-200 hover:text-orange-900 w-full text-left"
                  >
                    2. Initial Contact Sent
                  </MenuItem>
                  <MenuItem
                    as="button"
                    class="bg-green-100 text-green-800 block px-4 py-2 text-sm hover:bg-green-200 hover:text-green-900 w-full text-left"
                  >
                    3. Invoice Sent
                  </MenuItem>
                  <MenuItem
                    as="button"
                    class="bg-cyan-100 text-cyan-800 block px-4 py-2 text-sm hover:bg-cyan-200 hover:text-cyan-900 w-full text-left"
                  >
                    4. Cast Member Needing
                  </MenuItem>
                  <MenuItem
                    as="button"
                    class="bg-indigo-100 text-indigo-800 block px-4 py-2 text-sm hover:bg-indigo-200 hover:text-indigo-900 w-full text-left"
                  >
                    5. Cast Scheduled
                  </MenuItem>
                  <MenuItem
                    as="button"
                    class="bg-fuchsia-100 text-fuchsia-800 block px-4 py-2 text-sm hover:bg-fuchsia-200 hover:text-fuchsia-900 w-full text-left"
                  >
                    6. Follow Up Sent
                  </MenuItem>
                </Menu>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
