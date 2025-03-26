import Image from "next/image";

const UserNav = () => {
    return (
        <div className="p-2 relative inline-block border rounded-full">
            <button className="flex items-center">
                
                <Image
                    src="/menu-regular-24.png"
                    alt="menu"
                    width={24}
                    height={24}
                />

                <Image
                    src="/user-regular-24.png"
                    alt="menu"
                    width={24}
                    height={24}
                />

            </button>
        </div>
    )
}

export default UserNav;

