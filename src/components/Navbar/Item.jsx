/* eslint-disable react/prop-types */
export default function NavbarItem({ icon: Icon, active }) {
  return (
    <div
      className={`w-12 h-12 flex justify-center items-center cursor-pointer ${
        active && "bg-blue-600 rounded-full"
      }`}
    >
      <Icon color={`${active ? "white" : "black"}`} />
    </div>
  );
}
