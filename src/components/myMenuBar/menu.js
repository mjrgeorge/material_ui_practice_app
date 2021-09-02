import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import React from "react";

export const menu = [
  {
    id: 1,
    icon: <LocalLibraryOutlinedIcon />,
    title: "Chapter-1",
    items: [
      {
        title: "Lesson-1",
        items: [],
        to: 'lesson-1',
      },
      {
        title: "Lesson-2",
        items: [],
        to: 'lesson-2',
      },
      {
        title: "Lesson-3",
        items: [],
        to: 'lesson-3',
      },
      {
        title: "Lesson-4",
        items: [],
        to: 'lesson-4',
      },
      {
        title: "Lesson-5",
        items: [],
        to: 'lesson-5',
      },
    ]
  },
  {
    id: 2,
    icon: <LocalLibraryOutlinedIcon />,
    title: "Chapter-2",
    items: [
      {
        title: "Lesson-1",
        items: [],
        to: 'lesson-1',
      },
      {
        title: "Lesson-2",
        items: [],
        to: 'lesson-2',
      },
      {
        title: "Lesson-3",
        items: [],
        to: 'lesson-3',
      },
    ]
  },
  {
    id: 3,
    icon: <LocalLibraryOutlinedIcon />,
    title: "Chapter-3",
    items: [
      {
        title: "Lesson-3",
        items: [],
        to: 'lesson-3',
      },
      {
        title: "Lesson-3",
        items: [],
        to: 'lesson-3',
      },
    ]
  },
];
