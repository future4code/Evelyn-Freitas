import React from "react";
import { useHistory } from "react-router-dom";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { goToPostsDetails } from "../../router/coordinator";
import { CardStyled, CardMediaStyled } from './styles'

const PostCard = (props) => {
    const history = useHistory()

    return (
        <CardStyled onClick={() => goToPostsDetails(history, props.id)}>
            <CardActionArea>
                <CardMediaStyled>
                    <h3>{props.username}</h3>
                    <h1> {props.title}</h1>
                    <p> {props.text} </p>
                </CardMediaStyled>
                <CardContent>
                    <Typography gutterBottom align="center" color="primary">
                        {props.titulo}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </CardStyled>
    );
}

export default PostCard; 