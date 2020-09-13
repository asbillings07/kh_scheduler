// import React from 'react'
// import { useSpring } from 'react-spring'
// import { Link } from 'react-router-dom'
// import { useNavContext } from './navEls/NavElements'
// import { CollapseWrapper, NavLinks } from '../../elements/CollaspeMenu'

// export const CollapseMenu = () => {
//   const { isAuthenticated, user, navbarState, logout, loginWithRedirect } = useNavContext()
//   const { open } = useSpring({ open: navbarState ? 0 : 1 })

//   const LinkedNav = () => (
//     <NavLinks>
//       {isAuthenticated ? (
//         <>
//           <li>
//             <span>Welcome, {user.name}!</span>
//           </li>
//           <li>
//             <Link to='/profile'>Profile</Link>
//           </li>
//           <li>
//             <Link to='' onClick={() => logout({ returnTo: window.location.origin })}>
//               Log Out
//             </Link>
//           </li>
//         </>
//       ) : (
//         <li>
//           <Link to='' onClick={() => loginWithRedirect()}>
//             Log In
//           </Link>
//         </li>
//       )}
//     </NavLinks>
//   )

//   return (
//     <>
//       {navbarState ? (
//         <CollapseWrapper
//           style={{
//             transform: open
//               .interpolate({
//                 range: [0, 0.2, 0.3, 1],
//                 output: [0, -20, 0, -200]
//               })
//               .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`)
//           }}
//         >
//           {LinkedNav()}
//         </CollapseWrapper>
//       ) : (
//         ''
//       )}
//     </>
//   )
// }
