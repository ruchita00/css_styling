import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  cards: {
    position:"absolute",
      left:'25%',
      right:'61.11%',
   top:'26.56%',
   bottom:'61.72%',
   background:'#FFFFFF',
   boxShadow:'0px 2px 6px rgba(0,0,0,0.15)',
   borderRadius:'12px'
  
  },
  card: {
    margin: '6%',
    transition: 'all 0.4s cubic-bezier(0.175,0.885,0,1)',
    backgroundColor:'#fff',
    width:'21.25%'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Cards(props) {
  const{classes}=props;

    return (
<>
<div className={classes.cards}>
  
</div>
</>
  );
}