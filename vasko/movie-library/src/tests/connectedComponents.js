// import React from "react";
// import App from "../App";
// import { createStore } from "redux";
// import { connect, Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import { userSlice } from "../store/user/user-slice";
// import { notificationSlice } from "../store/notification/notification-slice";
// import { movieSlice } from "../store/movie/movie-slice";
// import { render, fireEvent } from "@testing-library/react" ;
// import { configureStore } from "@reduxjs/toolkit";
// import store from "../store/index";
// import ProfilePage from "../user/ProfilePage";
// // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
// // console.log(userSlice);
// // const store = configureStore({
// //   reducer: {
// //     user: userSlice.reducer,
// //     notification: notificationSlice.reducer,
// //     movies: movieSlice.reducer,
// //   },
// // });

// describe("Connected Component Full App integration Tests", () => {
//   it("should add Todo item usisng fireEvent", () => {
//     render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <ProfilePage />
//         </Provider>
//       </BrowserRouter>
//     );

//     const inputElement = screen.getByText('Add Movie'); //getByTestId("add-movie-input");

//     fireEvent.change(inputElement, { target: { value: "buy milk" } });
//     fireEvent.click(getByText("Add Todo"));
    
//     // const liElement = container.querySelector("li");
//     // expect(liElement.textContent).toBe("buy milk");
//   });
// });
