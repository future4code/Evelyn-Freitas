// import React, { useContext } from "react"
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import { CardMediaStyled, CardStyled } from "./styles";
// import { goToPosts } from "../../routes/coordinator";
// import { useHistory } from "react-router-dom";


// const CardLabEddit = (props) => {
//     const history = useHistory()

//     return (
//         <CardStyled onClick={() => goToPosts(history, props.id)}>
//             <CardActionArea>
//                 <CardMediaStyled
//                     image={props.imagem}
//                     title={props.titulo}
//                 />
//                 <CardContent>
//                     <Typography gutterBottom align="center" color="primary">
//                         {props.titulo}
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//         </CardStyled>
//     );
// }

// export default CardLabEddit;