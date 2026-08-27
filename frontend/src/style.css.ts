import {style} from '@vanilla-extract/css'


export const mainDiv = style({
  display: 'flex',
  flexDirection:'column',
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
  fieldSizing: 'content',
  padding: '10px',
  minWidth: '250px',
  minHeight: 'auto',
  maxWidth: '500px'
})
