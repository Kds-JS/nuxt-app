import { characters } from './index'

export default defineEventHandler(event => characters.find(({ slug }) => slug === event.context.params.slug))