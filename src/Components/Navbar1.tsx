import { FaRegUser } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";
import { LuMail } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../Context/ContextStore";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Navbar1 = () => {
  const { user } = useStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <section className="flex justify-center items-center bg-blue-500">
      <nav className="flex justify-between max-container w-full py-2 lg:px-10 max-lg:px-5">
        <div className="flex justify-center items-center gap-5">
          <a
            href="tel:+916203459703"
            className="flex justify-center items-center gap-1"
          >
            <FaHeadphones className="text-white text-lg" />{" "}
            <span className="text-white text-base font-semibold max-lg:hidden">
              +91 6203459703
            </span>
          </a>

          <a
            href="mailto:buddheshwar2003@gmail.com"
            className="flex justify-center items-center gap-1"
          >
            <LuMail className="text-white text-xl" />
            <span className="text-white text-base font-semibold max-lg:hidden">
              buddheshwar2003@gmail.com
            </span>
          </a>
        </div>
        <div className="flex justify-center items-center gap-5">
          {user && user?.email ? (
            <span className=" text-white text-base font-semibold">
              {user?.email}
            </span>
          ) : (
            <Link
              to={"/login"}
              className="flex justify-center items-center gap-1"
            >
              <IoMdLogIn className="text-xl text-white" />{" "}
              <span className=" text-white text-base font-semibold">Login</span>
            </Link>
          )}
          {user ? (
            <button
              onClick={handleLogout}
              className="flex justify-center items-center gap-1"
            >
              <FaRegUser className="text-lg text-white" />{" "}
              <span className=" text-white text-base font-semibold">
                logout
              </span>
            </button>
          ) : (
            <Link
              to={"/register"}
              className="flex justify-center items-center gap-1"
            >
              <FaRegUser className="text-lg text-white" />{" "}
              <span className=" text-white text-base font-semibold">
                Register
              </span>
            </Link>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar1;
