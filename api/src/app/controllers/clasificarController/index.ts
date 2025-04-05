interface clasificarControllerOptions {
  texto: string
  tags: {
    name: string
    description: string
  }[]
}
const clasificarController = ({
  texto,
  tags,
}: clasificarControllerOptions): String[] => {
  return tags.map(tag => tag.name)
}

export default clasificarController
