const Header = () => {
  return (
    <div className="Header w-full flex align-middle justify-between">
      <div className="">
        <h3 className="font-bold text-3xl md:text-3xl">My Tasks</h3>
        <p className="mt-2">
          2 tasks for{" "}
          <span
            style={{
              borderBottom: "1.6px dotted #c7c7c7",
              padding: "2px",
            }}
          >
            Today
          </span>
        </p>
      </div>
      <div className="rounded-3xl">
        <img
          className="rounded-3xl profileImage transition-all duration-300 cursor-pointer object-cover w-16 h-16"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiwIFgppT_eCwo7O9K_WfRbrvug5zgZVnUA&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
