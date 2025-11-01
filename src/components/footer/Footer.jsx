import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FaMapPin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full lg:px-28 md:px-16 sm:px-7 px-4 py-7 bg-neutral-200/60 dark:bg-neutral-900/70">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="space-y-5 col-span-2">
          <Link to="/" className="text-xl text-neutral-800 dark:text-neutral-200 font-semibold">
            <img src={Logo} alt="logo" className="w-36 h-auto object-cover object-center" />
          </Link>
          <p className="text-neutral-600 font-semibold text-sm font-quicksand lg:text-base pr-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur cumque sint quaerat!</p>
        </div>
        <div className="space-x-7">
          <h1 className="text-lg font-medium font-quicksand">Tentang Kami</h1>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-500 text-sm lg:text-base font-medium">
            <li>
              <Link to="#" className="hover:text-violet-500 dark:text-white transition-all duration-300 ease-in-out capitalize">
                about us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-violet-500 dark:text-white transition-all duration-300 ease-in-out capitalize">
                contact us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-violet-500 dark:text-white transition-all duration-300 ease-in-out capitalize">
                privacy police
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-violet-500 dark:text-white transition-all duration-300 ease-in-out capitalize">
                term of service
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-7">
          <h1 className="text-base lg:text-lg font-medium text-neutral-500 dark:text-white capitalize">get in Touch</h1>
          <div className="space-y-4">
            <div className="flex gap-4">
              <FaMapPin className="text-2xl font-medium text-neutral-600 dark:text-white" />
              <div className="flex flex-col">
                <p className="text-sm text-neutral-600 dark:text-white capitalize font-medium">for support & reservations</p>
                <p className="text-sm text-neutral-600 dark:text-white capitalize font-medium my-2">+123, 456, 789, Patra Dinata</p>
              </div>
            </div>
            <div className="flex gap-4">
              <FaMapPin className="text-2xl font-medium text-neutral-600 dark:text-white" />
              <div className="flex flex-col">
                <p className="text-sm text-neutral-600 dark:text-white capitalize font-medium">for support & reservations</p>
                <p className="text-sm text-neutral-600 dark:text-white capitalize font-medium my-2">+123, 456, 789, Tailwind Css</p>
              </div>
            </div>
            <div className="flex gap-4">
              <FaMapPin className="text-2xl font-medium text-neutral-600 dark:text-white" />
              <div className="flex flex-col">
                <p className="text-sm text-neutral-600 dark:text-white capitalize font-medium">for support & reservations</p>
                <p className="text-sm text-neutral-600 dark:text-white capitalize font-medium my-2">+123, 456, 789, React Js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
