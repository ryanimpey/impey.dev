import React from "react";

type Props = {};

const year = new Date().getFullYear();

const Footer = (props: Props) => {
    return (
        <footer className="max-w-xl text-sm mx-auto pb-8 bg-background font-mono">
            &copy; Ryan Impey 2025, built with Redwood SDK
        </footer>
    );
};

export default Footer;
