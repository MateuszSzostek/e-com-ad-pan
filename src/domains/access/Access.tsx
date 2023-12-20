import React, { PropsWithChildren, useEffect } from "react";
import IAccess from "./Access.types";
import "./Access.styles.css";
import { useAuthenticationMutation } from "./services/access/accessSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Login from "./modules/login";
import Register from "./modules/register";
import ResetPassword from "./modules/reset-password";

import { Col, Row } from "antd";

export default function Access({}: PropsWithChildren<IAccess>) {
  const user = useSelector((state: RootState) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/access") {
      navigate("/access/login");
    }
  }, []);

  useEffect(() => {
    if (user?.accessToken !== "") {
      navigate("/catalog/products");
    }
  }, [user?.accessToken]);

  return (
    <Row className="access">
      <Col span={6}>
        <Routes>
          <Route path="login" Component={Login} />
          <Route path="register" Component={Register} />
          <Route path="reset-password" Component={ResetPassword} />
        </Routes>
      </Col>
    </Row>
  );
}
