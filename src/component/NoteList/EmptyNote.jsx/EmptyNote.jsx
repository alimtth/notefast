import './EmptyNote.css'
function EmptyNote() {
    return (
        <div>
            <div className="notelist">
      <div className="paren">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48.3333 6.66666H19.9999C18.2318 6.66666 16.5361 7.36904 15.2859 8.61929C14.0356 9.86953 13.3333 11.5652 13.3333 13.3333V66.6667C13.3333 68.4348 14.0356 70.1305 15.2859 71.3807C16.5361 72.6309 18.2318 73.3333 19.9999 73.3333H59.9999C61.768 73.3333 63.4637 72.6309 64.714 71.3807C65.9642 70.1305 66.6666 68.4348 66.6666 66.6667V25L48.3333 6.66666Z"
            stroke="#363B40"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M46.6667 6.66666V26.6667H66.6667"
            stroke="#363B40"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M53.3334 43.3333H26.6667"
            stroke="#363B40"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M53.3334 56.6667H26.6667"
            stroke="#363B40"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.3334 30H26.6667"
            stroke="#363B40"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h1 className="title-list">یک یادداشت را برای نمایش انتخاب کنید</h1>
        <h6 className="desc-list">
          از لیست سمت راست یک يادداشت را انتخاب کنید، یا یک یادداشت جدید
          <br></br> ایجاد کنید.
        </h6>
      </div>
    </div>
        </div>
    );
}

export default EmptyNote;