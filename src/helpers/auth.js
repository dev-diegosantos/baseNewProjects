import { LOGIN, PRIVATE_ROUTERS, MY_PROFILE } from "../utils/contants/routers";
import Router from "next/router";

const authCheck = router => {
  const user = localStorage.getItem("Authorization");

  if (PRIVATE_ROUTERS.includes(router.route)) {
    if (!user) {
      Router.push(LOGIN);
    } else {
      Router.push(MY_PROFILE);
    }
  }
};

export default authCheck;
