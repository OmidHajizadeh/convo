"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Avatar } from "@/lib/Material/MaterialClientComponents";

import {
  EditIcon,
  GroupIcon,
  LogoutIcon,
  Diversity3Icon,
  ExploreIcon,
  InfoIcon,
} from "@/lib/Material/MaterialClientIcons";

import { useAppSelector } from "@/store/Redux/hooks";
import { Badge } from "@mui/material";

export default function UserOptions({
  onCloseDrawer,
}: {
  onCloseDrawer: () => void;
}) {
  const { friendRequestsCount } = useAppSelector(
    (store) => store.friendRequests
  );
  const { resolvedTheme } = useTheme();

  function closeDrawerHandler() {
    onCloseDrawer();
  }

  return (
    <>
      <li className="px-4 py-2">
        <Link
          className="flex items-center w-full"
          onClick={closeDrawerHandler}
          href="/chat/friends-list"
        >
          <Avatar className="me-3">
            <Diversity3Icon className="dark:text-black" />
          </Avatar>
          <span
            className={`${
              resolvedTheme === "light" ? "text-black" : "text-white"
            }`}
          >
            لیست چت
          </span>
        </Link>
      </li>

      <li className="px-4 py-2">
        <Link
          className="flex items-center w-full"
          onClick={closeDrawerHandler}
          href="/chat/requests"
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            badgeContent={
              friendRequestsCount === 0 ? null : (
                <span className="inline-flex justify-center items-center bg-red-500 text-white aspect-square min-w-4 min-h-4 w-full h-full rounded-full">
                  {friendRequestsCount}
                </span>
              )
            }
          >
            <Avatar className="me-3">
              <GroupIcon className="dark:text-black" />
            </Avatar>
          </Badge>
          <span
            className={`${
              resolvedTheme === "light" ? "text-black" : "text-white"
            }`}
          >
            درخواست ها
          </span>
        </Link>
      </li>

      <li className="px-4 py-2">
        <Link
          className="flex items-center w-full"
          onClick={closeDrawerHandler}
          href="/chat/explorer"
        >
          <Avatar className="me-3">
            <ExploreIcon className="dark:text-black" />
          </Avatar>
          <span
            className={`${
              resolvedTheme === "light" ? "text-black" : "text-white"
            }`}
          >
            اکسپلورر
          </span>
        </Link>
      </li>

      <li className="px-4 py-2">
        <Link
          className="flex items-center w-full"
          onClick={closeDrawerHandler}
          href="/chat/edit-profile"
        >
          <Avatar className="me-3">
            <EditIcon className="dark:text-black" />
          </Avatar>
          <span
            className={`${
              resolvedTheme === "light" ? "text-black" : "text-white"
            }`}
          >
            ویرایش اطلاعات
          </span>
        </Link>
      </li>

      <li className="px-4 py-2">
        <Link
          className="flex items-center w-full"
          onClick={closeDrawerHandler}
          href="/chat/about"
        >
          <Avatar className="me-3">
            <InfoIcon className="dark:text-black" />
          </Avatar>
          <span
            className={`${
              resolvedTheme === "light" ? "text-black" : "text-white"
            }`}
          >
            درباره کانوو
          </span>
        </Link>
      </li>

      <li className="px-4 py-2">
        <Link
          className="flex items-center w-full"
          onClick={closeDrawerHandler}
          href="/api/auth/signout"
        >
          <Avatar className="me-3">
            <LogoutIcon className="dark:text-black" />
          </Avatar>
          <span
            className={`${
              resolvedTheme === "light" ? "text-black" : "text-white"
            }`}
          >
            خروج
          </span>
        </Link>
      </li>
    </>
  );
}
