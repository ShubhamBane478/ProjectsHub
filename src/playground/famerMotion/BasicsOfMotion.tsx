// import React, { useEffect, useRef, useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   MotionConfig,
//   useAnimationControls,
//   useInView,
//   useScroll,
// } from "framer-motion";
// import "./FramerMotionCC.css";

// export const BasicsOfMotion = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   return (
//     <div
//       style={{
//         display: "grid",
//         placeContent: "center",
//         height: "100vh",
//         gap: "0.8rem",
//       }}
//     >
//       <motion.button
//         onClick={() => setIsVisible(!isVisible)}
//         className="example-button w-72"
//         layout
//       >
//         Show / Hide
//       </motion.button>

//       <AnimatePresence mode="popLayout">
//         {isVisible && (
//           <motion.div
//             initial={{
//               rotate: "0deg",
//               scale: 0,
//               y: 0,
//             }}
//             animate={{
//               rotate: "180deg",
//               scale: 1,
//               y: [0, 150, -150, -150, 0], //act like a translateY property
//             }}
//             exit={{
//               rotate: "360deg",
//               scale: 0,
//               y: 0,
//             }}
//             transition={{
//               duration: 1,
//               ease: "easeInOut",
//               times: [0, 0.25, 0.5, 0.85, 1],
//             }}
//             className="w-72 h-60 bg-black"
//           >
//             Test
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export const Gestures = () => {
//   return (
//     <div
//       style={{
//         display: "grid",
//         placeContent: "center",
//         height: "100vh",
//         gap: "0.8rem",
//       }}
//     >
//       <MotionConfig
//         transition={{
//           duration: 0.5,
//           ease: "easeInOut",
//         }}
//       >
//         <motion.button
//           whileHover={{ scale: 1.2 }}
//           whileTap={{ scale: 0.95, rotate: "2.5deg" }}
//           className="example-button w-72 "
//         >
//           Click Me{" "}
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.2 }}
//           whileTap={{ scale: 0.95, rotate: "-2.5deg" }}
//           className="example-button w-72 bg-red-600"
//         >
//           Click Me{" "}
//         </motion.button>
//       </MotionConfig>
//     </div>
//   );
// };

// //Animation Control
// export const AnimationControl = () => {
//   const controls = useAnimationControls();

//   const handleFlipAnimation = () => {
//     controls.start("flip");
//     console.log("Button clicked", controls);
//   };
//   return (
//     <div
//       style={{
//         display: "grid",
//         placeContent: "center",
//         height: "120vh",
//         gap: "0.8rem",
//       }}
//     >
//       <motion.button
//         className="example-button w-72"
//         onClick={handleFlipAnimation}
//         whileHover={{ rotate: "2.5deg" }}
//       >
//         Flip It
//       </motion.button>
//       <motion.div
//         className="w-75 h-60 bg-black"
//         variants={{
//           initial: {
//             rotate: "0deg",
//           },
//           flip: {
//             rotate: "360deg",
//             scale: 1.2,
//           },
//           negFlip:{
//             rotate: "-360deg",
//             scale: 0.9,
//           }
//         }}
//         whileHover="flip"
//         initial="initial"
//         animate={controls}
//       ></motion.div>
//     </div>
//   );
// };

// //viewbase animation
// export const ViewBasedAnimations = () => {
//   const ref = useRef(null);
//   const isInView  = useInView(ref ,{once:true});

//   useEffect(()=>{
//     console.log("is in view ",isInView)
//   },[isInView])
//   return (
//     <>
//       <div />
//       {/* style={{ height: "150vh" }} /> */}
//       <motion.div
//         className="h-screen bg-black "
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 3 }}
//       >
        
//       </motion.div>
//       <div
//           ref={ref}
//           className="h-screen"
//           style={{ background: "red" ,transition: "1s background" }}
//         ></div>
//     </>
//   );
// };

// //Scroll based animation
// export const ScrollAnimations = () => {
//   const { scrollYProgress } = useScroll();

//   // const scaleX = useSpring(scrollYProgress);

//   // const background = useTransform(
//   //   scrollYProgress,
//   //   [0, 1],
//   //   ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
//   // );

//   return (
//     <div>
//       <motion.div
//         style={{
//           // scaleX: scrollYProgress,
//           // scaleX,
//           transformOrigin: "left",
//           // background: "blue",
//           // background,
//           position: "sticky",
//           top: 0,
//           width: "100%",
//           height: "20px",
//         }}
//       />

//       <div
//         style={{
//           maxWidth: "700px",
//           margin: "auto",
//           padding: "1.2rem",
//           color:"black"
//         }}
//       >
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>
//       </div>
//     </div>
//   );
// };