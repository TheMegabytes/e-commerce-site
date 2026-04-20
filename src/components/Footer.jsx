function Footer() {
  return (
    <div className="bg-blue-600 text-white px-10 py-5 md:px-15 mt-16 flex flex-col">
      <span className="text-lg font-medium">Bei Sawa</span>
      <span className="mt-8 cursor-pointer hover:underline">
        Visit Help Center
      </span>

      <div className="flex justify-between gap-2 mt-8 flex-wrap">
        <div>
          <span className="text-lg font-medium">Company</span>
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-2 text-sm">
              <span>About Us</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span>Our Offerings</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span>Newsroom</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span>Investors</span>
            </div>
          </div>
        </div>

        <div>
          <span className="text-lg font-medium">Quick Links</span>
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-2 text-sm">
              <span>Home</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span>Shops</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span>Best Dealers</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span>Deals</span>
            </div>
          </div>
        </div>

        <div>
          <span className="text-lg font-medium">Customer Support</span>
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-2 text-sm">
              <span>FAQs</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span>Shipping & Delivery</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span>Returns & Refunds</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>

        <div>
          <span className="text-lg font-medium">Follow Us</span>
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-2 text-sm">
              <span>Instagram</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span>Facebook</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span>X</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
