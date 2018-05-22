import dev from './development'
import prod from './production'

const config = process.env.NODE_ENV === 'production' ? prod : dev
export default config
