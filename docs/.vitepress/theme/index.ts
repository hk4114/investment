import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from '../../components/Layout.vue'
import './customize.css'

// export default DefaultTheme
export default {
  ...DefaultTheme,
  Layout,
} as Theme
