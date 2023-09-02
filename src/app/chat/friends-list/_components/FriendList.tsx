"use client";

import Image from "next/image";

import FriendListItem from "@/app/chat/friends-list/_components/FriendListItem";
import { useAppSelector } from "@/store/Redux/hooks";

type FriendListProps = {
  session: Session;
};

const FriendList = ({ session }: FriendListProps) => {
  const { friendsList } = useAppSelector((state) => state.friends);

  return (
    <div suppressHydrationWarning>
      {friendsList.length > 0 ? (
        <ul className="w-full space-y-3">
          {friendsList.map((friendObject) => {
            return (
              <FriendListItem
                key={friendObject.friend.id}
                session={session}
                friendObject={friendObject}
              />
            );
          })}
        </ul>
      ) : (
        <div className="flex items-center justify-center h-full">
          <div>
            <Image
              src="/no-chat.svg"
              alt="بنر خالی بودن لیست چت"
              width={700}
              height={700}
              className="max-w-[26rem] w-full"
            />
            <h3 className="text-center mt-3 font-bold text-2xl">
              مکالمه ای پیدا نشد :(
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default FriendList;
