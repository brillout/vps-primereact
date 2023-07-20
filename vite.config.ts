import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const noExternal = process.env.NODE_ENV !== 'production' ? [] : ['primereact']
const config: UserConfig = {
  plugins: [
    react(),
    ssr({
      prerender: true
    })
  ],
  ssr: { noExternal }
}

export default config
