import {style} from '@vanilla-extract/css'


export const mainDiv = style({
  backgroundImage:'url(/p6.webp)',
  display: 'flex',
  flexDirection:'column',
  rowGap:'10px',
  alignItems: 'center',
  justifyContent: 'center',
  height:'100vh'
})



export const userInput = style({
  display: 'flex',
  flexDirection: 'row'
})

export const textItem = style({
  transition: 'background-color 0.2s ease',
  ':hover': {
    backgroundColor: '#FFC7A2'
  }
})

export const inputField = style({
  backgroundColor:'rgba(255,255,255,0.7)',
  fieldSizing: 'content',
  padding: '10px',
  minWidth: '250px',
  minHeight: 'auto',
  maxWidth: '500px',
  resize: 'none',
  boxShadow:'0 0 18px -12px #919191 inset '
})


export const wordBox = style({
  border: "1px grey solid",
  padding: "4px 8px",
  width: "fit-content",
})

export const countBox = style({
  border: "1px grey solid",
  padding: "4px 8px",
  marginLeft:"8px",
  width: "fit-content",
  display: "flex",
  justifyContent: "center",
  height:"fit-content"
})


export const frequencySection = style({
  transition: "background-color 0.2s step-start",

  ":hover": {
    backgroundColor: "rgba(241, 227, 227, 0.5)",
    color: "rgb(128, 0, 0)",
  },
  selectors: {
    [`&:hover ${wordBox}`]: {
      borderColor: "rgb(128, 0, 0)",
    }
  }
})
