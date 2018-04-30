import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Home from "@/components/Home";
import NavBar from "@/components/NavBar";
import Agendar from "@/components/Agendar";
import Motorista from "@/components/Motorista";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/agendar",
      name: "Agendar",
      component: Agendar
    },
    {
      path: "/motorista",
      name: "Motorista",
      component: Motorista
    }
  ]
});
