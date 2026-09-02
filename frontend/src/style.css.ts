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

export const analyzedText = style({
  color:"purple",
  padding: '10px',
  maxWidth: '500px',
  border:'1px solid black'

})

export const textItem = style({ //see analyzedText as PARENT
  marginRight:'0.5rem',
  transition: 'background-color 0.2s ease',
  cursor:"pointer",
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


export const frequencySection = style({
  maxHeight: "500px",
  display: "flex",
  flexDirection: "column",
  flexWrap:"wrap"
})

export const frequencyElement = style({
  maxHeight: "500px",
  transition: "background-color 0.2s step-start",
  ":hover": {
    backgroundColor: "rgba(241, 227, 227, 0.5)",
    color: "rgb(128, 0, 0)",
  }
})

export const wordBox = style({
  border: "1px grey solid",
  padding: "4px 8px",
  width: "fit-content",

  selectors: {
    [`${frequencyElement}:hover &`]: {
      borderColor: "rgb(128, 0, 0)",
    }
  }
})

export const countBox = style({
  border: "1px grey solid",
  padding: "4px 8px",
  marginLeft:"8px",
  width: "fit-content",
  display: "flex",
  justifyContent: "center",
  height:"fit-content",

  selectors: {
      [`${frequencyElement}:hover &`]: {
        borderColor: "rgb(128, 0, 0)",
      }
    }
})
