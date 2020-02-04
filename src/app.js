import "@babel/runtime/regenerator"
import "./assets/styles/main.css";
import "./assets/scripts/ui/landing/LandingPage";
import {registerWorker} from "./assets/scripts/sw/ServiceWorkerRegister";
import LandingPage from "./assets/scripts/ui/landing/LandingPage";

registerWorker("service-worker");

document.addEventListener("DOMContentLoaded", () => {
    new LandingPage().start();
});
