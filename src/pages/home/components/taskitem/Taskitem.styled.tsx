import { styled, H1 } from 'app/ui'

export const Item = styled('div')(({ size }: { size: string }) => {
  return `
    font-size: ${size}px;
    
  `
})

export const TaskItemStyled = styled('div')`
  padding: 10px 20px;
  margin: 5px 10px;
  background: aqua;
  width: 300px;
  display: flex;
`
