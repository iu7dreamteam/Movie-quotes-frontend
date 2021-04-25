import React from 'react';
import {
    Navbar as BSNavbar, Nav, Button, NavDropdown, ButtonToolbar, Container,
}
    from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

function AuthButtons() {
    const history = useHistory();

    const onClick = (e) => {
        switch (e.target.id) {
        case 'login':
            history.push('/login');
            break;
        case 'join':
            history.push('/join');
            break;
        default:
            break;
        }
    };

    return (
        <ButtonToolbar onClick={onClick} onMouseUp={(e) => e.target.blur()}>
            <Button id="login" variant="dark" style={{ marginRight: '10px' }}>
                Войти
            </Button>
            <Button id="join" variant="light">
                Зарегистрироваться
            </Button>
        </ButtonToolbar>
    );
}

function UserDropdown(props) {
    const history = useHistory();

    const onClick = (e) => {
        switch (e.target.id) {
        case 'goToHistory':
            history.push('/history');
            break;
        case 'logout':
            history.push('/logout');
            break;
        default:
            break;
        }
    };

    return (
        <div style={{ marginTop: '7px', marginBottom: '7px' }}>
            <NavDropdown onClick={onClick} title={props.username} alignRight>
                <NavDropdown.Item id="goToHistory">История</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id="logout">Выйти</NavDropdown.Item>
            </NavDropdown>
        </div>
    );
}

class Navbar extends React.Component {
    render() {
        let rightSide;

        if (true) {
            rightSide = <AuthButtons />;
        } else {
            rightSide = <UserDropdown username="jopa" />;
        }

        return (
            <BSNavbar bg="light" variant="light">
                <Container>
                    <LinkContainer exact to="/">
                        <BSNavbar.Brand>Movie quotes</BSNavbar.Brand>
                    </LinkContainer>
                    <BSNavbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Link as={NavLink} exact to="">
                                Домой
                            </Nav.Link>
                        </Nav>
                        {rightSide}
                    </BSNavbar.Collapse>
                </Container>
            </BSNavbar>
        );
    }
}

export default Navbar;
