import Link from 'next/link'
import { Container, Content, Cover } from './styles'

export interface projectProps {
  id?: string
  title?: string
  description?: string
  image?: string
  link?: string
  topProject?: boolean
}

export function ProjectItem({ title, description, image, link }: projectProps) {
  return (
    <Link href={link || '/'} passHref target='_blank'>
      <div onClick={() => window.open(link, '_blank')} style={{ cursor: 'pointer' }}>
        <Container>
          <Cover>
            <img src={image} alt="" />
          </Cover>
          <Content>
            <h1>{title}</h1>
            <p>{description}</p>
          </Content>
        </Container>
      </div>
    </Link>
  )
}
