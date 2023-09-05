import Image from "next/image";

import Avatar from "@mui/material/Avatar";

type ChatPartnerHeadProps = {
  user: User;
};

const ChatPartnerHead = ({ user }: ChatPartnerHeadProps) => {
  return (
    <div className="backdrop-blur-lg bg-slate-100/50 dark:bg-gray-500/50 absolute start-0 end-0 top-0 flex items-center px-4 py-4">
      <Avatar sx={{marginInlineEnd: '1rem'}} aria-label="تصویر پروفایل دوست">
        <Image src={user.image!} alt={user.name!} width={400} height={400} />
      </Avatar>
      <div>
        <h3 className="-mb-1 text-black dark:text-white">{user.name}</h3>
        <small className="text-slate-500 dark:text-slate-300">{user.email}</small>
      </div>
    </div>
  );
};

export default ChatPartnerHead;
