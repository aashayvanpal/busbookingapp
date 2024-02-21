const header = () => {
  return (
    <div className="relative flex bg-[#23415D] h-[60px] justify-center items-center ">
      <div className="h-[30px] w-[60px] ">
        {/* burger icon */}
        <svg
          width="60"
          height="30"
          viewBox="0 0 50 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="50" height="10" fill="white" />
          <rect width="50" height="10" rx="5" fill="white" />
          <rect
            width="50"
            height="10"
            transform="translate(0 16)"
            fill="white"
          />
          <rect y="16" width="50" height="10" rx="5" fill="white" />
          <rect
            width="50"
            height="10"
            transform="translate(0 32)"
            fill="white"
          />
          <rect y="32" width="50" height="10" rx="5" fill="white" />
        </svg>
      </div>
      <div className="font-bold text-white text-center w-full flex justify-center items-center text-4xl ">Bus Booking App</div>
    </div>
  );
};

export default header;
