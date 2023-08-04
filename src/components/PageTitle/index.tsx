import React from 'react'
import { PageTitleProps } from './types'
import { Title } from './useStyles';

const PageTitle: React.FC<PageTitleProps> = ({ title }: PageTitleProps) => {
  React.useEffect(() => {
    document.title = title;
  }, [title])
  return (
    <Title>{title}</Title>
  )
}

export default PageTitle
