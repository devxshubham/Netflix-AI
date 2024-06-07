import { NETFLIX_LOGO } from "../utils/constants";

function Header() {
    return <div className="z-10 left-5 top-5 absolute max-w-[100px]">
        <img  src={NETFLIX_LOGO} alt="" />
    </div>;
}

export default Header;