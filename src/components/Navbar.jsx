function Navbar() {
  return (
    <div className="flex justify-between py-4 px-16 text-white bg-blue-600">
      <div className="flex justify-center items-center gap-5">
        <span className="text-lg font-medium cursor-pointer">Bei Sawa</span>
        <span className="text-sm cursor-pointer hover:underline">Shop Now</span>
        <span className="text-sm cursor-pointer hover:underline">
          Best Sellers
        </span>
        <span className="text-sm cursor-pointer hover:underline">Deals</span>
      </div>

      <div className="md:flex justify-center items-center gap-5 hidden">
        <div className="flex justify-center items-center gap-1 hover:underline cursor-pointer">
          <span className="text-sm">Cart</span>
        </div>
        <span className="cursor-pointer hover:underline text-sm">Help</span>
        <span className="cursor-pointer hover:underline text-sm">Log In</span>
        <span className="text-sm bg-orange-500 text-white font-medium rounded-full py-2 px-3 cursor-pointer hover:bg-orange-600">
          Sign Up
        </span>
      </div>
    </div>
  );
}

export default Navbar;
