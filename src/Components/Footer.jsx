import React from "react";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-neutral text-neutral-content p-4 flex justify-between items-center">
            <aside className="flex items-center">
                <p className="ml-2">
                    Copyright © {new Date().getFullYear()} - All rights reserved{" "}
                    <a
                        href="https://github.com/Suprio-Das/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-500"
                    >
                        Suprio Das
                    </a>
                </p>
            </aside>
            <nav>
                <a
                    href="https://www.linkedin.com/in/supriodas03/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                    >
                        <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727V22.27C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.727V1.727C24 .774 23.208 0 22.23 0zM7.128 20.452H3.556V8.998h3.572v11.454zM5.342 7.532c-1.134 0-2.057-.936-2.057-2.086 0-1.152.923-2.086 2.057-2.086 1.133 0 2.058.934 2.058 2.086 0 1.15-.925 2.086-2.058 2.086zm15.111 12.92h-3.573V14.62c0-1.39-.025-3.173-1.935-3.173-1.94 0-2.238 1.51-2.238 3.07v5.935h-3.572V8.998h3.428v1.554h.048c.477-.904 1.641-1.855 3.38-1.855 3.616 0 4.284 2.38 4.284 5.477v6.278z"></path>
                    </svg>
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
