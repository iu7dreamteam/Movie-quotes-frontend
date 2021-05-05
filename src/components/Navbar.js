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
            props.signOut();
            history.push('/');
            break;
        default:
            break;
        }
    };

    const { username } = props;

    return (
        <div style={{ marginTop: '7px', marginBottom: '7px' }}>
            <NavDropdown onClick={onClick} title={username} alignRight>
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

        if (this.props.isAuthenticated) {
            rightSide = (
                <UserDropdown
                    username={this.props.user.username}
                    signOut={this.props.signOut}
                />
            );
        } else {
            rightSide = <AuthButtons />;
        }

        return (
            <BSNavbar bg="light" variant="light" fixed="top" style={{ position: 'sticky' }}>
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
