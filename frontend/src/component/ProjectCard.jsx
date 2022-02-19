import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import PropTypes from 'prop-types'


function ProjectCard(props) {
    return (
        <Card>
            <Card.Img variant='top' src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>{props.subtitle}</Card.Subtitle>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
                {
                    props.languagge.map((e, i) => {
                        return <ListGroupItem key={i}>{e}</ListGroupItem>
                    })
                }
            </ListGroup>
            <Card.Body>
                {
                    props.link && (
                        props.link.map((e, i) => {
                            return <Card.Link href={e.url} key={i}>{e.text}</Card.Link>
                        })
                    )
                }
            </Card.Body>
        </Card>
    )
}

ProjectCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    languagge: PropTypes.array.isRequired,
    link: PropTypes.array.isRequired
}

export default ProjectCard