// import React from "react";

// export const RetracingSideBar = () => {
//   return (
//     <div className="flex bg-indigo-50">
//       <Sidebar />
//       <ExampleContext />
//     </div>
//   );
// };

// const Sidebar = () => {
//   const [open, setIsOpen] = React.useState(true);

//   return (
//     <nav
//       className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
//       style={{
//         width: open ? "225px" : "fit-content",
//       }}
//     >
//       <TitleSection open={open} />
//     </nav>
//   );
// };

// const TitleSection = ({ open }: { open: boolean }) => {
//   return (
//     <div className="mb-4 border-b border-slate-300 p-3">
//       <div
//         className="flex items-center justify-start  cursor-pointer rounded-md 
//         transition-colors hover:bg-slate-100"
//       >
//         <div className="flex items-center gap-2">
//           <Logo />
//           {open && (
//             <div>
//               <div className="block text-xs font-semibold">Shubham Bane</div>
//               <div className="block text-xs text-slate-500">Pro Member</div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Logo = () => {
//   // Temp logo from https://logoipsum.com/

//   return (
//     <div className="grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600">
//       <svg
//         width="24"
//         height="auto"
//         viewBox="0 0 50 39"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="fill-slate-50"
//       >
//         <path
//           d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
//           stopColor="#000000"
//         ></path>

//         <path
//           d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
//           stopColor="#000000"
//         ></path>
//       </svg>
//     </div>
//   );
// };

// const ExampleContext = () => {
//   return (
//     <div className="h-[200vh] w-full">
//       <h1>Example Context</h1>
//     </div>
//   );
// };
