import React from "react";
import { Link } from "react-router-dom";
import { TbSourceCode } from "react-icons/tb";
import { SiBackendless } from "react-icons/si";
const Projects = () => {
  return (
    <div>
      <h4 className="text-fuchsia-900 font-bold text-2xl px-10">My Explores</h4>
      <div className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-4 justify-between p-5">
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm lg:flex-row lg:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg px-2"
                    src="/images/projectimage1.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4">
                    <div className="flex flex-row  justify-between">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Suss Out
                      </h5>
                      <div className="flex flex-row gap-2">
                        <a
                          title="View Source"
                          target="_blank"
                          className="bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-4 py-2 mb-2 text-white w-15 h-10"
                          href="https://github.com/GeethaRagu/Front-end-GeethaRagu-learningmanagementsystem-frontend"
                        >
                          <TbSourceCode />
                        </a>
                        <a
                          title="View Source"
                          target="_blank"
                          className="bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-4 py-2 mb-2 text-white w-15 h-10"
                          href="https://github.com/GeethaRagu/Back-end-GeethaRagu-learningmanagementsystem-backend"
                        >
                          <SiBackendless />
                        </a>
                      </div>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Suss Out provides short bursts of focused learning content
                      that’s easy to consume in a matter of minutes. As the
                      information is delivered in bits, you can access it on various
                      platforms and devices, including mobile phones and tablets. This
                      makes it convenient and accessible when desired.
                    </p>
                    <p className="font-light text-sm mb-3">
                      #ReactJS #TailwindCSS #Redux #NodeJS #MongoDB #ExpressJS #Stripe
                    </p>
                    <button
                      type="button"
                      className="w-15 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      <a
                        href="https://learningmanagementsystem-geetharagu.netlify.app/"
                        target="_blank"
                        title="https://learningmanagementsystem-geetharagu.netlify.app/"
                      >
                        Visit website
                      </a>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm lg:flex-row lg:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img
                    className=" w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg px-2"
                    src="/images/projectimage2.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4">
                    <div className="flex flex-row  justify-between">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Chat-app
                      </h5>
                      <div className="flex flex-row gap-2">
                        <a
                          title="View Source"
                          target="_blank"
                          className="bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-4 py-2 mb-2 text-white w-15 h-10"
                          href="https://github.com/GeethaRagu/chatapp-frontend"
                        >
                          <TbSourceCode />
                        </a>
                        <a
                          title="View Source"
                          target="_blank"
                          className="bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-4 py-2 mb-2 text-white w-15 h-10"
                          href="https://github.com/GeethaRagu/chatappbackend"
                        >
                          <SiBackendless />
                        </a>
                      </div>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Chat-app is a basic chat application developed to communicate
                      with other persons signed in the application.It provides to
                      register new account.The messages are communicated
                      efficiently.It is a secured application.It is more easy to
                      access and use.
                    </p>
                    <p className="font-light text-sm mb-3">
                      #ReactJS #DaisyUI #Redux #NodeJS #MongoDB #ExpressJS
                    </p>
                    <button
                      type="button"
                      class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      <a
                        href="https://geetha-chatapp.netlify.app/"
                        target="_blank"
                        title="https://geetha-chatapp.netlify.app/"
                      >
                        Visit website
                      </a>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm lg:flex-row lg:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg px-2"
                    src="/images/projectimage3.jpg"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4">
                    <div className="flex flex-row  justify-between">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        To - Do
                      </h5>
                      <div className="flex flex-row gap-2">
                        <a
                          title="View Source"
                          target="_blank"
                          className="bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-4 py-2 mb-2 text-white w-15 h-10"
                          href="https://github.com/GeethaRagu/todo-frontend"
                        >
                          <TbSourceCode />
                        </a>
                        <a
                          title="View Source"
                          target="_blank"
                          className="bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-4 py-2 mb-2 text-white w-15 h-10"
                          href="https://github.com/GeethaRagu/todo-backend"
                        >
                          <SiBackendless />
                        </a>
                      </div>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      A simple Todo app where user can Add/ Edit / Delete Todo.
                    </p>
                    <p className="font-light text-sm mb-3">
                      #ReactJS #Bootstrap #Redux #NodeJS #MongoDB #ExpressJS
                    </p>
                    <button
                      type="button"
                      className="w-15 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      <a
                        href="https://geetha-todo.netlify.app/"
                        target="_blank"
                        title="https://geetha-todo.netlify.app/"
                      >
                        Visit website
                      </a>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm lg:flex-row lg:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg px-2"
                    src="/images/projectimage4.png"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4">
                    <div className="flex flex-row  justify-between">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Goodies - Food Delivery
                      </h5>
                      <div className="flex flex-row gap-2">
                        <a
                          title="View Source"
                          target="_blank"
                          className="bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-4 py-2 mb-2 text-white w-15 h-10"
                          href="https://github.com/GeethaRagu/FoodDelivery-frontend"
                        >
                          <TbSourceCode />
                        </a>
                        <a
                          title="View Source"
                          target="_blank"
                          className="bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-4 py-2 mb-2 text-white w-15 h-10"
                          href="https://github.com/GeethaRagu/FoodDelivery-backend"
                        >
                          <SiBackendless />
                        </a>
                      </div>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Goodies ,is a food delivery app where user can order food
                      items.The user can proceed checkout and view their previous
                      orders. Admin can add / remove food item and view all orders.
                    </p>
                    <p className="font-light text-sm mb-3">
                      #ReactJS #TailwindCSS #Redux #NodeJS #MongoDB #ExpressJS #Stripe
                    </p>
                    <button
                      type="button"
                      className="w-15 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      <a
                        href="https://goodies-app.netlify.app/"
                        target="_blank"
                        title="https://goodies-app.netlify.app/"
                      >
                        Visit website
                      </a>
                    </button>
                  </div>
                </div>
              </div>
    </div>
  );
};

export default Projects;
