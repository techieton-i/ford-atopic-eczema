import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  HomeOutlined,
  FilterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Col, Menu, Row, Space } from "antd";
import Search from "antd/es/input/Search";
import { useState } from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, openCart } from "../../modules/Cart/cartSlice";
import { useNavigate } from "react-router-dom";
import Login from "../../modules/auth/Login";
import SignUp from "../../modules/auth/SignUp";
const items = [
  {
    label: "Home",
    key: "",
    icon: <HomeOutlined />,
  },
  {
    label: "Products",
    key: "products",
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: "Contact Us",
    key: "contact",
    icon: <MailOutlined />,
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("");
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const navigate = useNavigate();
  const { products } = useSelector((s) => s.cart);

  const { user, isAuthenticated } = useSelector((s) => s.auth);

  const onClick = (e) => {
    console.log("click ", e);
    // setCurrent(e.key);
    navigate(`/${e.key}`);
  };

  const dispatch = useDispatch();

  const onOpen = () => {
    dispatch(openCart());
  };
  const onSearch = (value) => {
    console.log("search value: ", value);
  };

  return (
    <Row className="navbar container" justify={"space-evenly"} align={"middle"}>
      <Col span={3}>
        <div className="navbar-brand">AGRO-MART</div>
      </Col>
      <Col span={7}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className="menu-nav"
        />
      </Col>

      <Col span={4}>
        {isAuthenticated && user ? (
          <Badge count={products?.length}>
            <div className="flex items-center gap-3">
              <Avatar shape="square" icon={<UserOutlined />} />
              <p>{user?.firstName + " " + user?.lastName}</p>
            </div>
          </Badge>
        ) : (
          <Space className="navigation-action">
            <Button
              className="button button-small"
              onClick={() => setSignUpModal(true)}
            >
              Sign Up
            </Button>

            <Button
              className="button button-small button-muted margin-left-s"
              onClick={() => setSignInModal(true)}
            >
              Sign In
            </Button>
          </Space>
        )}
      </Col>

      {signInModal && (
        <Login open={signInModal} onCancel={() => setSignInModal(false)} />
      )}
      {signUpModal && (
        <SignUp open={signUpModal} onCancel={() => setSignUpModal(false)} />
      )}
    </Row>
  );
};
export default Navbar;
