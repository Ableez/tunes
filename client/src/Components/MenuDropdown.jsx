/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState, useContext } from "react";
import taskmenuIcon from "../Assets/taskmenuIcon.svg";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AppContext } from "../App";

export default function MenuDropdown({ _id }) {
  const { taskMenu, setTaskMenuAction } = useContext(AppContext);
  return (
    <Menu
      as="div"
      className="bg-dark-gray-04 h-fit rounded-2xl text-left"
    >
      <div className=" grid place-items-center">
        <Menu.Button className="p-2  ">
          <img alt="Task Menu" src={taskmenuIcon} className="w-5 " />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    setTaskMenuAction({
                      action: "edit",
                      _id: _id,
                    });
                  }}
                  className={`${
                    active
                      ? "bg-light-teal dark:bg-dark-blue  text-white"
                      : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <EditActiveIcon
                      className="mr-2 h-5 w-5 bg"
                      aria-hidden="true"
                    />
                  ) : (
                    <EditInactiveIcon
                      className="mr-2 h-5 w-5 bg"
                      aria-hidden="true"
                    />
                  )}
                  Edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    setTaskMenuAction({
                      action: "duplicate",
                      _id: _id,
                    });
                  }}
                  className={`${
                    active
                      ? "bg-light-teal dark:bg-dark-blue  text-white"
                      : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <DuplicateActiveIcon
                      className="mr-2 h-5 w-5 bg"
                      aria-hidden="true"
                    />
                  ) : (
                    <DuplicateInactiveIcon
                      className="mr-2 h-5 w-5 bg"
                      aria-hidden="true"
                    />
                  )}
                  Duplicate
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    setTaskMenuAction({
                      action: "move",
                      _id: _id,
                    });
                  }}
                  className={`${
                    active
                      ? "bg-light-teal dark:bg-dark-blue  text-white"
                      : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <MoveActiveIcon
                      className="mr-2 h-5 w-5 bg"
                      aria-hidden="true"
                    />
                  ) : (
                    <MoveInactiveIcon
                      className="mr-2 h-5 w-5 bg"
                      aria-hidden="true"
                    />
                  )}
                  Move
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    setTaskMenuAction({
                      action: "delete",
                      _id: _id,
                    });
                  }}
                  className={`${
                    active
                      ? "bg-light-teal dark:bg-dark-blue  text-white"
                      : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <DeleteActiveIcon
                      className="mr-2 h-5 w-5 bg text-violet-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <DeleteInactiveIcon
                      className="mr-2 h-5 w-5 bg text-violet-400"
                      aria-hidden="true"
                    />
                  )}
                  Delete
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#bf5af2"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#bf5af2"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#bf5af2"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#bf5af2"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#bf5af2"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#bf5af2"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#bf5af2"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#bf5af2"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#bf5af2" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#bf5af2"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#bf5af2"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#bf5af2" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#bf5af2" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#bf5af2" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#bf5af2" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#bf5af2" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#bf5af2" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#bf5af2" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#bf5af2"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#bf5af2" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#bf5af2" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#bf5af2"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#bf5af2" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#bf5af2" strokeWidth="2" />
    </svg>
  );
}
