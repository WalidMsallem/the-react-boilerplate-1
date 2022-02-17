import { styled, H1 } from 'app/ui'

export const HomeStyled = styled('h1')(
  ({ color }) => `
color: ${color};
`,
)

export const TaskContainer = styled('div')(
  ({ color }) => `
display: flex;
flex-wrap : wrap
`,
)
