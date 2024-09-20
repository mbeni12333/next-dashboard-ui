import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center   p-4">
      <div className="flex flex-row gap-2 items-center ring-2 rounded-full px-2 ring-gray-300">
        <Image src="/search.png" alt="Search" width={20} height={20} />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent  p-2 outline-none w-200"
        />
      </div>
      <div className="flex flex-row gap-6 items-center">
        <div className="bg-transparent rounded-full cursor-pointer flex items-center w-8 h-8 justify-center">
          <Image src="/message.png" alt="Message" width={30} height={30} />
        </div>
        <div className="bg-transparent rounded-full cursor-pointer flex items-center w-8 h-8 justify-center">
          <Image
            src="/announcement.png"
            alt="announcement"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-black-500 font-medium leading-3 text-md">
            Username
          </span>
          <span className="text-gray-500 text-sm text-right">Role</span>
        </div>
        <Image
          src="/avatar.png"
          alt="Profile"
          width={36}
          height={36}
          className="rounded-full "
        />
      </div>
    </nav>
  );
}
