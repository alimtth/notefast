import { Calendar, Folder } from "react-bootstrap-icons";
import TextEdit from "../textEdit/TextEdit";

function NavFormNote() {
  return (
    <div className="NavBar__Note">
      <div className="title_Navbar">
        <h3>خلاصه جلسه ۱۲ صدکدرز</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99999C10.8334 9.53975 10.4603 9.16666 10 9.16666C9.53978 9.16666 9.16669 9.53975 9.16669 9.99999C9.16669 10.4602 9.53978 10.8333 10 10.8333Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 9.99999C16.6667 9.53975 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53975 15 9.99999C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.16665 10.8333C4.62688 10.8333 4.99998 10.4602 4.99998 9.99999C4.99998 9.53975 4.62688 9.16666 4.16665 9.16666C3.70641 9.16666 3.33331 9.53975 3.33331 9.99999C3.33331 10.4602 3.70641 10.8333 4.16665 10.8333Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="title_Navbar_2">
        <div className="folder_NavBarNote">
          <Folder />
          <h3>پوشه</h3>
          <h4>شخصی</h4>
        </div>
        <div className="date">
          <Calendar />
          <h5>زمان ایجاد</h5>
          <h6>۱۸ شهریور ۱۴۰۲</h6>
        </div>
        
      </div>
      <div className="Rectangle">
      </div>
      <TextEdit />
    </div>
  );
}

export default NavFormNote;
