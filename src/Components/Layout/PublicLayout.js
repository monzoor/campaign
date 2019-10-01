import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { FadeInAnimation } from '../../Utils/Animation';

class PublicLayout extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node)
        ]).isRequired
    };

    render() {
        const { children } = this.props;

        return (
            <div className="container-fluid">
                <Row>
                    <Col>
                        <FadeInAnimation>{children}</FadeInAnimation>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PublicLayout;
