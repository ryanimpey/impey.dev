import React from "react"
import { storiesOf } from "@storybook/react"

import Logo from "../components/logo/index"
import "../components/logo/logo.scss"

storiesOf("Logo", module)
    .add(`Padding Small`, () => <Logo padding="small" />)
    .add(`Padding Medium`, () => <Logo padding="medium" />)
    .add(`Padding Large`, () => <Logo padding="large" />)
