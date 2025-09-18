export default function Header() {
  return (
    <div>
      <nav className="flex justify-between mx-10 p-8 bg-[#FEFFFE]">
        <img
          className="iconHeader"
          src="/default-logo.png"
          alt="default-logo"
        />
        <img
          className="iconHeader hover:opacity-70"
          src="/menu-burger.png"
          alt="default-logo"
        />
      </nav>
    </div>
  );
}
