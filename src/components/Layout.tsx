// import React from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden min-h-[100vh]">
      <header className="border-b border-border bg-black text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold font-sans">LUXE</h1>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-10 text-xl">
              <a
                href=""
                onClick={() => navigate("/mens")}
                className=" hover:text-gray-300"
              >
                Men
              </a>
              <a
                href=""
                onClick={() => navigate("/womens")}
                className=" hover:text-gray-300"
              >
                Women
              </a>
              <a
                href=""
                onClick={() => navigate("/kids")}
                className=" hover:text-gray-300"
              >
                Kids
              </a>
              {/* <a href="" onClick={()=>navigate("/about")} className=" hover:text-gray-300">
                about
              </a> */}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link to={"/cart"}>
            <Button variant="ghost" size="icon" className="hover:cursor-pointer">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            </Link>
            <Button
              variant="outline"
              className="hidden hover:cursor-pointer sm:inline-flex bg-transparent"
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>
      <div className="min-h-[55vh]">
        <Outlet />
      </div>
      {/* footer */}
      <div className="bottom-0">
        <footer className="bg-background border-t border-border pt-16 pb-9">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-2xl font-bold font-sans mb-4">LUXE</h4>
                <p className="text-muted-foreground font-serif mb-4">
                  Redefining luxury fashion with timeless elegance and
                  contemporary style.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
              <div>
                <h5 className="font-semibold font-sans mb-4">Shop</h5>
                <ul className="space-y-2 text-muted-foreground font-serif">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Men's Collection
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Women's Collection
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Accessories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Sale
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold font-sans mb-4">Support</h5>
                <ul className="space-y-2 text-muted-foreground font-serif">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Size Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Returns
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold font-sans mb-4">Company</h5>
                <ul className="space-y-2 text-muted-foreground font-serif">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Press
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border mt-12 pt-8 text-center">
              <p className="text-muted-foreground font-serif">
                © 2024 LUXE. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
