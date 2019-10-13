import React from "react"
import Header from "../components/header"
import { storiesOf } from "@storybook/react"
import "../components/layout.css";

storiesOf("Header", module).add(`default`, () => (
  <Header siteTitle="My Default Site Title" />
))
