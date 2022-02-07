import './layout.less';

import * as React from "react";
import { Helmet } from "react-helmet"

const Layout = ({ title, children }) => (
    <>
        <Helmet title={title}/>
        <main className="layout">{children}</main>
    </>
)

export default Layout;