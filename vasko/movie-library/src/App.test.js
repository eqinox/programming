import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import notificationSlice from "./store/notification/notification-slice";
import movieSlice, { movieActions } from "./store/movie/movie-slice";
import MainNavigation from "./shared/navbar/MainNavigation";
import userSlice, { userActions } from "./store/user/user-slice";

describe("reducer tests", () => {
  const store = configureStore({
    reducer: {
      user: userSlice.reducer,
      notification: notificationSlice.reducer,
      movies: movieSlice.reducer,
    },
  });
  // test("renders learn react link", () => {
  //   render(
  //     <BrowserRouter>
  //       <Provider store={store}>
  //         <App />
  //       </Provider>
  //     </BrowserRouter>
  //   );
  //   // Successfuly logged in eqinox@abv.bg
  //   const linkElement = screen.getByText(/opala/i);
  //   expect(linkElement).toBeInTheDocument();
  // });

  // test("check color of button in the navigation", () => {
  //   render(<MainNavigation />, { wrapper: Provider });

  //   const something = screen.getByLabelText("Authenticate");
  //   console.log(something);
  //   expect(something).toHaveStyle({ backgroundColor: "red" });
  // });

  test("should return the initial state", () => {
    expect(userSlice.reducer(undefined, {})).toEqual({
      isLoggedIn: false,
      token: null,
      email: null,
      id: null,
      favourite: [],
      notes: [],
    });
  });

  test("shoud handle new user", () => {
    const newUser = {
      email: "pesho@abv.bg",
      token: "1234",
    };
    expect(userSlice.reducer(newUser, userActions.login(newUser))).toEqual({
      token: "1234",
      email: "pesho@abv.bg",
      favourite: undefined,
      id: undefined,
      isLoggedIn: true,
      notes: undefined,
    });
  });

  test("should handle new movie", () => {});
});


