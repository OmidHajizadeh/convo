"use client";

import { useEffect, useState } from "react";

import { Alert } from "@/lib/Material/MaterialClientComponents";

import { useAppSelector } from "@/store/Redux/hooks";
import RemoveFromExplorer from "./RemoveFromExplorer";
import AddToExplorer from "./AddToExplorer";

const UserStatus = () => {
  const { isUserInExplorer } = useAppSelector((state) => state.explorer);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <>
      {isUserInExplorer ? (
        <>
          <Alert
            severity="success"
            className="mt-2 text-start"
            action={<RemoveFromExplorer />}
          >
            شما قبلا پروفایل خود را برای نمایش در اکسپلورر سایر کاربران قرار
            داده اید. از طریق دکمه زیر میتواند پروفایل خود را از اکسپلورر حذف
            کنید.
          </Alert>
        </>
      ) : (
        <>
          <Alert severity="info" className="mt-2 text-start">
            برای اینکار، یک پیغام در فیلد زیر وارد کنید تا در کنار پروفایل شما
            برای دیگران نمایش داده شود. سپس دکمه ارسال پروفایل را بزنید.
          </Alert>
          <AddToExplorer />
        </>
      )}
    </>
  );
};

export default UserStatus;
